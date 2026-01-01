import AnimatedContent from "../../components/animated-content";

export default function TermCondition() {
  return (
    <div className="min-h-screen bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 pt-40">
      <AnimatedContent distance={20} delay={0.1} className="w-full max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Terms & Conditions</h1>
          <p className="mt-4 text-gray-600">
            Please read these terms carefully. By accessing or using our services, you agree to be bound by these terms.
          </p>
        </div>

        {/* Terms Content */}
        <AnimatedContent distance={30} delay={0.2} className="w-full">
<div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-orange-50 p-8 md:p-12 rounded-3xl border-2 border-orange-400 shadow-lg">
  <div className="mb-10 pb-8 border-b border-orange-100">
    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
      Terms of Use
    </h1>
    <p className="text-gray-600 text-lg">
      Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
    </p>
  </div>

  <div className="space-y-12">
    {[
      {
        number: "01",
        title: "Acceptance of Terms",
        content: "These Terms of Use constitute a legally binding agreement between you and Merchant Services, governing your access to and use of our website, merchantservices.online, including all content, functionality, and services offered (collectively, the “Services”)."
      },
      {
        number: "02",
        title: "Use of Services",
        content: "Our Services are intended for businesses seeking merchant account services. You agree to use our Services only for lawful purposes and in accordance with these Terms."
      },
      {
        number: "03",
        title: "Intellectual Property",
        content: "All content and functionality of the Services are owned by Merchant Services or its licensors and are protected by copyright, trademark, and other laws."
      },
      {
        number: "04",
        title: "User Accounts",
        content: "If you create an account, you must provide accurate information, safeguard your password, and notify us of any unauthorized use. Account misuse may result in termination."
      },
      {
        number: "05",
        title: "Privacy",
        content: "Your use of the Services is governed by our Privacy Policy, which explains our data collection and marketing practices."
      },
      {
        number: "06",
        title: "Disclaimer of Warranties",
        content: "Services and content are provided “as is” without warranties. We are not liable for viruses, malware, or damages resulting from your use of the Services."
      },
      {
        number: "07",
        title: "Limitation of Liability",
        content: "To the fullest extent permitted by law, Merchant Services shall not be liable for any damages arising out of your use of the Services."
      },
      {
        number: "08",
        title: "Indemnification",
        content: "You agree to indemnify and hold harmless Merchant Services, its affiliates, and partners from any claims or damages resulting from your violation of these Terms."
      },
      {
        number: "09",
        title: "Modifications to Terms",
        content: "We may revise these Terms at our discretion. Continued use of our Services constitutes acceptance of the updated Terms."
      },
      {
        number: "10",
        title: "Governing Law",
        content: "These Terms are governed by the laws of the State of Florida, USA, without regard to conflict of law provisions."
      },
      {
        number: "11",
        title: "Termination",
        content: "We may terminate your account or access to Services at any time for violations of these Terms."
      },
      {
        number: "12",
        title: "Contact Information",
        content: "For questions regarding these Terms, contact us at:"
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
              {section.number === "12" && (
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
        {index < 11 && (
          <div className="ml-16 md:ml-20 pt-8 border-b border-orange-50"></div>
        )}
      </div>
    ))}
  </div>

  <div className="mt-12 pt-8 border-t border-orange-100 text-center text-sm text-gray-500">
    <p>By using our website, you acknowledge that you have read, understood, and agree to these Terms of Use.</p>
  </div>
</div>
        </AnimatedContent>
      </AnimatedContent>
    </div>
  );
}
