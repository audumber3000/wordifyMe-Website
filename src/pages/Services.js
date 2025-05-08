import React from 'react';

function Services() {
  const services = [
    {
      title: 'Educational App Development',
      description: 'Custom mobile and web applications designed specifically for educational institutions, featuring interactive learning modules, progress tracking, and real-time analytics.',
      features: [
        'Cross-platform compatibility',
        'Offline learning capabilities',
        'Interactive content delivery',
        'Progress tracking and analytics',
        'Custom branding options'
      ],
      icon: 'mobile-alt'
    },
    {
      title: 'Learning Management System',
      description: 'Comprehensive LMS solutions that streamline course management, student engagement, and educational content delivery.',
      features: [
        'Course creation and management',
        'Student progress tracking',
        'Assignment and assessment tools',
        'Discussion forums',
        'Resource library'
      ],
      icon: 'graduation-cap'
    },
    {
      title: 'Student Engagement Platform',
      description: 'Interactive platforms that enhance student engagement through gamification, social learning, and personalized learning paths.',
      features: [
        'Gamified learning experiences',
        'Social learning features',
        'Personalized learning paths',
        'Real-time feedback',
        'Achievement tracking'
      ],
      icon: 'users'
    },
    {
      title: 'Educational Analytics',
      description: 'Advanced analytics and reporting tools that provide insights into student performance, learning patterns, and institutional effectiveness.',
      features: [
        'Performance analytics',
        'Learning pattern analysis',
        'Predictive analytics',
        'Custom reporting',
        'Data visualization'
      ],
      icon: 'chart-bar'
    }
  ];

  const process = [
    {
      title: 'Discovery',
      description: 'We begin by understanding your institution\'s unique needs, challenges, and goals.',
      icon: 'search'
    },
    {
      title: 'Design',
      description: 'Our team creates a tailored solution that aligns with your educational objectives.',
      icon: 'pencil-ruler'
    },
    {
      title: 'Development',
      description: 'We build your solution using cutting-edge technology and best practices.',
      icon: 'code'
    },
    {
      title: 'Deployment',
      description: 'Smooth implementation and integration with your existing systems.',
      icon: 'rocket'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-xl text-white">
              Transforming Education Through Innovative Technology Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-primary text-4xl mb-4">
                  <i className={`fas fa-${service.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <i className="fas fa-check text-primary mr-3"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas fa-${step.icon} text-primary text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Educational Institution?
          </h2>
          <p className="text-xl text-white mb-8">
            Let's discuss how we can help you achieve your educational goals
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services; 