'use client';
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  return (
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
              <br />
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
  );
};

export default Footer;