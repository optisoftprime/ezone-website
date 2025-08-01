import React from "react";
import HeroSection from "../../components/sections/hero/Sub-pages/HeroSection";
import Screen from "../../assets/img/ChangeSeventeen.svg";
import Screen2 from "../../assets/img/ChangeEighteen.svg";
import ReasonSection from "../../components/sections/hero/Sub-pages/ReasonSection";
import ReasonCard from "../../components/sections/hero/Sub-pages/ReasonCard";
import BenefitSection from "../../components/sections/hero/Sub-pages/BenefitSection";

import { SquareCheck } from "lucide-react";

const benefits = [
  "Automated Payroll Processing Eliminate manual calculations with automated salary, tax, and benefit computations.",
  "On-Time Salary Disbursement Ensure timely payment of employee wages, reducing complaints and boosting morale.",
  "Accurate Tax & Statutory Deductions Automatically apply deductions for taxes, pensions, and other contributions to stay fully compliant.",
  "Integrated with HR & Attendance Pull real-time data from attendance, leave, and employee records for accurate payroll runs.",
];

export default function PayRoll() {
  return (
    <div>
      <HeroSection
        image={Screen}
        headText="Payroll"
        paragraph="Simplify Payroll, Ensure Accuracy, and Stay Compliant. Automate salary calculations, tax deductions, and employee payments — all in one secure and efficient payroll system."
      />
      <ReasonSection pageName="Payroll">
        <ReasonCard
          number="01"
          text="Automated salary calculations  "
          textColor="#fff"
          boxBg="#38A4FF"
          circleBg="#D7D7D79D"
          circleColor="#222222"
        />
        <ReasonCard
          number="02"
          text="Timely & accurate payment"
          textColor="#fff"
          boxBg="#38A4FF"
          circleBg="#D7D7D79D"
          circleColor="#222222"
        />
        <ReasonCard
          number="03"
          text="Integrated with HR attendance"
          textColor="#fff"
          boxBg="#38A4FF"
          circleBg="#D7D7D79D"
          circleColor="#222222"
        />
        <ReasonCard
          number="04"
          text="Regulatory compliance"
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
        listName="Payroll"
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
