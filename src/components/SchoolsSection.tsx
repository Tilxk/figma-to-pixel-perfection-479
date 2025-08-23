import React from 'react';
import SchoolCard from './SchoolCard';

const SchoolsSection = () => {
  const schools = [
    {
      title: "AI & Machine Learning",
      description: "Model builders and AI product leaders",
      jobTitles: ["ML Engineer", "AI PM"],
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/43d01edaf530f6c1cf6e01fc041aefb9a2b2403a?placeholderIfAbsent=true"
    },
    {
      title: "Data & Decision Intelligence",
      description: "Analysts who drive business outcomes",
      jobTitles: ["BI Analyst", "Product Data Analyst"]
    },
    {
      title: "Cybersecurity & Trust",
      description: "Red teamers, SOC pros, compliance leads",
      jobTitles: ["SOC Analyst", "Pentester"],
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/40e9a6a3c95a64c471af3f104a111e8eb4260680?placeholderIfAbsent=true"
    },
    {
      title: "DevOps, Cloud & Infra",
      description: "Infra architects and automation experts",
      jobTitles: ["SRE", "Cloud Engineer"],
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/5ede1f8a5470dfff6098d230389f540f55fda626?placeholderIfAbsent=true"
    },
    {
      title: "Full Stack Product Engineering",
      description: "Builders who can ship from end-to-end",
      jobTitles: ["Founding Engineer", "Web Dev"],
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/8f5ded534d6a6a1dae8a2d9ca66f999dae28f656?placeholderIfAbsent=true"
    },
    {
      title: "Product & UX Strategy",
      description: "Thinkers who own outcomes",
      jobTitles: ["PM", "UX Researcher"],
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d43d1fbf63fe1039b4dcae714c3e80ca81ef15d7?placeholderIfAbsent=true"
    },
    {
      title: "Robotics & Edge Systems",
      description: "Engineers who bridge software and machines",
      jobTitles: ["Robotics Dev", "Edge AI Engineer"],
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/71caf17e2e43424553ace8a12a0738d0d2b8426e?placeholderIfAbsent=true"
    },
    {
      title: "Web3 & Decentralized Systems",
      description: "Builders of trustless apps",
      jobTitles: ["Blockchain Dev", "Solidity Auditor"],
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/8887f1597d184700cc0a012f3675a36d6b23bbf7?placeholderIfAbsent=true"
    },
    {
      title: "Climate & Civic Tech",
      description: "Technologists with purpose",
      jobTitles: ["ESG Analyst", "GovTech Lead"],
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/62bffdb25071e2c14ccc38eb9224f37fe75dd437?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="bg-white">
      <h2 className="text-black text-[67px] font-medium leading-[1.2] tracking-[-0.67px] text-center self-center mt-[146px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
        Explore Our Schools
      </h2>
      
      <div className="bg-white flex flex-col ml-2.5 pt-[88px] pb-11 px-[70px] max-md:max-w-full max-md:px-5">
        <div className="w-[1109px] max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[38%] max-md:w-full max-md:ml-0">
              <div className="text-sm text-black font-normal tracking-[-0.14px] leading-loose max-md:max-w-full">
                <SchoolCard {...schools[0]} />
                <div className="mt-10">
                  <SchoolCard {...schools[1]} />
                </div>
              </div>
            </div>
            
            <div className="w-[62%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex w-full flex-col overflow-hidden mt-[19px] pb-[30px] px-[70px] max-md:max-w-full">
                <div className="z-10 mt-[-21px] mr-[-329px] overflow-hidden pt-0.5 pb-[46px] max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                    <div className="w-[42%] max-md:w-full max-md:ml-0">
                      <div className="text-sm text-black font-normal tracking-[-0.14px] leading-loose max-md:max-w-full">
                        <SchoolCard {...schools[2]} />
                        <div className="mt-10">
                          <SchoolCard {...schools[3]} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-[58%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="z-10 flex mr-[-296px] grow flex-col overflow-hidden text-sm text-black font-normal tracking-[-0.14px] leading-loose mt-[103px] pb-[11px] px-[55px] max-md:max-w-full max-md:mt-10 max-md:px-5">
                        <SchoolCard {...schools[4]} className="z-10 mt-[-103px] w-[508px] max-w-full" />
                        <div className="mt-10">
                          <SchoolCard {...schools[5]} className="w-[508px] max-w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="self-center z-10 mt-[-91px] w-full max-w-[1604px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {schools.slice(6).map((school, index) => (
              <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
                <SchoolCard {...school} className="grow text-sm text-black font-normal tracking-[-0.14px] leading-loose max-md:max-w-full max-md:mt-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolsSection;
