import React from "react";
import { handleRoute } from "../../../utis/route-function";

export default function BusinessPlanCard({
  active,
  activeKey,
  children,
  secondChildren,
  cardPrice,
}) {
  const isSelected = active === activeKey;

  return (
    <div
      className={`p-7 w-full max-w-[365px] border border-[#153ABF] flex flex-col gap-y-4 rounded-[10px] ${
        isSelected ? "bg-[#001C80] border-0 text-[#FFFFFF]" : ""
      }`}
    >
      <div>{children}</div>
      <div className="border-y-[0.92px] border-y-[#B3BBD9] py-5">
        <h2 className="text-[40px] font-extrabold">₦ {cardPrice}</h2>
        <p className="text-sm font-medium">Monthly Plan Selected</p>
      </div>
      <div>{secondChildren}</div>
      <div className="flex items-center justify-center gap-y-2 flex-col">
        <button
          onClick={handleRoute}
          className={`rounded-[16px] text-sm px-5 cursor-pointer bg-[#0C0292] text-[#fff] py-1.5 ${
            isSelected ? "bg-[#fff] !text-[#0C0292]" : ""
          }`}
        >
          Start Free 14 Days Trial
        </button>
      </div>
    </div>
  );
}
