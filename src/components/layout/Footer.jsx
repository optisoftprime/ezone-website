import React from "react";
import halfcircle from "../../assets/img/half-circle.svg";
import kite from "../../assets/img/kite.svg";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#000] text-white ">
      <div className="relative pt-15 flex justify-between">
        <img
          className="absolute bottom-0 left-0 max-w-[738px] "
          src={halfcircle}
          alt=""
        />
        {/* <div className="absolute bottom-0 left-0"></div> */}
        <div>
          <h1>Ezone ERP integrates and enable collaboration.</h1>
        </div>
        <img
          className="absolute bottom-0 right-0 max-w-[738px] "
          src={kite}
          alt=""
        />
        {/* <div className="absolute bottom-0 right-0"></div> */}
      </div>
      <div>
        <div className="flex  justify-center gap-x-10 py-20">
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
            <h4>Quicl Link</h4>
            <ul className="text-sm font-normal text-[#707B8E] flex gap-y-3 flex-col ">
              <li>
                <Link>Products</Link>
              </li>
              <li>
                <Link>Solution</Link>
              </li>
              <li>
                <Link>Support & Services</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="max-w-[150px] w-full flex gap-y-5 flex-col">
            <h4>Support & Services</h4>
            <ul className="text-sm font-normal text-[#707B8E] flex gap-y-3 flex-col ">
              <li>
                <Link>Report a bug</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms and Conditons</Link>
              </li>
              <li>
                <Link>Site Map</Link>
              </li>
              <li>
                <Link>FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="max-w-[258px] w-full flex gap-y-5 flex-col">
            <p className="text-sm font-normal text-[#707B8E] ">
              Ezone Solution is a Cloud-based ERP Application.
            </p>
            <div>
              <button className="bg-[#008DFF] px-4 py-1.5 rounded-[16px] text-sm cursor-pointer text-white ">
                Start My Free Trial
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm font-normal text-[#707B8E]">
            Copyright ©2025 All rights reserved | Ezone Solutions
          </p>
        </div>
      </div>
    </div>
  );
}
