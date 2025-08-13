import React from "react";
import hrImage from "../../assets/img/hrImage.svg";

export default function EzoneSolution() {
  return (
    <div className="flex px-4 items-center py-15 justify-center flex-col gap-y-5 bg-[linear-gradient(to_bottom,_rgba(244,0,91,1),_rgba(0,54,152,1),_rgba(55,0,127,1))]">
      <h4 className="text-[25px] font-normal text-white  ">
        Why Ezone ERP Solution?
      </h4>
      <p className="max-w-[1000px] text-base font-normal text-center text-white ">
        It is simple and user-friendly it is easy to navigate which can be used
        by anyone across the organization with little or no training. it also
        comes with beautiful interfaces With a central database of information
        the Ezone ERP aids in improving your analytics and reporting.
      </p>
      <img className="max-w-[700px] w-full " src={hrImage} alt="" />
    </div>
  );
}
