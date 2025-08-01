import React from "react";
import Desktop from "../../../../assets/img/desktop.svg";
import Mouse from "../../../../assets/img/mouse.svg";
import Keyboard from "../../../../assets/img/keyboard.svg";
import zigzag from "../../../../assets/img/zigzag.svg";

export default function HeroSection({
  headText,
  image,
  paragraph,
  showZigzagTop = false,
  showZigzagBottom = true,
}) {
  return (
    <div className="flex bg-[linear-gradient(to_right,_rgba(248,252,255,1),_rgba(145,198,240,1))] items-center gap-x-10 justify-between py-15 px-20">
      <div className="max-w-[650px] w-full relative ">
        {showZigzagTop && (
          <img
            className="absolute left-85  max-w-[300px] -top-35"
            src={zigzag}
            alt=""
          />
        )}
        <h3 className="text-[35px] font-bold">Ezone</h3>
        <h3 className="text-[35px] font-bold ">{headText}</h3>
        <p className="text-base font-normal mt-5 ">{paragraph}</p>
        <button className="py-1.5 px-3 mt-5 bg-[#0C0292] cursor-pointer rounded-[30px] text-[#fff] text-sm font-medium ">
          Get Started
        </button>
        {showZigzagBottom && (
          <img
            className="absolute top-80 left-60 max-w-[300px]"
            src={zigzag}
            alt=""
          />
        )}
      </div>
      <div className="max-w-[800px] w-full ">
        <div className="relative">
          <img className="relative" src={Desktop} alt="" />
          <img
            className="absolute top-[13.6px] max-w-[535px] left-[16.5px]"
            src={image}
            alt=""
          />
        </div>
        <div className="flex items-cente justify-center gap-x-10">
          <img src={Keyboard} alt="keyboard" />
          <img src={Mouse} alt="mouse" />
        </div>
      </div>
    </div>
  );
}
