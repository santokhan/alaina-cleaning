import React, { useContext } from "react";
import { AgriculturalContext } from "../../../context/tabs/AgriculturalContext";

export default function PCard({ children, category, id }) {
  const { tab } = useContext(AgriculturalContext);

  if (tab === 1 || tab === category) {
    return (
      <div
        className="w-[372px] bg-white shadow-xl hover:scale-105 transition-all duration-200 ease-out rounded-xl overflow-hidden"
        id={id}
      >
        {children}
      </div>
    );
  } else {
    return "";
  }
}
export function CImg({ src }) {
  return (
    <div className="p-4">
      <img
        src={src}
        alt="products"
        className="w-[372px] h-[234px] object-cover rounded-lg"
      />
    </div>
  );
}
export function CTitle({ children }) {
  return (
    <div className="px-5 pt-2 text-lg font-bold capitalize">{children}</div>
  );
}
export function CDes({ children }) {
  return <div className="px-5 pb-4 text-textgray">{children}</div>;
}

export function Price({ price, time, children }) {
  return (
    <div className="flex justify-between">
      <div className="text-green-800 text-3xl font-semibold px-5">
        ${price}/<span className="text-base">{time} minute</span>
      </div>
      {children}
    </div>
  );
}
