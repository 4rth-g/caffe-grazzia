import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="cursor-pointer transition-all
      bg-[#266c9a] text-[antiquewhite] px-3 md:px-8 py-1.5 md:py-2 rounded-sm
      text-xs md:text-sm lg:text-base
      border-b-4 border-[#0f2d42] font-serif tracking-wide md:tracking-widest uppercase
      hover:brightness-110 hover:-translate-y-px hover:border-b-[6px]
      active:border-b-2 active:brightness-90 active:translate-y-0.5">
      {children}
    </button>
  );
}

export default Button;
