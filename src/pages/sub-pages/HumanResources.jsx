import React from "react";
import HeroSection from "../../components/sections/hero/Sub-pages/HeroSection";
import Screen from "../../assets/img/ChangeFour.svg";
import Screen2 from "../../assets/img/ChangeThree.svg";
import ReasonSection from "../../components/sections/hero/Sub-pages/ReasonSection";
import ReasonCard from "../../components/sections/hero/Sub-pages/ReasonCard";
import BenefitSection from "../../components/sections/hero/Sub-pages/BenefitSection";

import { SquareCheck } from "lucide-react";

const benefits = [
  "Improve efficiency: Automate HR tasks and reduce manual work.",
  "Enhance employee engagement: Foster a positive work environment and improve employee satisfaction.",
  "Make data-driven decisions: Use HR analytics to make informed decisions.",
  "Ensure compliance: Stay compliant with labor laws and regulations.",
  "Streamline HR processes: Simplify HR operations and improve overall productivity.",
  "Improve efficiency: Automate HR tasks and reduce manual work.",
];

export default function HumanResources() {
  return (
    <div>
      <HeroSection
        ImgclassName="max-w-[200px]"
        showZigzagTop={true}
        showZigzagBottom={false}
        image={Screen}
        headText="Human Resource Management"
        paragraph="Streamline your HR processes and manage your workforce effectively with Ezone. Our comprehensive HR solution offers features like employee onboarding, performance management, time tracking, and payroll. "
      />
      <ReasonSection pageName="HRM">
        <ReasonCard
          number="01"
          text="Centralize Employee Management"
          textColor="#38A4FF"
          boxBg="#EBEBEB"
          circleBg="#38A4FF"
          circleColor="#fff"
        />
        <ReasonCard
          number="02"
          text="Automated HR Processes"
          textColor="#38A4FF"
          boxBg="#EBEBEB"
          circleBg="#38A4FF"
          circleColor="#fff"
        />
        <ReasonCard
          number="03"
          text="Real Time insights & reporting"
          textColor="#38A4FF"
          boxBg="#EBEBEB"
          circleBg="#38A4FF"
          circleColor="#fff"
        />
        <ReasonCard
          number="04"
          text="Employee self service portal"
          textColor="#38A4FF"
          boxBg="#EBEBEB"
          circleBg="#38A4FF"
          circleColor="#fff"
        />
      </ReasonSection>
      <BenefitSection
        image={Screen2}
        showZigzag={true}
        bgColor="#fff"
        listName="Human Resource Management"
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
