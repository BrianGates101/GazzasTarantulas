import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { getProductById } from '../data/products';
import StarRating from '../components/UI/StarRating';
import Button from '../components/UI/Button';
import { ChevronLeft, Minus, Plus } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'care' | 'reviews'>('description');

  const increaseQuantity = () => {
    if (product?.inStock) {
      setQuantity(q => q + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(q => q - 1);
    }
  };

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">The tarantula you're looking for doesn't exist or has been moved.</p>
          <Link to="/shop">
            <Button variant="primary">
              Return to Shop
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/shop" className="text-gray-600 hover:text-black flex items-center">
            <ChevronLeft size={16} className="mr-1" />
            Back to all tarantulas
          </Link>
        </div>

        {/* Product Main Section */}
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={product.images[0]}
                alt={product.commonName}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2">
            <div className="sticky top-24">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                product.careLevel === 'Beginner' ? 'bg-green-100 text-green-800' :
                product.careLevel === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {product.careLevel} Level
              </span>

              <h1 className="text-3xl font-bold mb-2">{product.commonName}</h1>
              <p className="text-xl italic font-serif mb-4">{product.binomialName}</p>

              <div className="flex items-center mb-6">
                <StarRating rating={product.rating} size="md" />
                <span className="ml-2 text-gray-600">
                  {product.rating.toFixed(1)} ({product.reviews.length} {product.reviews.length === 1 ? 'review' : 'reviews'})
                </span>
              </div>

              <p className="text-2xl font-bold mb-6">R {product.price.toLocaleString()}</p>
              
              <div className="mb-6">
                <p className="font-medium mb-2">
                  Availability: 
                  <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                    {product.inStock ? ' In Stock' : ' Out of Stock'}
                  </span>
                </p>
              </div>

              {product.inStock && (
                <div className="flex items-center mb-6">
                  <span className="mr-4 font-medium">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button 
                      onClick={decreaseQuantity}
                      className="px-3 py-1 text-gray-600 hover:text-black"
                      disabled={quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-1 border-x border-gray-300">{quantity}</span>
                    <button 
                      onClick={increaseQuantity}
                      className="px-3 py-1 text-gray-600 hover:text-black"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              )}

              <div className="mb-8">
                <Button 
                  variant={product.inStock ? 'primary' : 'outline'} 
                  disabled={!product.inStock}
                  fullWidth
                  size="lg"
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </div>

              <div className="p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Shipping Notice:</strong> We ship tarantulas within South Africa only. 
                  Delivery typically takes 1-2 business days via our specialized courier service to 
                  ensure the safety and well-being of your new pet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-4 px-1 border-b-2 font-medium ${
                  activeTab === 'description'
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('care')}
                className={`py-4 px-1 border-b-2 font-medium ${
                  activeTab === 'care'
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Care Information
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 border-b-2 font-medium ${
                  activeTab === 'reviews'
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Reviews ({product.reviews.length})
              </button>
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">About this Tarantula</h2>
                <p className="mb-4">{product.description}</p>
                <div className="mt-6">
                  <h3 className="text-lg font-bold mb-2">Highlights</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Native to: {product.id === '1' ? 'Mexico' : product.id === '2' ? 'Brazil' : 'Various regions'}</li>
                    <li>Expected adult size: {product.id === '1' ? '5-6 inches' : product.id === '2' ? '7-8 inches' : 'Varies by species'}</li>
                    <li>Temperament: {product.careLevel === 'Beginner' ? 'Docile and calm' : product.careLevel === 'Intermediate' ? 'Moderately defensive' : 'Fast and potentially defensive'}</li>
                    <li>Growth rate: {product.id === '1' ? 'Slow' : product.id === '2' ? 'Medium' : product.id === '7' ? 'Fast' : 'Varies'}</li>
                    <li>Lifespan: Females 15-30+ years, Males 3-7 years</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'care' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Care Information</h2>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Housing</h3>
                  <p>
                    {product.careLevel === 'Beginner' ? 
                      'A terrestrial enclosure with 3-4 inches of substrate, a hide, and a small water dish is suitable. The enclosure size should be approximately 3x the leg span of your tarantula.' :
                      product.careLevel === 'Intermediate' ? 
                      'Depending on the species, either a terrestrial or arboreal setup may be required. Ensure adequate space with proper substrate depth and climbing opportunities for arboreal species.' :
                      'Advanced species typically require more specialized care. For arboreal species, a tall enclosure with plenty of anchor points for webbing. For fossorial species, deep substrate for burrowing is essential.'}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Temperature & Humidity</h3>
                  <p>
                    {product.careLevel === 'Beginner' ? 
                      'Maintain a temperature between 22-27°C (72-80°F). Humidity should be kept around 60-70% with occasional misting.' :
                      product.careLevel === 'Intermediate' ? 
                      'Temperature requirements typically range from 24-28°C (75-82°F). Humidity varies by species - some require higher humidity levels of 70-80%.' :
                      'Strict temperature and humidity control is often necessary. Typically 25-29°C (77-84°F) with species-specific humidity requirements.'}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Feeding</h3>
                  <p>
                    {product.careLevel === 'Beginner' ? 
                      'Feed juvenile specimens twice weekly and adults once every 1-2 weeks. Appropriately sized crickets, roaches, or mealworms are ideal prey items.' :
                      product.careLevel === 'Intermediate' ? 
                      'Feeding frequency similar to beginner species, but these tarantulas may have heartier appetites. Offer a variety of appropriately sized feeder insects.' :
                      'These species often have specific feeding requirements or particularly voracious appetites. Be prepared for fast prey-capture response and potentially aggressive feeding behavior.'}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">Handling</h3>
                  <p>
                    {product.careLevel === 'Beginner' ? 
                      'While handling is possible with most beginner species, it should be kept to a minimum and done with care. Always handle close to a soft surface in case the tarantula falls.' :
                      product.careLevel === 'Intermediate' ? 
                      'Handling is generally not recommended for intermediate species as they can be more defensive or skittish. They may kick urticating hairs or assume threat postures.' :
                      'Handling is strongly discouraged for advanced species. These tarantulas are typically fast-moving, defensive, and may possess more potent venom. Use appropriate tools for tank maintenance and rehousing.'}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
                
                {product.reviews.length === 0 ? (
                  <p>No reviews yet. Be the first to review this product!</p>
                ) : (
                  <div className="space-y-6">
                    {product.reviews.map(review => (
                      <div key={review.id} className="border-b border-gray-200 pb-6">
                        <div className="flex items-center mb-2">
                          <StarRating rating={review.rating} size="sm" />
                          <span className="ml-2 font-medium">{review.author}</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">Posted on {new Date(review.date).toLocaleDateString()}</p>
                        <p>{review.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Write a Review</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="rating" className="block mb-2 font-medium">Your Rating</label>
                      <StarRating rating={0} size="md" interactive />
                    </div>
                    <div>
                      <label htmlFor="review" className="block mb-2 font-medium">Your Review</label>
                      <textarea
                        id="review"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Share your experience with this product..."
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      />
                      <p className="text-sm text-gray-500 mt-1">Your email will not be published</p>
                    </div>
                    <Button variant="primary" type="submit">
                      Submit Review
                    </Button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;