import React from 'react';

function About() {
  const teamStats = [
    { number: '100+', label: 'Team Members' },
    { number: '50+', label: 'Educational Apps' },
    { number: '10K+', label: 'Active Users' },
    { number: '15+', label: 'Partner Institutions' }
  ];

  const coreValues = [
    {
      title: 'Innovation',
      description: 'Constantly pushing boundaries to create better learning experiences',
      icon: 'lightbulb'
    },
    {
      title: 'Accessibility',
      description: 'Making quality education available to everyone, everywhere',
      icon: 'universal-access'
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering the highest quality educational solutions',
      icon: 'star'
    },
    {
      title: 'Impact',
      description: 'Focused on creating meaningful change in education',
      icon: 'chart-line'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              About WordifyMe
            </h1>
            <p className="mt-4 text-xl text-white">
              Transforming Education Through Technology
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020 by Dr. Prashant in Pune, WordifyMe emerged from a simple yet powerful vision: to make quality education accessible to every student through innovative technology solutions.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team of passionate educators and technologists has grown into a dynamic force of 100+ members, all united by a common goal: to revolutionize the way students learn and educators teach.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be at the forefront of educational technology, serving thousands of students and partnering with leading educational institutions across India.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                src="/images/about/team.jpg"
                alt="WordifyMe Team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To make education accessible, engaging, and effective for every student through innovative technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-primary text-3xl mb-4">
                  <i className={`fas fa-${value.icon}`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Founder</h2>
            <h3 className="text-2xl font-semibold text-primary mb-4">Dr. Prashant</h3>
            <p className="text-gray-600 mb-4">
              A visionary educator and technologist, Dr. Prashant founded WordifyMe with a clear mission: to bridge the gap between traditional education and modern technology.
            </p>
            <p className="text-gray-600 mb-4">
              With over 15 years of experience in education and technology, Dr. Prashant has been instrumental in developing innovative learning solutions that have transformed the educational landscape in India.
            </p>
            <p className="text-gray-600">
              His leadership and vision continue to drive WordifyMe's commitment to making quality education accessible to all.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Us in Transforming Education
          </h2>
          <p className="text-xl text-white mb-8">
            Be part of our mission to make education accessible to everyone
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default About; 