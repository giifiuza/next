import React from 'react';

export default function Faixa() {
  return (
    <div className="fixed inset-1 flex justify-center items-center z-0">
      <div className="bg-[#18837E] -rotate-6 transform-gpu h-20 w-[105vw] absolute top-1/2 -translate-y-1/4 z-20"></div>
      <div className="bg-[#9E2896] -rotate-6 transform-gpu h-24 w-[105vw] absolute transform -translate-y-1/2"></div>
    </div>
  );
}