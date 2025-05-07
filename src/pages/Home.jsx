import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Users, Shield, Award, Phone } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';

// Import property data
import propertiesData from '../data/properties.json';

const Home = () => {
  // Filter featured properties
  const featuredProperties = propertiesData.properties.filter(property => property.featured);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Luxury Mansion" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white mt-20">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Discover Extraordinary <br />Luxury Properties
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-gray-200">
              Exclusive homes for the most discerning clients
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/listings" className="btn-primary">
                View Properties
              </Link>
              <Link to="/#contact" className="border border-white text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-white hover:text-indigo-600 transition-colors duration-300 rounded-md">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Featured Properties</h2>
            <p className="section-subtitle">
              Discover our handpicked selection of extraordinary properties in the most sought-after locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <div key={property.id} className="animate-slide-up">
                <PropertyCard property={property} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/listings" className="btn-primary">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" id="about">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="section-title">About NovaKeys Real Estate</h2>
              <p className="text-gray-600 mb-6">
                Since our founding in 2010, NovaKeys Real Estate has established itself as the premier luxury real estate firm, specializing in exceptional properties for discerning clients. Our boutique approach ensures personalized service and exclusive access to the most coveted properties worldwide.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of expert agents combines unparalleled market knowledge with discretion and professionalism, creating a seamless experience from initial consultation to closing. We understand that acquiring a luxury property is more than a transaction—it's about finding a home that reflects your unique lifestyle and aspirations.
              </p>
              <Link to="/#contact" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="NovaKeys Real Estate Team" 
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
                  <p className="text-3xl font-light">13+</p>
                  <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title text-white">Why Choose Us</h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
              At NovaKeys Real Estate, we are committed to excellence in every aspect of our service, providing an unparalleled experience for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <div className="bg-indigo-600 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <Star size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Premium Service</h3>
              <p className="text-gray-400">
                Unparalleled client service with attention to every detail of your real estate journey.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <div className="bg-indigo-600 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <Shield size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Trusted Expertise</h3>
              <p className="text-gray-400">
                Over a decade of experience in the luxury real estate market globally.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <div className="bg-indigo-600 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Elite Network</h3>
              <p className="text-gray-400">
                Access to exclusive properties and connections with premier clients worldwide.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <div className="bg-indigo-600 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Award Winning</h3>
              <p className="text-gray-400">
                Recognized for excellence in luxury real estate services and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50" id="testimonials">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Client Testimonials</h2>
            <p className="section-subtitle">
              What our clients say about their experience with NovaKeys Real Estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center text-yellow-500 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Working with NovaKeys Real Estate was an absolute pleasure. Their attention to detail and understanding of our specific needs made finding our dream home effortless. The entire process was smooth and professional."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="James Wilson" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium">James Wilson</p>
                  <p className="text-sm text-gray-500">New York, NY</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center text-yellow-500 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The team at NovaKeys Real Estate exceeded our expectations in every way. Their market knowledge and negotiation skills secured us a property that perfectly matched our criteria at a price within our budget."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Sarah Thompson" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium">Sarah Thompson</p>
                  <p className="text-sm text-gray-500">Miami, FL</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center text-yellow-500 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "As international buyers, we appreciated NovaKeys Real Estate' dedication to understanding our unique requirements and helping us navigate the local market. Their expert guidance made acquiring our vacation property seamless."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="David Chen" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium">David Chen</p>
                  <p className="text-sm text-gray-500">Hong Kong</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 bg-indigo-600" id="contact">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">Ready to Find Your Dream Property?</h2>
              <p className="text-indigo-100 mb-8 text-lg">
                Contact our expert team today for a personalized consultation.
              </p>
              <div className="flex items-center mb-6">
                <Phone size={20} className="text-indigo-300 mr-3" />
                <span className="text-white">(212) 555-1234</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="text-indigo-300 mr-3" />
                <span className="text-white">123 Luxury Avenue, New York, NY 10001</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-light mb-6">Contact Us</h3>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Phone"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;