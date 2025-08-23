import React from 'react';

interface ImageSectionProps {
  title: string;
  image: string;
  icon?: string;
  className?: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({ 
  title, 
  image, 
  icon,
  className = ""
}) => {
  return (
    <section className={`bg-white flex flex-col text-sm text-black font-normal tracking-[-0.14px] leading-loose justify-center ml-2.5 px-20 py-24 max-md:max-w-full max-md:px-5 ${className}`}>
      <div className="flex w-full max-w-[1398px] flex-col items-stretch max-md:max-w-full">
        <div className="bg-white self-center w-[123px] max-w-full overflow-hidden rounded-[60px]">
          <div className="border flex items-stretch gap-2.5 rounded-[60px] border-[rgba(233,237,248,1)] border-solid">
            {icon && (
              <img
                src={icon}
                className="aspect-[1] object-contain w-8 shrink-0 rounded-[60px]"
                alt=""
              />
            )}
            <span className="my-auto">{title}</span>
          </div>
        </div>
        <img
          src={image}
          className="aspect-[1.85] object-contain w-full mt-[27px] max-md:max-w-full"
          alt={title}
        />
      </div>
    </section>
  );
};

export default ImageSection;
