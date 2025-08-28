"use client"
import React, { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const App = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [selectedTier, setSelectedTier] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const pricingTiers = [
    {
      name: "Catalyst Online",
      audience: "Students & fresh grads",
      price: "$1,000 – $1,500",
      duration: "12 weeks",
      features: [
        "1 pathway (AI, Cybersecurity, Blockchain, Data, or Product)",
        "AI Career Copilot access",
        "Portfolio-as-a-Service (2 projects + personal site)",
        "Peer community access",
        "Weekly feedback sessions"
      ],
      button: "Apply Now",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Catalyst Guided",
      audience: "Early professionals (0–3 yrs exp.)",
      price: "$3,000 – $4,500",
      duration: "12 weeks",
      features: [
        "2 pathways (choose your focus areas)",
        "AI Career Copilot + advanced analytics",
        "Portfolio-as-a-Service (3 projects + personal site)",
        "Small group mentorship (1:5 ratio)",
        "Recruiter showcase access",
        "Interview prep bootcamp",
        "Priority job board access"
      ],
      button: "Apply Now",
      popular: true,
      color: "from-purple-500 to-indigo-600"
    },
    {
      name: "Catalyst Accelerator",
      audience: "Career switchers / ambitious early talent",
      price: "$7,500 – $10,000",
      duration: "4–6 months",
      features: [
        "All 5 pathways (AI, Cybersecurity, Blockchain, Data, Product)",
        "AI Career Copilot + predictive analytics",
        "Portfolio-as-a-Service (5+ projects + premium site)",
        "1:1 career strategist",
        "Masterclasses with industry leaders",
        "Guaranteed apprenticeship (3–6 months)",
        "Placement concierge service",
        "VIP recruiter network access",
        "Executive interview coaching"
      ],
      button: "Apply Now",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  const faqs = [
    {
      question: "How do I know which tier is right for me?",
      answer: "Catalyst Online is ideal for students and recent grads building foundational skills. Catalyst Guided suits early professionals with 0-3 years of experience looking to specialize. Catalyst Accelerator is designed for career switchers or ambitious talent seeking guaranteed placement and apprenticeships."
    },
    {
      question: "What happens after I apply?",
      answer: "After submitting your application, you'll receive a confirmation email with next steps. Our admissions team will review your background and schedule a 20-minute consultation to discuss your goals and determine the best fit. Accepted candidates receive onboarding materials within 48 hours."
    },
    {
      question: "Are scholarships or payment plans available?",
      answer: "Yes, we offer need-based scholarships for Catalyst Online and Guided tiers. All tiers qualify for flexible payment plans (3-12 months) with 0% interest. We also partner with workforce development programs that may cover tuition for eligible candidates."
    },
    {
      question: "What if I don't get a job after completing the program?",
      answer: "While we can't guarantee job placement, 89% of our graduates receive interviews within 90 days of completion. Catalyst Accelerator includes a placement concierge that continues supporting you for 6 months post-graduation. All graduates retain access to our job board and community indefinitely."
    }
  ];

  const outcomes = [
    {
      week: "Week 4",
      title: "Market-Ready Foundation",
      items: [
        "Customized resume optimized for ATS systems",
        "First industry project completed",
        "LinkedIn profile optimization",
        "Initial skills gap analysis"
      ]
    },
    {
      week: "Week 8",
      title: "Interview Preparation",
      items: [
        "Mock interviews with hiring managers",
        "Recruiter feedback on portfolio",
        "Second major project completed",
        "Personal brand strategy session"
      ]
    },
    {
      week: "Week 12",
      title: "Job Launch",
      items: [
        "Complete portfolio showcase website",
        "50+ targeted job applications",
        "Recruiter showcase presentation",
        "Alumni network access"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
     <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Launch Your Career in
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Emerging Tech</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              The infrastructure layer for early-career talent in AI, cybersecurity, blockchain, and data roles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-gray-900 to-black text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium flex items-center">
                Schedule a consultation
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  89% interview rate
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  12-week average time to offer
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  $85k+ average starting salary
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-6">
                The Problem
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">The jobs didn’t vanish. They shifted.</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <p className="text-gray-700 font-medium">IT roles migrated to cloud security.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <p className="text-gray-700 font-medium">Finance ops morphed into blockchain compliance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <p className="text-gray-700 font-medium">Product design expanded into AI–human interfaces.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
                <p className="text-gray-700 italic">"The issue isn’t talent. It’s translation."</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">The market hasn't caught up:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Students graduate with credentials that don’t map to demand.</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Young professionals chase internships that no longer exist.</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Employers leave high-growth jobs unfilled while talent sits idle.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-6">
              The Solution
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kyureeus Catalyst™ is the scalable career accelerator built for the jobs of tomorrow.
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We don’t just teach skills. We match supply to demand by retooling early-career talent into AI, cybersecurity, blockchain, and data roles — faster and cheaper than bootcamps or grad school.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { title: "Guided Pathways", desc: "12-week sprints with learning modules, hands-on projects, and role-ready deliverables" },
              { title: "AI Career Copilot", desc: "Tailors your resume, preps you for interviews, and closes skill gaps using real job postings" },
              { title: "Portfolio-as-a-Service", desc: "Graduate with 2–3 industry projects and a personal showcase site" },
              { title: "Community + Mentorship", desc: "Peer cohorts and industry mentors ensure you're never navigating alone" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Employer Access</h3>
            <p className="text-gray-300 mb-6">Recruiter showcases and curated early-career job boards put your work in front of decision-makers</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                See Employer Partners
              </button>
              <a href="#" className="text-white hover:text-gray-200 text-sm font-medium flex items-center justify-center">
                How we connect talent → employers
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Outcomes, Not Just Hours</h2>
            <p className="text-xl text-gray-700">Measured in interviews, referrals, and offers — not just course completion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium px-4 py-2 rounded-full">
                    {outcome.week}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mt-4">{outcome.title}</h3>
                </div>
                <ul className="space-y-3">
                  {outcome.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Investment in Your Future</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Pricing is indicative and may vary based on pathway selection, duration, and cohort availability. 
              Tuition covers all platform features, AI Copilot access, portfolio services, and community benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative transition-all duration-300 hover:shadow-2xl ${
                  tier.popular ? 'transform scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-medium px-4 py-2 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                  <div className="text-sm text-gray-600 mt-1">{tier.audience}</div>
                  <div className="mt-6 bg-gray-50 rounded-xl p-6">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                      {tier.price}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{tier.duration}</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                    tier.popular 
                      ? `bg-gradient-to-r ${tier.color} text-white hover:shadow-lg hover:scale-105` 
                      : 'border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedTier(tier.name)}
                >
                  {tier.button}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2H9.5V11a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-yellow-800 font-medium">Mentorship and apprenticeship opportunities in higher tiers are limited and offered on a rolling basis. Cohorts are capped to maintain quality. Once seats are filled, enrollment closes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kyureeus */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Kyureeus?</h2>
            <p className="text-xl text-gray-700">We're not another course. We're the infrastructure layer for early-career talent.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-2 3-3 3-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bootcamps overcharge for skills</h3>
              <p className="text-gray-700">We deliver comparable outcomes at 40-60% lower cost through scalable AI-powered learning and community-driven mentorship.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Universities over-index on theory</h3>
              <p className="text-gray-700">Our curriculum is built from real job descriptions and employer needs, ensuring you learn exactly what's required in today's market.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recruiters serve employers, not candidates</h3>
              <p className="text-gray-700">We work for you. Our AI Copilot and placement concierge advocate for your success at every stage of the hiring process.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Kyureeus Catalyst™ is designed for you.</h3>
            <p className="text-gray-700 text-lg mb-6">Affordable enough to scale. Structured enough to deliver outcomes. Ambitious enough to build careers in the fastest-growing sectors.</p>
            <button className="bg-gradient-to-r from-gray-900 to-black text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30">
            <h2 className="text-3xl font-bold mb-6">Ready to accelerate your career in emerging tech?</h2>
            <p className="text-xl mb-8 opacity-90">Reach out to our team to explore which Catalyst tier is right for you.</p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="text-lg">careers@kyureeus.com</span>
              </div>
              <div className="hidden md:block">|</div>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Schedule a consultation
              </button>
            </div>

            <div className="bg-yellow-100 bg-opacity-20 rounded-xl p-6 border border-yellow-100 border-opacity-30">
              <div className="flex items-start justify-center">
                <svg className="w-6 h-6 text-yellow-300 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <div className="text-left">
                  <p className="font-semibold">⚡ Priority Access: Early applications receive:</p>
                  <ul className="mt-2 space-y-1 text-sm opacity-90">
                    <li>• Guaranteed review by our employer network</li>
                    <li>• Priority placement in recruiter showcases</li>
                    <li>• Access to limited apprenticeship slots</li>
                  </ul>
                  <p className="mt-2 text-sm opacity-90">Cohorts are capped to maintain quality. Once seats are filled, enrollment closes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;