import React from "react";
import Desktop from "../../../../assets/img/desktop.svg";
import Mouse from "../../../../assets/img/mouse.svg";
import Keyboard from "../../../../assets/img/keyboard.svg";
import ellipse from "../../../../assets/img/ellipse12.svg";
import zigzag from "../../../../assets/img/zigzag.svg";

export default function BenefitSection({
  image,
  bgColor = "#C9E7FF",
  list,
  listName,
  showZigzag = false,
}) {
  return (
    <div
      style={{ background: bgColor }}
      className="flex items-center justify-center relative gap-x-20 px-35 py-15 mb-15"
    >
      <img
        className="absolute max-w-[350px] left-0 z-0 "
        src={ellipse}
        alt=""
      />
      <div className="max-w-[600px] w-full ">
        <div className="relative">
          <img className="relative max-w-[500px] " src={Desktop} alt="" />
          <img
            className="absolute top-[12.6px] left-[16px] max-w-[475px] "
            src={image}
            alt=""
          />
        </div>
        <div className="flex items-cente justify-center gap-x-10">
          <img className="z-10" src={Keyboard} alt="keyboard" />
          <img src={Mouse} alt="mouse" />
        </div>
      </div>
      <div className="max-w-[550px] flex flex-col gap-y-8 ">
        {showZigzag && <img className="max-w-[300px] " src={zigzag} alt="" />}
        <h4 className=" text-[#151414] text-[30px] max-w-[370px] ">
          Benefit of Ezone {listName}
        </h4>
        <div>{list}</div>
        <div className="mt-5">
          <button className="py-2 px-4 bg-[#008DFF] rounded-[30px] inline-block cursor-pointer text-white text-base font-normal ">
            Start My Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}
