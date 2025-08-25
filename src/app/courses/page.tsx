'use client';
import React, { useState } from 'react';
import Header from '@/components/common/Header';
import Button from '@/components/ui/Button';
import Dropdown from '@/components/ui/Dropdown';

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  featured?: boolean;
}

const CoursesPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const courses: Course[] = [
    {
      id: '1',
      title: 'School Of Blockchain & decentralized …',
      description: 'This school is not about chasing coins. It is about building systems open, trustless, composable systems',
      image: '/images/img_course_banner_280x430.png',
      rating: 5,
      level: 'Intermediate',
      featured: true
    },
    {
      id: '2',
      title: 'How To Become Web Developer I…',
      description: 'Become a web developer in 2024 with our step-by-step course. Master HTML, CSS, JavaScript, …',
      image: '/images/img_course_banner_2.png',
      rating: 5,
      level: 'Intermediate'
    },
    {
      id: '3',
      title: 'Node JS & React JS Full Mastery …',
      description: 'Master Node.js and React.js with this all-in-one course. Learn to build fast, scalable server-side …',
      image: '/images/img_course_banner_3.png',
      rating: 5,
      level: 'Advanced'
    },
    {
      id: '4',
      title: 'Framer Full Mastery & More 2024…',
      description: 'Master Framer in 2024 with this updated course. Learn to design, prototype, and build interactive …',
      image: '/images/img_course_banner_4.png',
      rating: 5,
      level: 'Beginner',
      featured: true
    },
    {
      id: '5',
      title: 'Webflow Full Mastery 2024 …',
      description: 'Master Webflow in 2024 with this updated course. Learn to design, build, and launch responsive …',
      image: '/images/img_course_banner_5.png',
      rating: 5,
      level: 'Intermediate'
    },
    {
      id: '6',
      title: 'How To Become Web Designer In…',
      description: 'Master the art of web design with our comprehensive course. Learn HTML, CSS, and …',
      image: '/images/img_course_banner_6.png',
      rating: 5,
      level: 'Advanced'
    },
    {
      id: '7',
      title: 'Figma Full Mastery 2024 Edition …',
      description: 'Master Figma in 2024 with this updated course. Learn to design, prototype, and collaborate on …',
      image: '/images/img_course_banner_7.png',
      rating: 5,
      level: 'Beginner',
      featured: true
    },
    {
      id: '8',
      title: 'Web Dev Mastery 2024 Updated …',
      description: 'Master web development in 2024 with this updated course. Learn HTML, CSS, JavaScript, …',
      image: '/images/img_course_banner_8.png',
      rating: 5,
      level: 'Advanced',
      featured: true
    },
    {
      id: '9',
      title: 'React Full Mastery 2024 updated…',
      description: 'Master React in 2024 with this updated course. Learn to build dynamic, high-performance user …',
      image: '/images/img_course_banner_9.png',
      rating: 5,
      level: 'Intermediate'
    }
  ];

  const filterOptions = [
    { value: 'All', label: 'All' },
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advanced', label: 'Advanced' },
    { value: 'Featured', label: 'Featured' }
  ];

  const filteredCourses = courses.filter(course => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Featured') return course.featured;
    return course.level === selectedFilter;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <img
        key={index}
        src="/images/img_component_2_amber_a400.svg"
        alt="star"
        className="w-[16px] h-[16px]"
      />
    ));
  };

  const renderLevelIcon = () => (
    <img
      src="/images/img_component_2_black_900.svg"
      alt="level"
      className="w-[20px] h-[20px]"
    />
  );

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section with Background - Fixed layout */}
        <section 
          className="w-full relative py-[80px] sm:py-[100px]"
          style={{
            backgroundImage: "url('/images/img_bg_gradient.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Decorative Icons - Positioned better */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <img
              src="/images/img_icon.png"
              alt="decorative"
              className="absolute top-[20px] right-[20%] w-[120px] h-[120px] rounded-[20px]"
            />
            <img
              src="/images/img_icon_white_a700.png"
              alt="decorative"
              className="absolute top-[10px] right-[10%] w-[100px] h-[100px] rounded-[20px]"
            />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title Section - Centered */}
            <div className="flex flex-col justify-center items-center w-full text-center mb-[60px]">
              <div className="flex flex-row justify-center items-center gap-[20px] mb-[30px]">
                <img
                  src="/images/img_vector_deep_purple_a200_24x24.svg"
                  alt="decorative"
                  className="w-[26px] h-[26px]"
                />
                <img
                  src="/images/img_svg12670924230.svg"
                  alt="decorative"
                  className="w-[26px] h-[26px]"
                />
              </div>

              <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[61px] font-poppins font-medium leading-[1.2] text-black mb-[40px]">
                All Online Courses
              </h1>

              {/* Course Category Buttons - Better responsive layout */}
              <div className="flex flex-wrap justify-center items-center gap-[12px] sm:gap-[16px] max-w-[1000px]">
                {['Web Development', 'JavaScript', 'Framer', 'Web Design', 'Webflow', 'CSS', 'UI/UX Design', 'Angular', 'React'].map((category, index) => (
                  <Button
                    key={index}
                    className="bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-white rounded-[16px] px-[20px] py-[12px] shadow-[0px_10px_31px_#00000026] text-[14px] sm:text-[16px] font-inter font-normal leading-[21px] text-black gap-[8px] hover:bg-[linear-gradient(0deg,#ffffff33_0%,#ffffff_100%)] transition-all duration-200"
                    leftImage={{
                      src: "/images/img_vector_deep_purple_a200.svg",
                      width: 16,
                      height: 16
                    }}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Courses Section - Fixed container */}
            <div className="w-full bg-[linear-gradient(90deg,#ffffff7f_0%,#ffffff26_100%)] rounded-[24px] p-[30px] sm:p-[40px]">
              {/* Section Header - Better alignment */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-[40px]">
                <h2 className="text-[24px] sm:text-[30px] font-poppins font-medium leading-[1.2] text-black mb-4 sm:mb-0">
                  All Courses
                </h2>
                <Dropdown
                  options={filterOptions}
                  placeholder="All"
                  value={selectedFilter}
                  onChange={setSelectedFilter}
                  className="w-full sm:w-auto min-w-[140px]"
                  rightImage={{
                    src: "/images/img_arrowdown.svg",
                    width: 24,
                    height: 24
                  }}
                />
              </div>

              {/* Course Grid - Improved responsive grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] mb-[50px]">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-white rounded-[24px] shadow-[0px_12px_38px_#00000019] p-[24px] flex flex-col hover:shadow-[0px_16px_48px_#00000029] transition-shadow duration-300"
                  >
                    {/* Course Image */}
                    <div className="mb-[16px]">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-[200px] sm:h-[240px] object-cover rounded-[16px]"
                      />
                      {/* Rating Stars */}
                      <div className="flex justify-start items-center gap-[4px] mt-[16px]">
                        {renderStars(course.rating)}
                      </div>
                    </div>

                    {/* Course Title */}
                    <div className="mb-[12px]">
                      <h3 className="text-[18px] sm:text-[20px] font-poppins font-medium leading-[1.3] text-black hover:text-purple-600 cursor-pointer transition-colors duration-200">
                        {course.title}
                      </h3>
                    </div>

                    {/* Course Description */}
                    <div className="mb-[20px] flex-grow">
                      <p className="text-[14px] sm:text-[16px] font-inter font-normal leading-[1.5] text-gray-700">
                        {course.description}
                      </p>
                    </div>

                    {/* Course Footer */}
                    <div className="flex flex-row justify-between items-center">
                      {course.featured && (
                        <Button className="bg-[#814fff26] text-[#814fff] rounded-[10px] px-[16px] py-[8px] text-[14px] font-inter font-normal leading-[18px] hover:bg-[#814fff33] transition-colors duration-200">
                          Featured
                        </Button>
                      )}
                      <div className="flex flex-row justify-end items-center gap-[8px] flex-1">
                        {renderLevelIcon()}
                        <span className="text-[14px] sm:text-[16px] font-inter font-normal leading-[20px] text-black">
                          {course.level}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="flex justify-center items-center">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-[12px] px-[24px] py-[12px] text-[16px] font-inter font-medium leading-[20px] transition-colors duration-200">
                  Load More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section 
          className="w-full pt-[96px] pb-[96px] mt-[154px]"
          style={{
            backgroundImage: "url('/images/img_bg_gradient_888x1846.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex flex-row justify-center items-center gap-[30px] mb-[60px]">
              <img
                src="/images/img_vector_deep_purple_a200_24x24.svg"
                alt="decorative"
                className="w-[24px] h-[24px]"
              />
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center items-center gap-[12px] border border-[#e9edf8] rounded-[16px] bg-global-6 pt-[6px] pr-[6px] pb-[6px] pl-[6px] mb-[8px]">
                  <div className="bg-global-3 rounded-[16px] pt-[6px] pr-[6px] pb-[6px] pl-[6px]">
                    <img
                      src="/images/img_component_2_20x20.svg"
                      alt="benefits icon"
                      className="w-[16px] h-[16px]"
                    />
                  </div>
                  <span className="text-[14px] font-inter font-normal leading-[17px] text-global-1">
                    Benefits
                  </span>
                </div>
                <h2 className="text-[30px] sm:text-[40px] md:text-[50px] font-poppins font-medium leading-[45px] sm:leading-[60px] md:leading-[75px] text-center text-global-1 mb-[10px]">
                  Key Benefits of Courses
                </h2>
                <p className="text-[16px] font-inter font-normal leading-[20px] text-center text-global-1 mb-[4px]">
                  Explore the incredible advantages of enrolling in our courses and enhancing your
                </p>
                <p className="text-[16px] font-inter font-normal leading-[20px] text-center text-global-1">
                  skills for the ultimate career success.
                </p>
              </div>
              <img
                src="/images/img_vector_deep_purple_a200_24x24.svg"
                alt="decorative"
                className="w-[24px] h-[24px]"
              />
            </div>
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {/* Built by Professionals */}
              <div className="bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-white rounded-[24px] shadow-[0px_10px_30px_#00000026] p-[24px]">
                <div className="flex flex-col gap-[14px]">
                  <div className="bg-global-4 rounded-[8px] p-[8px] w-[46px] h-[46px] flex justify-center items-center">
                    <img
                      src="/images/img_component_2_blue_gray_300_30x30.svg"
                      alt="professionals icon"
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <h3 className="text-[24px] font-poppins font-medium leading-[36px] text-global-1">
                    Built by Professionals
                  </h3>
                  <p className="text-[14px] font-inter font-normal leading-[24px] text-global-2">
                    Get the best Experience knowing that our Courses are built by Professionals.
                  </p>
                </div>
              </div>
              {/* Completion Certificate */}
              <div className="bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-white rounded-[24px] shadow-[0px_10px_30px_#00000026] p-[24px]">
                <div className="flex flex-col gap-[14px]">
                  <div className="bg-global-4 rounded-[8px] p-[8px] w-[46px] h-[46px] flex justify-center items-center">
                    <img
                      src="/images/img_component_2_30x30.svg"
                      alt="certificate icon"
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <h3 className="text-[24px] font-poppins font-medium leading-[36px] text-global-1">
                    Completion Certificate
                  </h3>
                  <p className="text-[14px] font-inter font-normal leading-[24px] text-global-2">
                    Receive a Completion Award from our Team to enhance your motivation
                  </p>
                </div>
              </div>
              {/* Instant Chat Help */}
              <div className="bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-white rounded-[24px] shadow-[0px_10px_30px_#00000026] p-[24px]">
                <div className="flex flex-col gap-[14px]">
                  <div className="bg-global-4 rounded-[8px] p-[8px] w-[46px] h-[46px] flex justify-center items-center">
                    <img
                      src="/images/img_component_2_1.svg"
                      alt="chat icon"
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <h3 className="text-[24px] font-poppins font-medium leading-[36px] text-global-1">
                    Instant Chat Help
                  </h3>
                  <p className="text-[14px] font-inter font-normal leading-[24px] text-global-2">
                    Have questions? Reach out for a quick chat—here for you 24/7
                  </p>
                </div>
              </div>
              {/* Lifetime Membership */}
              <div className="bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-white rounded-[24px] shadow-[0px_10px_30px_#00000026] p-[24px]">
                <div className="flex flex-col gap-[14px]">
                  <div className="bg-global-4 rounded-[8px] p-[10px] w-[46px] h-[46px] flex justify-center items-center">
                    <img
                      src="/images/img_component_2_2.svg"
                      alt="membership icon"
                      className="w-[26px] h-[26px]"
                    />
                  </div>
                  <h3 className="text-[24px] font-poppins font-medium leading-[36px] text-global-1">
                    Lifetime Membership
                  </h3>
                  <p className="text-[14px] font-inter font-normal leading-[24px] text-global-2">
                    With Just One Payment, you will get Permanent Access to the Course.
                  </p>
                </div>
              </div>
              {/* Access to Community */}
              <div className="bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-white rounded-[24px] shadow-[0px_10px_30px_#00000026] p-[24px]">
                <div className="flex flex-col gap-[14px]">
                  <div className="bg-global-4 rounded-[8px] p-[8px] w-[46px] h-[46px] flex justify-center items-center">
                    <img
                      src="/images/img_component_2_3.svg"
                      alt="community icon"
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <h3 className="text-[24px] font-poppins font-medium leading-[36px] text-global-1">
                    Access to Community
                  </h3>
                  <p className="text-[14px] font-inter font-normal leading-[24px] text-global-2">
                    Join Our Private Community to Connect with Like-Minded Individuals and Grow Together.
                  </p>
                </div>
              </div>
              {/* Download for Offline Use */}
              <div className="bg-[linear-gradient(0deg,#ffffff_0%,#ffffff7f_100%)] border-[3px] border-white rounded-[24px] shadow-[0px_10px_30px_#00000026] p-[24px]">
                <div className="flex flex-col gap-[14px]">
                  <div className="bg-global-4 rounded-[8px] p-[8px] w-[46px] h-[46px] flex justify-center items-center">
                    <img
                      src="/images/img_component_2_4.svg"
                      alt="download icon"
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <h3 className="text-[24px] font-poppins font-medium leading-[36px] text-global-1">
                    Download for Offline Use
                  </h3>
                  <p className="text-[14px] font-inter font-normal leading-[24px] text-global-2">
                    Our courses can be downloaded, so you can watch them anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer 
          className="w-full pt-[38px] pb-[38px] mt-[-128px]"
          style={{
            backgroundImage: "url('/images/img_bg_gradient_704x1846.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-[58px] mt-[122px] mr-[14px] ml-[14px]">
              {/* Main Footer Content */}
              <div className="flex flex-col justify-center items-center gap-[28px]">
                {/* Logo */}
                <img
                  src="/images/img_logo.svg"
                  alt="CourseSite Logo"
                  className="w-[162px] h-[36px]"
                />
                {/* CTA Section */}
                <div className="flex flex-col justify-center items-center gap-[12px]">
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="text-[30px] sm:text-[40px] md:text-[50px] font-poppins font-medium leading-[45px] sm:leading-[60px] md:leading-[75px] text-center text-global-1">
                      Boost your Learning & Knowledge
                    </h2>
                    <h2 className="text-[30px] sm:text-[40px] md:text-[50px] font-poppins font-medium leading-[45px] sm:leading-[60px] md:leading-[75px] text-center text-global-1 mt-[-28px]">
                      with CourseSite Now
                    </h2>
                  </div>
                  <Button className="bg-[linear-gradient(161deg,#ffffff_0%,#000000_100%)] rounded-[26px] pt-[16px] pr-[34px] pb-[16px] pl-[34px] text-[16px] font-inter font-medium leading-[20px] text-button-2">
                    Start Learning Now
                  </Button>
                </div>
                {/* Social Section */}
                <div className="flex flex-row justify-center items-center gap-[8px]">
                  <span className="text-[14px] font-inter font-normal leading-[17px] text-global-1">
                    Your Path to Becoming a Web Wizard
                  </span>
                  <img
                    src="/images/img_link_twitter_profile.svg"
                    alt="social link"
                    className="w-[34px] h-[34px] rounded-[16px]"
                  />
                </div>
              </div>
              {/* Footer Links */}
              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0">
                  <div className="flex flex-row justify-between items-center w-full sm:w-auto gap-4 sm:gap-[62px]">
                    <span className="text-[16px] font-inter font-medium leading-[20px] text-global-1">
                      Benefits
                    </span>
                    <span className="text-[16px] font-inter font-medium leading-[20px] text-global-3">
                      Courses
                    </span>
                    <span className="text-[16px] font-inter font-medium leading-[20px] text-global-1">
                      Contact
                    </span>
                    <span className="text-[16px] font-inter font-medium leading-[20px] text-global-1">
                      About us
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-[14px] mt-4 sm:mt-0 sm:ml-auto">
                    <span className="text-[16px] font-inter font-normal leading-[20px] text-global-1">
                      Join Our news Letter
                    </span>
                    <Button className="border border-global-1 rounded-[22px] pt-[12px] pr-[20px] pb-[12px] pl-[20px] text-[16px] font-inter font-medium leading-[20px] text-global-1 bg-transparent">
                      Notify Me
                    </Button>
                  </div>
                </div>
                {/* Copyright */}
                <div className="border-t border-[#5c6470] pt-[24px]">
                  <div className="flex flex-row justify-center items-center">
                    <span className="text-[16px] font-inter font-normal leading-[20px] text-center text-global-1">
                      Kyureeus © 2025. Designed by
                    </span>
                    <span className="text-[16px] font-inter font-normal leading-[20px] text-center text-global-1 pl-[4px] pr-[4px]">
                      Catchy kk
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CoursesPage;