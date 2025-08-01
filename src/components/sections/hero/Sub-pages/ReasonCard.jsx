import React from "react";

export default function ReasonCard({
  text,
  number,
  circleBg,
  boxBg,
  textColor,
  circleColor,
}) {
  return (
    <div
      style={{ background: boxBg }}
      className={`pt-6 pb-8 px-2 rounded-[4px] relative bg-[${boxBg}] max-w-[180px]`}
    >
      <div
        style={{ color: circleColor, background: circleBg }}
        className={`w-[40px] absolute -top-7 text-sm font-normal left-16 h-[40px] z-10 rounded-full bg-[${circleBg}] flex items-center justify-center `}
      >
        <span>{number}</span>
      </div>
      <p
        style={{ color: textColor }}
        className={`text-[${textColor}] text-base text-center max-w-[100px] font-normal mx-auto `}
      >
        {text}
      </p>
    </div>
  );
}
