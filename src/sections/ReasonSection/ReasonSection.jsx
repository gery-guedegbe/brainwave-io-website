import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import avatar from "../../assets/''Fichier 18.png";
import green_shape from "../../assets/''Fichier 17.png";
import playIcon from "../../assets/''Fichier 23.png";

const ReasonSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex w-full flex-col bg-white py-4 lg:gap-12 lg:py-6"
    >
      <div className="flex w-full flex-col-reverse items-center justify-between gap-12 px-4 lg:flex-row lg:gap-24 lg:px-40">
        {/* Avatar avec cercle vert derrière */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative w-[200px] lg:w-[250px]"
        >
          <img
            src={green_shape}
            alt="Green Circle Shape"
            className="absolute top-8 -left-4 z-0 h-32 w-32 lg:-left-6 lg:h-48 lg:w-48"
          />
          <img
            src={avatar}
            alt="Avatar Image"
            className="relative z-10 h-auto w-full object-cover"
          />
        </motion.div>

        {/* Texte et liste des avantages */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-0 flex flex-col items-center gap-4 lg:mb-10 lg:items-start lg:gap-6"
        >
          <h4 className="text-dark-purple text-base font-bold lg:text-xl">
            Reasons you should choose us to grow today.
          </h4>

          <p className="text-dark-purple/60 max-w-full text-sm font-medium lg:max-w-sm lg:text-base">
            We share common trends and strategies for improving your rental
            income and making sure you stay in high demand.
          </p>

          <div className="grid grid-cols-2 gap-3 lg:gap-6">
            {[
              "Fully Responsive",
              "Beautiful Layouts",
              "Easy to Edit",
              "Google Font Included",
            ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                className="text-dark-purple flex items-center gap-3 text-xs font-bold md:text-sm lg:text-base"
              >
                <FaCheck className="text-custom-blue h-4 w-4" />
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section vidéo / information */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="reasonBackroung relative z-50 -mt-36 flex w-full flex-col items-center justify-center gap-3 text-center"
      >
        <div className="bg-dark-purple absolute inset-0 opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center gap-3 text-center">
          <img
            src={playIcon}
            alt="Play Icon"
            className="h-8 w-8 object-cover lg:h-12 lg:w-12"
          />
          <h3 className="font-bold text-white md:text-lg lg:text-2xl">
            How do we help you to grow?
          </h3>
          <p className="max-w-full text-sm font-medium text-white/70 lg:max-w-lg lg:text-base">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ReasonSection;
