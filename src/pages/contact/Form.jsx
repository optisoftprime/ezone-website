import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

export default function Form() {
  return (
    <div className="bg-[#F5F5F5] p-10 absolute flex gap-x-10 -bottom-[27rem] left-60 max-w-[1000px] justify-between rounded-[20px] ">
      <div className="max-w-[500px] ">
        <div className="mb-8 ">
          <h3 className="text-[#008DFF] text-[18px] font-medium mb-2 capitalize ">
            get in touch
          </h3>
          <p className="max-w-[400px] text-[#151414] text-sm font-normal ">
            Lorem ipsum dolor sit amet consectetur. Lobortis diam scelerisque ut
            leo
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-x-3  ">
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#008DFF] ">
              <MapPin color="#fff" size={22} />
            </div>
            <div>
              <h4>Head Office</h4>
              <p className="max-w-[300px] text-sm ">
                Lorem ipsum dolor sit amet consectetur. Lobortis diam
                scelerisque ut leo
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-3  ">
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#008DFF] ">
              <Mail color="#fff" size={22} />
            </div>
            <div>
              <h4>Email us</h4>
              <p className="max-w-[300px] text-sm ">
                Lorem ipsum dolor sit amet consectetur. Lobortis diam
                scelerisque ut leo
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-3  ">
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#008DFF] ">
              <Phone color="#fff" size={22} />
            </div>
            <div>
              <h4>Call us</h4>
              <p className="text-sm ">+234 0987654321</p>
              <p className="text-sm ">+234 0987654321</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-y-3">
          <p className="text-sm font-medium text-[#121212] ">
            Follow our social media
          </p>
          <div className="flex items-center gap-x-3">
            <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#008DFF] ">
              <Facebook size={18} color="#fff" />
            </div>
            <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#008DFF] ">
              <Twitter size={18} color="#fff" />
            </div>
            <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#008DFF] ">
              <Instagram size={18} color="#fff" />
            </div>
            <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#008DFF] ">
              <Youtube size={18} color="#fff" />
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-[350px] ">
        <h3 className="text-[#008DFF] mb-4 text-[18px] font-medium capitalize ">
          send us message
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
            <span className="font-medium text-sm ">Name</span>
            <input
              className="w-full h-[35px] max-w-[350px] rounded-[7px] px-1.5 border border-[#BFBEBE] outline-0 "
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="font-medium text-sm ">Name</span>
            <textarea
              className="w-full h-[80px] max-w-[350px] rounded-[7px] px-1.5 border border-[#BFBEBE] outline-0 "
              placeholder="Enter message"
              name=""
              id=""
            ></textarea>
          </div>
          <div className="mt-4">
            <button className="px-20 py-2 rounded-[20px] bg-[#008DFF] text-white  inline-block ">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
