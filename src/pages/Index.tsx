import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SchoolsSection from '@/components/SchoolsSection';
import FeaturedCourses from '@/components/FeaturedCourses';
import ImageSection from '@/components/ImageSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <SchoolsSection />
        
        <FeaturedCourses />
        
        <ImageSection
          title="Why ikyu?"
          image="https://api.builder.io/api/v1/image/assets/TEMP/9fd2d3f4-50b1-47ba-9940-bf8b9b7a925e?placeholderIfAbsent=true"
          icon="https://api.builder.io/api/v1/image/assets/TEMP/8644d3f4f56e20cbdf6e6eaa85fd4781dafc0380?placeholderIfAbsent=true"
          className="mt-[102px] max-md:mt-10"
        />
        
        <section className="bg-white flex w-full flex-col items-center text-black font-normal mt-[131px] px-20 max-md:max-w-full max-md:mr-[-5px] max-md:mt-10 max-md:px-5">
          <div className="flex w-full max-w-[1581px] flex-col items-stretch max-md:max-w-full">
            <div className="bg-white self-center w-[155px] max-w-full overflow-hidden text-lg tracking-[-0.18px] leading-loose rounded-[79px]">
              <div className="border flex items-stretch gap-4 rounded-[79px] border-[rgba(233,237,248,1)] border-solid">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3173aacec198db53e0e92bda452e2b6efc6d51d5?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[42px] shrink-0 rounded-[79px]"
                  alt=""
                />
                <span className="my-auto">We Offer</span>
              </div>
            </div>
            
            <div className="self-center flex w-[962px] max-w-full gap-[40px_100px] text-[66px] font-medium text-center tracking-[-0.66px] leading-[1.2] flex-wrap mt-[34px] max-md:text-[40px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c2807aa14bd4bcc11e39b5668d19edf211c539d9?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[33px] shrink-0 mt-[23px]"
                alt=""
              />
              <h2 className="self-stretch grow shrink w-[507px] max-md:max-w-full max-md:text-[40px]">
                Boost Your Skills
              </h2>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/604a1610f57cb89c591f97e82f6c8a9b77076eb2?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[33px] shrink-0 mt-[23px]"
                alt=""
              />
            </div>
            
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d9e73ee7-648a-4e60-a31f-c34d4d9ab70e?placeholderIfAbsent=true"
              className="aspect-[2.43] object-contain w-full mt-[37px] max-md:max-w-full"
              alt="Skills boost illustration"
            />
            
            <div className="flex items-center gap-[40px_100px] text-[21px] text-center tracking-[-0.21px] leading-[1.6] flex-wrap mt-[13px] max-md:max-w-full">
              <div className="bg-black self-stretch flex w-[389px] shrink-0 max-w-full h-px my-auto" />
              <p className="self-stretch grow shrink w-[334px]">
                Adopted by renowned enterprises such as
              </p>
              <div className="bg-black self-stretch flex w-[388px] shrink-0 max-w-full h-px my-auto" />
            </div>
            
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a98be7f7080baf1f3dfa17bedcd65607071da91b?placeholderIfAbsent=true"
              className="aspect-[20] object-contain w-full mt-[27px] max-md:max-w-full"
              alt="Enterprise logos"
            />
          </div>
        </section>
        
        <ImageSection
          title="Benefits"
          image="https://api.builder.io/api/v1/image/assets/TEMP/11487959-93e3-417e-85a2-decdabd6a9c1?placeholderIfAbsent=true"
          icon="https://api.builder.io/api/v1/image/assets/TEMP/e46462e0db2bce5a2fa5f97b2d7e9da874afdf59?placeholderIfAbsent=true"
          className="mt-[97px] pt-[23px] pb-[47px] max-md:mt-10"
        />
        
        <section className="bg-white flex flex-col overflow-hidden items-center mt-[45px] pt-[106px] pb-[177px] px-20 max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-[100px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/cc557da7-44f6-4c00-85c7-44abeadcf6c0?placeholderIfAbsent=true"
            className="aspect-[1.92] object-contain w-full mb-[-35px] max-w-[1499px] ml-[13px] max-md:max-w-full max-md:mb-2.5"
            alt="Pricing section"
          />
        </section>
        
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
