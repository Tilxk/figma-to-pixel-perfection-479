import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  stars: string;
  logo: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  avatar,
  stars,
  logo
}) => {
  return (
    <article className="shadow-[0px_11px_34px_rgba(0,0,0,0.15)] rounded-[27px]">
      <div className="flex w-full flex-col items-stretch px-[29px] py-[38px] rounded-[27px] border-white border-solid border-[3px] max-md:px-5">
        <div className="flex">
          <img
            src={stars}
            className="aspect-[13.7] object-contain w-fit grow shrink-0 basis-0"
            alt="5 stars"
          />
          <img
            src={logo}
            className="aspect-[0.91] object-contain w-[30px] shrink-0 mt-1.5 rounded-[9px]"
            alt="Company logo"
          />
        </div>
        
        <blockquote className="rotate-[-7.843065387989753e-9rad] text-black text-lg font-normal leading-[1.8] mr-6 mt-[11px] max-md:mr-2.5">
          {quote}
        </blockquote>
        
        <div className="flex items-stretch gap-4 text-black mt-9">
          <img
            src={avatar}
            className="aspect-[0.97] object-contain w-[58px] shrink-0 rounded-[59px]"
            alt={name}
          />
          <div className="flex flex-col items-stretch">
            <cite className="rotate-[-7.843065387989753e-9rad] text-lg font-medium leading-[1.2] tracking-[-0.18px] not-italic">
              {name}
            </cite>
            <p className="rotate-[-7.843065387989753e-9rad] text-base font-normal leading-loose tracking-[-0.16px] mt-[18px]">
              {role}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
