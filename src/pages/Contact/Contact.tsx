"use client";
import { useState } from "react";
import AnimatedContent from "../../components/animated-content";

export default function Contact() {
  const [formData, setFormData] = useState({
    businessname: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // loading, success, error, invalid_email, missing_fields

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const fullName = formData.firstname + " " + formData.lastname;

    try {
      const res = await fetch("https://merchantservices.online/sendmail.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          businessname: formData.businessname,
          fullname: fullName,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }).toString(),
      });

      const text = await res.text();

      if (text.trim() === "success") {
        setStatus("success");
        setFormData({
          businessname: "",
          firstname: "",
          lastname: "",
          phone: "",
          email: "",
          message: "",
        });
      } else if (text.trim() === "invalid_email") {
        setStatus("invalid_email");
      } else if (text.trim() === "missing_fields") {
        setStatus("missing_fields");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 pt-40">
      <AnimatedContent distance={20} delay={0.1} className="w-full max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="mt-4 text-gray-600">
            Have questions or need assistance? Fill out the form below and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <AnimatedContent distance={30} delay={0.2} className="w-full">
          <form
            onSubmit={handleSubmit}
            className="mb-10 px-4 sm:px-6 py-8 flex flex-col gap-4 w-full md:max-w-lg mx-auto rounded-2xl bg-white border-2 border-orange-400"
          >
            <h2 className="text-center font-bold text-2xl text-gray-800 mb-4">Get Started Today!</h2>

            <input
              type="text"
              name="businessname"
              placeholder="Business Name"
              value={formData.businessname}
              onChange={handleChange}
              className="border border-orange-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
              required
            />

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                className="flex-1 border border-orange-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                required
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                className="flex-1 border border-orange-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                required
              />
            </div>

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-orange-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border border-orange-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
              required
            />
            <textarea
              name="message"
              rows={4}
              placeholder="What are you looking for?"
              value={formData.message}
              onChange={handleChange}
              className="border border-orange-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-2xl bg-gradient-to-tr from-orange-600 to-orange-500 text-white font-semibold text-center hover:from-orange-700 hover:to-orange-600 cursor-pointer transition-all"
            >
              {status === "loading" ? "Sending..." : "Start Processing Today"}
            </button>

            {status === "success" && <p className="text-green-600 mt-2 text-center">Form submitted successfully!</p>}
            {status === "error" && <p className="text-red-600 mt-2 text-center">Something went wrong. Please try again.</p>}
            {status === "invalid_email" && <p className="text-red-600 mt-2 text-center">Invalid email address.</p>}
            {status === "missing_fields" && <p className="text-red-600 mt-2 text-center">Please fill all required fields.</p>}
          </form>
        </AnimatedContent>
      </AnimatedContent>
    </div>
  );
}
