import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "../../components/Button";
import exp_image from "../../assets/''Fichier 11.png";

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex w-full flex-col-reverse items-center justify-between gap-8 px-3 py-4 lg:gap-12 lg:px-40 lg:py-8 xl:flex-row"
    >
      {/* Texte et bouton */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="max-w-full space-y-3 text-center lg:max-w-sm xl:text-start"
      >
        <h3 className="text-dark-purple text-base font-bold lg:text-xl">
          Experienced experts are giving advices.
        </h3>

        <p className="text-dark-purple/60 max-w-full text-sm font-medium lg:max-w-sm lg:text-base">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>

        <Button bg="custom-blue" color="white" text="Learn how work" />
      </motion.div>

      {/* Image et statistiques */}
      <div className="flex w-full items-center justify-center gap-8 lg:gap-14">
        {/* Image animée */}
        <motion.img
          src={exp_image}
          alt="Experience image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-auto w-[160px] object-cover lg:w-[250px]"
        />

        {/* Statistiques animées en cascade */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="space-y-1.5 text-start md:space-y-3"
        >
          {[
            {
              title: "1M+",
              desc: "Customers visit Albino every month to get their service done.",
            },
            {
              title: "92%",
              desc: "Satisfaction rate comes from our awesome customers.",
            },
            {
              title: "4.9/5.0",
              desc: "Average customer ratings we have got all over internet.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 * index,
                ease: "easeOut",
              }}
            >
              <h4 className="text-dark-purple text-base font-semibold md:text-lg lg:text-xl">
                {item.title}
              </h4>
              <p className="text-dark-purple/60 max-w-full text-xs font-medium lg:max-w-sm lg:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
