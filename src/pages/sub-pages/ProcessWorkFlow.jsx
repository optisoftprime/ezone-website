import React from "react";
import HeroSection from "../../components/sections/hero/Sub-pages/HeroSection";
import Screen from "../../assets/img/ChangeFifteen.svg";
import Screen2 from "../../assets/img/ChangeSixteen.svg";
import ReasonSection from "../../components/sections/hero/Sub-pages/ReasonSection";
import ReasonCard from "../../components/sections/hero/Sub-pages/ReasonCard";
import BenefitSection from "../../components/sections/hero/Sub-pages/BenefitSection";

import { SquareCheck } from "lucide-react";

const benefits = [
  "Increased Efficiency Automate repetitive tasks and streamline approvals, saving time and reducing manual effort.",
  "Better Task Management Assign, prioritize, and track tasks with clarity — ensuring nothing falls through the cracks.",
  "Improved Accountability Clearly define roles and responsibilities so every team member knows what’s expected and when.",
  "Faster Decision Making Keep processes moving with real-time updates, alerts, and visibility into task status.",
  "Reduced Operational Errors Standardized workflows help eliminate mistakes caused by inconsistent or manual processes.",
];

export default function ProcessWorkFlow() {
  return (
    <div>
      <HeroSection
        showZigzagTop={true}
        showZigzagBottom={false}
        image={Screen}
        headText="Process WorkFlow"
        paragraph="Automate Your Business Processes with Ease. Design, track, and manage workflows across teams to boost productivity, ensure accountability, and eliminate manual bottlenecks."
      />
      <ReasonSection pageName="Process WorkFlow">
        <ReasonCard
          number="01"
          text="Streamlined Business process"
          textColor="#0461B0"
          boxBg="#EBEBEB"
          circleBg="#FF77009D"
          circleColor="#222222"
        />
        <ReasonCard
          number="02"
          text="Improved team collaboration"
          textColor="#FFFFFF"
          boxBg="#38A4FF"
          circleBg="#FF77009D"
          circleColor="#222222"
        />
        <ReasonCard
          number="03"
          text="Customer workflow craetion"
          textColor="#0461B0"
          boxBg="#EBEBEB"
          circleBg="#FF77009D"
          circleColor="#222222"
        />
        <ReasonCard
          number="04"
          text="Real-time notifications & alert"
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
        listName="Process WorkFlow"
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
