"use client"
import React, { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const App = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const pricingPlans = [
    {
      name: "Starter plan",
      price: "$50.90",
      period: "/mo",
      billing: "Billed annually",
      features: [
        { text: "Limited Access to the platform", included: true },
        { text: "10 Free Courses", included: true },
        { text: "Limited Benefits", included: true },
        { text: "Agent", included: false },
        { text: "Live Chat Support", included: false }
      ],
      button: "Get Started"
    },
    {
      name: "Pro plan",
      price: "$70.90",
      period: "/mo",
      billing: "Billed annually",
      features: [
        { text: "Full Access to the platform", included: true },
        { text: "20 Free Courses", included: true },
        { text: "Unlimited Benefits", included: true },
        { text: "Agent", included: true },
        { text: "Live Chat Support", included: false }
      ],
      button: "Get Started",
      popular: true
    },
    {
      name: "Business plan",
      price: "$99.90",
      period: "/mo",
      billing: "Billed annually",
      features: [
        { text: "Full Access to the platform", included: true },
        { text: "30 Free Courses", included: true },
        { text: "Unlimited Benefits", included: true },
        { text: "Agent", included: true },
        { text: "Live Chat Support", included: true }
      ],
      button: "Get Started"
    }
  ];

  const faqs = [
    {
      question: "What is Course Site?",
      answer: "CourseSite is an online learning platform that provides comprehensive courses and resources for skill development in various fields."
    },
    {
      question: "Do you have refund policy?",
      answer: "Our Purchases happen through Whop. Whop has its own refund policy, which you can find on their website. We recommend reviewing their policy before making a purchase."
    },
    {
      question: "Is the community supportive?",
      answer: "Yes, our community is very supportive. We have active forums, discussion groups, and regular meetups where learners can connect, share knowledge, and support each other."
    },
    {
      question: "Are there live classes or just recorded content?",
      answer: "We offer both live classes and recorded content. Live classes are conducted by expert instructors and provide real-time interaction, while recorded content allows you to learn at your own pace."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section with Background Elements */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-[-20px] -right-100 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-70 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-[-200px] w-80 h-80 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full opacity-70 blur-3xl"></div>
          <div className="absolute -top-50 -right-[-100px] w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-70 blur-3xl"></div>
          {/* <div className="absolute -bottom-10 -left-1000 w-80 h-80 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full opacity-70 blur-3xl"></div> */}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Join Our Premium Courses
              </h1>
              <div className="flex items-center space-x-2 mb-8">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.12a1 1 0 00-.363 1.118l1.519 4.674c.3.922-.755 1.688-1.54 1.118l-3.976-2.12a1 1 0 00-1.175 0l-3.976 2.12c-.784.57-1.838-.197-1.539-1.118l1.519-4.674a1 1 0 00-.363-1.118l-3.976-2.12c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                    </svg>
                  ))}
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">4.8/5</span>
                  <span className="mx-2">•</span>
                  <span>5,467 Reviews</span>
                </div>
              </div>
            </div>
            <div className="flex-1 text-right">
              <div className="text-lg font-semibold text-gray-900 mb-2">Trusted by 70k+ students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative ${
                  plan.popular ? 'transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-[-10px] left-[-10] transform -translate-x-1/2">
                    <div className="bg-gradient-to-r to-purple-600 from-indigo-200 text-white text-sm font-medium px-4 py-2 rounded-full rotate-[-30deg]">
                      Popular Plan
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                  <div className="mt-6 bg-gray-50 rounded-xl p-6">
                    <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
                    <div className="text-sm text-gray-500">{plan.period}</div>
                    <div className="text-xs text-gray-500 mt-1">{plan.billing}</div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-gray-900 to-black text-white hover:shadow-lg hover:scale-105' 
                      : 'border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                >
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2H9.5V11a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">Faq Hub</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions!</h2>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Still Have Questions?</h3>
                <p className="text-gray-700 mb-4">Contact Us, We are happy to help you</p>
                <div className="flex space-x-2 mb-4">
                  <img src="https://placehold.co/40x40/6366f1/ffffff?text=1" alt="User" className="rounded-full w-10 h-10" />
                  <img src="https://placehold.co/40x40/8b5cf6/ffffff?text=2" alt="User" className="rounded-full w-10 h-10" />
                  <img src="https://placehold.co/40x40/ec4899/ffffff?text=3" alt="User" className="rounded-full w-10 h-10" />
                </div>
                <button className="bg-gradient-to-r from-gray-900 to-black text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                  Start Learning Now
                </button>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl"
                  >
                    <button 
                      onClick={() => toggleFAQ(index)}
                      className="flex justify-between items-center w-full text-left"
                    >
                      <span className="text-gray-900 font-medium">{faq.question}</span>
                      <svg 
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {openFAQ === index && (
                      <div className="mt-4 text-gray-600 text-sm">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;