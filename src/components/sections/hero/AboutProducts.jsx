import React from "react";
import aboutProductImage from "../../../assets/img/home/about-product.png";
import { Link } from "react-router-dom";
const AboutProducts = () => {
  return (
    <div className="relative  bg-[#FFFFFF]">
      <div className="relative z-10 container mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left content - exact text and styling */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              <p className="text-2xl md:text-4xl font-light text-gray-800 leading-tight">
                Ezone Solution tracks
                <br />
                production capacity, and the
                <br />
                status of commitments: orders,
                <br />
                purchase orders,
                <br />
                and payroll.
              </p>

              <p className="text-base lg:text-lg text-gray-700 leading-relaxed  font-light">
                Ezone Solution is a Cloud-based ERP ( Enterprise Resource
                Planning ) that provides an innovative and comprehensive suite
                of business applications with an integrated and continuously
                updated view and real time monitoring of core business
                processes.
              </p>
            </div>

            <div className="pt-4">
              <Link
                to="https://core.ezoneerp.com/login"
                className="bg-blue-500 hover:bg-blue-600 shadow-b-lg shadow-blue-200 text-white font-medium px-6 py-3 rounded-full text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start My Free Trial
              </Link>
            </div>
          </div>

          {/* Right content*/}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div>
                <img
                  src={aboutProductImage}
                  alt="Dashboard Preview"
                  className="w-[511px] h-auto object-cover"
                />
              </div>

              <div className="absolute -bottom-8 left-12 w-8 h-8 bg-blue-300/60 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProducts;
