import React from "react";
import HeroSection from "../../components/sections/hero/Sub-pages/HeroSection";
import Screen from "../../assets/img/ChangeSeven.svg";
import Screen2 from "../../assets/img/ChangeEight.svg";
import ReasonSection from "../../components/sections/hero/Sub-pages/ReasonSection";
import ReasonCard from "../../components/sections/hero/Sub-pages/ReasonCard";
import BenefitSection from "../../components/sections/hero/Sub-pages/BenefitSection";

import { SquareCheck } from "lucide-react";

const benefits = [
  "Complete Sales Lifecycle Management Handle everything from lead generation to order fulfillment in one centralized system.",
  "Faster Quoting & Invoicing Generate professional quotes and invoices in seconds to speed up the sales process.",
  "Real-Time Sales & Order Tracking Monitor sales performance, customer orders, and delivery statuses as they happen.",
  "Seamless Inventory Sync Ensure accurate stock levels with automatic inventory updates linked to sales activities.",
  "Seamless Inventory SyncEnsure accurate stock levels with automatic inventory updates linked to sales activities..",
];

export default function HumanResources() {
  return (
    <div>
      <HeroSection
        showZigzagTop={true}
        showZigzagBottom={false}
        image={Screen}
        headText="Sales Management"
        paragraph="Accelerate your sales process and close deals faster. From quote to delivery, manage everything in one place. Smart,seamless, and built to grow with your business."
      />
      <ReasonSection pageName="Sales Management">
        <ReasonCard
          number="01"
          text="End-to-End sales management"
          textColor="#0461B0"
          boxBg="#EBEBEB"
          circleBg="#FF77009D"
          circleColor="#222222"
        />
        <ReasonCard
          number="02"
          text="Real time order & performance tracking"
          textColor="#FFFFFF"
          boxBg="#38A4FF"
          circleBg="#FF77009D"
          circleColor="#222222"
        />
        <ReasonCard
          number="03"
          text="Seamless inventory integration"
          textColor="#0461B0"
          boxBg="#EBEBEB"
          circleBg="#FF77009D"
          circleColor="#222222"
        />
        <ReasonCard
          number="04"
          text="Faster quotation & invoice"
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
        listName="Sales Management"
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
