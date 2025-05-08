import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      title: "Mobile Learning Apps",
      description: "Native iOS and Android applications for interactive learning experiences.",
      icon: "mobile-alt",
      image: "/images/mobile-learning.jpg"
    },
    {
      title: "Web-Based Platforms",
      description: "Responsive web applications accessible across all devices.",
      icon: "laptop-code",
      image: "/images/web-platform.jpg"
    },
    {
      title: "Gamified Learning",
      description: "Engaging educational games that make learning fun and effective.",
      icon: "gamepad",
      image: "/images/gamified-learning.jpg"
    },
    {
      title: "Assessment Tools",
      description: "Comprehensive testing and evaluation systems for educational institutions.",
      icon: "clipboard-check",
      image: "/images/assessment.jpg"
    }
  ];

  const features = [
    {
      title: "Interactive Learning",
      description: "Engage students with interactive content and real-time feedback.",
      icon: "chalkboard-teacher"
    },
    {
      title: "Progress Tracking",
      description: "Monitor student progress and performance with detailed analytics.",
      icon: "chart-line"
    },
    {
      title: "Custom Content",
      description: "Tailored educational content to match your curriculum needs.",
      icon: "book"
    }
  ];

  const partners = [
    {
      name: "Microsoft for Startups",
      logo: "/images/partners/microsoft.png",
      type: "Program Partner",
      description: "Selected startup in Microsoft's global startup program"
    },
    {
      name: "MongoDB",
      logo: "/images/partners/mongodb.png",
      type: "Technology Partner",
      description: "Powered by MongoDB Atlas for scalable database solutions"
    },
    {
      name: "Railway.app",
      logo: "/images/partners/railway.png",
      type: "Infrastructure Partner",
      description: "Deployed on Railway.app for reliable cloud infrastructure"
    },
    {
      name: "Startup India",
      logo: "/images/partners/startup-india.png",
      type: "Government Recognition",
      description: "Recognized by Startup India program"
    },
    {
      name: "Fast2SMS",
      logo: "/images/partners/fast2sms.png",
      type: "Service Partner",
      description: "Integrated SMS services powered by Fast2SMS"
    }
  ];

  const testimonials = [
    {
      quote: "WordifyMe has revolutionized how we manage our educational content. The platform's intuitive interface and powerful features have made content creation and distribution seamless for our teachers and students.",
      author: "Dr. Rajesh Kumar",
      position: "Principal",
      company: "Delhi Public School, RK Puram",
      image: "/images/testimonials/dps.jpg",
      logo: "/images/testimonials/dps-logo.png"
    },
    {
      quote: "As a leading women's college, we needed a platform that could handle diverse educational content while maintaining high standards. WordifyMe has exceeded our expectations in every aspect.",
      author: "Prof. Meera Sharma",
      position: "Director",
      company: "Lady Shri Ram College, Delhi",
      image: "/images/testimonials/lsr.jpg",
      logo: "/images/testimonials/lsr-logo.png"
    },
    {
      quote: "The analytics and reporting features of WordifyMe have given us unprecedented insights into student engagement and learning patterns. It's truly a game-changer for modern education.",
      author: "Dr. Arun Patel",
      position: "Head of Academics",
      company: "St. Xavier's School, Mumbai",
      image: "/images/testimonials/xaviers.jpg",
      logo: "/images/testimonials/xaviers-logo.png"
    },
    {
      quote: "WordifyMe's integration capabilities with our existing systems have made the transition smooth and efficient. Their support team's responsiveness is exceptional.",
      author: "Dr. Priya Singh",
      position: "Dean of Digital Learning",
      company: "Amity University, Noida",
      image: "/images/testimonials/amity.jpg",
      logo: "/images/testimonials/amity-logo.png"
    }
  ];

  const portfolioItems = [
    {
      title: 'EduConnect',
      type: 'Web App',
      description: 'A comprehensive learning management system for schools',
      image: '/images/portfolio/educonnect.jpg',
      category: 'web'
    },
    {
      title: 'MathWiz',
      type: 'Mobile App',
      description: 'Interactive mathematics learning app for K-12 students',
      image: '/images/portfolio/mathwiz.jpg',
      category: 'mobile'
    },
    {
      title: 'ScienceLab',
      type: 'Web App',
      description: 'Virtual science laboratory with 3D experiments',
      image: '/images/portfolio/sciencelab.jpg',
      category: 'web'
    },
    {
      title: 'LanguagePro',
      type: 'Mobile App',
      description: 'Language learning platform with AI-powered tutoring',
      image: '/images/portfolio/languagepro.jpg',
      category: 'mobile'
    },
    {
      title: 'StudyBuddy',
      type: 'Web App',
      description: 'Collaborative study platform for college students',
      image: '/images/portfolio/studybuddy.jpg',
      category: 'web'
    },
    {
      title: 'QuizMaster',
      type: 'Mobile App',
      description: 'Gamified quiz platform for competitive exam preparation',
      image: '/images/portfolio/quizmaster.jpg',
      category: 'mobile'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Education background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Get Your Educational App</span>
              <span className="block">Designed Today!</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transform your educational content into engaging mobile and web applications.
              We create innovative learning solutions that make education more accessible and enjoyable.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive educational technology solutions for modern learning
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20"></div>
                </div>
                <div className="p-6">
                  <div className="text-primary text-3xl mb-4">
                    <i className={`fas fa-${service.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section with Image */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Why Choose Us
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We combine expertise in education and technology to create impactful learning solutions
              </p>
              <div className="mt-8 space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white">
                        <i className={`fas fa-${feature.icon} text-xl`}></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      <p className="mt-2 text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="/images/features-illustration.jpg"
                alt="Educational technology illustration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Partners & Recognition Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Partners & Recognition
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Trusted by industry leaders and supported by innovative programs
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center h-24 mb-4 bg-white rounded-lg">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 w-auto object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/placeholder.jpg';
                      console.log(`Failed to load image: ${partner.logo}`);
                    }}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{partner.name}</h3>
                  <p className="text-primary font-medium mt-1">{partner.type}</p>
                  <p className="text-gray-600 mt-2">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Recognition */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-gray-600">Educational Apps Developed</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-gray-600">Partner Institutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Trusted by leading educational institutions across India. Here's what they have to say about their experience with WordifyMe.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.author}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    <div className="flex items-center mt-2">
                      <img
                        src={testimonial.logo}
                        alt={`${testimonial.company} logo`}
                        className="h-6 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Work
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Explore our innovative educational technology solutions
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full ${
                activeFilter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-4 py-2 rounded-full ${
                activeFilter === 'web'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Web Apps
            </button>
            <button
              onClick={() => setActiveFilter('mobile')}
              className={`px-4 py-2 rounded-full ${
                activeFilter === 'mobile'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Mobile Apps
            </button>
          </div>

          {/* Portfolio Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems
              .filter(item => activeFilter === 'all' || item.category === activeFilter)
              .map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                >
                  <div className="relative h-48">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/placeholder.jpg';
                      }}
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-sm font-semibold text-white bg-primary rounded-full">
                        {item.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <div className="relative bg-primary">
        <div className="absolute inset-0">
          <img
            src="/images/cta-bg.jpg"
            alt="Background pattern"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform your educational content?</span>
            <span className="block text-secondary">Start your project today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
              >
                Get Started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-dark hover:bg-primary-darker"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 