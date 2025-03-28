import React from "react";

const TestimonialCard = ({ name, profession, desc, img }) => {
  return (
    <div className="flex max-w-full flex-col items-start gap-5 rounded-md border border-black/20 p-4 text-start shadow lg:max-w-md">
      <img
        src={img}
        alt="Avatar Image"
        className="h-10 w-10 rounded-full object-cover"
      />

      <div className="space-y-4 text-start">
        <p className="text-dark-purple/70 text-sm font-medium lg:text-base">
          "{desc}"
        </p>

        <p className="flex items-center gap-1 text-start text-sm font-semibold text-black">
          {name}

          <span className="text-dark-purple/60 text-sm font-medium">
            {profession}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
