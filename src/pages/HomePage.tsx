import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import HeroSection from '../components/UI/HeroSection';
import ProductGrid from '../components/UI/ProductGrid';
import Button from '../components/UI/Button';
import { getFeaturedProducts } from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <Layout>
      <HeroSection
        title="Gazza's Tarantulas"
        subtitle="Your premier source for exotic tarantulas in South Africa"
        backgroundImage="https://images.pexels.com/photos/1634352/pexels-photo-1634352.jpeg"
        ctaText="Explore Our Collection"
        ctaLink="/shop"
      />

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Specimens</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular tarantulas, carefully selected for their beauty, 
              temperament, and suitability for both beginners and experienced enthusiasts.
            </p>
          </div>
          <ProductGrid products={featuredProducts} />
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button variant="outline" size="lg">
                View All Tarantulas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">About Gazza's Tarantulas</h2>
              <p className="mb-4">
                Passionate about arachnids, we've been South Africa's trusted source for 
                exotic tarantulas since 2020. We specialize in providing healthy, ethically 
                sourced specimens alongside expert care guidance.
              </p>
              <p className="mb-6">
                Our collection ranges from beginner-friendly species to rare specimens for 
                experienced enthusiasts. We're committed to responsible ownership and 
                spreading appreciation for these fascinating creatures.
              </p>
              <Link to="/about">
                <Button variant="secondary">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/7506390/pexels-photo-7506390.jpeg" 
                alt="Tarantula close-up" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Care Guide Teaser */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">Expert Care Guidance</h2>
              <p className="mb-4">
                Proper care is essential for your tarantula's health and longevity. Our detailed 
                care guides provide species-specific information on housing, feeding, humidity, 
                temperature requirements, and more.
              </p>
              <p className="mb-6">
                Whether you're a beginner or experienced keeper, our guides help ensure your 
                exotic pet thrives in your care.
              </p>
              <Link to="/care-guide">
                <Button variant="primary">
                  View Care Guides
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/8128562/pexels-photo-8128562.jpeg" 
                alt="Tarantula in habitat" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "My Brachypelma hamorii arrived in perfect condition. The packaging was secure and the specimen is even more beautiful than pictured. Excellent communication throughout."
              </p>
              <p className="font-medium">- David M.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The care guide was extremely helpful for a first-time keeper like me. My Tliltocatl albopilosum is thriving thanks to the detailed advice. Gazza was also quick to respond to my questions."
              </p>
              <p className="font-medium">- Lauren K.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill={i < 4 ? "currentColor" : "none"} stroke={i < 4 ? "none" : "currentColor"} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "I've ordered from several tarantula suppliers, and Gazza's stands out for quality and service. Shipping was prompt and the WhatsApp support is incredibly convenient."
              </p>
              <p className="font-medium">- Thabo N.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to welcome a new exotic pet?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our collection of carefully selected tarantulas and find your perfect match.
          </p>
          <Link to="/shop">
            <Button variant="secondary" size="lg">
              Shop Our Collection
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;