import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <Building2 size={24} className="mr-2 text-indigo-400" />
              <span className="text-xl font-light tracking-wider">NovaKeys Real Estate</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Elevating the art of real estate with exceptional properties and unparalleled service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/listings" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Luxury Avenue
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-indigo-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">(212) 555-1234</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-indigo-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@luxeestates.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Join our mailing list for exclusive property updates and market insights.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 bg-gray-800 text-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-3 rounded-r-md mt-2 sm:mt-0 hover:bg-indigo-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-800 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} NovaKeys Real Estate. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-indigo-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-indigo-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-indigo-400 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;