import React from "react";

export default function MessageModal({ openModal = false }) {
  if (!openModal) return null;

  return (
    <div className="modal-overlay">
      <div className="bg-white w-full p-10 max-w-[450px] rounded-[10px] ">
        <h3 className="text-[#008DFF] mb-4 text-[18px] text-center font-medium ">
          Send Us a Message
        </h3>
        <form className="max-w-[400px] flex flex-col gap-y-4 " action="">
          <div className="flex flex-col gap-y-2">
            <span className="font-medium text-sm ">Name</span>
            <input
              className="w-full h-[35px] max-w-[350px] rounded-[7px] px-1.5 border border-[#BFBEBE] outline-0 "
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="font-medium text-sm ">Email</span>
            <input
              className="w-full h-[35px] max-w-[350px] rounded-[7px] px-1.5 border border-[#BFBEBE] outline-0 "
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="font-medium text-sm ">Subject</span>
            <input
              className="w-full h-[35px] max-w-[350px] rounded-[7px] px-1.5 border border-[#BFBEBE] outline-0 "
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="font-medium text-sm ">Description of Issue</span>
            <textarea
              className="w-full h-[80px] max-w-[350px] rounded-[7px] px-1.5 border border-[#BFBEBE] outline-0 "
              placeholder="Enter message"
              name=""
              id=""
            ></textarea>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="font-medium text-sm ">
              Upload Screen shot (Optional)
            </span>
            <input
              className="w-full h-[35px] max-w-[350px] rounded-[7px] px-1.5 border border-[#BFBEBE] outline-0 "
              type="file"
              placeholder=""
            />
          </div>
          <div className="mt-4">
            <button className="px-15 py-2 rounded-[20px] bg-[#008DFF] text-white  inline-block ">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
