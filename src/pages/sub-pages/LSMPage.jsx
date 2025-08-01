import React from "react";
import HeroSection from "../../components/sections/hero/Sub-pages/HeroSection";
import Screen from "../../assets/img/ChangeFourteen.svg";
import Screen2 from "../../assets/img/ChangeThirteen.svg";
import ReasonSection from "../../components/sections/hero/Sub-pages/ReasonSection";
import ReasonCard from "../../components/sections/hero/Sub-pages/ReasonCard";
import BenefitSection from "../../components/sections/hero/Sub-pages/BenefitSection";

import { SquareCheck } from "lucide-react";

const benefits = [
  "Centralized Training Management Create, assign, and manage all your training programs from a single, organized platform.",
  "Flexible & Remote Learning Enable employees or learners to access training anytime, anywhere — on desktop or mobile.",
  "Personalized Learning Paths Customize learning journeys based on roles, skill levels, or departments for more effective training.",
  "Progress Monitoring & Analytics Track course completions, learner performance, and engagement with real-time reporting tools.",
];

export default function LSMPage() {
  return (
    <div>
      <HeroSection
        image={Screen}
        headText="Learning Management System"
        paragraph="Empower Your Team Through Smarter Learning. Deliver, track, and manage training programs with ease — all in one centralized, digital learning platform."
      />
      <ReasonSection pageName="LSM">
        <ReasonCard
          number="01"
          text="Centralized Learning Platform"
          textColor="#fff"
          boxBg="#38A4FF"
          circleBg="#D7D7D79D"
          circleColor="#222222"
        />
        <ReasonCard
          number="02"
          text="Flexible & Self-paced learning"
          textColor="#fff"
          boxBg="#38A4FF"
          circleBg="#D7D7D79D"
          circleColor="#222222"
        />
        <ReasonCard
          number="03"
          text="Progress tracking & reporting"
          textColor="#fff"
          boxBg="#38A4FF"
          circleBg="#D7D7D79D"
          circleColor="#222222"
        />
        <ReasonCard
          number="04"
          text="Scalable for any organization"
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
        listName="LSM"
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
