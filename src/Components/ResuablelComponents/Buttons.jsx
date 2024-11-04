// BusinessButton.js
import React from 'react';

const Buttons = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-[1px] border-[#F4F5F8] text-[#F4F5F8] smd:px-[10px] small:px-2 smd:py-3 ssmd:py-3 ssmd:px-4 md:px-4 small:py-2 md:py-3 rounded-full md:text-[16px] small:text-[12px] smd:text-[12px] font-medium hover:bg-lime-400 hover:text-[#1a1a36] transition"
    >
      {label}
    </button>
  );
};

export default Buttons;
