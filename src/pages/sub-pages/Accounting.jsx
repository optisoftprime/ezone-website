import React from "react";
import HeroSection from "../../components/sections/hero/Sub-pages/HeroSection";
import Screen from "../../assets/img/ChangeFive.svg";
import Screen2 from "../../assets/img/ChangeSix.svg";
import ReasonSection from "../../components/sections/hero/Sub-pages/ReasonSection";
import ReasonCard from "../../components/sections/hero/Sub-pages/ReasonCard";
import BenefitSection from "../../components/sections/hero/Sub-pages/BenefitSection";

import { SquareCheck } from "lucide-react";

const benefits = [
  "Automated Book-keeping Save time and reduce errors with automated journal entries, ledgers, and reconciliations.",
  "Real-Time Financial VisibilityTrack income, expenses, cash flow, and financial health from a centralized dashboard.",
  "Multi-Currency & Tax Management Handle complex transactions with support for multiple currencies and automated tax calculations.",
  "Seamless Invoicing & BillingGenerate and send professional invoices, track payments, and manage receivables effortlessly.",
];

export default function Accounting() {
  return (
    <div>
      <HeroSection
        image={Screen}
        headText="Accounting"
        paragraph="Streamline your accounting processes and gain valuable insights with Ezone accounting. Our comprehensive software offers accurate financial management, from invoicing and expense tracking to reporting and analysis."
      />
      <ReasonSection pageName="Accounting">
        <ReasonCard
          number="01"
          text="Robust Security & Compliance"
          textColor="#fff"
          boxBg="#38A4FF"
          circleBg="#D7D7D79D"
          circleColor="#222222"
        />
        <ReasonCard
          number="02"
          text="Robust Security & Compliance"
          textColor="#fff"
          boxBg="#38A4FF"
          circleBg="#D7D7D79D"
          circleColor="#222222"
        />
        <ReasonCard
          number="03"
          text="Robust Security & Compliance"
          textColor="#fff"
          boxBg="#38A4FF"
          circleBg="#D7D7D79D"
          circleColor="#222222"
        />
        <ReasonCard
          number="04"
          text="Scalable for AllInstitution Sizes"
          textColor="#fff"
          boxBg="#38A4FF"
          circleBg="#D7D7D79D"
          circleColor="#222222"
        />
      </ReasonSection>
      <BenefitSection
        image={Screen2}
        showZigzag={false}
        // bgColor="#fff"
        listName="Accounting"
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
