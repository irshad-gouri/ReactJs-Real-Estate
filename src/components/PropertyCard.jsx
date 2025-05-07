import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

const PropertyCard = ({ property }) => {
  const { id, title, location, price, features, images } = property;

  return (
    <Link to={`/property/${id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
        {/* Property Image */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={images[0]} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 bg-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-md">
            {price}
          </div>
        </div>

        {/* Property Details */}
        <div className="p-5">
          <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors duration-300">{title}</h3>
          <div className="flex items-center text-gray-500 mb-3">
            <MapPin size={16} className="mr-1" />
            <p className="text-sm truncate">{location}</p>
          </div>

          {/* Property Features */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center text-gray-700">
              <Bed size={16} className="mr-1" />
              <span className="text-sm">{features.beds}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Bath size={16} className="mr-1" />
              <span className="text-sm">{features.baths}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Square size={16} className="mr-1" />
              <span className="text-sm">{features.sqft} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;