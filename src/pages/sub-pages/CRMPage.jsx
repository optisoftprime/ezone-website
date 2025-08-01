import React from "react";
import HeroSection from "../../components/sections/hero/Sub-pages/HeroSection";
import Screen from "../../assets/img/ChangeEleven.svg";
import Screen2 from "../../assets/img/ChangeTwelve.svg";
import ReasonSection from "../../components/sections/hero/Sub-pages/ReasonSection";
import ReasonCard from "../../components/sections/hero/Sub-pages/ReasonCard";
import BenefitSection from "../../components/sections/hero/Sub-pages/BenefitSection";

import { SquareCheck } from "lucide-react";

const benefits = [
  "Better Customer Understanding Gain a 360° view of every customer — including their preferences, history, and interactions — for more personalized service.",
  "Seamless Inventory Sync Ensure accurate stock levels with automatic inventory updates linked to sales activities.",
  "Improved Customer Retention Engage customers at the right time with the right message to build loyalty and reduce churn.",
  "Streamlined Sales Process Track leads, deals, and follow-ups efficiently to shorten your sales cycle and close more opportunities.",
  "Centralized Communication Keep all emails, calls, and customer notes in one place for easy access by your sales and support teams.",
];

export default function CRMPage() {
  return (
    <div>
      <HeroSection
        showZigzagTop={true}
        showZigzagBottom={false}
        image={Screen}
        headText="Customer Relationship Management"
        paragraph="Build Stronger Customer Relationships and Drive Growth. Track interactions, manage leads, and turn prospects into loyal customers — all in one smart, integrated CRM system."
      />
      <ReasonSection pageName="Customer Relationship Management">
        <ReasonCard
          number="01"
          text="Centralized Customer Data"
          textColor="#0461B0"
          boxBg="#EBEBEB"
          circleBg="#FF77009D"
          circleColor="#222222"
        />
        <ReasonCard
          number="02"
          text="Lead & opportunity tracking"
          textColor="#FFFFFF"
          boxBg="#38A4FF"
          circleBg="#FF77009D"
          circleColor="#222222"
        />
        <ReasonCard
          number="03"
          text="Improved customer engagement"
          textColor="#0461B0"
          boxBg="#EBEBEB"
          circleBg="#FF77009D"
          circleColor="#222222"
        />
        <ReasonCard
          number="04"
          text="Actionable insights & reports"
          textColor="#FFFFFF"
          boxBg="#38A4FF"
          circleBg="#FF77009D"
          circleColor="#222222"
        />
      </ReasonSection>
      <BenefitSection
        image={Screen2}
        showZigzag={true}
        bgColor="#fff"
        listName="Customer Relationship Management"
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
