import React from "react";
import BusinessPlanCard from "./hero/BusinessPlanCard";
import { data } from "react-router-dom";
import { CircleCheck } from "lucide-react";

const basicDatas = [
  "Access to Accounting Module",
  "Basic HR (Employee records)",
  "Sales/Inventory (Limited to Core Tracking)",
  "Payroll (Up to 20 Employees)",
  "Email Support",
  "5GB Storage",
  "1 Admin User + 5 staff Users",
];

const professionalDatas = [
  "Full HR Suite",
  "Advance Sales & Inventory",
  "Full-Feature CRM",
  "Learning Management System (LMS)",
  "Process Workflow Automation",
  "In app Communication",
  "Role Based Access Control",
  "50GB Access Control",
  "2 Admin Users + 20 Staffs",
];

const AdvancedDatas = [
  "Core Banking Application (CBA)",
  "Mutuary Management Module",
  "Custom Workflow & Integrations",
  "Advance Analytics & Custom Reports",
  "Priority Support (Email, phone, chat)",
  "500 GB storage",
  "Unlimited users",
  "SLA-backed Uptime Guarantee",
  "API Access and White label Option",
];

export default function BusinessPlan() {
  return (
    <div className="pt-20 pb-15 px-15">
      <div className="flex items-center justify-center flex-col gap-y-3 max-w-[900px] mx-auto text-center ">
        <h4 className="text-lg font-medium text-[#1B1B1B] ">
          Flexible Plan For Every Business
        </h4>
        <p className="text-[#161616] text-base font-normal ">
          Choose a pricing package that fits your business needs — whether
          you're just starting out or scaling operations. No hidden fees, just
          powerful features.
        </p>
        <div className="text-sm font-normal max-w-[439px] border-[#000] border flex items-center mt-20 ">
          <p className="bg-[#000] text-white px-15 py-2 ">Monthly</p>
          <p className="px-10 py-1.5 flex items-center gap-x-4">
            <span>Yearly</span>
            <span className="bg-[#F9D783] py-[2px] px-1 ">Save 20%</span>
          </p>
        </div>
      </div>
      <div className="flex gap-x-8 max-w-[1000px] mt-15 mx-auto justify-between">
        <div className="pt-20">
          <BusinessPlanCard
            secondChildren={
              <ul className="flex flex-col gap-y-4">
                {basicDatas.map((data, index) => (
                  <li key={index} className="flex gap-x-2">
                    <span>
                      <CircleCheck
                        className="bg-[#000] border-0 rounded-full "
                        color="#fff"
                      />
                    </span>
                    <span>{data}</span>
                  </li>
                ))}
              </ul>
            }
            className="border-[#153ABF]  "
            buttonClass="text-white bg-[#0C0292] "
            cardPrice={19}
          >
            <div className="flex gap-y-6 flex-col ">
              <div>
                <p className="text-base font-medium py-1.5 px-2.5 bg-[#F1F1F1] rounded-[8px] inline uppercase ">
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
            secondChildren={
              <ul className="flex flex-col gap-y-3">
                {professionalDatas.map((data, index) => (
                  <li key={index} className="flex gap-x-2">
                    <span>
                      <CircleCheck
                        className="bg-[#fff] border-0 rounded-full "
                        color="#153ABF"
                      />
                    </span>
                    <span>{data}</span>
                  </li>
                ))}
              </ul>
            }
            className="bg-[#000B6B] text-white shadow-lg "
            buttonClass="text-[#0C0292] bg-[#fff] "
            cardPrice={49}
          >
            <div className="flex gap-y-4 flex-col">
              <div>
                <p className="text-[12px] font-medium py-[2px] px-1.5 bg-[#F1F1F1] text-[#000B6B] rounded-sm inline">
                  Popular
                </p>
              </div>
              <div>
                <p className="text-base font-medium py-1.5 px-2.5 bg-[#fff] text-[#000B33] rounded-[8px] inline uppercase">
                  PROFESSIONALS
                </p>
              </div>
              <p className="text-sm font-normal">
                Best for growing businesses with moderate operational
                complexity.Includes everything in Basic, plus:
              </p>
            </div>
            <div></div>
          </BusinessPlanCard>
        </div>
        <div className="pt-20">
          <BusinessPlanCard
            secondChildren={
              <ul className="flex flex-col gap-y-3">
                {AdvancedDatas.map((data, index) => (
                  <li key={index} className="flex gap-x-2">
                    <span>
                      <CircleCheck
                        className="bg-[#000] border-0 rounded-full "
                        color="#fff"
                      />
                    </span>
                    <span>{data}</span>
                  </li>
                ))}
              </ul>
            }
            cardPrice={99}
            buttonClass="text-white bg-[#0C0292] "
          >
            <div className="flex gap-y-5 flex-col">
              <div>
                <p className="text-base font-medium py-1.5 px-2.5 bg-[#F1F1F1] rounded-[8px] inline uppercase">
                  ADVANCED
                </p>
              </div>
              <p className="text-sm font-normal">
                perfect for enterprises and organizations with complex
                operations includes everything in professionals , plus
              </p>
            </div>
            <div></div>
          </BusinessPlanCard>
        </div>
      </div>
    </div>
  );
}
