import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import ProductGrid from '../components/UI/ProductGrid';
import { filterProducts, products } from '../data/products';
import { Search, Filter, X } from 'lucide-react';
import Button from '../components/UI/Button';

const careLevels = ['Beginner', 'Intermediate', 'Advanced'] as const;

const ShopPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [careLevel, setCareLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced' | undefined>(undefined);
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const filtered = filterProducts(searchTerm, careLevel, minPrice, maxPrice, inStockOnly);
    setFilteredProducts(filtered);
  }, [searchTerm, careLevel, minPrice, maxPrice, inStockOnly]);

  const clearFilters = () => {
    setSearchTerm('');
    setCareLevel(undefined);
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setInStockOnly(false);
  };

  const hasActiveFilters = !!searchTerm || !!careLevel || !!minPrice || !!maxPrice || inStockOnly;

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="bg-black text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Tarantula Collection</h1>
          <p className="max-w-2xl mx-auto">
            Explore our diverse selection of tarantulas, from beginner-friendly species to rare collector's specimens.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <Button 
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="flex items-center"
            >
              <Filter size={18} className="mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          {/* Filters Sidebar - Desktop Always Visible, Mobile Conditional */}
          <div className={`lg:w-1/4 lg:pr-8 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                {hasActiveFilters && (
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-gray-500 hover:text-black flex items-center"
                  >
                    Clear All
                    <X size={14} className="ml-1" />
                  </button>
                )}
              </div>

              {/* Search Box */}
              <div className="mb-6">
                <label htmlFor="search" className="block mb-2 font-medium">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Care Level Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Care Level</h3>
                <div className="space-y-2">
                  {careLevels.map((level) => (
                    <div key={level} className="flex items-center">
                      <input
                        type="radio"
                        id={`care-${level}`}
                        name="careLevel"
                        checked={careLevel === level}
                        onChange={() => setCareLevel(careLevel === level ? undefined : level)}
                        className="h-4 w-4 text-black focus:ring-black border-gray-300"
                      />
                      <label htmlFor={`care-${level}`} className="ml-2 text-gray-700">
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Price Range (ZAR)</h3>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice || ''}
                    onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : undefined)}
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice || ''}
                    onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : undefined)}
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              {/* Availability Filter */}
              <div className="mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="inStock"
                    checked={inStockOnly}
                    onChange={() => setInStockOnly(!inStockOnly)}
                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                  />
                  <label htmlFor="inStock" className="ml-2 text-gray-700">
                    In Stock Only
                  </label>
                </div>
              </div>

              <Button 
                onClick={() => setShowFilters(false)}
                variant="primary"
                className="w-full mt-4 lg:hidden"
              >
                Apply Filters
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            {/* Results Count and Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
              <p className="text-gray-600 mb-4 sm:mb-0">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'}
              </p>
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

            {/* No Results Message */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No tarantulas found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
                <Button onClick={clearFilters} variant="outline">
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <ProductGrid products={filteredProducts} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopPage;