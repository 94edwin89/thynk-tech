import React from "react";

const TermsOfUse = () => {
  return (
    <div className="bg-gray-100 page-container min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Terms of Use</h1>
          <p className="mt-2">Last Updated: January 15, 2025</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-1200 mx-auto my-10 px-4 py-8">
        <section className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <p className="text-justify hyphens-auto">
            Welcome to Thynk Technologies. Please read these Terms of Use carefully before
            using our website (https://thynktechnologies.com/) and any services provided by
            Thynk Technologies. By accessing or using our website and services, you agree to be
            bound by these Terms of Use. If you do not agree to these terms, please do
            not use our website or services.
          </p>

          <h2 className="text-2xl font-semibold">Use of Website</h2>
          <p>
            a. <strong>License:</strong> Subject to these Terms of Use, Thynk Technologies grants
            you a non-exclusive, non-transferable, limited license to access and use
            the website for your personal or internal business purposes.
          </p>
          <p>
            b. <strong>Restrictions:</strong> You agree not to:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Modify, adapt, or hack the website or modify another website so as to falsely imply that it is associated with Thynk Technologies.</li>
            <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the website without the express written permission of Thynk Technologies.</li>
            <li>Use the website for any unlawful purpose or in violation of any international, federal, provincial, or state regulations, rules, or laws.</li>
          </ul>

          <h2 className="text-2xl font-semibold">User Content</h2>
          <p>
            a. <strong>Responsibility:</strong> You are solely responsible for any content, information, or materials that you upload, submit, or display on or through the website (“User Content”).
          </p>
          <p>
            b. <strong>Rights:</strong> By uploading, submitting, or displaying User Content, you grant Thynk Technologies a non-exclusive, worldwide, royalty-free, perpetual, irrevocable license to use, reproduce, adapt, publish, translate, and distribute such User Content in any media.
          </p>

          <h2 className="text-2xl font-semibold">Intellectual Property</h2>
          <p>
            a. <strong>Ownership:</strong> All content, trademarks, service marks, and logos on the website are the property of Thynk Technologies or its licensors and are protected by intellectual property laws.
          </p>
          <p>
            b. <strong>Use of Content:</strong> You may not use, reproduce, distribute, or create derivative works based on the content of the website unless expressly authorized by Thynk Technologies.
          </p>

          <h2 className="text-2xl font-semibold">Disclaimer of Warranties</h2>
          <p>
            a. <strong>As Is:</strong> The website and services are provided on an “as is” and “as available” basis without warranties of any kind, whether express or implied.
          </p>
          <p>
            b. <strong>Use at Own Risk:</strong> Your use of the website is at your sole risk. Thynk Technologies does not warrant that the website will be uninterrupted, timely, secure, or error-free.
          </p>

          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          <p>
            a. <strong>Exclusion of Damages:</strong> In no event shall Thynk Technologies be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the website.
          </p>

          <h2 className="text-2xl font-semibold">Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Thynk Technologies and its affiliates, officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys’ fees) arising from your violation of these Terms of Use.
          </p>

          <h2 className="text-2xl font-semibold">Governing Law</h2>
          <p>
            These Terms of Use shall be governed by and construed in accordance with the laws of India without regard to its conflict of law principles.
          </p>

          <h2 className="text-2xl font-semibold">Changes to Terms</h2>
          <p>
            Thynk Technologies reserves the right to modify or replace these Terms of Use at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website after changes are posted constitutes your acceptance of the updated Terms of Use.
          </p>

          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms of Use, please contact us at
            <br />
            <strong>Email:</strong> <a href="mailto:info@thynktechnologies.com" className="text-blue-600">info@thynktechnologies.com</a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Thynk Technologiesd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfUse;
