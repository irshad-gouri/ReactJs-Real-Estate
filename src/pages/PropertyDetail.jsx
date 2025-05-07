import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, Bed, Bath, Square, Home, Calendar, Car, Maximize,
  Phone, Mail, ArrowLeft, Check
} from 'lucide-react';
import ImageGallery from '../components/ImageGallery';

// Import property data
import propertiesData from '../data/properties.json';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the property with the matching id
    const foundProperty = propertiesData.properties.find(p => p.id === id);
    
    if (foundProperty) {
      setProperty(foundProperty);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="pt-32 pb-20 text-center bg-gray-50 min-h-screen">
        <div className="container-custom">
          <h1 className="text-3xl font-light mb-6">Property Not Found</h1>
          <p className="text-gray-600 mb-8">The property you are looking for does not exist.</p>
          <Link to="/listings" className="btn-primary">
            View All Properties
          </Link>
        </div>
      </div>
    );
  }

  const {
    title,
    location,
    price,
    description,
    features,
    images,
    agent
  } = property;

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="container-custom">
        {/* Back to Listings Link */}
        <Link to="/listings" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors duration-300">
          <ArrowLeft size={18} className="mr-2" />
          Back to Listings
        </Link>

        {/* Property Title and Price */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-light mb-2">{title}</h1>
            <div className="flex items-center text-gray-600">
              <MapPin size={18} className="mr-2" />
              <p>{location}</p>
            </div>
          </div>
          <div className="bg-indigo-600 text-white px-6 py-3 rounded-md text-2xl font-light mt-4 md:mt-0">
            {price}
          </div>
        </div>

        {/* Property Images */}
        <div className="mb-12">
          <ImageGallery images={images} title={title} />
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content - 2/3 width */}
          <div className="lg:col-span-2">
            {/* Key Features */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-indigo-100 p-3 rounded-full mb-3">
                    <Bed size={24} className="text-indigo-600" />
                  </div>
                  <span className="text-gray-600 text-sm">Bedrooms</span>
                  <span className="text-gray-900 font-medium text-lg">{features.beds}</span>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-indigo-100 p-3 rounded-full mb-3">
                    <Bath size={24} className="text-indigo-600" />
                  </div>
                  <span className="text-gray-600 text-sm">Bathrooms</span>
                  <span className="text-gray-900 font-medium text-lg">{features.baths}</span>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-indigo-100 p-3 rounded-full mb-3">
                    <Square size={24} className="text-indigo-600" />
                  </div>
                  <span className="text-gray-600 text-sm">Square Feet</span>
                  <span className="text-gray-900 font-medium text-lg">{features.sqft}</span>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-indigo-100 p-3 rounded-full mb-3">
                    <Car size={24} className="text-indigo-600" />
                  </div>
                  <span className="text-gray-600 text-sm">Garage</span>
                  <span className="text-gray-900 font-medium text-lg">{features.garage}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-light mb-6">Property Description</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Property Details</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <Home size={18} className="text-indigo-600 mr-3" />
                      <span>Property Type: Luxury {features.beds > 4 ? 'Estate' : 'Residence'}</span>
                    </li>
                    <li className="flex items-center">
                      <Calendar size={18} className="text-indigo-600 mr-3" />
                      <span>Year Built: {features.yearBuilt}</span>
                    </li>
                    <li className="flex items-center">
                      <Maximize size={18} className="text-indigo-600 mr-3" />
                      <span>Lot Size: {features.lotSize}</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Property Features</h3>
                  <ul className="space-y-3 text-gray-600">
                    {features.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={18} className="text-indigo-600 mr-3 mt-0.5" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - 1/3 width */}
          <div>
            {/* Agent Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium mb-6">Contact Agent</h3>
              <div className="flex items-center mb-6">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">{agent.name}</p>
                  <p className="text-gray-600">Luxury Real Estate Specialist</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Phone size={18} className="text-indigo-600 mr-3" />
                  <span>{agent.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail size={18} className="text-indigo-600 mr-3" />
                  <span>{agent.email}</span>
                </div>
              </div>
              
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    rows="4"
                    placeholder="I'm interested in this property..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Contact Agent
                </button>
              </form>
            </div>

            {/* Schedule Showing */}
            <div className="bg-indigo-600 text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium mb-4">Schedule a Showing</h3>
              <p className="text-indigo-100 mb-6">
                Experience this exceptional property in person with a private tour.
              </p>
              <button className="w-full bg-white text-indigo-600 px-6 py-3 text-sm uppercase tracking-wider hover:bg-indigo-100 transition-colors duration-300 rounded-md">
                Request a Showing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;