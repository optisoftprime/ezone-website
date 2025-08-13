import React from "react";
import { handleRoute } from "../../../utis/route-function";

export default function BusinessPlanCard({
  className,
  children,
  secondChildren,
  buttonClass,
  cardPrice,
}) {
  return (
    <div
      className={`p-7 w-full max-w-[365px]  md:min-h-[130vh] border flex flex-col gap-y-4 rounded-[10px] ${className} `}
    >
      <div>
        <div>{children}</div>
      </div>
      <div className="border-y-[0.92px] border-y-[#B3BBD9] py-5 ">
        <h2 className="text-[40px] font-extrabold">$ {cardPrice}</h2>
        <p className="text-sm font-medium  ">per memeber, per month</p>
      </div>
      <div>{secondChildren}</div>
      <div className="flex items-center justify-center gap-y-2 flex-col">
        <button
          onClick={handleRoute}
          className={`rounded-[16px] text-sm px-5 cursor-pointer py-1.5 ${buttonClass} `}
        >
          Start Free 14 Days Trial
        </button>
        <p className="text-sm font-normal">No credit card required</p>
      </div>
    </div>
  );
}
