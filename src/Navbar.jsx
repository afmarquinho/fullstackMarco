const Navbar = () => {
  return (
    <div className=" border-b border-b-orange fixed w-full bg-opacity-10 backdrop-blur-md">
      <div className="w-11/12 mx-auto max-w-[1200px] p-5 pe-10 flex justify-end items-center gap-5 text-blue">
        <a href="#" className="hover:font-black">
          Home
        </a>
        <a href="#" className="hover:font-black">
          About
        </a>
        <a href="#" className="hover:font-black">
          Projects
        </a>
        <a href="#" className="hover:font-black">
          Contact
        </a>
      </div>
    </div>
  );
};
export default Navbar;
