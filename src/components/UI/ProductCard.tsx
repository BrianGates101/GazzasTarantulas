import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import StarRating from './StarRating';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="relative h-64 overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.commonName}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <span className="text-white font-medium text-lg">Out of Stock</span>
            </div>
          )}
          
          {product.inStock && (
            <div className="absolute top-0 right-0 m-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button 
                variant="primary" 
                size="sm"
                className="flex items-center"
              >
                <ShoppingCart size={16} className="mr-1" />
                Quick Add
              </Button>
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg hover:text-gray-700 transition-colors">{product.commonName}</h3>
          <p className="text-gray-600 italic font-serif">{product.binomialName}</p>
        </Link>
        
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-lg">R {product.price.toLocaleString()}</span>
          <div className="flex items-center">
            <StarRating rating={product.rating} size="sm" />
            <span className="text-xs text-gray-500 ml-1">({product.reviews.length})</span>
          </div>
        </div>
        
        <div className="mt-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            product.careLevel === 'Beginner' ? 'bg-green-100 text-green-800' :
            product.careLevel === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {product.careLevel}
          </span>
        </div>
        
        <div className="mt-4">
          <Button 
            variant={product.inStock ? "primary" : "outline"} 
            fullWidth 
            disabled={!product.inStock}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;