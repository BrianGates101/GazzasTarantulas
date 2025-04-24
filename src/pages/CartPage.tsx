import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Button from '../components/UI/Button';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Placeholder data for cart items
const cartItems = [
  {
    id: '1',
    name: 'Mexican Red Knee',
    binomialName: 'Brachypelma hamorii',
    price: 1200,
    quantity: 1,
    image: 'https://images.pexels.com/photos/8711909/pexels-photo-8711909.jpeg'
  },
  {
    id: '8',
    name: 'Green Bottle Blue',
    binomialName: 'Chromatopelma cyaneopubescens',
    price: 1800,
    quantity: 1,
    image: 'https://images.pexels.com/photos/7541120/pexels-photo-7541120.jpeg'
  }
];

const CartPage: React.FC = () => {
  const [items, setItems] = useState(cartItems);
  
  const updateQuantity = (id: string, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };
  
  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 150; // Fixed shipping cost
  const total = subtotal + shipping;

  return (
    <Layout>
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex justify-center items-center w-16 h-16 bg-gray-100 rounded-full mb-6">
              <ShoppingBag size={32} className="text-gray-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any tarantulas to your cart yet.</p>
            <Link to="/shop">
              <Button variant="primary">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold">Cart Items ({items.length})</h2>
                </div>
                
                <div>
                  {items.map(item => (
                    <div key={item.id} className="p-6 border-b border-gray-200 flex flex-col sm:flex-row items-start">
                      {/* Product Image */}
                      <div className="w-full sm:w-24 h-24 mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-gray-600 italic font-serif text-sm">{item.binomialName}</p>
                          </div>
                          <p className="font-bold mt-2 sm:mt-0">R {item.price.toLocaleString()}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="px-3 py-1 text-gray-600 hover:text-black"
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-3 py-1 border-x border-gray-300">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-3 py-1 text-gray-600 hover:text-black"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          
                          {/* Remove Button */}
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-gray-500 hover:text-red-600 flex items-center"
                          >
                            <X size={16} className="mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 flex justify-between">
                  <Link to="/shop">
                    <Button variant="outline">
                      Continue Shopping
                    </Button>
                  </Link>
                  <button 
                    onClick={() => setItems([])}
                    className="text-red-600 hover:text-red-800"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold">Order Summary</h2>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>R {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>R {shipping.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between font-bold">
                    <span>Total</span>
                    <span>R {total.toLocaleString()}</span>
                  </div>
                  
                  <Button variant="primary" fullWidth size="lg" className="mt-6 flex items-center justify-center">
                    Proceed to Checkout
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                  
                  <div className="mt-6 text-sm text-gray-500">
                    <p className="mb-2"><strong>Shipping Policy:</strong> We only ship within South Africa via specialized couriers to ensure the safety and well-being of your tarantulas.</p>
                    <p><strong>Returns:</strong> Due to the nature of live animals, returns are only accepted if the specimen arrives dead or severely injured. Please see our <a href="/terms" className="text-black hover:underline">Terms & Conditions</a> for details.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;