import React from 'react';
import Layout from '../components/Layout/Layout';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Gazza's Tarantulas</h1>
          <p className="max-w-2xl mx-auto text-lg">
            South Africa's premier exotic tarantula specialist since 2020
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="mb-4">
                Gazza's Tarantulas began with a passion for arachnids and a vision to provide exotic 
                pet enthusiasts in South Africa with ethically sourced, healthy tarantulas and expert 
                guidance on their care.
              </p>
              <p className="mb-4">
                Founded by Gary "Gazza" Thompson, a lifelong arachnid enthusiast with over 15 years 
                of experience in breeding and caring for various tarantula species, our mission is to 
                share the fascinating world of these misunderstood creatures with both novice and 
                experienced keepers.
              </p>
              <p>
                What started as a hobby has grown into South Africa's most trusted source for exotic 
                tarantulas, with a focus on education, responsible ownership, and conservation.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/8128576/pexels-photo-8128576.jpeg" 
                alt="Tarantula close-up" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Education</h3>
              <p className="text-gray-600">
                We believe in empowering tarantula keepers with comprehensive knowledge. 
                Our detailed care guides, species information, and personalized advice ensure 
                that your exotic pet thrives in your care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Ethical Sourcing</h3>
              <p className="text-gray-600">
                We prioritize captive-bred specimens and work with reputable suppliers who share 
                our commitment to sustainability. We never support the capture of wild specimens 
                from environmentally sensitive habitats.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Community</h3>
              <p className="text-gray-600">
                We're more than just a shop - we're building a community of enthusiasts. 
                We foster connections between tarantula keepers in South Africa through 
                social media, events, and personalized customer support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
              <p className="mb-4">
                With over 15 years of experience breeding and caring for tarantulas, we bring 
                unparalleled knowledge to help you select and care for your exotic pet.
              </p>
              <p className="mb-4">
                We specialize in a wide range of species, from beginner-friendly New World terrestrials 
                to more advanced Old World arboreal species. Our collection is carefully curated to 
                offer healthy, well-acclimated specimens at various life stages.
              </p>
              <p>
                Beyond selling tarantulas, we provide ongoing support, detailed care information, 
                and troubleshooting advice to ensure your tarantula lives a long, healthy life in 
                your care.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/8090007/pexels-photo-8090007.jpeg" 
                alt="Tarantula in habitat" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Check out our frequently asked questions or contact us directly for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/faq" className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              View FAQ
            </a>
            <a href="/contact" className="bg-transparent text-white border border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;