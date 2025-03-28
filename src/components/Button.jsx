import React from "react";

const Button = ({ text, bg, color }) => {
  return (
    <button
      className={`bg-${bg} hover:bg-${bg}/80 cursor-pointer rounded-lg px-4 py-3 text-sm font-semibold lg:px-6 lg:py-3 text-${color} text-center outline-none`}
    >
      {text}
    </button>
  );
};

export default Button;
