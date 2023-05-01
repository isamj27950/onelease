import React from "react";
import { GrUp } from "react-icons/gr";

export default function CardBack({ icon }) {
  return (
    <div>
      <button className="py-5 px-5  mb-2 rounded-full bg-[#57007f] mx-64 text-white ">
        <GrUp className="text-4xl text-white" />
      </button>
    </div>
  );
}
