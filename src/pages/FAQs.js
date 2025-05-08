import React, { useState } from 'react';

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of educational institutions can benefit from WordifyMe\'s solutions?',
      answer: 'WordifyMe\'s solutions are designed for a wide range of educational institutions, including schools, colleges, universities, coaching centers, and online learning platforms. Our technology is scalable and can be customized to meet the specific needs of institutions of any size.'
    },
    {
      question: 'How does WordifyMe ensure the security of student data?',
      answer: 'We take data security very seriously. Our platform implements industry-standard encryption, regular security audits, and strict access controls. We comply with relevant data protection regulations and maintain secure cloud infrastructure. All student data is encrypted both in transit and at rest.'
    },
    {
      question: 'Can WordifyMe\'s solutions integrate with our existing educational systems?',
      answer: 'Yes, our solutions are designed with integration capabilities. We can connect with your existing Learning Management Systems (LMS), Student Information Systems (SIS), and other educational tools through APIs and standard protocols. Our team will work with you to ensure smooth integration.'
    },
    {
      question: 'What kind of support and training do you provide?',
      answer: 'We provide comprehensive support including initial setup assistance, staff training sessions, technical support, and regular updates. Our support team is available during business hours, and we offer documentation, video tutorials, and a knowledge base for self-help.'
    },
    {
      question: 'How long does it take to implement WordifyMe\'s solutions?',
      answer: 'Implementation time varies based on the complexity of your requirements and the size of your institution. Typically, basic implementation takes 2-4 weeks, while more complex customizations may take 2-3 months. We\'ll provide a detailed timeline during the initial consultation.'
    },
    {
      question: 'What makes WordifyMe different from other educational technology providers?',
      answer: 'WordifyMe stands out through our focus on personalized learning experiences, innovative technology stack, and deep understanding of educational needs. We combine cutting-edge technology with pedagogical expertise to create solutions that truly enhance learning outcomes.'
    },
    {
      question: 'Do you offer mobile applications for your solutions?',
      answer: 'Yes, we provide both web and mobile applications for our solutions. Our mobile apps are available for iOS and Android platforms, offering features like offline access, push notifications, and mobile-specific learning tools. The apps are designed to provide a seamless learning experience across all devices.'
    },
    {
      question: 'How does WordifyMe handle content creation and management?',
      answer: 'We provide a comprehensive content management system that allows educators to create, organize, and deliver educational content. Our platform supports various content types including text, images, videos, interactive elements, and assessments. We also offer content creation services if needed.'
    },
    {
      question: 'What analytics and reporting features are available?',
      answer: 'Our platform offers detailed analytics and reporting features including student performance tracking, engagement metrics, learning pattern analysis, and institutional effectiveness reports. These insights help educators make data-driven decisions and improve learning outcomes.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models based on your institution\'s size and requirements. This includes subscription-based plans for smaller institutions and custom enterprise solutions for larger organizations. Contact us for a detailed quote tailored to your specific needs.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-xl text-white">
              Find answers to common questions about our services
            </p>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <span className="ml-6 flex-shrink-0">
                      <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'} text-primary`}></i>
                    </span>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white mb-8">
            Our team is here to help you find the right solution
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

export default FAQs; 