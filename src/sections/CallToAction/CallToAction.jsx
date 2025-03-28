import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "../../components/Button";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-custom-green mt-8 flex w-full items-center justify-center gap-6 p-4 text-center lg:mt-14 lg:p-6"
    >
      <h3 className="text-base font-bold text-white lg:text-xl">
        Ready to get started?
      </h3>

      <Button bg="white" text="Get A Free Quote" color="dark-purple" />
    </motion.section>
  );
};

export default CallToAction;
