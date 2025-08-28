'use client';
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import Button from '../ui/Button';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navigateToCourses = () => {
    router.push('/courses');
    setMenuOpen(false);
  };
  const navigateToKyureeusCatalyst = () => {
    router.push('/kyureeus-catalyst');
    setMenuOpen(false);
  };
  const navigateToPricing = () => {
    router.push('/pricing');
    setMenuOpen(false);
  };
  const navigateToContact = () => {
    router.push('/contact');
    setMenuOpen(false);
  };

  const navigateToHome = () => {
    router.push('/');
    setMenuOpen(false);
  };

  return (
    <header className={`w-full ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full py-4">
          {/* Logo Section - Clickable to navigate home */}
          <div className="flex justify-start items-center w-auto cursor-pointer" onClick={navigateToHome}>
            <img 
              src="/images/kyureeus.svg" 
              alt="CourseSite Logo" 
              className="w-[168px] h-[46px]"
            />
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-4" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-50 lg:z-auto`}>
            <div className="flex flex-col lg:flex-row justify-center items-center w-auto gap-4 lg:gap-[48px] p-4 lg:p-0">
              <button 
                role="menuitem"
                onClick={navigateToCourses}
                className="text-[16px] font-inter font-normal leading-[20px] text-left text-global-1 w-auto hover:text-button-1 transition-colors duration-200 cursor-pointer"
              >
                Courses
              </button>
              <button 
                role="menuitem"
                onClick={navigateToPricing}
                className="text-[16px] font-inter font-normal leading-[20px] text-left text-global-1 w-auto hover:text-button-1 transition-colors duration-200 cursor-pointer"
              >
                Pricing
              </button>
              <button 
                role="menuitem"
                onClick={navigateToKyureeusCatalyst}
                className="text-[16px] font-inter font-normal leading-[20px] text-left text-global-1 w-auto hover:text-button-1 transition-colors duration-200 cursor-pointer"
              >
                Kyureeus Catalyst™
              </button>
              
              <button 
                role="menuitem"
                onClick={navigateToContact}
                className="text-[16px] font-inter font-normal leading-[20px] text-left text-global-1 w-auto hover:text-button-1 transition-colors duration-200 cursor-pointer"
              >
                Contact
              </button>
            </div>
          </nav>

          {/* Register Button */}
          <div className="hidden lg:flex justify-end items-center w-auto">
            <Button
              variant="primary"
              leftImage={{
                src: "/images/img_vector.svg",
                width: 18,
                height: 14
              }}
              className="text-[16px] font-inter font-medium leading-[20px]"
            >
              Register
            </Button>
          </div>
        </div>

        {/* Mobile Register Button */}
        <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4`}>
          <Button
            variant="primary"
            fullWidth
            leftImage={{
              src: "/images/img_vector.svg",
              width: 18,
              height: 14
            }}
            className="text-[16px] font-inter font-medium leading-[20px]"
          >
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;