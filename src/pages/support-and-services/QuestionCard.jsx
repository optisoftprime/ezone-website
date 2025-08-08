import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => setIsOpen((prev) => !prev);

  return (
    <div className="border rounded-lg my-4 shadow-sm overflow-hidden">
      {/* Question Row */}
      <div
        className="flex justify-between items-center p-2.5 cursor-pointer bg-white hover:bg-gray-50"
        onClick={toggleFaq}
      >
        <p className="font-medium text-gray-800">{question}</p>
        <span className="text-gray-500">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </div>

      {/* Answer Section */}
      {isOpen && (
        <div className="px-5 pb-4 pt-2 bg-white text-gray-700">
          <p className="mb-3">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
