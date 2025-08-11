import React from "react";
import Desktop from "../../../../assets/img/desktop.svg";
import Mouse from "../../../../assets/img/mouse.svg";
import Keyboard from "../../../../assets/img/keyboard.svg";
import zigzag from "../../../../assets/img/zigzag.svg";
import { handleRoute } from "../../../../utis/route-function";

export default function HeroSection({
  headText,
  image,
  paragraph,
  showZigzagTop = false,
  showZigzagBottom = true,
}) {
  return (
    <div className="flex flex-wrap gap-y-5 md:flex-nowrap bg-[linear-gradient(to_right,_rgba(248,252,255,1),_rgba(145,198,240,1))] items-center gap-x-10 justify-between py-15 px-4 md:px-20">
      <div className="max-w-[650px] w-full relative ">
        {showZigzagTop && (
          <img
            className="absolute hidden sm:block left-85  max-w-[300px] -top-35"
            src={zigzag}
            alt=""
          />
        )}
        <h3 className="text-[35px] font-bold">Ezone</h3>
        <h3 className="text-[35px] font-bold ">{headText}</h3>
        <p className="text-base font-normal mt-5 ">{paragraph}</p>
        <button
          onClick={handleRoute}
          className="py-1.5 px-3 mt-5 bg-[#0C0292] cursor-pointer rounded-[30px] text-[#fff] text-sm font-medium "
        >
          Get Started
        </button>
        {showZigzagBottom && (
          <img
            className="absolute hidden sm:block top-80 left-60 max-w-[300px]"
            src={zigzag}
            alt=""
          />
        )}
      </div>
      <div className="max-w-[800px] w-full ">
        <div className="relative">
          <img className="relative w-full " src={Desktop} alt="" />
          <img
            className="absolute top-[4px] md:top-[13.6px] w-full max-w-[550px] left-[2px] md:left-[16.5px]"
            src={image}
            alt=""
          />
        </div>
        <div className="flex items-cente justify-center gap-x-3 md:gap-x-10">
          <img
            className="z-10 max-w-[220px] md:max-w-[250px] w-full"
            src={Keyboard}
            alt="keyboard"
          />
          <img className="max-w-[70px] w-full " src={Mouse} alt="mouse" />
        </div>
      </div>
    </div>
  );
}
