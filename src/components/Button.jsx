import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="cursor-pointer transition-all
      bg-[#266c9a] text-[#e7eeed] px-8 py-2 rounded-sm
      border-b-4 border-[#0f2d42] font-serif tracking-widest uppercase text-sm
      hover:brightness-110 hover:-translate-y-px hover:border-b-[6px]
      active:border-b-2 active:brightness-90 active:translate-y-0.5">
      {children}
    </button>
  );
}

export default Button;
