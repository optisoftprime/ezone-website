import React from "react";
import HeroSection from "../../components/sections/hero/Sub-pages/HeroSection";
import Screen from "../../assets/img/Change-one.svg";
import Screen2 from "../../assets/img/ChangeTwo.svg";
import ReasonSection from "../../components/sections/hero/Sub-pages/ReasonSection";
import ReasonCard from "../../components/sections/hero/Sub-pages/ReasonCard";
import BenefitSection from "../../components/sections/hero/Sub-pages/BenefitSection";

import { SquareCheck } from "lucide-react";

const benefits = [
  "Businesses of all sizes: From small startups to large corporations, effective HR management is crucial for success.",
  "Non-profit organizations: HR plays a vital role in managing volunteers, staff, and resources.",
  "Government agencies: HR is essential for managing a diverse workforce and ensuring compliance with regulations.",
  "Educational institutions: Schools and universities need HR to manage faculty, staff, and students.",
];

export default function CBAPage() {
  return (
    <div>
      <HeroSection
        image={Screen}
        headText="Core Banking Application (CBA)"
        paragraph="Empower your financial decisions with CBA, your comprehensive financial management solution. Our user-friendly platform simplifies tasks, from budgeting and tracking expenses to managing investments and setting financial goals."
      />
      <ReasonSection pageName="Core Banking Application">
        <ReasonCard
          number="01"
          text="Real Time Banking Operations"
          textColor="#0461B0"
          boxBg="#EBEBEB"
          circleBg="#FF77009D"
          circleColor="#222222"
        />
        <ReasonCard
          number="02"
          text="Robust Security & Compliance"
          textColor="#FFFFFF"
          boxBg="#38A4FF"
          circleBg="#FF77009D"
          circleColor="#222222"
        />
        <ReasonCard
          number="03"
          text="Seamless Integration & Automation"
          textColor="#0461B0"
          boxBg="#EBEBEB"
          circleBg="#FF77009D"
          circleColor="#222222"
        />
        <ReasonCard
          number="04"
          text="Scalable for AllInstitution Sizes"
          textColor="#FFFFFF"
          boxBg="#38A4FF"
          circleBg="#FF77009D"
          circleColor="#222222"
        />
      </ReasonSection>
      <BenefitSection
        image={Screen2}
        showZigzag={false}
        // bgColor="#fff"
        listName="Core Banking"
        list={
          <ul className="flex flex-col gap-y-3">
            {benefits.map((para, index) => (
              <li className="flex items-center gap-x-3" key={index}>
                <span>
                  <SquareCheck
                    className="bg-[#240951] border-[#240951] "
                    color="#fff"
                  />
                </span>
                <span>{para}</span>
              </li>
            ))}
          </ul>
        }
      />
    </div>
  );
}
