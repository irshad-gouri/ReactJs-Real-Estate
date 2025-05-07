import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Building2, Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Building2 size={28} className={`mr-2 ${isScrolled ? 'text-indigo-600' : 'text-white'}`} />
          <span className={`text-xl font-light tracking-wider ${isScrolled ? 'text-gray-900' : 'text-white'}`}>NovaKeys Real Estate</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-500 transition-colors duration-300`}>
            Home
          </Link>
          <Link to="/listings" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-500 transition-colors duration-300`}>
            Properties
          </Link>
          <Link to="/#about" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-500 transition-colors duration-300`}>
            About
          </Link>
          <Link to="/#testimonials" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-500 transition-colors duration-300`}>
            Testimonials
          </Link>
          <Link to="/#contact" className={`${isScrolled ? 'btn-primary' : 'border border-white text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-white hover:text-indigo-600 transition-colors duration-300 rounded-md'}`}>
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center text-gray-800 hover:text-indigo-600 py-2 transition-colors duration-300">
              <Home size={18} className="mr-2" />
              Home
            </Link>
            <Link to="/listings" className="flex items-center text-gray-800 hover:text-indigo-600 py-2 transition-colors duration-300">
              <Building2 size={18} className="mr-2" />
              Properties
            </Link>
            <Link to="/#about" className="text-gray-800 hover:text-indigo-600 py-2 transition-colors duration-300">
              About
            </Link>
            <Link to="/#testimonials" className="text-gray-800 hover:text-indigo-600 py-2 transition-colors duration-300">
              Testimonials
            </Link>
            <Link to="/#contact" className="flex items-center text-gray-800 hover:text-indigo-600 py-2 transition-colors duration-300">
              <Phone size={18} className="mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;