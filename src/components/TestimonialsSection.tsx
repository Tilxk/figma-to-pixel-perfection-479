import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "''The courses are top-notch, providing in-depth knowledge that's easy to apply. Each lesson is structured to ensure you fully grasp the material.''",
      name: "Brendan Wilson",
      role: "Aspiring Web Designer",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/4b6a867483c3439903dfa1d2210fd7ce07196632?placeholderIfAbsent=true",
      stars: "https://api.builder.io/api/v1/image/assets/TEMP/6ab40d21c2fdc7a8d0f64cb407098b391525a94c?placeholderIfAbsent=true",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/f10c3c9ca9db7cf3b9eabe4862a092bbc39939c8?placeholderIfAbsent=true"
    },
    {
      quote: "''The courses are top-notch, providing in-depth knowledge that's easy to apply. Each lesson is structured to ensure you fully grasp the material.''",
      name: "Brendan Wilson",
      role: "Aspiring Web Designer",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/b638d5a712bd4ead6495f571d59f60eafdba1204?placeholderIfAbsent=true",
      stars: "https://api.builder.io/api/v1/image/assets/TEMP/88a901243b1d2ce27787e6a581439245f836f2e9?placeholderIfAbsent=true",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/13827444a8eb87bdb50e2029e9eb549ab6e0d8da?placeholderIfAbsent=true"
    },
    {
      quote: "''The courses are top-notch, providing in-depth knowledge that's easy to apply. Each lesson is structured to ensure you fully grasp the material.''",
      name: "Brendan Wilson",
      role: "Aspiring Web Designer",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/48cdf1cf560b311b197cfa3f94f7dd4127250c96?placeholderIfAbsent=true",
      stars: "https://api.builder.io/api/v1/image/assets/TEMP/e360f09cb074c9de567799aee17fe1283f68a82a?placeholderIfAbsent=true",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/d5cb2997b737685bba2c018fe039e1e41d4ec3a5?placeholderIfAbsent=true"
    },
    {
      quote: "''The courses are top-notch, providing in-depth knowledge that's easy to apply. Each lesson is structured to ensure you fully grasp the material.''",
      name: "Brendan Wilson",
      role: "Aspiring Web Designer",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/6badfcfedcb7f47527593b948410dcf076d72c98?placeholderIfAbsent=true",
      stars: "https://api.builder.io/api/v1/image/assets/TEMP/7ded4208af6ee9200124d02b4d99aa00fbc3a2fa?placeholderIfAbsent=true",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/1aa7c15efaada0ba093186689eef875a73f49fb8?placeholderIfAbsent=true"
    },
    {
      quote: "''The courses are top-notch, providing in-depth knowledge that's easy to apply. Each lesson is structured to ensure you fully grasp the material.''",
      name: "Brendan Wilson",
      role: "Aspiring Web Designer",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/cb4016ac4e6224ee9bc7e64ff93c8a009f44b928?placeholderIfAbsent=true",
      stars: "https://api.builder.io/api/v1/image/assets/TEMP/875668a63dede9699dc1a07d6de2a128cff9727e?placeholderIfAbsent=true",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/a53fae23b27cf937e373c1bbbb8965b0f33435ad?placeholderIfAbsent=true"
    },
    {
      quote: "''The courses are top-notch, providing in-depth knowledge that's easy to apply. Each lesson is structured to ensure you fully grasp the material.''",
      name: "Brendan Wilson",
      role: "Aspiring Web Designer",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/91bdd71a584eb63432c2fbd70bfc01ee88a66cde?placeholderIfAbsent=true",
      stars: "https://api.builder.io/api/v1/image/assets/TEMP/b6b7802cd0ec289abca981980d16f759e52d972a?placeholderIfAbsent=true",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/0c0bd7afe1f716b9059459fd3147342bcc38d0bb?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="bg-white z-10 flex mt-[-91px] flex-col items-center ml-2.5 pt-[21px] pb-[46px] px-20 max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1358px] flex-col max-md:max-w-full">
        <div className="w-[1000px] max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[21%] max-md:w-full max-md:ml-0">
              <div className="z-10 mr-[-41px] self-stretch my-auto max-md:mt-10">
                <div className="bg-white w-[161px] max-w-full overflow-hidden text-base text-black font-normal whitespace-nowrap tracking-[-0.16px] leading-loose rounded-[69px]">
                  <div className="border flex items-stretch gap-[13px] rounded-[69px] border-[rgba(233,237,248,1)] border-solid">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f446c58dc48ebd6535ddfe920e081895ffb31e17?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-[37px] shrink-0 rounded-[69px]"
                      alt=""
                    />
                    <span className="grow shrink w-[104px] my-auto">Testimonials</span>
                  </div>
                </div>
                
                <button className="bg-[rgba(255,255,255,0.002)] shadow-[0px_5px_18px_rgba(0,0,0,0.25)] overflow-hidden text-lg text-white font-medium tracking-[-0.18px] leading-[1.2] mt-[182px] rounded-[115px] max-md:mt-10 hover:shadow-[0px_7px_22px_rgba(0,0,0,0.3)] transition-shadow">
                  <div className="flex flex-col overflow-hidden items-stretch justify-center px-[27px] py-4 rounded-[115px] max-md:px-5 bg-black">
                    <span>Start Learning Now</span>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="w-[79%] ml-5 max-md:w-full max-md:ml-0">
              <div className="w-full overflow-hidden pb-[30px] max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-[42%] max-md:w-full max-md:ml-0">
                    <div className="z-10 flex mr-[-205px] flex-col items-stretch text-black mt-[241px] max-md:max-w-full max-md:mt-10">
                      <h2 className="text-[57px] font-medium leading-[1.2] tracking-[-0.57px] max-md:max-w-full max-md:text-[40px]">
                        Our Students feedback
                      </h2>
                      <p className="text-lg font-normal leading-[29px] tracking-[-0.18px] mt-[39px] max-md:max-w-full">
                        Explore the incredible advantages of enrolling in our <br />
                        courses and enhancing your skills.
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-[58%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="z-10 mt-[-21px] mr-[-329px] grow overflow-hidden pt-[105px] max-md:max-w-full max-md:pt-[100px]">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                        <div className="w-[37%] max-md:w-full max-md:ml-0">
                          <div className="mt-[420px] max-md:mt-10">
                            <TestimonialCard {...testimonials[0]} />
                          </div>
                        </div>
                        
                        <div className="w-[63%] ml-5 max-md:w-full max-md:ml-0">
                          <div className="z-10 flex mr-[-296px] flex-col overflow-hidden items-center justify-center px-20 py-[265px] max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-[100px]">
                            <img
                              src="https://api.builder.io/api/v1/image/assets/TEMP/0ce2b37245fa563be1a4daff18cfe5f8b7ed66ba?placeholderIfAbsent=true"
                              className="aspect-[5.49] object-contain w-[154px] max-w-full ml-[33px]"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex w-full max-w-[1312px] items-stretch gap-[40px_100px] flex-wrap max-md:max-w-full">
          <div className="flex-1">
            <TestimonialCard {...testimonials[1]} />
          </div>
          <div className="flex-1">
            <TestimonialCard {...testimonials[2]} />
          </div>
        </div>
      </div>
      
      <div className="self-center w-full max-w-[1312px] mt-[5px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {testimonials.slice(3).map((testimonial, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <div className="grow max-md:mt-10">
                <TestimonialCard {...testimonial} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
