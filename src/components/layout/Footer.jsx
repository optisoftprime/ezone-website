import React from "react";
import halfcircle from "../../assets/img/half-circle.svg";
import kite from "../../assets/img/kite.svg";
import logo from "../../assets/img/logo.png";
import { Link, useLocation } from "react-router-dom";
import { handleRoute } from "../../utis/route-function";

export default function Footer() {
  const location = useLocation();
  const pathIncludes = (path) => location.pathname.includes(path);

  let headingText = "Ezone ERP integrates and enable collaboration.";

  if (pathIncludes("/cba")) {
    headingText = "Ezone Core Banking Application (CBA)";
  } else if (pathIncludes("/human-resources")) {
    headingText = "Ezone Human Resource Management (HRM)";
  } else if (pathIncludes("/accounting")) {
    headingText = "Ezone Accounting Module";
  } else if (pathIncludes("/sales")) {
    headingText = "Ezone Sales Management";
  } else if (pathIncludes("/crm")) {
    headingText = "Ezone Customer Relationship Management (CRM)";
  } else if (pathIncludes("/mutuary-management")) {
    headingText = "Ezone Customer Relationship Management (CRM)";
  } else if (pathIncludes("/lsm")) {
    headingText = "Ezone Customer Relationship Management (CRM)";
  } else if (pathIncludes("/payroll")) {
    headingText = "Ezone Customer Relationship Management (CRM)";
  } else if (pathIncludes("/process-workflow")) {
    headingText = "Ezone Customer Relationship Management (CRM)";
  } else if (pathIncludes("/about-us")) {
    headingText = "Ezone Customer Relationship Management (CRM)";
  } else if (pathIncludes("/contact-us")) {
    headingText = "Ezone Customer Relationship Management (CRM)";
  } else if (pathIncludes("/support-and-services")) {
    headingText = "Ezone Customer Relationship Management (CRM)";
  }

  return (
    <div className="bg-[#000] text-white px-6 md:px-4 py-10 ">
      <div className="relative pt-15 flex h-[200px] ">
        <img
          className="absolute hidden md:block bottom-0 left-0 max-w-[738px] "
          src={halfcircle}
          alt=""
        />
        {/* <div className="absolute bottom-0 left-0"></div> */}
        <div className="flex items-center justify-center flex-wrap z-10 gap-y-2 gap-x-20 pb-20 mx-auto">
          <h1 className="text-[30px] font-bold max-w-[500px] ">
            {headingText}
          </h1>
          <div>
            <button
              onClick={handleRoute}
              className="bg-[#008DFF] px-4 py-1.5 rounded-[16px] text-sm cursor-pointer text-white "
            >
              Start My Free Trial
            </button>
          </div>
        </div>
        <img
          className="absolute bottom-0 right-0 max-w-[500px] "
          src={kite}
          alt=""
        />
        {/* <div className="absolute bottom-0 right-0"></div> */}
      </div>
      <div>
        <div className="flex flex-wrap gap-y-5 md:justify-center gap-x-15 py-20">
          <div className="max-w-[250px] w-full flex gap-y-5 flex-col ">
            <div>
              <img className="max-w-[100px] " src={logo} alt="logo" />
            </div>
            <p className="text-sm font-normal text-[#707B8E] ">
              Ezone ERP System delivers integrated functionality to provide
              support to all business areas.
            </p>
          </div>
          <div className="max-w-[150px] w-full flex gap-y-5 flex-col">
            <h4>Quick Link</h4>
            <ul className="text-sm font-normal text-[#707B8E] flex gap-y-3 flex-col ">
              <li>
                <Link to={"/"}>Products</Link>
              </li>
              <li>
                <Link to={"/support-and-services"}>Solution</Link>
              </li>
              <li>
                <Link to={"/support-and-services"}>Support & Services</Link>
              </li>
              <li>
                <Link to={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link to={"/contact-us"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="max-w-[150px] w-full flex gap-y-5 flex-col">
            <h4>Support & Services</h4>
            <ul className="text-sm font-normal text-[#707B8E] flex gap-y-3 flex-col ">
              <li>
                <Link to={"/contact-us"}>Report a bug</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms and Conditons</Link>
              </li>
              <li>
                <Link to={"/contact-us"}>Site Map</Link>
              </li>
              <li>
                <Link to={"/support-and-services"}>FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="max-w-[258px] w-full flex gap-y-5 flex-col">
            <p className="text-sm font-normal text-[#707B8E] ">
              Ezone Solution is a Cloud-based ERP Application.
            </p>
            <div>
              <button
                onClick={handleRoute}
                className="bg-[#008DFF] px-4 py-1.5 rounded-[16px] text-sm cursor-pointer text-white "
              >
                Start My Free Trial
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-sm font-normal text-[#707B8E]">
            Copyright ©2025 All rights reserved | Ezone Solutions
          </p>
        </div>
      </div>
    </div>
  );
}
