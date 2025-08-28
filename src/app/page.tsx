'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
interface Course {
  id: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  level: string;
  image: string;
  featured: boolean;
}
interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}
interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}
interface FAQ {
  id: string;
  question: string;
  answer?: string;
  expanded?: boolean;
}
const HomePage: React.FC = () => {
  // Sample data
  const courses: Course[] = [
    {
      id: '1',
      title: 'JavaScript Full Mastery 2024 …',
      description: 'Master JavaScript with our updated course. Learn core concepts, ES6+, and advanced techniques t…',
      price: '$99',
      rating: 5,
      level: 'Intermediate',
      image: '/images/img_course_banner.png',
      featured: true
    },
    {
      id: '2',
      title: 'Framer Full Mastery & More 2024…',
      description: 'Master Framer in 2024 with this updated course. Learn to design, prototype, and build interactive …',
      price: '$99',
      rating: 5,
      level: 'Beginner',
      image: '/images/img_course_banner_214x332.png',
      featured: true
    },
    {
      id: '3',
      title: 'Figma Full Mastery 2024 Edition …',
      description: 'Master Figma in 2024 with this updated course. Learn to design, prototype, and collaborate on …',
      price: '$79',
      rating: 5,
      level: 'Beginner',
      image: '/images/img_course_banner_1.png',
      featured: true
    }
  ];
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Brendan Wilson',
      role: 'Aspiring Web Designer',
      content: 'The courses are top-notch, providing in-depth knowledge that is easy to apply. Each lesson is structured to ensure you fully grasp the material.',
      rating: 5,
      avatar: '/images/img_qrjufx1vgxgy9qn.png'
    },
    {
      id: '2',
      name: 'Rock Lee',
      role: 'Web Designer',
      content: 'The courses are excellent, delivering practical insights with ease. Each module is designed to help you fully understand and apply the knowledge.',
      rating: 5,
      avatar: '/images/img_pic.png'
    },
    {
      id: '3',
      name: 'Sakura',
      role: 'Web Developer',
      content: 'These courses are exceptional, offering detailed content that is easy to implement. Every lesson is carefully crafted to deepen your understanding.',
      rating: 5,
      avatar: '/images/img_pic_white_a700.png'
    }
  ];
  const pricingPlans: PricingPlan[] = [
    {
      id: '1',
      name: 'Starter plan',
      price: '$50.90',
      period: '/mo',
      features: [
        'Limited Access to the platform',
        '10 Free Courses',
        'Limited Benefits',
        'Agent',
        'Live Chat Support'
      ]
    },
    {
      id: '2',
      name: 'Pro plan',
      price: '$70.90',
      period: '/mo',
      features: [
        'Full Access to the platform',
        '20 Free Courses',
        'Unlimited Benefits',
        'Agent',
        'Live Chat Support'
      ],
      popular: true
    },
    {
      id: '3',
      name: 'Business plan',
      price: '$99.90',
      period: '/mo',
      features: [
        'Full Access to the platform',
        '30 Free Courses',
        'Unlimited Benefits',
        'Agent',
        'Live Chat Support'
      ]
    }
  ];
  const faqs: FAQ[] = [
    {
      id: '1',
      question: 'What is Course Site?',
      expanded: false
    },
    {
      id: '2',
      question: 'Do you have refund policy?',
      answer: 'Our Purchases happen through Whop. Whop has its own refund policy, which you can find on their website. We recommend reviewing their policy before making a purchase.',
      expanded: true
    },
    {
      id: '3',
      question: 'Is the community supportive?',
      expanded: false
    },
    {
      id: '4',
      question: 'Are there live classes or just recorded content?',
      expanded: false
    }
  ];
  const topics = [
    'Web Development',
    'Java Script',
    'Framer',
    'Web Design',
    'Webflow',
    'CSS',
    'UI/UX Design',
    'Angular',
    'React'
  ];
  const benefits = [
    {
      icon: '/images/img_component_2_blue_gray_300_30x30.svg',
      title: 'Built by Professionals',
      description: 'Get the best Experience knowing that our Courses are built by Professionals.'
    },
    {
      icon: '/images/img_component_2_30x30.svg',
      title: 'Completion Certificate',
      description: 'Receive a Completion Award from our Team to enhance your motivation'
    },
    {
      icon: '/images/img_component_2_1.svg',
      title: 'Instant Chat Help',
      description: 'Have questions? Reach out for a quick chat—here for you 24/7'
    },
    {
      icon: '/images/img_component_2_2.svg',
      title: 'Lifetime Membership',
      description: 'With Just One Payment, you will get Permanent Access to the Course.'
    },
    {
      icon: '/images/img_component_2_3.svg',
      title: 'Access to Community',
      description: 'Join Our Private Community to Connect with Like-Minded Individuals and Grow Together.'
    },
    {
      icon: '/images/img_component_2_4.svg',
      title: 'Download for Offline Use',
      description: 'Our courses can be downloaded, so you can watch them anytime, anywhere.'
    }
  ];
  const whyChooseUs = [
    {
      icon: '/images/img_component_2_30x30.svg',
      title: 'Certificate of Completion',
      description: 'Receive a recognized credential that significantly boosts your resume.'
    },
    {
      icon: '/images/img_component_2_6.svg',
      title: 'Networking Opportunities',
      description: 'Connect with peers and valuable industry professionals for growth.'
    },
    {
      icon: '/images/img_component_2_9.svg',
      title: 'Comprehensive Curriculum',
      description: 'Master essential topics and practical skills effectively and thoroughly.'
    },
    {
      icon: '/images/img_component_2_10.svg',
      title: 'Expert Guidance',
      description: 'Learn from experienced instructors for personalized and effective support.'
    }
  ];
  return (
    <div className="flex flex-col justify-start items-center w-full bg-[#ffffff] overflow-y-auto">
      {/* Header Section */}
      <section className="w-full bg-[linear-gradient(180deg,#ffffff_0%,#ffffff00_100%)]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
        </div>
      </section>

      {/* Hero Section - Fixed alignment */}
      <section className="relative w-full bg-white pt-16 pb-20">
     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Trust Badge */}
    <div className="flex justify-center items-center mb-4">
      <div className="flex items-center text-gray-700 text-sm font-inter">
        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
        Trusted by 20,000+ Happy Learners
      </div>
    </div>

    {/* Main Heading */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
      Learn What Gets You <span className="text-black">Hired.</span>
    </h1>

    {/* Description */}
    <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg mb-8">
      Kyureeus trains you in high-demand tech skills designed around real jobs, not just content. Every course, every project, every certification moves you closer to a better role.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="px-6 py-3 rounded-full border border-gray-300 text-black font-medium hover:bg-gray-100 transition">
        View All Courses
      </button>
      <button className="px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition">
        Start Learning Now
      </button>
    </div>
  </div>

  {/* Hero Image Placeholder */}
    <div className="flex justify-center mt-[-140px]">
    <img
      src="/images/hero-bg.svg" // Replace with actual image
      alt="Hero Illustration"
      className="w-full object-cover"
    />
  </div>
</section>

      {/* Gradient Overlay */}
      {/* <div className="w-full h-[238px] sm:h-[357px] md:h-[476px] bg-[linear-gradient(0deg,#ffffff_0%,#ffffff00_100%)] mt-[-104px] sm:mt-[-156px] md:mt-[-208px]"></div> */}

      {/* Stats Section - Fixed alignment */}
      <section className="w-full bg-[#ffffff] pt-[80px] sm:pt-[100px] pb-[80px] sm:pb-[100px]" style={{backgroundImage: 'url(/images/img_bg_gradient.png)'}}>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-[40px] sm:gap-[60px] justify-center items-center w-full">
            {/* Section Header - Centered */}
            <div className="flex flex-col justify-center items-center w-full max-w-[800px] text-center">
              <div className="flex justify-center items-center w-auto bg-[#ffffff] border border-[#e9edf8] rounded-[16px] px-[16px] py-[8px] mb-4">
                <div className="flex justify-center items-center bg-[#814fff26] rounded-[16px] px-[8px] py-[8px] mr-3">
                  <Image src="/images/img_component_2.svg" alt="Icon" width={20} height={20} />
                </div>
                <p className="text-[14px] font-inter font-normal leading-[17px] text-[#000000]">
                  We Offer
                </p>
              </div>
              
              <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-poppins font-medium leading-[1.2] text-center text-[#000000] mb-4">
                Boost Your Skills
              </h2>
              
              <div className="text-center max-w-[600px]">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[1.4] text-[#000000] mb-2">
                  From critical skills to technical topics, we support your professional development
                </p>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[1.4] text-[#000000]">
                  with courses that help you grow and succeed.
                </p>
              </div>
            </div>

            {/* Stats Cards - Properly aligned grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] w-full max-w-[1200px]">
              {/* Hours Card */}
              <div className="flex flex-col justify-center items-center bg-[linear-gradient(0deg,#ffffff_0%,#ffffff00_100%)] border-[3px] border-[#ffffff] rounded-[24px] px-[24px] py-[40px] shadow-[0px_10px_30px_#00000026]">
                <div className="flex flex-col gap-[20px] justify-center items-center w-full">
                  <div className="flex justify-center items-center w-[80px] h-[80px] bg-[linear-gradient(90deg,#ffffff_0%,#ffffff4c_100%)] rounded-[16px] shadow-[0px_0px_30px_#00000026]">
                    <Image src="/images/img_hours_of_content.png" alt="Hours Content" width={60} height={60} />
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center items-baseline gap-1 mb-2">
                      <h3 className="text-[40px] sm:text-[48px] font-inter font-bold leading-[1] text-[#000000]">100</h3>
                      <span className="text-[32px] sm:text-[40px] font-inter font-medium leading-[1] text-[#000000]">+</span>
                    </div>
                    <p className="text-[12px] sm:text-[14px] font-inter font-normal leading-[17px] text-center text-[#000000] uppercase tracking-wide">
                      Hours of Content
                    </p>
                  </div>
                </div>
              </div>

              {/* Courses Card */}
              <div className="flex flex-col justify-center items-center bg-[linear-gradient(0deg,#ffffff_0%,#ffffff00_100%)] border-[3px] border-[#ffffff] rounded-[24px] px-[24px] py-[40px] shadow-[0px_10px_30px_#00000026]">
                <div className="flex flex-col gap-[20px] justify-center items-center w-full">
                  <div className="flex justify-center items-center w-[80px] h-[80px] bg-[linear-gradient(90deg,#ffffff_0%,#ffffff4c_100%)] rounded-[16px] shadow-[0px_0px_30px_#00000026]">
                    <Image src="/images/img_n_o_courses_pic.png" alt="Courses" width={60} height={60} />
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center items-baseline gap-1 mb-2">
                      <h3 className="text-[40px] sm:text-[48px] font-inter font-bold leading-[1] text-[#000000]">15</h3>
                      <span className="text-[32px] sm:text-[40px] font-inter font-medium leading-[1] text-[#000000]">+</span>
                    </div>
                    <p className="text-[12px] sm:text-[14px] font-inter font-normal leading-[17px] text-center text-[#000000] uppercase tracking-wide">
                      Courses
                    </p>
                  </div>
                </div>
              </div>

              {/* Students Card */}
              <div className="flex flex-col justify-center items-center bg-[linear-gradient(0deg,#ffffff_0%,#ffffff00_100%)] border-[3px] border-[#ffffff] rounded-[24px] px-[24px] py-[40px] shadow-[0px_10px_30px_#00000026]">
                <div className="flex flex-col gap-[20px] justify-center items-center w-full">
                  <div className="flex justify-center items-center w-[80px] h-[80px] bg-[linear-gradient(90deg,#ffffff_0%,#ffffff4c_100%)] rounded-[16px] shadow-[0px_0px_30px_#00000026]">
                    <Image src="/images/img_n_o_students_pic.png" alt="Students" width={60} height={60} />
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center items-baseline gap-1 mb-2">
                      <h3 className="text-[40px] sm:text-[48px] font-inter font-bold leading-[1] text-[#000000]">20</h3>
                      <span className="text-[32px] sm:text-[40px] font-inter font-medium leading-[1] text-[#000000]">k+</span>
                    </div>
                    <p className="text-[12px] sm:text-[14px] font-inter font-normal leading-[17px] text-center text-[#000000] uppercase tracking-wide">
                      Students
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Logos Section - Centered */}
            <div className="flex flex-col gap-[20px] justify-center items-center w-full max-w-[1000px]">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                <div className="flex-1 h-[1px] bg-[#0000004c]"></div>
                <p className="text-[12px] sm:text-[14px] md:text-[16px] font-inter font-normal text-center text-[#000000] whitespace-nowrap px-4">
                  Adopted by renowned enterprises such as
                </p>
                <div className="flex-1 h-[1px] bg-[#0000004c]"></div>
              </div>
              
              <div className="flex justify-center items-center gap-[30px] sm:gap-[40px] flex-wrap">
                <Image src="/images/img_company_logo.png" alt="Company Logo" width={80} height={30} className="h-[20px] sm:h-[25px] md:h-[30px] w-auto" />
                <Image src="/images/img_company_logo_34x130.png" alt="Company Logo" width={130} height={34} className="h-[20px] sm:h-[25px] md:h-[30px] w-auto" />
                <Image src="/images/img_company_logo_1.png" alt="Company Logo" width={130} height={34} className="h-[20px] sm:h-[25px] md:h-[30px] w-auto" />
                <Image src="/images/img_company_logo_2.png" alt="Company Logo" width={130} height={34} className="h-[20px] sm:h-[25px] md:h-[30px] w-auto" />
                <Image src="/images/img_company_logo_3.png" alt="Company Logo" width={130} height={34} className="h-[20px] sm:h-[25px] md:h-[30px] w-auto" />
                <Image src="/images/img_company_logo_4.png" alt="Company Logo" width={130} height={34} className="h-[20px] sm:h-[25px] md:h-[30px] w-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section
  className="w-full bg-[#ffffff] pt-[80px] sm:pt-[100px] pb-[80px] sm:pb-[100px]"
  style={{ backgroundImage: 'url(/images/img_bg_gradient.png)' }}
>
  <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col gap-[60px] justify-center items-center w-full">
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center w-full max-w-[800px] text-center">
        <div className="flex justify-center items-center w-auto bg-[#ffffff] border border-[#e9edf8] rounded-[16px] px-[16px] py-[8px] mb-4">
          <div className="flex justify-center items-center bg-[#814fff26] rounded-[16px] px-[8px] py-[8px] mr-3">
            <Image
              src="/images/img_component_2_deep_purple_a200.svg"
              alt="Icon"
              width={20}
              height={20}
            />
          </div>
          <p className="text-[14px] font-inter font-normal leading-[17px] text-[#000000]">
            Our Courses
          </p>
        </div>

        <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-poppins font-medium leading-[1.2] text-center text-[#000000] mb-4">
          Featured Courses
        </h2>

        <div className="text-center max-w-[600px]">
          <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[1.4] text-[#000000] mb-2">
            From critical skills to technical topics, we support your
            professional development
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[1.4] text-[#000000]">
            with courses that help you grow and succeed.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] w-full max-w-[1200px]">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group relative flex flex-col justify-start items-center bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-[#ffffff] rounded-[24px] p-[24px] shadow-[0px_10px_30px_#00000019] transition-all duration-300 hover:scale-[1.03] hover:shadow-xl overflow-hidden"
          >
            {/* Hover effect background (optional subtle gradient overlay) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#f3f3f3] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex flex-col gap-[16px] justify-start items-center w-full relative z-10">
              {/* Image with hover transform */}
              <div className="w-full overflow-hidden rounded-[16px]">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={332}
                  height={214}
                  className="w-full h-auto rounded-[16px] transform transition-transform duration-500 group-hover:-translate-y-4 group-hover:shadow-lg"
                />
              </div>

              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row gap-[4px] justify-center items-center">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="/images/img_component_2_amber_a400.svg"
                      alt="Star"
                      width={16}
                      height={16}
                    />
                  ))}
                </div>
                <p className="text-[18px] font-poppins font-medium leading-[24px] text-[#000000]">
                  {course.price}
                </p>
              </div>

              <h3 className="text-[18px] font-poppins font-medium leading-[24px] text-center text-[#000000] hover:text-button-1 cursor-pointer transition-colors duration-200">
                {course.title}
              </h3>
              <p className="text-[14px] font-inter font-normal leading-[20px] text-center text-[#000000] hover:text-button-1 cursor-pointer transition-colors duration-200">
                {course.description}
              </p>

              <div className="flex justify-between items-center w-full">
                {course.featured && (
                  <button className="text-[12px] font-inter font-normal text-[#814fff] bg-[#814fff26] rounded-[8px] px-[12px] py-[6px] hover:bg-[#814fff33] transition-colors duration-200">
                    Featured
                  </button>
                )}
                <div className="flex justify-center items-center gap-2 ml-auto">
                  <Image
                    src="/images/img_component_2_black_900.svg"
                    alt="Level Icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-[12px] font-inter font-normal text-[#000000]">
                    {course.level}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Courses Button */}
      <button className="text-[16px] font-inter font-medium leading-[20px] text-[#000000] border border-[#000000] rounded-[22px] px-[32px] py-[12px] gap-[8px] flex items-center hover:bg-[#000000] hover:text-[#ffffff] transition-all duration-200">
        View Courses
        <Image
          src="/images/img_component_2_black_900_20x20.svg"
          alt="Arrow"
          width={20}
          height={20}
        />
      </button>
    </div>
  </div>
</section>

      {/* Testimonials Section - Fixed alignment */}
      <section
  className="w-full bg-[#ffffff] pt-[80px] sm:pt-[100px] pb-[80px] sm:pb-[100px]"
  style={{ backgroundImage: 'url(/images/img_bg_gradient.png)' }}
>
  <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row gap-[40px] sm:gap-[60px] justify-center items-start w-full">
      {/* Section Header - Left column */}
      <div className="flex flex-col justify-start items-start w-full lg:w-[40%]">
        <div className="flex justify-start items-center w-auto bg-[#ffffff] border border-[#e9edf8] rounded-[16px] px-[16px] py-[8px] mb-6">
          <div className="flex justify-center items-center bg-[#814fff26] rounded-[16px] px-[8px] py-[8px] mr-3">
            <Image
              src="/images/img_component_2_deep_purple_a200_20x20.svg"
              alt="Icon"
              width={20}
              height={20}
            />
          </div>
          <p className="text-[14px] font-inter font-normal leading-[17px] text-[#000000]">
            Testimonials
          </p>
        </div>

        <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-poppins font-medium leading-[1.2] text-left text-[#000000] mb-6">
          Our Students feedback
        </h2>

        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[1.4] text-left text-[#000000] mb-6">
          Explore the incredible advantages of enrolling in our courses and enhancing your skills.
        </p>

        <button className="text-[16px] font-inter font-medium leading-[20px] text-[#ffffff] bg-[linear-gradient(162deg,#ffffff_0%,#000000_100%)] rounded-[20px] px-[24px] py-[10px] hover:opacity-90 transition-opacity duration-200">
          Start Learning Now
        </button>
      </div>

      {/* Testimonials Grid - Right column */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-[30px] w-full lg:w-[60%]">
        {testimonials.slice(0, 3).map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative group cursor-pointer transition-transform duration-500 hover:-translate-y-5"
          >
            {/* Gradient Borders */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#814fff]/50 to-[#ffffff] rounded-[24px] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

            <div className="relative bg-[#ffffff] rounded-[24px] p-[20px] shadow-[0px_10px_30px_#00000026] border-[3px] border-[#ffffff] z-10">
              <div className="flex flex-col gap-[16px] justify-start items-center w-full">
                <div className="flex justify-between items-start w-full">
                  <div className="flex gap-[4px]">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src="/images/img_component_2_amber_a400.svg"
                        alt="Star"
                        width={16}
                        height={16}
                      />
                    ))}
                  </div>
                  <Image
                    src="/images/img_component_2_blue_gray_300.svg"
                    alt="Quote"
                    width={24}
                    height={24}
                  />
                </div>

                <p className="text-[14px] font-inter font-normal italic leading-[20px] text-left text-[#000000]">
                  {testimonial.content}
                </p>

                <div className="flex justify-start items-center gap-3 w-full">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="text-[14px] font-inter font-medium leading-[18px] text-[#000000]">
                      {testimonial.name}
                    </p>
                    <p className="text-[12px] font-inter font-normal leading-[16px] text-[#000000]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Benefits Section */}
      <section className="w-full bg-[#ffffff] pt-[47px] sm:pt-[70px] md:pt-[94px] pb-[47px] sm:pb-[70px] md:pb-[94px]" style={{backgroundImage: 'url(/images/img_bg_gradient.png)'}}>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-[30px] sm:gap-[45px] md:gap-[60px] justify-start items-center w-full">
            {/* Section Header */}
            <div className="flex flex-row gap-[15px] sm:gap-[22px] md:gap-[30px] justify-center items-center w-full px-[28px] sm:px-[42px] md:px-[56px]">
              <Image
                src="/images/img_vector_deep_purple_a200_24x24.svg"
                alt="Decoration"
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
              <div className="flex flex-col justify-start items-center w-[60%]">
                <div className="flex justify-center items-center w-auto bg-[#ffffff] border border-[#e9edf8] rounded-[16px] px-[6px] py-[6px]">
                  <div className="flex justify-start items-center w-auto bg-[#814fff26] rounded-[16px] px-[6px] py-[6px]">
                    <Image
                      src="/images/img_component_2_20x20.svg"
                      alt="Icon"
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px]"
                    />
                  </div>
                  <div className="flex justify-center items-center w-auto ml-[12px]">
                    <p className="text-[14px] font-inter font-normal leading-[17px] text-left text-[#000000] w-auto">
                      Benefits
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center w-auto px-[11px] sm:px-[16px] md:px-[22px] mt-[4px] sm:mt-[6px] md:mt-[8px]">
                  <h2 className="text-[25px] sm:text-[37px] md:text-[50px] font-poppins font-medium leading-[37px] sm:leading-[56px] md:leading-[75px] text-center text-[#000000] w-auto">
                    Key Benefits of Courses
                  </h2>
                </div>
                <div className="flex flex-col justify-start items-center w-full mt-[4px] sm:mt-[6px] md:mt-[8px]">
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] text-center text-[#000000] w-auto">
                    Explore the incredible advantages of enrolling in our courses and enhancing your
                  </p>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] text-center text-[#000000] w-auto">
                    skills for the ultimate career success.
                  </p>
                </div>
              </div>
              <Image
                src="/images/img_vector_deep_purple_a200_24x24.svg"
                alt="Decoration"
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
            </div>
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[30px] md:gap-[40px] w-full">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex justify-start items-center w-full bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-[#ffffff] rounded-[24px] px-[12px] sm:px-[18px] md:px-[24px] py-[12px] sm:px-[18px] md:py-[24px] shadow-[0px_10px_30px_#00000026]">
                  <div className="flex flex-col gap-[6px] sm:gap-[9px] md:gap-[12px] justify-start items-start w-full mb-[4px] sm:mb-[6px] md:mb-[8px]">
                    <div className="flex flex-col justify-start items-center w-auto bg-[#e9edf8] rounded-[8px] px-[4px] sm:px-[6px] md:px-[8px] py-[4px] sm:py-[6px] md:py-[8px]">
                      <Image
                        src={benefit.icon}
                        alt={benefit.title}
                        width={30}
                        height={30}
                        className="w-[22px] sm:w-[26px] md:w-[30px] h-[22px] sm:h-[26px] md:h-[30px]"
                      />
                    </div>
                    <div className="flex justify-start items-center w-full">
                      <h3 className="text-[18px] sm:text-[21px] md:text-[24px] font-poppins font-medium leading-[27px] sm:leading-[31px] md:leading-[36px] text-left text-[#000000] w-auto">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[18px] sm:leading-[21px] md:leading-[24px] text-left text-[#000000] w-auto">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full bg-[#ffffff] pt-[48px] sm:pt-[72px] md:pt-[96px] pb-[48px] sm:pb-[72px] md:pb-[96px]" style={{backgroundImage: 'url(/images/img_bg_gradient.png)'}}>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-[18px] sm:gap-[27px] md:gap-[36px] justify-start items-center w-full">
            {/* Section Header */}
            <div className="flex flex-row justify-start items-center w-full mr-[72px] sm:mr-[108px] md:mr-[144px] ml-[72px] sm:ml-[108px] md:ml-[144px]">
              <div className="flex flex-row justify-start items-center w-full">
                <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-start items-start w-[74%]">
                  <h2 className="text-[25px] sm:text-[37px] md:text-[50px] font-poppins font-medium leading-[30px] sm:leading-[45px] md:leading-[60px] text-left text-[#000000] w-auto">
                    Join Our Premium Courses
                  </h2>
                </div>
                <div className="flex flex-col gap-[5px] sm:gap-[7px] md:gap-[10px] justify-start items-center w-[32%] self-end">
                  <div className="flex justify-start items-center w-full">
                    <p className="text-[15px] sm:text-[17px] md:text-[20px] font-poppins font-medium leading-[22px] sm:leading-[26px] md:leading-[30px] text-left text-[#000000] w-auto">
                      Trusted by 70k+ students
                    </p>
                  </div>
                  <div className="flex justify-center items-center w-auto">
                    <div className="flex justify-center items-center w-auto">
                      <div className="flex flex-row gap-[3px] sm:gap-[4px] md:gap-[6px] justify-center items-center w-auto">
                        {[...Array(5)].map((_, i) => (
                          <Image
                            key={i}
                            src="/images/img_component_2_amber_a400.svg"
                            alt="Star"
                            width={20}
                            height={20}
                            className="w-[15px] sm:w-[17px] md:w-[20px] h-[15px] sm:h-[17px] md:h-[20px]"
                          />
                        ))}
                      </div>
                      <div className="flex justify-center items-center w-auto px-[1px] sm:px-[1px] md:px-[2px] py-[1px] sm:py-[1px] md:py-[2px]">
                        <p className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[12px] sm:leading-[14px] md:leading-[17px] text-left text-[#000000] w-auto">
                          4.8/5
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center w-auto px-[4px] sm:px-[6px] md:px-[8px]">
                      <div className="w-[3px] sm:w-[4px] md:w-[5px] h-[3px] sm:h-[4px] md:h-[5px] bg-[#000000] rounded-[2px]"></div>
                      <div className="flex justify-center items-center w-auto">
                        <p className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[12px] sm:leading-[14px] md:leading-[17px] text-left text-[#000000] w-auto">
                          5,467 Reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pricing Cards */}
            <div className="flex flex-col lg:flex-row w-full gap-[20px] sm:gap-[30px] md:gap-[40px]">
              {pricingPlans.map((plan, index) => (
                <div key={plan.id} className={`${index === 1 ? 'relative' : ''} flex flex-col gap-[12px] sm:gap-[18px] md:gap-[24px] justify-start items-center w-full ${index === 1 ? 'lg:w-[412px]' : 'lg:w-[382px]'} bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-[#ffffff] rounded-[24px] px-[11px] sm:px-[16px] md:px-[22px] py-[11px] sm:py-[16px] md:py-[22px] shadow-[0px_10px_30px_#00000026] ${index === 1 ? 'mt-[11px] sm:mt-[16px] md:mt-[22px]' : 'mt-[11px] sm:mt-[16px] md:mt-[22px]'}`}>
                  {/* Popular Badge */}
                  {plan.popular && (
                    <button className="absolute top-0 left-0 text-[11px] sm:text-[13px] md:text-[15px] font-inter font-medium leading-[15px] sm:leading-[17px] md:leading-[20px] text-left text-[#ffffff] w-auto bg-[linear-gradient(158deg,#ffffff_0%,#814fff_100%)] rounded-[16px] px-[9px] sm:px-[13px] md:px-[18px] py-[5px] sm:py-[7px] md:py-[10px]">
                      Popular Plan
                    </button>
                  )}
                  <div className={`flex flex-col gap-[12px] sm:gap-[18px] md:gap-[24px] justify-start items-center w-full ${plan.popular ? 'border-[3px] border-[#ffffff] rounded-[24px] px-[11px] sm:px-[16px] md:px-[22px] py-[11px] sm:py-[16px] md:py-[22px] bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)]' : ''}`}>
                    <div className="flex justify-center items-center w-full">
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] text-center text-[#000000] w-auto self-end">
                        {plan.name}
                      </p>
                    </div>
                    <div className="flex justify-start items-center w-full bg-[#f1f5f9] rounded-[16px] px-[8px] sm:px-[12px] md:px-[16px] py-[8px] sm:px-[12px] md:py-[16px] shadow-[0px_1px_2px_#0000003f]">
                      <div className="flex flex-col gap-[2px] sm:gap-[3px] md:gap-[4px] justify-start items-center w-full">
                        <div className="flex justify-center items-center w-full px-[28px] sm:px-[42px] md:px-[56px]">
                          <p className="text-[18px] sm:text-[21px] md:text-[24px] font-poppins font-medium leading-[27px] sm:leading-[31px] md:leading-[36px] text-left text-[#000000] w-auto">
                            {plan.price}
                          </p>
                          <div className="flex justify-end items-center w-auto">
                            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] text-left text-[#000000] w-auto">
                              {plan.period}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center items-center w-full">
                          <p className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[12px] sm:leading-[14px] md:leading-[17px] text-center text-[#000000] w-auto self-end">
                            Billed annually
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[6px] sm:gap-[9px] md:gap-[12px] justify-start items-center w-full">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex justify-start items-center w-full">
                          <Image
                            src={featureIndex < 3 ? "/images/img_component_2_black_900_24x24.svg" : "/images/img_component_2_24x24.svg"}
                            alt="Feature Icon"
                            width={24}
                            height={24}
                            className="w-[18px] sm:w-[21px] md:w-[24px] h-[18px] sm:h-[21px] md:h-[24px]"
                          />
                          <div className="flex justify-start items-center w-full px-[5px] sm:px-[7px] md:px-[10px]">
                            <p className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[12px] sm:leading-[14px] md:leading-[17px] text-left text-[#000000] w-auto self-end">
                              {feature}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className={`text-[14px] sm:text-[15px] md:text-[16px] font-inter font-medium leading-[18px] sm:leading-[19px] md:leading-[20px] text-left w-full rounded-[20px] px-[17px] sm:px-[25px] md:px-[34px] py-[5px] sm:py-[7px] md:py-[10px] mb-[4px] sm:mb-[6px] md:mb-[8px] transition-all duration-200 ${plan.popular ? 'text-[#ffffff] bg-[linear-gradient(169deg,#ffffff_0%,#000000_100%)] hover:opacity-90' : 'text-[#000000] border border-[#000000] hover:bg-[#000000] hover:text-[#ffffff]'}`}>
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-[#ffffff] pt-[48px] sm:pt-[72px] md:pt-[96px] pb-[48px] sm:pb-[72px] md:pb-[96px]" style={{backgroundImage: 'url(/images/img_bg_gradient.png)'}}>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-[30px] sm:gap-[45px] md:gap-[60px] justify-start items-center w-full">
            {/* Section Header */}
            <div className="flex flex-row gap-[15px] sm:gap-[22px] md:gap-[30px] justify-center items-center w-full px-[28px] sm:px-[42px] md:px-[56px]">
              <Image
                src="/images/img_vector_deep_purple_a200.svg"
                alt="Decoration"
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
              <div className="flex flex-col justify-start items-center w-[60%]">
                <div className="flex justify-center items-center w-auto bg-[#ffffff] border border-[#e9edf8] rounded-[16px] px-[6px] py-[6px]">
                  <div className="flex justify-start items-center w-auto bg-[#814fff26] rounded-[16px] px-[6px] py-[6px]">
                    <Image
                      src="/images/img_component_2_5.svg"
                      alt="Icon"
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px]"
                    />
                  </div>
                  <div className="flex justify-center items-center w-auto ml-[12px]">
                    <p className="text-[14px] font-inter font-normal leading-[17px] text-left text-[#000000] w-auto">
                      About Me
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center w-auto px-[24px] sm:px-[36px] md:px-[48px] mt-[4px] sm:mt-[6px] md:mt-[8px]">
                  <h2 className="text-[25px] sm:text-[37px] md:text-[50px] font-poppins font-medium leading-[37px] sm:leading-[56px] md:leading-[75px] text-center text-[#000000] w-auto">
                    But Why CourseSite ?
                  </h2>
                </div>
                <div className="flex flex-col justify-start items-center w-full mt-[4px] sm:mt-[6px] md:mt-[8px]">
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] text-center text-[#000000] w-auto">
                    Explore the incredible advantages of enrolling in our courses and enhancing your
                  </p>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] text-center text-[#000000] w-auto">
                    skills for the ultimate career success.
                  </p>
                </div>
              </div>
              <Image
                src="/images/img_vector_deep_purple_a200.svg"
                alt="Decoration"
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
            </div>
            {/* Content Grid */}
            <div className="flex flex-col lg:flex-row gap-[15px] sm:gap-[22px] md:gap-[30px] justify-start items-center w-full">
              {/* Left Column - Benefits */}
              <div className="flex flex-col gap-[15px] sm:gap-[22px] md:gap-[30px] w-full lg:w-auto">
                {whyChooseUs.slice(0, 2).map((item, index) => (
                  <div key={index} className="flex flex-col gap-[6px] sm:gap-[9px] md:gap-[12px] justify-start items-start w-full">
                    <div className="flex flex-col justify-start items-center w-auto border border-[#e9edf8] bg-[linear-gradient(180deg,#ffffff_0%,#f1f5f9_50%,#ffffff_100%)] rounded-[8px] px-[4px] sm:px-[6px] md:px-[8px] py-[4px] sm:py-[6px] md:py-[8px]">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={30}
                        height={30}
                        className="w-[22px] sm:w-[26px] md:w-[30px] h-[22px] sm:h-[26px] md:h-[30px]"
                      />
                    </div>
                    <div className="flex justify-start items-center w-full">
                      <h3 className="text-[18px] sm:text-[21px] md:text-[24px] font-poppins font-medium leading-[27px] sm:leading-[31px] md:leading-[36px] text-left text-[#000000] w-auto">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[18px] sm:leading-[21px] md:leading-[24px] text-left text-[#000000] w-auto mb-[12px] sm:mb-[18px] md:mb-[24px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              {/* Center Column - Instructor Card */}
              <div className="flex flex-col gap-[15px] sm:gap-[22px] md:gap-[30px] justify-center items-center w-full bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-[#ffffff] rounded-[24px] px-[6px] sm:px-[9px] md:px-[12px] py-[11px] sm:py-[16px] md:py-[22px] shadow-[0px_10px_30px_#00000026]">
                <Image
                  src="/images/img_instructor_pic.png"
                  alt="Instructor"
                  width={324}
                  height={222}
                  className="w-full h-auto rounded-[16px] mr-[5px] sm:mr-[7px] md:mr-[10px] ml-[5px] sm:ml-[7px] md:ml-[10px]"
                />
                <div className="flex flex-col justify-start items-center w-full ml-[5px] sm:ml-[7px] md:ml-[10px]">
                  <div className="flex justify-start items-center w-full mt-[6px] sm:mt-[9px] md:mt-[12px] mr-[4px] sm:mr-[6px] md:mr-[8px]">
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-medium leading-[18px] sm:leading-[19px] md:leading-[20px] text-left text-[#000000] w-auto">
                      I started my journey:
                    </p>
                  </div>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[18px] sm:leading-[21px] md:leading-[24px] text-left text-[#000000] w-auto">
                    In web design and development in 2010 at the age of 24. I transitioned into a full-time instructor and mentor in 2018
                  </p>
                  <div className="flex justify-start items-center w-full mt-[11px] sm:mt-[16px] md:mt-[22px] mr-[4px] sm:mr-[6px] md:mr-[8px]">
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-medium leading-[18px] sm:leading-[19px] md:leading-[20px] text-left text-[#000000] w-auto">
                      Through hands-on:
                    </p>
                  </div>
                  <div className="flex justify-start items-center w-full mr-[4px] sm:mr-[6px] md:mr-[8px]">
                    <p className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[18px] sm:leading-[21px] md:leading-[24px] text-left text-[#000000] w-full mr-[12px] sm:mr-[18px] md:mr-[24px]">
                      project-based courses, I simplify challenging topics and make them accessible to everyone.
                    </p>
                  </div>
                  <div className="flex justify-start items-start w-full mt-[12px] sm:mt-[18px] md:mt-[24px]">
                    <div className="flex justify-start items-center w-full">
                      <Image
                        src="/images/img_component_2_blue_gray_300.svg"
                        alt="Social"
                        width={30}
                        height={30}
                        className="w-[22px] sm:w-[26px] md:w-[30px] h-[22px] sm:h-[26px] md:h-[30px]"
                      />
                      <Image
                        src="/images/img_component_2_7.svg"
                        alt="Social"
                        width={30}
                        height={30}
                        className="w-[22px] sm:w-[26px] md:w-[30px] h-[22px] sm:h-[26px] md:h-[30px] ml-[8px] sm:ml-[12px] md:ml-[16px]"
                      />
                      <Image
                        src="/images/img_component_2_8.svg"
                        alt="Social"
                        width={30}
                        height={30}
                        className="w-[22px] sm:w-[26px] md:w-[30px] h-[22px] sm:h-[26px] md:h-[30px] ml-[8px] sm:ml-[12px] md:ml-[16px]"
                      />
                    </div>
                    <Image
                      src="/images/img_css17f2jqxjs0lllhaxkly9ik_png.png"
                      alt="Badge"
                      width={100}
                      height={60}
                      className="w-[30%] h-auto self-end"
                    />
                  </div>
                </div>
              </div>
              {/* Right Column - Benefits */}
              <div className="flex flex-col gap-[15px] sm:gap-[22px] md:gap-[30px] w-full lg:w-auto ml-0 lg:ml-[15px] sm:ml-0 lg:ml-[22px] md:ml-0 lg:ml-[30px]">
                {whyChooseUs.slice(2, 4).map((item, index) => (
                  <div key={index} className="flex flex-col gap-[6px] sm:gap-[9px] md:gap-[12px] justify-start items-start w-full ml-[10px] sm:ml-[15px] md:ml-[20px]">
                    <div className="flex flex-col justify-start items-center w-auto border border-[#e9edf8] bg-[linear-gradient(180deg,#ffffff_0%,#f1f5f9_50%,#ffffff_100%)] rounded-[8px] px-[4px] sm:px-[6px] md:px-[8px] py-[4px] sm:py-[6px] md:py-[8px]">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={30}
                        height={30}
                        className="w-[22px] sm:w-[26px] md:w-[30px] h-[22px] sm:h-[26px] md:h-[30px]"
                      />
                    </div>
                    <div className="flex justify-start items-center w-full">
                      <h3 className="text-[18px] sm:text-[21px] md:text-[24px] font-poppins font-medium leading-[27px] sm:leading-[31px] md:leading-[36px] text-left text-[#000000] w-auto">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[18px] sm:leading-[21px] md:leading-[24px] text-left text-[#000000] w-auto mb-[12px] sm:mb-[18px] md:mb-[24px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-[#ffffff] pt-[48px] sm:pt-[72px] md:pt-[96px] pb-[48px] sm:pb-[72px] md:pb-[96px]" style={{backgroundImage: 'url(/images/img_bg_gradient.png)'}}>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col gap-[15px] sm:gap-[22px] md:gap-[30px] justify-start items-start w-full">
              {/* Left Column - FAQ Header */}
              <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-start items-start w-full mr-[15px] sm:mr-[22px] md:mr-[30px]">
                <div className="flex justify-start items-center w-auto bg-[#ffffff] border border-[#e9edf8] rounded-[16px] px-[6px] py-[6px]">
                  <div className="flex justify-start items-center w-auto bg-[#814fff26] rounded-[16px] px-[6px] py-[6px]">
                    <Image
                      src="/images/img_component_2_11.svg"
                      alt="Icon"
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px]"
                    />
                  </div>
                  <div className="flex justify-center items-center w-auto ml-[12px]">
                    <p className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[12px] sm:leading-[14px] md:leading-[17px] text-left text-[#000000] w-auto self-end">
                      Faq Hub
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-center w-full">
                  <h2 className="text-[25px] sm:text-[37px] md:text-[50px] font-poppins font-medium leading-[30px] sm:leading-[45px] md:leading-[60px] text-left text-[#000000] w-[74%]">
                    Frequently Asked Questions!
                  </h2>
                </div>
              </div>
              {/* Content Grid */}
              <div className="flex flex-col lg:flex-row gap-[20px] sm:gap-[30px] md:gap-[40px] w-full">
                {/* Left Column - Contact Card */}
                <div className="flex flex-col gap-[6px] sm:gap-[9px] md:gap-[12px] justify-center items-start w-full lg:w-[64%] bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-[#ffffff] rounded-[24px] px-[10px] sm:px-[15px] md:px-[20px] py-[10px] sm:py-[15px] md:py-[20px] shadow-[0px_10px_30px_#00000026]">
                  <div className="flex justify-start items-center w-full">
                    <h3 className="text-[18px] sm:text-[21px] md:text-[24px] font-poppins font-medium leading-[27px] sm:leading-[31px] md:leading-[36px] text-left text-[#000000] w-auto">
                      Still Have Questions?
                    </h3>
                  </div>
                  <div className="flex justify-start items-center w-full">
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] text-left underline text-[#000000] w-auto self-end hover:text-button-1 cursor-pointer transition-colors duration-200">
                      Contact Us
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] text-left text-[#000000] w-auto self-end">
                      , We are happy to help you
                    </p>
                  </div>
                  <div className="flex justify-start items-center w-full">
                    <div className="flex justify-start items-center w-[28%]">
                      <div className="flex flex-col justify-start items-center w-full border-[2px] border-[#ffffff] rounded-[8px]">
                        <Image
                          src="/images/img_profile_pic.png"
                          alt="Profile"
                          width={58}
                          height={58}
                          className="w-[43px] sm:w-[50px] md:w-[58px] h-[43px] sm:h-[50px] md:h-[58px] rounded-[8px]"
                        />
                      </div>
                      <div className="flex flex-col justify-start items-center w-full border-[2px] border-[#ffffff] rounded-[8px] ml-[-6px] sm:ml-[-9px] md:ml-[-12px]">
                        <Image
                          src="/images/img_profile_pic_56x56.png"
                          alt="Profile"
                          width={56}
                          height={56}
                          className="w-[42px] sm:w-[49px] md:w-[56px] h-[42px] sm:h-[49px] md:h-[56px] rounded-[8px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-center w-auto border-[2px] border-[#ffffff] rounded-[8px] ml-[-6px] sm:ml-[-9px] md:ml-[-12px]">
                      <Image
                        src="/images/img_profile_pic_1.png"
                        alt="Profile"
                        width={56}
                        height={56}
                        className="w-[42px] sm:w-[49px] md:w-[56px] h-[42px] sm:h-[49px] md:h-[56px] rounded-[8px]"
                      />
                    </div>
                  </div>
                  <button className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-medium leading-[18px] sm:leading-[19px] md:leading-[20px] text-left text-[#ffffff] w-auto bg-[linear-gradient(162deg,#ffffff_0%,#000000_100%)] rounded-[20px] px-[12px] sm:px-[18px] md:px-[24px] py-[5px] sm:py-[7px] md:py-[10px] hover:opacity-90 transition-opacity duration-200">
                    Start Learning Now
                  </button>
                </div>
                {/* Right Column - FAQ List */}
                <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] w-full">
                  {faqs.map((faq, index) => (
                    <div key={faq.id} className={`flex justify-start items-${faq.expanded ? 'center' : 'start'} w-full bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-[#ffffff] rounded-[16px] px-[12px] sm:px-[18px] md:px-[24px] py-[9px] sm:py-[13px] md:py-[18px] shadow-[0px_10px_30px_#00000026]`}>
                      <div className={`flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-start items-center w-full ${faq.expanded ? 'mb-[4px] sm:mb-[6px] md:mb-[8px]' : 'mr-[2px] sm:mr-[3px] md:mr-[4px] mb-[4px] sm:mb-[6px] md:mb-[8px] ml-[2px] sm:ml-[3px] md:ml-[4px]'}`}>
                        <div className="flex justify-start items-center w-full">
                          <div className="flex justify-start items-center w-full">
                            <div className="flex justify-start items-center w-full">
                              <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-medium leading-[18px] sm:leading-[19px] md:leading-[20px] text-left text-[#000000] w-auto">
                                {faq.question}
                              </p>
                            </div>
                          </div>
                          <Image
                            src="/images/img_svg12175387969.svg"
                            alt="Expand"
                            width={faq.expanded ? 24 : 32}
                            height={faq.expanded ? 24 : 32}
                            className={`w-[${faq.expanded ? '24px' : '32px'}] h-[${faq.expanded ? '24px' : '32px'}] mr-[${faq.expanded ? '14px' : '10px'}] sm:mr-[${faq.expanded ? '21px' : '15px'}] md:mr-[${faq.expanded ? '28px' : '20px'}]`}
                          />
                        </div>
                        {faq.expanded && faq.answer && (
                          <p className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[18px] sm:leading-[21px] md:leading-[24px] text-left text-[#000000] w-auto">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Topics Section */}
      <section
  className="w-full bg-[#ffffff] pt-[48px] sm:pt-[72px] md:pt-[96px] pb-[48px] sm:pb-[72px] md:pb-[96px]"
  style={{ backgroundImage: 'url(/images/img_bg_gradient.png)' }}
>
  <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col gap-[22px] sm:gap-[33px] md:gap-[44px] justify-start items-center w-full">
      
      {/* Section Header */}
      <div className="flex flex-row gap-[15px] sm:gap-[22px] md:gap-[30px] justify-center items-center w-full px-[28px] sm:px-[42px] md:px-[56px]">
        <Image
          src="/images/img_vector_deep_purple_a200_24x24.svg"
          alt="Decoration"
          width={24}
          height={24}
          className="w-[24px] h-[24px]"
        />
        <div className="flex flex-col justify-start items-center w-[60%]">
          <div className="flex justify-center items-center w-auto bg-[#ffffff] border border-[#e9edf8] rounded-[16px] px-[6px] py-[6px]">
            <div className="flex justify-start items-center w-auto bg-[#814fff26] rounded-[16px] px-[6px] py-[6px]">
              <Image
                src="/images/img_component_2_12.svg"
                alt="Icon"
                width={20}
                height={20}
                className="w-[20px] h-[20px]"
              />
            </div>
            <div className="flex justify-center items-center w-auto ml-[12px]">
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[12px] sm:leading-[14px] md:leading-[17px] text-left text-[#000000] w-auto">
                Featured Topics
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center w-full px-[28px] sm:px-[42px] md:px-[56px] mt-[4px] sm:mt-[6px] md:mt-[8px]">
            <h2 className="text-[25px] sm:text-[37px] md:text-[50px] font-poppins font-medium leading-[37px] sm:leading-[56px] md:leading-[75px] text-center text-[#000000] w-auto">
              Courses Topics
            </h2>
          </div>
          <div className="flex flex-col justify-start items-center w-full mt-[4px] sm:mt-[6px] md:mt-[8px]">
            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] text-center text-[#000000] w-auto">
              Explore the key topics covered in our courses, designed to equip you with the skills
            </p>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] text-center text-[#000000] w-auto">
              needed for real-world success.
            </p>
          </div>
        </div>
        <Image
          src="/images/img_vector_deep_purple_a200_24x24.svg"
          alt="Decoration"
          width={24}
          height={24}
          className="w-[24px] h-[24px]"
        />
      </div>

      {/* Topics Grid */}
      <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-center items-center w-full px-[28px] sm:px-[42px] md:px-[56px]">
        
        {/* First row: 5 topics */}
        <div className="flex flex-wrap gap-[8px] sm:gap-[12px] md:gap-[16px] justify-center items-center w-full">
          {topics.slice(0, 5).map((topic, index) => (
            <button
              key={index}
              className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] text-left text-[#000000] w-auto bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-[#ffffff] rounded-[16px] px-[23px] sm:px-[34px] md:px-[46px] py-[8px] sm:py-[12px] md:py-[16px] shadow-[0px_10px_30px_#00000026] gap-[5px] sm:gap-[7px] md:gap-[10px] flex items-center hover:bg-[linear-gradient(0deg,#ffffff33_0%,#ffffff_100%)] transition-all duration-200"
            >
              <Image
                src="/images/img_vector_deep_purple_a200.svg"
                alt="Topic Icon"
                width={20}
                height={20}
                className="w-[15px] sm:w-[17px] md:w-[20px] h-[15px] sm:h-[17px] md:h-[20px]"
              />
              {topic}
            </button>
          ))}
        </div>

        {/* Second row: 4 topics */}
        <div className="flex flex-wrap gap-[8px] sm:gap-[12px] md:gap-[16px] justify-center items-center w-full">
          {topics.slice(5, 9).map((topic, index) => (
            <button
              key={index + 5}
              className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] text-left text-[#000000] w-auto bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-[#ffffff] rounded-[16px] px-[23px] sm:px-[34px] md:px-[46px] py-[8px] sm:py-[12px] md:py-[16px] shadow-[0px_10px_30px_#00000026] gap-[5px] sm:gap-[7px] md:gap-[10px] flex items-center hover:bg-[linear-gradient(0deg,#ffffff33_0%,#ffffff_100%)] transition-all duration-200"
            >
              <Image
                src="/images/img_vector_deep_purple_a200.svg"
                alt="Topic Icon"
                width={20}
                height={20}
                className="w-[15px] sm:w-[17px] md:w-[20px] h-[15px] sm:h-[17px] md:h-[20px]"
              />
              {topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Community Section */}
      {/* <section className="w-full  flex flex-col justify-start items-center">
        <div className="w-full flex flex-col justify-start items-center shadow-[1px_20px_30px_#dedeff]">
          <Image
            src="/images/img_bg_gradient.png"
            alt="Background"
            width={1920}
            height={294}
            className="w-full h-auto"
          />
          <div className="w-full flex justify-start items-center mt-[-99px] sm:mt-[-148px] md:mt-[-198px]">
            <div className="w-full flex flex-col justify-start items-center">
              <div className="flex justify-end items-start w-full mr-[101px] sm:mr-[151px] md:mr-[202px] ml-[101px] sm:ml-[151px] md:ml-[202px]">
                <div className="flex flex-col gap-[7px] sm:gap-[10px] md:gap-[14px] justify-start items-start w-[34%] mt-[31px] sm:mt-[46px] md:mt-[62px]">
                  <div className="flex justify-start items-center w-auto bg-[#ffffff] border border-[#e9edf8] rounded-[16px] px-[6px] py-[6px]">
                    <div className="flex justify-start items-center w-auto bg-[#814fff26] rounded-[16px] px-[6px] py-[6px]">
                      <Image
                        src="/images/img_component_2_13.svg"
                        alt="Icon"
                        width={20}
                        height={20}
                        className="w-[20px] h-[20px]"
                      />
                    </div>
                    <div className="flex justify-center items-center w-auto ml-[12px]">
                      <p className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[12px] sm:leading-[14px] md:leading-[17px] text-left text-[#000000] w-auto">
                        Community
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-full">
                    <h2 className="text-[25px] sm:text-[37px] md:text-[50px] font-poppins font-medium leading-[30px] sm:leading-[45px] md:leading-[60px] text-left text-[#000000] w-[90%]">
                      Join our community where creativity thrives.
                    </h2>
                  </div>
                  <div className="flex justify-start items-center w-full">
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[18px] sm:leading-[22px] md:leading-[25px] text-left text-[#000000] w-[70%]">
                      Unlock the amazing benefits of joining our community, growing your skills, and building connections.
                    </p>
                  </div>
                  <button className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-medium leading-[18px] sm:leading-[19px] md:leading-[20px] text-left text-[#ffffff] w-auto bg-[linear-gradient(162deg,#ffffff_0%,#000000_100%)] rounded-[20px] px-[12px] sm:px-[18px] md:px-[24px] py-[5px] sm:py-[7px] md:py-[10px] hover:opacity-90 transition-opacity duration-200">
                    Start Learning Now
                  </button>
                </div>
                <div className="flex justify-center items-center w-[56%] ml-[-61px] sm:ml-[-91px] md:ml-[-122px]">
                  <Image
                    src="/images/img_mq3bhktfbhixwqk.png"
                    alt="Community"
                    width={758}
                    height={478}
                    className="w-[82%] h-auto"
                  />
                  <div className="flex flex-col gap-[11px] sm:gap-[16px] md:gap-[22px] justify-start items-center w-full px-[28px] sm:px-[42px] md:px-[56px] bg-[linear-gradient(168deg,#ffffff00_0%,#ffffff7f_100%)]">
                    <div className="flex justify-start items-center w-auto">
                      <Image
                        src="/images/img_vector_black_900.svg"
                        alt="Navigation"
                        width={24}
                        height={24}
                        className="w-[24px] h-[24px]"
                      />
                      <Image
                        src="/images/img_vector_black_900_24x24.svg"
                        alt="Navigation"
                        width={24}
                        height={24}
                        className="w-[24px] h-[24px] ml-[15px] sm:ml-[22px] md:ml-[30px]"
                      />
                      <Image
                        src="/images/img_vector_24x24.svg"
                        alt="Navigation"
                        width={24}
                        height={24}
                        className="w-[24px] h-[24px] ml-[15px] sm:ml-[22px] md:ml-[30px]"
                      />
                    </div>
                    <div className="flex flex-col gap-[2px] sm:gap-[3px] md:gap-[4px] justify-start items-start w-[46%]">
                      <div className="flex justify-center items-center w-[74%] bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-[#ffffff] rounded-[16px] px-[8px] sm:px-[12px] md:px-[16px] py-[8px] sm:py-[12px] md:py-[16px] shadow-[0px_10px_30px_#00000026] self-end">
                        <div className="flex flex-col gap-[1px] sm:gap-[1px] md:gap-[2px] justify-start items-start w-full">
                          <p className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[12px] sm:leading-[14px] md:leading-[17px] text-left text-[#000000] w-auto">
                            This one is slightly better, it has
                          </p>
                          <p className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[12px] sm:leading-[14px] md:leading-[17px] text-left text-[#000000] w-auto">
                            more contrast
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center w-[20%] bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-[#ffffff] rounded-[30px] px-[7px] sm:px-[10px] md:px-[14px] py-[7px] sm:py-[10px] md:py-[14px] shadow-[0px_10px_30px_#00000026] ml-[32px] sm:ml-[48px] md:ml-[64px]">
                        <div className="flex flex-col justify-center items-center w-full">
                          <Image
                            src="/images/img_component_2_blue_gray_300_28x28.svg"
                            alt="Icon"
                            width={28}
                            height={28}
                            className="w-[21px] sm:w-[24px] md:w-[28px] h-[21px] sm:h-[24px] md:h-[28px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[3px] sm:gap-[4px] md:gap-[6px] justify-start items-end w-[92%] mb-[60px] sm:mb-[90px] md:mb-[120px]">
                      <div className="flex justify-center items-center w-[42%] bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-[#ffffff] rounded-[16px] px-[18px] sm:px-[27px] md:px-[36px] py-[18px] sm:py-[27px] md:py-[36px] shadow-[0px_10px_30px_#00000026]">
                        <div className="flex flex-col justify-center items-start w-full">
                          <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] text-left text-[#000000] w-auto">
                            Do you think this design is
                          </p>
                          <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] text-left text-[#000000] w-auto">
                            better ?
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center w-[20%] bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] rounded-[44px] shadow-[0px_10px_30px_#00000026] mr-[129px] sm:mr-[193px] md:mr-[258px]">
                        <Image
                          src="/images/img_border.png"
                          alt="Border"
                          width={88}
                          height={84}
                          className="w-full h-auto"
                        />
                        <div className="flex flex-col justify-center items-center w-full px-[8px] sm:px-[12px] md:px-[16px]">
                          <Image
                            src="/images/img_component_2_blue_gray_300_28x28.svg"
                            alt="Icon"
                            width={54}
                            height={54}
                            className="w-[40px] sm:w-[47px] md:w-[54px] h-[40px] sm:h-[47px] md:h-[54px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[45px] sm:h-[67px] md:h-[90px] bg-[linear-gradient(180deg,#ffffff00_0%,#ffffff_100%)] mt-[-37px] sm:mt-[-55px] md:mt-[-74px]"></div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer Section */}
      <Footer />
    </div>
  );
};
export default HomePage;