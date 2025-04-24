import React from 'react';
import Layout from '../components/Layout/Layout';
import Button from '../components/UI/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Have questions or need assistance? We're here to help!
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Information */}
            <div className="lg:w-1/3 mb-12 lg:mb-0 lg:pr-12">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We're always happy to hear from fellow tarantula enthusiasts. Whether you have questions 
                about our inventory, need care advice, or want to place a special order, please don't 
                hesitate to reach out.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mt-1 mr-4 text-gray-700" size={20} />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <a href="mailto:info@gazzastarantulas.co.za" className="text-gray-600 hover:text-black transition">
                      info@gazzastarantulas.co.za
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mt-1 mr-4 text-gray-700" size={20} />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <a href="tel:+27123456789" className="text-gray-600 hover:text-black transition">
                      +27 12 345 6789
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Monday-Friday, 9am-5pm SAST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mt-1 mr-4 text-gray-700" size={20} />
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p className="text-gray-600">Cape Town, South Africa</p>
                    <p className="text-gray-500 text-sm mt-1">
                      We operate exclusively online - no physical storefront
                    </p>
                  </div>
                </div>
              </div>
              
              {/* WhatsApp CTA */}
              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-100">
                <h3 className="text-xl font-bold mb-3">Need a Quick Response?</h3>
                <p className="text-gray-600 mb-4">
                  Chat with us directly on WhatsApp for immediate assistance with your tarantula questions.
                </p>
                <a 
                  href="https://wa.me/27123456789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3 lg:pl-12 lg:border-l border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="e.g., Product Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1 h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-2 text-gray-600">
                    I agree to the <a href="/privacy" className="text-black hover:underline">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                  </label>
                </div>
                
                <Button variant="primary" type="submit" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Find quick answers to common questions about our tarantulas, shipping, and care.
          </p>
          <a href="/faq">
            <Button variant="outline">
              View All FAQs
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;