import AnimatedContent from "../../components/animated-content";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 pt-40">
      <AnimatedContent distance={20} delay={0.1} className="w-full max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
          <p className="mt-4 text-gray-600">
            We value your privacy and are committed to protecting the information you provide while using our services.
          </p>
        </div>

        {/* Privacy Policy Content */}
        <AnimatedContent distance={30} delay={0.2} className="w-full">
<div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-orange-50 p-8 md:p-12 rounded-3xl border-2 border-orange-400 shadow-lg">
  <div className="mb-10 pb-8 border-b border-orange-100">
    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
      Privacy Policy
    </h1>
    <p className="text-gray-600 text-lg">
      Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
    </p>
  </div>

  <div className="space-y-12">
    {[
      {
        number: "01",
        title: "Introduction",
        content: "At Merchant Services, we prioritize protecting your privacy and ensuring the security of the limited information we collect. This Privacy Policy explains our practices regarding the collection, use, protection, and sharing of information when you use our website and submit our merchant account application form (collectively, our 'Services'). By submitting information, you consent to our use of your data for marketing communications and service-related purposes, in compliance with GDPR, CAN-SPAM, and CCPA."
      },
      {
        number: "02",
        title: "Information We Collect",
        content: "We collect only essential information through our application form: Business Name, Business Owner Name, Business Owner Phone Number, and Business Owner Email Address. We do not collect sensitive information such as social security numbers, bank account details, or credit card information."
      },
      {
        number: "03",
        title: "Information Collected Automatically",
        content: "Our website may automatically collect non-personal information, such as browser type, visit time and date, and pages visited, using cookies and similar technologies."
      },
      {
        number: "04",
        title: "How We Use Your Information",
        content: "We use the collected information to process your application, communicate about our services, connect you with merchant service providers, improve our Services, and send marketing communications. We do not sell or rent your information to third parties."
      },
      {
        number: "05",
        title: "Sharing of Your Information",
        content: "We share your information with third-party merchant service providers to facilitate your application. They use this information to assess eligibility, contact you, and provide details about their offerings."
      },
      {
        number: "06",
        title: "Your Rights",
        content: "You have rights including access, correction, erasure, restriction, objection, and opt-out from marketing communications. You may exercise these rights via email, phone, or by replying to messages as detailed below."
      },
      {
        number: "07",
        title: "Data Retention",
        content: "We retain your information only as long as necessary, typically for one year after your initial inquiry, then securely delete or anonymize it if there is no further interaction."
      },
      {
        number: "08",
        title: "Security",
        content: "We implement encryption, secure servers, security audits, and employee training to protect your information. No method is 100% secure, and use of our Services is at your own risk."
      },
      {
        number: "09",
        title: "Cookies and Similar Technologies",
        content: "We use cookies to enhance your experience: Essential Cookies (necessary for the website to function), Analytical/Performance Cookies (improve website functionality), and Functionality Cookies (recognize returning users)."
      },
      {
        number: "10",
        title: "Third-Party Links",
        content: "Our website may include links to third-party websites. We are not responsible for their privacy practices; please review their policies separately."
      },
      {
        number: "11",
        title: "Children's Privacy",
        content: "Our Services are not intended for children under 13, and we do not knowingly collect their personal information."
      },
      {
        number: "12",
        title: "Changes to This Privacy Policy",
        content: "We may update this Privacy Policy to reflect changes in our practices or legal requirements. Users are encouraged to review it periodically."
      },
      {
        number: "13",
        title: "Contact Us",
        content: "For questions or to exercise your data rights:"
      }
    ].map((section, index) => (
      <div key={index} className="group">
        <div className="flex items-start gap-4 md:gap-8 mb-4">
          <span className="text-4xl md:text-5xl font-black text-orange-100 group-hover:text-orange-200 transition-colors">
            {section.number}
          </span>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              {section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {section.content}
              {section.number === "13" && (
                <>
                  <br /><br />
                  <div className="space-y-2 mt-3">
                    <a href="mailto:info@merchantservices.online" className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      info@merchantservices.online
                    </a>
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      100 DANDELION DR MORENCI, AZ 85540
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +1 (786) 987-2704
                    </div>
                  </div>
                </>
              )}
            </p>
          </div>
        </div>
        {index < 12 && (
          <div className="ml-16 md:ml-20 pt-8 border-b border-orange-50"></div>
        )}
      </div>
    ))}
  </div>

  <div className="mt-12 pt-8 border-t border-orange-100 text-center text-sm text-gray-500">
    <p>By using our Services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>
  </div>
</div>
        </AnimatedContent>
      </AnimatedContent>
    </div>
  );
}
