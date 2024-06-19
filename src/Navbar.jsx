import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      className="hidden md:block border-b border-b-mainOrange fixed w-full bg-opacity-10 backdrop-blur-md z-10 bg-mainOrange"
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 25 }}
    >
      <div
        className="w-11/12 mx-auto max-w-[1200px] p-5 pe-10 text-blue 
      text-mainOrange flex justify-between"
      >
        <div className="flex gap-3">
          <h2 className="sm:text-2xl lg:text-4xl font-semibold">DevFolio</h2>
          <h1 className="sm:text-2xl lg:text-4xl  sm:font-semibold lg:font-black text-mainBlue">Marco Fernández</h1>
        </div>
        <div className="flex justify-end items-center gap-5">
          <a href="#home" className="hover:text-white">
            Home
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default Navbar;
