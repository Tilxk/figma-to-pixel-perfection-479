import React from 'react';

interface SchoolCardProps {
  title: string;
  description: string;
  jobTitles: string[];
  icon?: string;
  className?: string;
}

const SchoolCard: React.FC<SchoolCardProps> = ({ 
  title, 
  description, 
  jobTitles, 
  icon,
  className = ""
}) => {
  return (
    <article className={`shadow-[0px_13px_40px_rgba(0,0,0,0.1)] rounded-[32px] ${className}`}>
      <div className="flex w-full flex-col pl-8 pr-20 py-[33px] rounded-[32px] border-white border-solid border-4 max-md:max-w-full max-md:px-5">
        <div className="flex items-stretch gap-[22px]">
          <div className="grow shrink-0 basis-0 w-fit">
            <h3 className="text-[27px] font-medium leading-[1.4] tracking-[-0.53px] text-black">
              {title}
            </h3>
            <div className="bg-white w-[90px] overflow-hidden text-sm font-normal tracking-[-0.14px] leading-loose mt-5 rounded-[60px]">
              <div className="bg-[rgba(107,35,242,0.14)] border flex flex-col items-stretch justify-center px-[9px] py-[11px] rounded-[60px] border-[rgba(234,221,245,1)] border-solid max-md:pr-5">
                <span className="text-sm">Built For</span>
              </div>
            </div>
          </div>
          {icon && (
            <img
              src={icon}
              className="aspect-[1] object-contain w-[33px] shrink-0 mt-9"
              alt=""
            />
          )}
        </div>
        
        <p className="text-[19px] font-normal leading-loose tracking-[-0.19px] mt-[27px] text-black">
          {description}
        </p>
        
        <div className="bg-white w-[166px] max-w-full overflow-hidden mt-[23px] rounded-[60px]">
          <div className="bg-[rgba(150,186,252,0.28)] border flex flex-col items-stretch justify-center px-[17px] py-[9px] rounded-[60px] border-[rgba(180,202,238,1)] border-solid max-md:pr-5">
            <span className="text-sm font-normal tracking-[-0.14px] leading-loose">Example Job Titles</span>
          </div>
        </div>
        
        <div className="flex items-stretch gap-[5px] text-sm font-normal tracking-[-0.14px] leading-loose mt-[27px]">
          {jobTitles.map((title, index) => (
            <div key={index} className="bg-white overflow-hidden rounded-[60px]">
              <div className="border flex flex-col items-stretch justify-center px-[18px] py-[11px] rounded-[60px] border-[rgba(233,237,248,1)] border-solid">
                <span className="text-black">{title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default SchoolCard;
