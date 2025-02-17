import React from "react";
import CountUp from "react-countup";

export function Counter({ number, title }) {
  return (
    <div className="number">
      <CountUp
        duration={10}
        className="counter font-sofia font-light text-[#EFB036]"
        end={number}
      />
      <span className="font-sofia">{title}</span>
    </div>
  );
}
