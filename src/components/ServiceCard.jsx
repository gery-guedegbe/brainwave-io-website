import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ title, img, desc, link }) => {
  return (
    <div className="flex max-w-full flex-col items-start gap-4 text-start lg:max-w-md">
      <h4 className="text-dark-purple text-base font-bold lg:text-lg">
        {title}
      </h4>

      <img src={img} alt="Image" className="h-auto w-full object-cover" />

      <p className="text-dark-purple/60 text-sm font-medium">{desc}</p>

      <a
        href={link}
        className="text-custom-blue flex items-center justify-center gap-3 space-y-2 text-sm font-semibold hover:opacity-70"
      >
        Learn More
        <FaArrowRight />
      </a>
    </div>
  );
};

export default ServiceCard;
