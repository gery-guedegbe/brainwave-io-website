import React from "react";
import { motion } from "motion/react";
import Button from "../../components/Button";
import { IoPlayCircleOutline } from "react-icons/io5";
import avatar1 from "../../assets/''Fichier 1.png";
import shape1 from "../../assets/''Fichier 3.png";
import shape2 from "../../assets/''Fichier 4.png";
import shape3 from "../../assets/''Fichier 5.png";

const HeroSection = () => {
  return (
    <section className="flex h-full w-full flex-col items-center py-14">
      <div className="flex w-full flex-col gap-12 px-4 lg:flex-row lg:gap-40 lg:px-48">
        {/* Partie texte */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex max-w-full flex-col items-center gap-4 text-center lg:w-1/2 lg:max-w-sm lg:items-start lg:text-start"
        >
          <h1 className="text-dark-purple text-base font-bold lg:text-4xl">
            Make your business powerful with Shade.
          </h1>

          <p className="text-dark-purple/60 font-medium">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Button text="Get A Free Quote" color="white" bg="custom-blue" />
          </motion.div>

          <p className="text-dark-purple mx-6 mt-2 text-xs font-bold uppercase lg:text-sm">
            Watch how we can help
          </p>
        </motion.div>

        {/* Partie image */}
        <div className="relative flex w-full items-center justify-center lg:w-1/2">
          {/* Avatar principal avec effet de zoom */}
          <motion.img
            src={avatar1}
            alt="Avatar"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-20 h-auto w-[200px] object-cover md:w-[250px] lg:absolute lg:-top-8 lg:w-[300px]"
          />

          {/* Formes animées avec effet de flottement */}
          <motion.img
            src={shape1}
            alt="Shape 1"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-20 z-10 h-16 w-16 md:right-72 lg:top-0 lg:right-10 lg:h-24 lg:w-24"
          />

          <motion.img
            src={shape2}
            alt="Shape 2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-16 z-10 h-24 w-24 md:top-28 md:left-56 lg:top-20 lg:left-10 lg:h-32 lg:w-32"
          />

          <motion.img
            src={shape3}
            alt="Shape 3"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-16 bottom-5 z-20 h-16 w-16 md:right-64 md:bottom-0 lg:right-6 lg:h-28 lg:w-28 xl:-bottom-32"
          />
        </div>
      </div>

      {/* Section Play Video avec effet de rebond */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="bg-dark-purple z-30 -mt-8 flex w-full items-start justify-center gap-1 p-3 text-center text-xs text-white md:gap-2 lg:mt-24 lg:items-center lg:p-5 lg:text-sm"
      >
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <IoPlayCircleOutline className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
        </motion.span>

        <p className="space-x-2">
          <span>Interested how our software works for you?</span>
          <a href="#" className="text-blue-300/70 underline">
            Watch our 1 minute video
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
