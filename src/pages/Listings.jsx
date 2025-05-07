import React, { useState } from 'react';
import { Search, ChevronDown, MapPin } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';

// Import property data
import propertiesData from '../data/properties.json';

const Listings = () => {
  // State for filters (not functional, just UI)
  const [priceRange, setPriceRange] = useState('Any');
  const [bedsRange, setBedsRange] = useState('Any');
  const [propertyType, setPropertyType] = useState('Any');
  
  const locations = [...new Set(propertiesData.properties.map(property => {
    const parts = property.location.split(',');
    return parts[parts.length - 2].trim(); // Extract city
  }))];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-light mb-4">Our Properties</h1>
          <p className="text-gray-600">
            Discover our collection of exceptional properties in the most desirable locations.
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Search Input */}
            <div className="lg:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Enter keywords..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <select
                  id="location"
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                >
                  <option value="">Any Location</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
                <MapPin size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <ChevronDown size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Price Range
              </label>
              <div className="relative">
                <select
                  id="price"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                >
                  <option value="Any">Any Price</option>
                  <option value="1-3M">$1M - $3M</option>
                  <option value="3-5M">$3M - $5M</option>
                  <option value="5-7M">$5M - $7M</option>
                  <option value="7M+">$7M+</option>
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Bedrooms Filter */}
            <div>
              <label htmlFor="beds" className="block text-sm font-medium text-gray-700 mb-1">
                Bedrooms
              </label>
              <div className="relative">
                <select
                  id="beds"
                  value={bedsRange}
                  onChange={(e) => setBedsRange(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                >
                  <option value="Any">Any</option>
                  <option value="1+">1+</option>
                  <option value="2+">2+</option>
                  <option value="3+">3+</option>
                  <option value="4+">4+</option>
                  <option value="5+">5+</option>
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Additional Filters (collapsible) */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {/* Property Type Filter */}
              <div>
                <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Property Type
                </label>
                <div className="relative">
                  <select
                    id="property-type"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                  >
                    <option value="Any">Any Type</option>
                    <option value="House">House</option>
                    <option value="Condo">Condo</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Villa">Villa</option>
                    <option value="Estate">Estate</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Bathrooms Filter */}
              <div>
                <label htmlFor="baths" className="block text-sm font-medium text-gray-700 mb-1">
                  Bathrooms
                </label>
                <div className="relative">
                  <select
                    id="baths"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                  >
                    <option value="Any">Any</option>
                    <option value="1+">1+</option>
                    <option value="2+">2+</option>
                    <option value="3+">3+</option>
                    <option value="4+">4+</option>
                    <option value="5+">5+</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Square Footage Filter */}
              <div>
                <label htmlFor="sqft" className="block text-sm font-medium text-gray-700 mb-1">
                  Square Footage
                </label>
                <div className="relative">
                  <select
                    id="sqft"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                  >
                    <option value="Any">Any</option>
                    <option value="1000+">1,000+ sqft</option>
                    <option value="2000+">2,000+ sqft</option>
                    <option value="3000+">3,000+ sqft</option>
                    <option value="4000+">4,000+ sqft</option>
                    <option value="5000+">5,000+ sqft</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Filter Button (lg:col-span-2 to take remaining space) */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-transparent mb-1">
                  &nbsp;
                </label>
                <button className="btn-primary w-full">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesData.properties.map(property => (
            <div key={property.id} className="animate-slide-up">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-300">
              Previous
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-300">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-300">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-300">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;