import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import send from "../../assets/img/send-icon.svg";
import card from "../../assets/img/card-icon.svg";

const navLists = [
  {
    name: "Products",
    path: "/#",
    subMenus: [
      {
        name: "cba",
        text: "Power your financial institution with secure, real-time banking operations.",
        icon: card,
        path: "/products/cba",
      },
      {
        name: "human resources",
        text: "Simplify hiring, employee records, attendance, and performance tracking.",
        icon: card,
        path: "/products/human-resources",
      },
      {
        name: "accounting",
        text: "Stay on top of your finances with smart, automated accounting tools.",
        icon: send,
        path: "/products/accounting",
      },
      {
        name: "sales",
        text: "Monitor stock levels, manage sales, and optimize your supply chain effortlessly.",
        icon: card,
        path: "/products/sales",
      },
      {
        name: "mutuary mgt",
        text: "Digitize and organize all mutuary operations with ease and precision.",
        icon: send,
        path: "/products/mutuary-management",
      },
      {
        name: "crm",
        text: "Build stronger customer relationships and drive sales through actionable insights.",
        icon: send,
        path: "/products/crm",
      },
      {
        name: "lsm",
        text: "Empower employee growth with structured training and digital learning.",
        icon: card,
        path: "/products/lsm",
      },
      {
        name: "payroll",
        text: "Ensure accurate, timely payroll processing and compliance every time.",
        icon: card,
        path: "/products/payroll",
      },
      {
        name: "process workflow",
        text: "Automate and streamline business processes for greater efficiency.",
        icon: send,
        path: "/products/process-workflow",
      },
    ],
  },
  {
    name: "Support & Services",
    path: "/support-and-services",
  },
  {
    name: "about Us",
    path: "/about-us",
  },
  {
    name: "contact",
    path: "/contact-us",
  },
];

export default function NavList() {
  const [dropDown, setDropDown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRoute = (path) => {
    navigate(path);
    console.log(path);
  };

  const isActive = (path) => location.pathname.includes(path);

  const handleOpenDropDown = () => {
    setDropDown(true);
  };
  const handleCloseDropDown = () => {
    setDropDown(false);
  };

  return (
    <div className="relative">
      <ul className="flex flex-col gap-y-3 ">
        {navLists.map((navMenu) => (
          <li className="py-2 capitalize" key={navMenu.path}>
            <Link
              to={navMenu.path}
              onClick={
                navMenu.subMenus && !dropDown
                  ? handleOpenDropDown
                  : handleCloseDropDown
              }
              className={`!capitalize ${
                isActive(navMenu.path)
                  ? "!bg-blue-600 !text-[#fff] "
                  : "!text-[#292929] "
              }text-base font-normal p-2 rounded-[5px] flex items-center gap-x-5`}
            >
              <span>{navMenu.name}</span>
              {navMenu.subMenus && (
                <span>{!dropDown ? <ChevronDown /> : <ChevronUp />}</span>
              )}
            </Link>

            {navMenu.subMenus && dropDown && (
              <div
                // onMouseOut={handleDropDown}
                className="ml-5 mt-2 space-y-2"
              >
                <p>Ezone Products</p>
                <ul className="">
                  {navMenu.subMenus.map((childNavMenu) => (
                    <li
                      key={childNavMenu.path}
                      onClick={() => handleRoute(childNavMenu.path)}
                      className={`max-w-[300px] capitalize p-1 rounded-[5px] cursor-pointer flex gap-y-2 flex-col ${
                        isActive(childNavMenu.path)
                          ? "!bg-blue-600 !text-[#fff] "
                          : "!text-[#292929] "
                      }  `}
                    >
                      <div className="flex items-center gap-x-2">
                        <div>
                          <p>Ezone</p>
                          <h4 className=" text-sm font-extrabold uppercase ">
                            {childNavMenu.name}
                          </h4>
                        </div>
                      </div>

                      <Link
                        to={childNavMenu.path}
                        className="flex items-center gap-x-1 text-base font-medium text-[#0C0292] "
                      >
                        {/* <span>TRY NOW</span>
                        <span>
                          <ChevronRight />
                        </span> */}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="flex gap-x-5 flex-col gap-y-3">
        <a
          href="https://core.ezoneerp.com/"
          className="px-5 py-2 rounded-[20px] !text-[#0C0292] border border-[#0c0292] !bg-white"
        >
          Login
        </a>
        <a
          href="https://core.ezoneerp.com/register"
          className="px-5 py-2 rounded-[20px] !bg-[#0C0292] !text-white "
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}
