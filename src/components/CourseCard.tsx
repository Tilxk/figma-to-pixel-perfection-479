import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  level: string;
  levelIcon: string;
  featured?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  price,
  image,
  level,
  levelIcon,
  featured = false
}) => {
  return (
    <article className="shadow-[0px_13px_40px_rgba(0,0,0,0.1)] font-medium rounded-[32px]">
      <div className="flex w-full flex-col items-stretch px-8 py-[38px] rounded-[32px] border-white border-solid border-4 max-md:max-w-full max-md:px-5">
        <img
          src={image}
          className="aspect-[1.54] object-contain w-full rounded-[21px] max-md:max-w-full"
          alt={title}
        />
        
        <div className="flex items-stretch text-[27px] text-black whitespace-nowrap tracking-[-0.53px] leading-[1.4] mt-[27px] max-md:mr-[3px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d9401d57bceaa18ddcd4292e03d21f3307414288?placeholderIfAbsent=true"
            className="aspect-[15.15] object-contain w-fit grow shrink-0 basis-0"
            alt=""
          />
          <span>{price}</span>
        </div>
        
        <h3 className="text-black text-[26px] leading-9 tracking-[-0.52px] mt-[17px]">
          {title}
        </h3>
        
        <p className="text-black text-base font-normal leading-[26px] tracking-[-0.16px] mr-[37px] mt-[25px] max-md:mr-2.5">
          {description}
        </p>
        
        <div className="flex w-full items-stretch gap-5 text-[19px] font-normal whitespace-nowrap tracking-[-0.19px] leading-loose justify-between mt-8 max-md:max-w-full max-md:mr-0.5">
          {featured && (
            <div className="bg-[rgba(129,79,255,0.15)] flex flex-col overflow-hidden items-stretch text-[rgba(129,79,255,1)] justify-center px-[21px] py-[15px] rounded-[11px] max-md:px-5">
              <span>Featured</span>
            </div>
          )}
          
          <div className="flex items-stretch text-black my-auto">
            <img
              src={levelIcon}
              className="aspect-[1] object-contain w-8 shrink-0"
              alt=""
            />
            <span className="basis-auto my-auto">{level}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
