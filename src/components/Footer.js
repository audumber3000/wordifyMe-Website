import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: 'facebook', 
      url: 'https://www.facebook.com/wordifyme',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Twitter', 
      icon: 'twitter', 
      url: 'https://twitter.com/wordifyme',
      color: 'hover:text-blue-300'
    },
    { 
      name: 'LinkedIn', 
      icon: 'linkedin', 
      url: 'https://www.linkedin.com/company/wordifyme',
      color: 'hover:text-blue-500'
    },
    { 
      name: 'Instagram', 
      icon: 'instagram', 
      url: 'https://www.instagram.com/wordifyme',
      color: 'hover:text-pink-400'
    },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">WordifyMe</h3>
            <p className="text-gray-300">
              Creating innovative educational apps for a better learning experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">
              <a href="mailto:hello@wordifyme.com" className="hover:text-white transition-colors">
                hello@wordifyme.com
              </a>
            </p>
            <p className="text-gray-300 mb-2">
              <a href="tel:+918766742410" className="hover:text-white transition-colors">
                +91 8766742410
              </a>
            </p>
            <p className="text-gray-300 mb-4">
              Sky Loft, opposite Golf Course,<br />
              Shastrinagar, Yerawada,<br />
              Pune, Maharashtra 411006
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`text-gray-300 transition-colors ${social.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <i className={`fab fa-${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {currentYear} WordifyMe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 