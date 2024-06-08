const Navbar = () => {
  return (
    <div className="hidden md:block border-b border-b-mainOrange fixed w-full bg-opacity-10 backdrop-blur-md z-10">
      <div className="w-11/12 mx-auto max-w-[1200px] p-5 pe-10 flex justify-end items-center gap-5 text-blue">
        <a href="#aside" className="hover:text-mainOrange">
          Home
        </a>
        <a href="#projects" className="hover:text-mainOrange">
          Projects
        </a>
        <a href="#about" className="hover:text-mainOrange">
          About
        </a>
        <a href="#contact" className="hover:text-mainOrange">
          Contact
        </a>
      </div>
    </div>
  );
};
export default Navbar;
