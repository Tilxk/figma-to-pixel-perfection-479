import React from 'react';
import CourseCard from './CourseCard';

const FeaturedCourses = () => {
  const courses = [
    {
      title: "School Of Blockchain & decentralized …",
      description: "This school isn't about chasing coins. It's about building systems open, trustless, composable systems",
      price: "$99",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6c95acc758d09f013a7ea600577d21a4039ca1ec?placeholderIfAbsent=true",
      level: "Intermediate",
      levelIcon: "https://api.builder.io/api/v1/image/assets/TEMP/40841d43406ed64c2775dcbedccc7ca1365d6155?placeholderIfAbsent=true",
      featured: true
    },
    {
      title: "Framer Full Mastery & More 2024…",
      description: "Master Framer in 2024 with this updated course. Learn to design, prototype, and build interactive …",
      price: "$99",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/19be21976ce0971d4eec9dacd66a515b5a9061cb?placeholderIfAbsent=true",
      level: "Beginner",
      levelIcon: "https://api.builder.io/api/v1/image/assets/TEMP/900b0dff82ab8ed05ea54ba46354f9c3e32bc4af?placeholderIfAbsent=true",
      featured: true
    },
    {
      title: "Figma Full Mastery 2024 Edition …",
      description: "Master Figma in 2024 with this updated course. Learn to design, prototype, and collaborate on …",
      price: "$79",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/ff44362161331644764b8e0bd646925504d683dd?placeholderIfAbsent=true",
      level: "Beginner",
      levelIcon: "https://api.builder.io/api/v1/image/assets/TEMP/0ff7b67fa09115c92ed4754ec90fd00be257ad93?placeholderIfAbsent=true",
      featured: true
    }
  ];

  return (
    <section className="bg-white flex flex-col items-stretch mt-[201px] pt-[26px] px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="self-center flex w-full max-w-[1343px] flex-col ml-[54px] max-md:max-w-full">
        <div className="z-10 flex w-[1019px] max-w-full flex-col text-black">
          <div className="flex w-[717px] max-w-full flex-col overflow-hidden pb-[34px] px-[70px] max-md:pl-5">
            <div className="z-10 flex mt-[-26px] items-stretch gap-[40px_65px] flex-wrap -mr-72 max-md:max-w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d2c6258ba0f499fb394486daf09d81d4dbd8c58e?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[34px] shrink-0 mt-[551px] max-md:mt-10"
                alt=""
              />
              <div className="flex flex-col overflow-hidden items-stretch grow shrink-0 basis-0 w-fit pt-[462px] pb-[29px] px-[72px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
                <div className="bg-white self-center w-[190px] max-w-full overflow-hidden text-[19px] font-normal tracking-[-0.19px] leading-loose rounded-[80px]">
                  <div className="border flex items-stretch gap-4 rounded-[80px] border-[rgba(233,237,248,1)] border-solid">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/2934680bbed3d825b63f59a70045d3988744f515?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-[43px] shrink-0 rounded-[80px]"
                      alt=""
                    />
                    <span className="grow shrink w-[122px] my-auto">Our Courses</span>
                  </div>
                </div>
                <h2 className="text-[67px] font-medium leading-[1.2] tracking-[-0.67px] text-center mt-[35px] max-md:max-w-full max-md:text-[40px]">
                  Featured Courses
                </h2>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-stretch text-[21px] font-normal text-center tracking-[-0.21px] leading-[1.6] max-md:max-w-full">
            <p className="max-md:max-w-full">
              From critical skills to technical topics, we support your professional development{" "}
            </p>
            <p className="self-center mt-3.5 max-md:max-w-full">
              with courses that help you grow and succeed.
            </p>
          </div>
        </div>
        
        <div className="flex mt-[-393px] w-[691px] max-w-full flex-col overflow-hidden items-center justify-center px-20 py-[227px] max-md:mt-[-200px] max-md:px-5 max-md:py-[100px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/bff78d6b39a477e756897e6a23ca1e1f6f87b3ac?placeholderIfAbsent=true"
            className="aspect-[0.97] object-contain w-[33px] mb-[-39px] ml-[92px] max-md:mb-2.5"
            alt=""
          />
        </div>
      </div>
      
      <div className="z-10 flex flex-col max-md:max-w-full">
        <CourseCard {...courses[0]} />
        
        <div className="z-10 mt-[-631px] w-[1056px] max-w-full max-md:mt-[-200px]">
          <div className="max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-6/12 max-md:w-full max-md:ml-0">
                <CourseCard {...courses[1]} />
              </div>
              <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <CourseCard {...courses[2]} />
              </div>
            </div>
          </div>
          
          <button className="bg-[rgba(0,0,0,0)] w-[241px] max-w-full text-[21px] text-black font-medium tracking-[-0.21px] leading-[1.2] ml-[134px] mt-[69px] rounded-[134px] max-md:ml-2.5 max-md:mt-10 hover:bg-gray-50 transition-colors">
            <div className="border flex items-stretch gap-[13px] px-6 py-4 rounded-[134px] border-black border-solid max-md:px-5">
              <span className="grow my-auto">View Courses</span>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/be9cdfd5c70d98d7350c68a88451847c182ba8c0?placeholderIfAbsent=true"
                className="aspect-[0.96] object-contain w-[26px] shrink-0"
                alt=""
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
