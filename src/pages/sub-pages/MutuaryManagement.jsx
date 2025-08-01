import React from "react";
import HeroSection from "../../components/sections/hero/Sub-pages/HeroSection";
import Screen from "../../assets/img/ChangeNine.svg";
import Screen2 from "../../assets/img/ChangeTen.svg";
import ReasonSection from "../../components/sections/hero/Sub-pages/ReasonSection";
import ReasonCard from "../../components/sections/hero/Sub-pages/ReasonCard";
import BenefitSection from "../../components/sections/hero/Sub-pages/BenefitSection";

import { SquareCheck } from "lucide-react";

const benefits = [
  "Centralized Member Management Easily register and manage member profiles, statuses, and contributions from a single platform.",
  "Automated Payment Tracking Track member dues, payments, and arrears with real-time updates and reminders.",
  "Efficient Funeral Benefit Processing Simplify benefit disbursement with clear workflows and transparent records.",
  "Improved Accountability & Transparency Generate detailed financial reports and member statements to build trust among members and stakeholders.",
];

export default function MutuaryManagement() {
  return (
    <div>
      <HeroSection
        showZigzagTop={true}
        showZigzagBottom={false}
        image={Screen}
        headText="Motuary Management Application"
        paragraph="Streamline your HR processes and manage your workforce effectively with Ezone. Our comprehensive HR solution offers features like employee onboarding, performance management, time tracking, and payroll.  "
      />
      <ReasonSection pageName="Motuary Management Application">
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
        listName="Motuary Management Application"
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
