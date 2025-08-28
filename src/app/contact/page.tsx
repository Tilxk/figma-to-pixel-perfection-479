'use client'
import React, { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '', subscribe: false });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
     <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Section */}
        <section className="py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Contact Info */}
            <div className="flex-1">
              <nav className="mb-8 text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900 transition-colors duration-200">Home</a>
                <span className="mx-2">/</span>
                <span>Contact Us</span>
              </nav>

              <h1 className="text-4xl font-montserrat  md:text-5xl font-bold mb-6 leading-tight">
                Touch with us <br /> today!
              </h1>
              
              <p className="text-gray-700 mb-10 leading-relaxed">
                Whatever you need, whenever you need it, our team is here to help dedicated to supporting you every step of the way.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Message Us */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16h.01M12 16h.01M15 16h.01M8 10v.01M12 10v.01M16 10v.01M9 16v.01M12 16v.01M15 16v.01M8 10l3-3m0 0l3 3m-3-3v10m0 0l-3-3m3 3l3-3" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-xl font-semibold text-gray-900">Message Us</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Use our online chat system to message us and get support.
                  </p>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <a href="mailto:coursite@support.com" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm font-medium">
                      coursesite@support.com
                    </a>
                  </div>
                </div>

                {/* Call Us */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.54 1.06l-1.518.759a11.042 11.042 0 006.105 6.105l.759-1.518a1 1 0 011.06-.54l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-xl font-semibold text-gray-900">Call us</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Let's chat - nothing better than talking to another human being.
                  </p>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <a href="tel:+1234567890" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm font-medium">
                      +1234567890
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="flex-1">
              <div className="relative">
                {/* Decorative element */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-green-200 rounded-full opacity-30 blur-3xl"></div>
                
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 relative z-10">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                        required
                      />
                    </div>
                    
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How Can We Help?"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                      required
                    ></textarea>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="subscribe"
                        name="subscribe"
                        checked={formData.subscribe}
                        onChange={handleChange}
                        className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                      />
                      <label htmlFor="subscribe" className="ml-2 text-gray-700 text-sm">
                        Subscribe to Newsletter
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 px-6 rounded-xl font-medium text-white transition-all duration-200 ${
                        isSubmitting 
                          ? 'bg-gray-500 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 transform hover:scale-[1.02]'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
          
          {/* Decorative globe element */}
          <div className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-30">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <defs>
                <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="5" cy="5" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <circle cx="200" cy="200" r="180" fill="none" stroke="#000" strokeWidth="1" opacity="0.1" />
              <circle cx="200" cy="200" r="180" fill="url(#dots)" opacity="0.3" />
            </svg>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.336 2.14M14 13l-2-2m0 0l-2 2m2-2v8m0-8H9m3 0h3" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm font-medium">Community</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Join our community where creativity thrives.
                </h2>
                
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Unlock the amazing benefits of joining our community, growing your skills, and building connections.
                </p>
                
                <button
  className="rounded-[26px] pt-[16px] pr-[34px] pb-[16px] pl-[34px] text-[16px] font-inter font-medium leading-[20px] text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
  style={{
    background: 'linear-gradient(161deg, #fff 0%, #000000 100%)'
  }}
>
  Start Learning Now
</button>
              </div>
              
              <div className="flex-1 relative">
                {/* Chat bubbles */}
                <div className="space-y-4">
                  <div className="flex items-end space-x-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="bg-white rounded-lg px-4 py-3 shadow-lg max-w-xs">
                      <p className="text-gray-700 text-sm">This one is slightly better, it has more contrast</p>
                    </div>
                  </div>
                  
                  <div className="flex items-end space-x-3 justify-end">
                    <div className="bg-white rounded-lg px-4 py-3 shadow-lg max-w-xs">
                      <p className="text-gray-700 text-sm">Do you think this design is better?</p>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
       
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;