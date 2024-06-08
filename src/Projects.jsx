const Projects = () => {
  return (
    <div className="w-full">
      <div className="w-11/12 max-w-[800px] mx-auto mt-10">
        <h1 className="uppercase text-md sm:text-xl font-bold text-mainBlue pb-5">
          Projects
        </h1>
        <p className="">This is just a small piece of the full App.</p>
        <p className="mb-5">Click on the image to live a demo</p>
        <div className="jana flex flex-col sm:flex-row gap-5 sm:gap-7 md:gap-20">
          <div className="w-full md-w-1/2">
            <p className="font-black text-5xl">01</p>
            <h2 className="font-bold text-lg text-mainOrange uppercase">
              Jana Management
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              facilis delectus ducimus dignissimos! Cupiditate eos sed hic
              quisquam veritatis deserunt!
            </p>
            <h3>Stack</h3>
            <p>React</p>
            <button>Github</button>
            <button>Live Demo</button>
          </div>
          <div className="jana-image w-full md-w-1/2 bg-center rounded-xl bg-cover bg-none"></div>
        </div>
        <hr className="my-6 border-1 border-mainOrange" />
        <div className=" kassya flex flex-col sm:flex-row gap-5 sm:gap-7 md:gap-20">
          <div className="kassya-image w-full md-w-1/2 bg-center bg-cover bg-none rounded-xl"></div>
          <div className="w-full md-w-1/2">
            <p className="font-black text-5xl">02</p>
            <h2 className="font-bold text-lg text-mainBlue uppercase">
              Kassya Management
            </h2>
            <p>
              Fullstack (MERN) project in development, it is an ERP for supply
              chain processes management. It consists of 3 modules, purchasing,
              suppliers and inventory.
            </p>
            <h3>Stack</h3>
            <p>React</p>
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
        <hr className="my-6 border-1 border-mainOrange" />
        <div className="leangineers flex flex-col sm:flex-row gap-5 sm:gap-7 md:gap-20">
          <div className="w-full md-w-1/2">
            <p className="font-black text-5xl">03</p>
            <h2 className="font-bold text-lg text-mainOrange uppercase">
              LEAN GINEERS WEB SITE
            </h2>
            <p>
              LeanGineer´s company website showcasing the company's portfolio
              and service offerings, featuring a blog page and a contact form.
            </p>
            <h3>Stack</h3>
            <p>React</p>
            <button>Github</button>
            <button>Live Demo</button>
          </div>
          <div className="leangineers-image w-full md-w-1/2 bg-center bg-cover rounded-xl"></div>
        </div>
        <hr className="my-6 border-1 border-mainOrange" />
        <div className="tasky flex flex-col sm:flex-row gap-5 sm:gap-7 md:gap-20">
          <div className="tasky-image w-full md-w-1/2 bg-center bg-cover bg-none rounded-xl"></div>
          <div className="w-full md-w-1/2">
            <p className="font-black text-5xl">04</p>
            <h2 className="font-bold text-lg text-mainBlue uppercase">Tasky</h2>
            <p>
              Front-end application for managing pending tasks, the form
              includes the necessary validations to create an event. In addition
              to creating events, they can be updated and deleted. Furthermore,
              each event is saved in the user's browser.
            </p>
            <h3>Stack</h3>
            <p>React</p>
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
