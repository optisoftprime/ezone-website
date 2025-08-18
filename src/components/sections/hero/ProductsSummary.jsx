import React from "react";
import {
  // IoCreditCard,
  IoPeople,
  IoRocket,
  IoCashOutline,
  IoStorefront,
  // IoStorefront,
  // IoSchool,
  // IoCash
} from "react-icons/io5";
// import {icon} from "../../../assets/img/product-icon.png"

import dotImage from "../../../assets/img/home/e3fc388c9ca0f2978d70f259e30253ba507285ea.png";

const ProductsSummary = () => {
  const solutions = [
    {
      id: "cba",
      title: "CBA",
      description:
        "Power your financial institution with secure, real-time banking operations.",
      icon: IoPeople,
      bgColor: "bg-[#F7F8AE]",
      dotPattern: "top-right",
    },
    {
      id: "hr",
      title: "Human Resource",
      description:
        "Simplify hiring, employee records, attendance, and performance tracking.",
      icon: IoPeople,
      bgColor: "bg-[#90D9EC]",
      dotPattern: "top-right",
    },
    {
      id: "accounting",
      title: "Accounting",
      description:
        "Stay on top of your finances with smart, automated accounting tools.",
      icon: IoRocket,
      bgColor: "bg-[#D690EC]",
      dotPattern: "top-right",
    },
    {
      id: "sales",
      title: "Sales/Inventory",
      description:
        "Monitor stock levels, manage sales, and optimize your supply chain effortlessly.",
      icon: IoPeople,
      bgColor: "bg-[#90D9EC]",
      dotPattern: "top-right",
    },
    {
      id: "mutuary",
      title: "Mutuary Management",
      description:
        "Digitize and organize all mutuary operations with ease and precision.",
      icon: IoRocket,
      bgColor: "bg-[#ECB290]",
      dotPattern: "top-right",
    },
    {
      id: "crm",
      title: "CRM",
      description:
        "Build stronger customer relationships and drive sales through actionable insights.",
      icon: IoStorefront,
      bgColor: "bg-[#C4CCFC]",
      dotPattern: "top-right",
    },
    {
      id: "lms",
      title: "LMS",
      description:
        "Empower employee growth with structured training and digital learning paths.",
      icon: IoPeople,
      bgColor: "bg-[#90ECAB]",
      dotPattern: "top-right",
    },
    {
      id: "payroll",
      title: "Payroll",
      description:
        "Ensure accurate, timely payroll processing and compliance every time.",
      icon: IoCashOutline,
      bgColor: "bg-[#90D9EC]",
      dotPattern: "top-right",
    },
  ];

  const DotPattern = ({ position }) => (
    <div
      className={`absolute ${
        position === "top-right" ? "top-4 right-4" : ""
      } opacity-30`}
    >
      <img src={dotImage} />
      {/* <div className="grid grid-cols-4 gap-1">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
        ))}
      </div> */}
    </div>
  );

  return (
    <div className="py-[10rem] p-10 bg-[#F4FEFF]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ezone Solution Got You Covered
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            We provide a Custom software development that gives businesses more
            options and flexibility, assets that help businesses compete, to
            enable a less rigid structure so organization components operate
            more cohesively, enhancing the business internally and externally.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={solution.id}
                className={`${solution.bgColor} rounded-2xl py-10 md:py-16 px-4 relative overflow-hidden hover:shadow-lg transition-shadow duration-300`}
              >
                {/* <DotPattern position={solution.dotPattern} /> */}

                {/* Icon */}
                <div className="flex items-center justify-center w-full mb-6">
                  <div className="w-16 h-16 bg-[#048DFD] rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsSummary;
