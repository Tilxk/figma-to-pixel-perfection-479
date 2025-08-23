import React from 'react';

const Header = () => {
  return (
    <header className="bg-white">
      <div className="bg-white flex w-full flex-col overflow-hidden items-stretch pt-4 max-md:max-w-full">
        <div className="self-center z-10 flex w-[990px] max-w-full flex-col ml-[155px]">
          <nav className="flex w-[839px] max-w-full items-stretch gap-5 text-base tracking-[-0.16px] flex-wrap justify-between">
            <div className="flex items-stretch gap-[40px_41px] text-black font-normal leading-[1.6] my-auto">
              <button className="hover:text-gray-600 transition-colors">Courses</button>
              <button className="hover:text-gray-600 transition-colors">About Us</button>
              <button className="hover:text-gray-600 transition-colors">Contact</button>
              <button className="hover:text-gray-600 transition-colors">Pricing</button>
            </div>
            <button className="shadow-[0px_4px_16px_rgba(0,0,0,0.2)] flex items-stretch gap-2.5 overflow-hidden text-white font-medium whitespace-nowrap leading-[1.2] px-[34px] py-4 rounded-3xl max-md:px-5 bg-black hover:bg-gray-800 transition-colors">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/cebe581b8e87d9f67cd7aec71b1247d291700175?placeholderIfAbsent=true"
                className="aspect-[1.29] object-contain w-[18px] shrink-0"
                alt="Discord icon"
              />
              <span>Register</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
