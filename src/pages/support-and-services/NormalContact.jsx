import React, { useState } from "react";
import FaqItem from "./QuestionCard";
import { useNavigate } from "react-router-dom";
import MessageModal from "./MessageModal";

export default function NormalContact() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleRoute = () => {
    navigate("/support-and-services/chat");
  };

  return (
    <div>
      <MessageModal openModal={isOpen} />

      <div className=" px-4 md:px-50 py-10 ">
        <h3 className="text-[20px] font-medium mt-5 ">
          frequently asked
          <span className="px-2 py-1 rounded-[8px] bg-[#008DFF] text-white !rotate-45  ">
            Questions
          </span>
        </h3>
        <div>
          <FaqItem
            question="What is Ezone?"
            answer="Ezone is a cloud-based ERP solution that offers integrated modules for managing core business operations such as HR, accounting, customer relationships, workflow, sales, payroll, and more."
          />
          <FaqItem
            question="Is Ezone a cloud-based software?"
            answer="Ezone is a cloud-based ERP solution that offers integrated modules for managing core business operations such as HR, accounting, customer relationships, workflow, sales, payroll, and more."
          />
          <FaqItem
            question="Can I use Ezone on mobile devices?"
            answer="Ezone is a cloud-based ERP solution that offers integrated modules for managing core business operations such as HR, accounting, customer relationships, workflow, sales, payroll, and more."
          />
          <FaqItem
            question="Who can use Ezone?"
            answer="Ezone is a cloud-based ERP solution that offers integrated modules for managing core business operations such as HR, accounting, customer relationships, workflow, sales, payroll, and more."
          />
          <FaqItem
            question="How secure is my data on Ezone?"
            answer="Ezone is a cloud-based ERP solution that offers integrated modules for managing core business operations such as HR, accounting, customer relationships, workflow, sales, payroll, and more."
          />
          <FaqItem
            question="What does the Ezone HRM module include?"
            answer="Ezone is a cloud-based ERP solution that offers integrated modules for managing core business operations such as HR, accounting, customer relationships, workflow, sales, payroll, and more."
          />
          <FaqItem
            question="What is CBA in Ezone?"
            answer="Ezone is a cloud-based ERP solution that offers integrated modules for managing core business operations such as HR, accounting, customer relationships, workflow, sales, payroll, and more."
          />
          <FaqItem
            question="Can I manage payroll on Ezone?"
            answer="Ezone is a cloud-based ERP solution that offers integrated modules for managing core business operations such as HR, accounting, customer relationships, workflow, sales, payroll, and more."
          />
          <FaqItem
            question="Does Ezone support inventory and sales tracking?"
            answer="Ezone is a cloud-based ERP solution that offers integrated modules for managing core business operations such as HR, accounting, customer relationships, workflow, sales, payroll, and more."
          />
          <FaqItem
            question="Can Ezone help manage a learning or training system?"
            answer="Ezone is a cloud-based ERP solution that offers integrated modules for managing core business operations such as HR, accounting, customer relationships, workflow, sales, payroll, and more."
          />
          <FaqItem
            question="How long does it take to get started with Ezone?"
            answer="Ezone is a cloud-based ERP solution that offers integrated modules for managing core business operations such as HR, accounting, customer relationships, workflow, sales, payroll, and more."
          />
          <FaqItem
            question="Can I migrate my data from another system?"
            answer="Ezone is a cloud-based ERP solution that offers integrated modules for managing core business operations such as HR, accounting, customer relationships, workflow, sales, payroll, and more."
          />
          <FaqItem
            question="Can I migrate my data from another system?"
            answer="Ezone is a cloud-based ERP solution that offers integrated modules for managing core business operations such as HR, accounting, customer relationships, workflow, sales, payroll, and more."
          />
        </div>
      </div>
      <div className="contact py-10 mb-[20rem] ">
        <div className="flex items-center justify-center flex-col gap-y-5 max-w-[400px] mx-auto text-center ">
          <h4 className="capitalize text-[25px] font-semibold ">
            contact use for any issues available
          </h4>
          <div className="flex items-center gap-x-3">
            <button
              onClick={handleOpen}
              className="px-10 py-2 cursor-pointer rounded-[30px] text-sm bg-white text-[#008DFF] "
            >
              Contact Us
            </button>
            <button
              onClick={handleRoute}
              className="px-10 py-2 text-sm rounded-[30px] border cursor-pointer border-[#fff] text-[#008DFF] "
            >
              Chat With Us Live
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
