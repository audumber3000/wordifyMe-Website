import React from 'react';

function Careers() {
  const internships = [
    {
      title: 'Frontend Development Intern',
      department: 'Engineering',
      location: 'Pune, India',
      type: 'Full-time',
      duration: '6 months',
      requirements: [
        'Currently pursuing or completed B.Tech/M.Tech in Computer Science or related field',
        'Strong knowledge of React.js and modern JavaScript',
        'Experience with HTML, CSS, and responsive design',
        'Understanding of REST APIs and web development concepts',
        'Good problem-solving skills and attention to detail'
      ],
      responsibilities: [
        'Develop and maintain user-facing features using React.js',
        'Build reusable components and libraries for future use',
        'Optimize applications for maximum speed and scalability',
        'Collaborate with the design team to implement UI/UX improvements',
        'Participate in code reviews and team meetings'
      ]
    },
    {
      title: 'Backend Development Intern',
      department: 'Engineering',
      location: 'Pune, India',
      type: 'Full-time',
      duration: '6 months',
      requirements: [
        'Currently pursuing or completed B.Tech/M.Tech in Computer Science or related field',
        'Knowledge of Node.js and Express.js',
        'Understanding of databases (MongoDB, PostgreSQL)',
        'Basic understanding of REST APIs and microservices',
        'Familiarity with version control systems (Git)'
      ],
      responsibilities: [
        'Develop and maintain server-side applications',
        'Design and implement RESTful APIs',
        'Work with databases and data modeling',
        'Implement security and data protection',
        'Collaborate with frontend developers'
      ]
    },
    {
      title: 'UI/UX Design Intern',
      department: 'Design',
      location: 'Pune, India',
      type: 'Full-time',
      duration: '6 months',
      requirements: [
        'Currently pursuing or completed degree in Design or related field',
        'Proficiency in design tools (Figma, Adobe XD)',
        'Understanding of user-centered design principles',
        'Basic knowledge of HTML/CSS',
        'Strong portfolio demonstrating design skills'
      ],
      responsibilities: [
        'Create user-centered designs by understanding business requirements',
        'Develop wireframes and prototypes',
        'Create user flows and journey maps',
        'Conduct user research and usability testing',
        'Collaborate with development team'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Learning & Growth',
      description: 'Access to learning resources, mentorship, and opportunities to work on real projects',
      icon: 'graduation-cap'
    },
    {
      title: 'Flexible Work',
      description: 'Hybrid work model with flexible hours and remote work options',
      icon: 'clock'
    },
    {
      title: 'Great Culture',
      description: 'Work with passionate people in a collaborative and innovative environment',
      icon: 'users'
    },
    {
      title: 'Future Opportunities',
      description: 'Potential for full-time conversion based on performance',
      icon: 'star'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              Join Our Team
            </h1>
            <p className="mt-4 text-xl text-white">
              Build the Future of Education Technology
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Join WordifyMe?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas fa-${benefit.icon} text-primary text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Internship Positions */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Internship Opportunities
          </h2>
          <div className="space-y-8">
            {internships.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                    <p className="text-gray-600">{position.department}</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary bg-opacity-10 text-primary">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {position.location}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary bg-opacity-10 text-primary">
                      <i className="fas fa-clock mr-2"></i>
                      {position.type}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary bg-opacity-10 text-primary">
                      <i className="fas fa-calendar-alt mr-2"></i>
                      {position.duration}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-gray-600">
                          <i className="fas fa-check text-primary mt-1 mr-3"></i>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Responsibilities</h4>
                    <ul className="space-y-2">
                      {position.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start text-gray-600">
                          <i className="fas fa-check text-primary mt-1 mr-3"></i>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-white mb-8">
            We're always looking for talented individuals. Send us your resume!
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

export default Careers; 