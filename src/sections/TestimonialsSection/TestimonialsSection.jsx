import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import avatar_1 from "../../assets/''Fichier 30.png";
import avatar_2 from "../../assets/''Fichier 27.png";
import avatar_3 from "../../assets/''Fichier 25.png";
import TestimonialCard from "../../components/TestimonialCard";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const testimonialItems = [
    {
      id: 1,
      name: "Isabella Chavez",
      profession: "Graphic Designer",
      desc: "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      img: avatar_1,
    },
    {
      id: 2,
      name: "Curtis Rhodes",
      profession: "Digital Marketer",
      desc: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
      img: avatar_2,
    },
    {
      id: 3,
      name: "Lucas Mann",
      profession: "Co Founder",
      desc: "Must have book for all, who want to be Product Designer or Interaction Designer.",
      img: avatar_3,
    },
  ];

  return (
    <section
      ref={ref}
      className="mt-8 flex w-full flex-col gap-6 bg-white px-4 py-4 lg:gap-12 lg:px-40 lg:py-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-4 flex flex-col items-center space-y-3 text-center"
      >
        <h3 className="text-dark-purple text-base font-bold lg:text-xl">
          What people say about us
        </h3>

        <p className="text-dark-purple/60 max-w-full text-sm font-medium lg:max-w-lg lg:text-base">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonialItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <TestimonialCard
              name={item.name}
              profession={item.profession}
              img={item.img}
              desc={item.desc}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
