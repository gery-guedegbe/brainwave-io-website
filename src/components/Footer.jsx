import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

// Variantes pour les animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full bg-[#0D1321] px-6 py-10 text-white lg:px-40 lg:py-16"
    >
      <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
        {/* Section Logo & Description */}
        <motion.div variants={fadeIn} className="max-w-md">
          <h2 className="text-xl font-bold">Brainwave.io</h2>

          <p className="mt-3 text-sm text-gray-400">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>

          {/* Réseaux Sociaux avec Animation */}
          <motion.div
            className="mt-4 flex justify-center space-x-4 lg:justify-start"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map(
              (Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer text-gray-400 transition-all hover:text-white"
                >
                  <Icon size={20} />
                </motion.div>
              ),
            )}
          </motion.div>
        </motion.div>

        {/* Liens du Footer */}
        <motion.div
          variants={fadeIn}
          className="mt-10 grid grid-cols-2 gap-8 text-sm lg:mt-0 lg:grid-cols-4"
        >
          {[
            {
              title: "Company",
              links: ["About us", "Contact us", "Careers", "Press"],
            },
            {
              title: "Product",
              links: ["Features", "Pricing", "News", "Help desk", "Support"],
            },
            {
              title: "Services",
              links: [
                "Digital Marketing",
                "Content Writing",
                "SEO for Business",
                "UI Design",
              ],
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms & Conditions", "Return Policy"],
            },
          ].map((section, index) => (
            <motion.div key={index} variants={fadeIn}>
              <h3 className="font-semibold text-gray-300">{section.title}</h3>

              <ul className="mt-2 space-y-2 text-gray-400">
                {section.links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5, color: "white" }}
                    className="cursor-pointer transition-all"
                  >
                    {link}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
