import React from "react";

const Privacy = () => {
  return (
    <div className="bg-gray-100 page-container min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2">Last Updated: January 15, 2025</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-1200 mx-auto my-10 px-4 py-8">
        <section className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <p className="text-justify hyphens-auto">
            Thank you for visiting <strong>Thynk Technologies</strong>. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website (<a href="https://thynktechnologies.com" className="text-blue-500 hover:underline">https://thynktechnologies.com/</a>), use our services, or interact with us in any manner.
            By accessing or using our website and services, you agree to be bound by this Privacy Policy. If you do not agree with this policy, please do not use our website or services.
          </p>

          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p>
            We may collect and process the following types of personal information:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Personal Information:</strong> Name, address, phone number, company name (if applicable), job title (if applicable), billing and shipping address (if applicable), payment information (if applicable).</li>
            <li><strong>Non-Personal Information:</strong> IP address, browser type and version, pages visited on our website, time and date of visit, referring website addresses.</li>
          </ul>

          <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
          <p>
            We use the information we collect in the following ways:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>To provide and maintain our services</li>
            <li>To improve our website and services</li>
            <li>To personalize your experience</li>
            <li>To respond to your inquiries, requests, and job applications</li>
            <li>To send you marketing and promotional communications (where permitted by law)</li>
            <li>To process transactions</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold">3. Legal Basis for Processing Your Information</h2>
          <p>
            We process your personal information based on the following legal grounds:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Your consent</li>
            <li>The necessity of performing contractual obligations</li>
            <li>Compliance with legal obligations</li>
            <li>Our legitimate interests, such as improving our services and website</li>
          </ul>

          <h2 className="text-2xl font-semibold">4. Sharing Your Information</h2>
          <p>
            We may share your information with third parties in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>With service providers who assist us in delivering our services</li>
            <li>With business partners who provide services on our behalf</li>
            <li>With legal authorities, if required by law or to protect our legal rights</li>
            <li>With your consent</li>
          </ul>

          <h2 className="text-2xl font-semibold">5. Security of Your Information</h2>
          <p>
            We implement reasonable and appropriate security measures to protect your information from unauthorized access, disclosure, alteration, or destruction.
          </p>

          <h2 className="text-2xl font-semibold">6. Your Rights</h2>
          <p>
            Depending on your location and applicable data protection laws, you may have certain rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>The right to access your personal information</li>
            <li>The right to rectify inaccurate or incomplete information</li>
            <li>The right to restrict processing of your personal information</li>
            <li>The right to data portability</li>
            <li>The right to object to the processing of your personal information under certain circumstances</li>
            <li>The right to lodge a complaint with a supervisory authority</li>
          </ul>

          <h2 className="text-2xl font-semibold">7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
            We will notify you of any material changes by posting the updated Privacy Policy on our website or by other 
            appropriate means.
          </p>

          <h2 className="text-2xl font-semibold">8. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            <br />
            <strong>Email:</strong> <a href="mailto:info@thynktechnologies.com" className="text-blue-600">info@thynktechnologies.com</a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Thynk Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
