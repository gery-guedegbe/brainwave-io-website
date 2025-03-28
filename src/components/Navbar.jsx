import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { motion } from "motion/react";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState();

  const navItems = [
    { id: 1, label: "Demos", href: "#demos" },
    { id: 2, label: "Pages", href: "#pages" },
    { id: 3, label: "Support", href: "#support" },
    { id: 4, label: "Contact", href: "#contact" },
  ];

  const handleClick = () => {
    window.location.reload();
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="flex w-full items-center justify-between px-3 py-2 lg:px-8 lg:py-4">
      <motion.h1
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={handleClick}
        translate="no"
        className="text-dark-purple text-base font-bold lg:text-2xl"
      >
        Brainwave.io
      </motion.h1>

      <ul className="text-dark-purple hidden items-center justify-center gap-8 text-sm font-semibold lg:flex">
        {navItems.map((item, index) => (
          <motion.li
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
            key={index}
            className="cursor-pointer"
          >
            <a href={item.href}>{item.label}</a>
          </motion.li>
        ))}

        <motion.li
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <button className="bg-custom-blue hover:bg-custom-blue/90 cursor-pointer rounded-lg px-4 py-3 text-sm text-white outline-none">
            Get A Free Quote
          </button>
        </motion.li>
      </ul>

      <div className="z-50 flex lg:hidden">
        <button onClick={() => setIsToggled(!isToggled)}>
          <IoMenu size={28} />
        </button>
      </div>

      {isToggled && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-0 z-50 h-full w-full flex-col items-center justify-center bg-white p-4 lg:hidden"
        >
          <div className="flex w-full items-center justify-between">
            <motion.h1
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onClick={handleClick}
              translate="no"
              className="text-dark-purple 50 z-50 text-base font-bold lg:text-2xl"
            >
              Brainwave.io
            </motion.h1>

            <button onClick={() => setIsToggled(!isToggled)}>
              <IoClose size={28} />
            </button>
          </div>

          <ul>
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                className="py-4"
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              >
                <a href={item.href}>{item.label}</a>
              </motion.li>
            ))}

            <motion.li
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-2"
            >
              <button className="bg-custom-blue hover:bg-custom-blue/90 cursor-pointer rounded-lg px-2 py-3 text-xs font-semibold text-white outline-none">
                Get A Free Quote
              </button>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
