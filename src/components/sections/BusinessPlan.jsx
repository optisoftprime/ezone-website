import React, { useState } from "react";
import BusinessPlanCard from "./hero/BusinessPlanCard";
import { CircleCheck } from "lucide-react";

const basicDatas = [
  "Supports 1-10 Users",
  "Access to Core Modules",
  "Basic Reporting and Analytics",
  "Email Support Only",
  "Free Applications (CRM, File Management, Task Management)",
  "Basic Task and Workflow Management",
];

const premiumDatas = [
  "Support 250 Users",
  "Full Access to Ezone Modules",
  "Advanced Workflow Aumation & Role Based Access",
  "Priority Support (Chat, Email, Phone)",
  "Dedicated Account Manager",
  "Data Migration Support included",
];

const customDatas = [
  "Unlimited Users (Based on need)",
  "Ful Feature Customization Per Module",
  "24/7 Premium Support",
  "SLA-Backed Performance & Uptime Guarantee",
  "Dedicated Onboarding & Training for Teams",
];

const activePlan = [
  { path: "monthly", name: "Monthly" },
  { path: "quarterly", name: "Quarterly" },
  { path: "yearly", name: "Yearly (Save up to 18%)" },
];

export default function BusinessPlan() {
  const [isActive, setIsActive] = useState("monthly");

  const handleActive = (path) => setIsActive(path);

  return (
    <div className="pt-20 pb-15 px-4 md:px-15">
      <div className="flex items-center justify-center flex-col gap-y-3 max-w-[900px] mx-auto text-center ">
        <h4 className="text-lg font-medium text-[#1B1B1B] ">
          Flexible Plan For Every Business
        </h4>
        <p className="text-[#161616] text-base font-normal ">
          Choose a pricing package that fits your business needs — whether
          you're just starting out or scaling operations. No hidden fees, just
          powerful features.
        </p>
        <div className="text-sm font-normal gap-x-1.5 w-full max-w-[439px] flex justify-center items-center mt-20 ">
          {activePlan.map((plan, planIndex) => (
            <button
              onClick={() => handleActive(plan.path)}
              className={`border-[#000] px-2.5 rounded-sm py-2 border ${
                isActive === plan.path ? "bg-[#000] text-white" : ""
              }`}
              key={planIndex}
            >
              {plan.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-x-8 gap-y-5 flex-wrap md:flex-nowrap max-w-[1000px] mt-15 mx-auto md:justify-between">
        <div className="md:pt-20">
          <BusinessPlanCard
            active={isActive}
            activeKey="monthly"
            secondChildren={
              <ul className="flex flex-col gap-y-4">
                {basicDatas.map((data, index) => (
                  <li key={index} className="flex gap-x-2 text-base ">
                    <span>
                      <CircleCheck
                        className={`bg-[#000] border-0 rounded-full ${
                          isActive === "monthly" ? "bg-[#fff]" : ""
                        }`}
                        color={`${isActive === "monthly" ? "#153ABF" : "#fff"}`}
                      />
                    </span>
                    <span>{data}</span>
                  </li>
                ))}
              </ul>
            }
            cardPrice={`100,000.00`}
          >
            <div className="flex gap-y-6 flex-col ">
              <div>
                <p className="text-sm text-[#000B33] font-medium py-1.5 px-2.5 bg-[#F1F1F1] rounded-[8px] inline uppercase">
                  Basic
                </p>
              </div>
              <p>
                Ideal for startups and small teams getting started with ERP.
                Includes:
              </p>
            </div>
          </BusinessPlanCard>
        </div>
        <div>
          <BusinessPlanCard
            active={isActive}
            activeKey="quarterly"
            secondChildren={
              <ul className="flex flex-col gap-y-3">
                {premiumDatas.map((data, index) => (
                  <li key={index} className="flex gap-x-2 text-base ">
                    <span>
                      <CircleCheck
                        className={`bg-[#000] border-0 rounded-full ${
                          isActive === "quarterly" ? "bg-[#fff]" : ""
                        }`}
                        color={`${
                          isActive === "quarterly" ? "#153ABF" : "#fff"
                        }`}
                      />
                    </span>
                    <span>{data}</span>
                  </li>
                ))}
              </ul>
            }
            cardPrice={`250,000.00`}
          >
            <div className="flex gap-y-4 flex-col">
              <div>
                <p className="text-sm font-medium py-1.5 px-2.5 bg-[#fff] text-[#000B33] rounded-[8px] inline uppercase">
                  Premium
                </p>
              </div>
              <p className="text-sm font-normal">
                Perfect for enterprises and organizations needing control and
                insights
              </p>
            </div>
          </BusinessPlanCard>
        </div>
        <div className="">
          <BusinessPlanCard
            active={isActive}
            activeKey="yearly"
            secondChildren={
              <ul className="flex flex-col gap-y-3">
                {customDatas.map((data, index) => (
                  <li key={index} className="flex gap-x-2 text-base ">
                    <span>
                      <CircleCheck
                        className={`bg-[#000] border-0 rounded-full ${
                          isActive === "yearly" ? "bg-[#fff]" : ""
                        }`}
                        color={`${isActive === "yearly" ? "#153ABF" : "#fff"}`}
                      />
                    </span>
                    <span>{data}</span>
                  </li>
                ))}
              </ul>
            }
            cardPrice={`Flexible`}
          >
            <div className="flex gap-y-5 flex-col">
              <div>
                <p className="text-sm font-medium py-1.5 px-2.5 bg-[#F1F1F1] text-[#000B33] rounded-[8px] inline uppercase">
                  Custom
                </p>
              </div>
              <p className="text-sm font-normal">
                Perfect for larger scale enterprises and organizations with
                complex workflow, compliance needs, and specialized operational
                requirements
              </p>
            </div>
          </BusinessPlanCard>
        </div>
      </div>
    </div>
  );
}
