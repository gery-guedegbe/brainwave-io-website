import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import img_1 from "../../assets/''Fichier 14.png";
import img_2 from "../../assets/''Fichier 15.png";
import img_3 from "../../assets/''Fichier 16.png";
import ServiceCard from "../../components/ServiceCard";

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const serviceItems = [
    {
      id: 1,
      title: "Digital Marketing",
      desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      link: "#",
      img: img_1,
    },
    {
      id: 2,
      title: "Business Growth",
      desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      link: "#",
      img: img_2,
    },
    {
      id: 3,
      title: "Content Marketing",
      desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      link: "#",
      img: img_3,
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-custom-gray mt-10 flex w-full flex-col gap-6 px-4 py-4 lg:gap-12 lg:px-40 lg:py-8"
    >
      {/* Titre et description */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col items-center space-y-3 py-6 text-center"
      >
        <h3 className="text-dark-purple text-base font-bold lg:text-xl">
          Services we offer for you
        </h3>

        <p className="text-dark-purple/60 max-w-full text-sm font-medium lg:max-w-lg lg:text-base">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </motion.div>

      {/* Cartes de services animées */}
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {serviceItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 * index, ease: "easeOut" }}
          >
            <ServiceCard
              title={item.title}
              desc={item.desc}
              img={item.img}
              link={item.link}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ServicesSection;
