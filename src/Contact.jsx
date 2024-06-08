const Contact = () => {
        
  return (
    <div className="w-full pb-10">
      <div className="w-11/12 max-w-[800px] mx-auto mt-10">
        <h1 className="uppercase text-md sm:text-xl font-bold text-mainBlue py-5 text-center">
          Hire me
        </h1>
        <p className="text-center">
          Let's work together. I can be the best addition to your team. Get in
          touch today!
        </p>
        <p className="p-2 rounded-[25rem] w-2/3 sm:w-[15rem] mx-auto text-center mt-4 bg-cyan-500 text-black">
          fernandez9029@gmail.com

        </p>
        <div className="flex justify-center gap-2 mt-5">
          <button>LinkedIn</button>
          <button>GitHub</button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
