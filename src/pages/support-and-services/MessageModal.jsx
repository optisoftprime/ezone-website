import React, { useEffect, useRef } from "react";

export default function MessageModal({ openModal = false, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // close modal when clicking outside
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!openModal) return null;

  return (
    <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-white w-full p-10 max-w-[450px] rounded-[10px]"
      >
        <h3 className="text-[#008DFF] mb-4 text-[18px] text-center font-medium ">
          Send Us a Message
        </h3>
        <form className="max-w-[400px] flex flex-col gap-y-4">
          {/* Name */}
          <div className="flex flex-col gap-y-2">
            <span className="font-medium text-sm">Name</span>
            <input
              className="w-full h-[35px] max-w-[350px] rounded-[7px] px-1.5 border border-[#BFBEBE] outline-0"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          {/* Email */}
          <div className="flex flex-col gap-y-2">
            <span className="font-medium text-sm">Email</span>
            <input
              className="w-full h-[35px] max-w-[350px] rounded-[7px] px-1.5 border border-[#BFBEBE] outline-0"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          {/* Subject */}
          <div className="flex flex-col gap-y-2">
            <span className="font-medium text-sm">Subject</span>
            <input
              className="w-full h-[35px] max-w-[350px] rounded-[7px] px-1.5 border border-[#BFBEBE] outline-0"
              type="text"
              placeholder="Enter subject"
            />
          </div>
          {/* Description */}
          <div className="flex flex-col gap-y-2">
            <span className="font-medium text-sm">Description of Issue</span>
            <textarea
              className="w-full h-[80px] max-w-[350px] rounded-[7px] px-1.5 border border-[#BFBEBE] outline-0"
              placeholder="Enter message"
            ></textarea>
          </div>
          {/* Upload */}
          <div className="flex flex-col gap-y-2">
            <span className="font-medium text-sm">
              Upload Screenshot (Optional)
            </span>
            <input
              className="w-full h-[35px] max-w-[350px] rounded-[7px] px-1.5 border border-[#BFBEBE] outline-0"
              type="file"
            />
          </div>
          {/* Submit */}
          <div className="mt-4 flex justify-center">
            <button className="px-15 py-2 rounded-[20px] bg-[#008DFF] text-white">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
