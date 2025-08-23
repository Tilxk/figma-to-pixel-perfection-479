import React from 'react';

const Hero = () => {
  return (
    <section className="relative">
      <div className="self-center z-10 flex w-[990px] max-w-full flex-col ml-[155px]">
        <div className="flex items-stretch gap-2 text-sm text-black font-normal tracking-[-0.14px] leading-loose ml-[200px] mt-[81px] px-4 py-3 rounded-[40px] max-md:ml-2.5 max-md:mt-10">
          <div className="bg-black flex w-[5px] shrink-0 h-[5px] my-auto rounded-[84px]" />
          <div className="basis-auto">
            Trusted by 20,000+ Happy Learners{" "}
          </div>
        </div>
        <h1 className="text-black text-7xl font-semibold leading-[86px] tracking-[-2.88px] text-center mt-6 max-md:max-w-full max-md:text-[40px] max-md:leading-[53px]">
          Learn What Gets You Hired.
        </h1>
      </div>
      
      <div className="flex flex-col relative min-h-[874px] w-full overflow-hidden text-base text-black tracking-[-0.16px] -mt-8 px-20 max-md:max-w-full max-md:px-5">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/de856874c65ab8c4418b8a5648cd8e5d0b91c2ca?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Background"
        />
        <div className="flex flex-col relative min-h-[874px] w-[1658px] max-w-full overflow-hidden items-center pt-[68px] pb-[667px] px-20 max-md:pb-[100px] max-md:px-5">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/11d272d6b02e1c107d7202d3c5478c809cc23f53?placeholderIfAbsent=true"
            className="absolute h-full w-full object-cover inset-0"
            alt="Hero background"
          />
          <div className="relative flex mb-[-133px] w-[557px] max-w-full flex-col items-stretch max-md:mb-2.5">
            <p className="font-normal leading-[26px] text-center max-md:max-w-full">
              Kyureeus trains you in high-demand tech skills designed around
              real jobs, not just content. Every course, every project, every
              certification moves you closer to a better role.
            </p>
            <div className="self-center flex w-[376px] max-w-full items-stretch gap-4 font-medium leading-[1.2] mt-8">
              <button className="border flex flex-col overflow-hidden items-stretch justify-center px-5 py-4 rounded-[100px] border-black border-solid hover:bg-gray-50 transition-colors">
                <span>View All Courses</span>
              </button>
              <button className="bg-[rgba(255,255,255,0.002)] shadow-[0px_0px_0px_6px_rgba(255,255,255,0.3)] overflow-hidden rounded-[100px] hover:shadow-[0px_0px_0px_8px_rgba(255,255,255,0.4)] transition-shadow">
                <div className="flex flex-col overflow-hidden items-stretch justify-center px-6 py-3.5 rounded-[100px] max-md:px-5">
                  <span>Start Learning Now</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
