<?php
// Allow CORS from your frontend domain
header("Access-Control-Allow-Origin: *"); // You can restrict to your frontend domain instead of *
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo "invalid_method";
    exit;
}

// Get POST data
$businessname = isset($_POST['businessname']) ? trim($_POST['businessname']) : "";
$fullname     = isset($_POST['fullname']) ? trim($_POST['fullname']) : "";
$phone        = isset($_POST['phone']) ? trim($_POST['phone']) : "";
$email        = isset($_POST['email']) ? trim($_POST['email']) : "";
$message      = isset($_POST['message']) ? trim($_POST['message']) : "";

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "invalid_email";
    exit;
}

// Validate required fields
if ($fullname === "" || $phone === "" || $businessname === "") {
    echo "missing_fields";
    exit;
}

// Recipient
$to = "info@merchantservices.online";

// Email headers
$headers  = "From: Merchant Services <info@merchantservices.online>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Email subject and body
$subject = "New Lead Submission - MerchantServices.online";

$body  = "New Lead Submission:\n\n";
$body .= "Business Name: $businessname\n";
$body .= "Full Name: $fullname\n";
$body .= "Phone Number: $phone\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message\n";

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo "success";
} else {
    echo "error";
}
?>
