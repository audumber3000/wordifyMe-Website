import React from 'react';

function TermsOfService() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using WordifyMe\'s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all users, including educational institutions, students, and other individuals accessing our platform.'
    },
    {
      title: '2. Description of Services',
      content: 'WordifyMe provides educational technology solutions including but not limited to learning management systems, educational apps, content management systems, and analytics tools. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.'
    },
    {
      title: '3. User Accounts and Responsibilities',
      content: 'Users are responsible for maintaining the confidentiality of their account credentials and for all activities under their account. You must provide accurate information when creating an account and promptly update any changes. You are responsible for ensuring that your use of our services complies with all applicable laws and regulations.'
    },
    {
      title: '4. Intellectual Property Rights',
      content: 'All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, and software, are owned by WordifyMe or its licensors and are protected by intellectual property laws. Users may not copy, modify, distribute, sell, or lease any part of our services without prior written consent.'
    },
    {
      title: '5. User Content and Data',
      content: 'Users retain ownership of their content but grant WordifyMe a license to use, store, and process their content for providing and improving our services. We implement appropriate security measures to protect user data, but users are responsible for backing up their content. We may use anonymized data for analytics and service improvement.'
    },
    {
      title: '6. Privacy and Data Protection',
      content: 'Our Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you consent to our data practices as described in the Privacy Policy. We comply with applicable data protection laws and implement appropriate security measures to protect user data.'
    },
    {
      title: '7. Payment Terms',
      content: 'Subscription fees are billed in advance and are non-refundable. We may change our fees upon notice. Users are responsible for all applicable taxes. Payment processing is handled by secure third-party providers. We reserve the right to suspend services for non-payment.'
    },
    {
      title: '8. Service Level Agreement',
      content: 'We strive to maintain 99.9% uptime for our services. We provide technical support during business hours and maintain regular backups. We will notify users of any planned maintenance or service disruptions. We are not liable for any indirect or consequential damages.'
    },
    {
      title: '9. Termination',
      content: 'We may terminate or suspend access to our services for violations of these terms or for any other reason at our discretion. Users may terminate their account at any time. Upon termination, we will delete or anonymize user data according to our data retention policy.'
    },
    {
      title: '10. Limitation of Liability',
      content: 'WordifyMe is not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for the services in the past 12 months.'
    },
    {
      title: '11. Changes to Terms',
      content: 'We may modify these terms at any time. We will notify users of significant changes via email or through our platform. Continued use of our services after such changes constitutes acceptance of the modified terms.'
    },
    {
      title: '12. Governing Law',
      content: 'These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Pune, Maharashtra. Users agree to submit to the exclusive jurisdiction of these courts.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-xl text-white">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                Please read these Terms of Service carefully before using WordifyMe's services. These terms govern your access to and use of our educational technology solutions.
              </p>
              
              {sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-600">
                    {section.content}
                  </p>
                </div>
              ))}

              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <p className="text-gray-600">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>Email: legal@wordifyme.com</li>
                  <li>Phone: +91 8766742410</li>
                  <li>Address: Pune, Maharashtra, India</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need More Information?
          </h2>
          <p className="text-xl text-white mb-8">
            Our team is here to help you understand our terms and policies
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService; 