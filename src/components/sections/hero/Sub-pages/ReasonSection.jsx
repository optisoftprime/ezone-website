import React from "react";

export default function ReasonSection({ children, pageName }) {
  return (
    <div className="px-4 md:px-20 pt-15 pb-15 flex items-center justify-center flex-col gap-y-8">
      <h4 className="text-[#151414] text-lg ">Why Choose Ezone {pageName}</h4>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5 p-5 w-full max-w-[800px] mx-auto">
        {children}
      </div>
    </div>
  );
}
