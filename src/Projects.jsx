const Projects = () => {
  return (
    <section
      className="bg-slate-500 relative pt-2 pb-4 md:pt-20 bg-custom-gradient2"
      id="projects"
    >
      <h1
        className="uppercase text-2xl md:text-4xl font-black font-archivo-black sticky md:static top-0 text-center text-amber-500 
        bg-slate-500 md:bg-transparent"
        id="projects"
      >
        Projects
      </h1>
      <div className="w-11/12 max-w-[800px] mx-auto mt-10">
        <p className="">This is just a small piece of each project.</p>

        <div className="jana flex flex-col sm:flex-row gap-4 sm:gap-3 md:gap-5">
          <div className="w-full md-w-1/2">
            <p className="font-black font-archivo-black text-xl md:text-5xl">
              01
            </p>
            <h2 className="font-black font-archivo-black text-xl md:text-3xl text-amber-500 uppercase">
              Jana Management
            </h2>
            <p>
              A PERN (PostgreSQL, Express, React, Node.js) stack tender
              management system for VM Termocalderas, a metals mechanic company,
              to streamline and enhance their tender processes.
            </p>
            <h3 className="text-amber-500">Stack:</h3>
            <p className="text-black font-semibold">
              Typescript, React, Redux, Zod, Node Js, Express, Postgresql, Sequelize,
              Jest, Swagger, Multer, Jsonwebtoken, Bcryptjs.
            </p>
            <div className="flex gap-3 my-2">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
                    fill="#eab224"
                  />
                </svg>
              </button>
              {/* <button className="text-amber-500 border border-mainOrange px-2 rounded hover:bg-mainOrange hover:text-black">
                Live Demo
              </button> */}
            </div>
          </div>
          <div className="bg-jana w-2/3 h-48 md:w-1/2 sm:h-auto bg-center rounded-xl bg-cover"/>
        </div>
        <hr className="my-6 border-1 border-mainOrange" />
        <div className="kassya flex flex-col-reverse sm:flex-row gap-4 sm:gap-3 md:gap-5">
          <div className="bg-kassya w-2/3 h-48 md:w-1/2 sm:h-auto bg-center rounded-xl bg-cover"/>
          <div className="w-full md-w-1/2">
            <p className="font-black font-archivo-black text-xl md:text-5xl text-amber-500 ">
              02
            </p>
            <h2 className="font-black font-archivo-black text-xl md:text-3xl uppercase">
              Kassya Management
            </h2>
            <p>
             It is an ERP for supply and purchases management systems, it comes with a metrics panel to oversee processes.
            </p>
            <h3 className="text-amber-500">Stack:</h3>
            <p className="text-black font-semibold">
             React, Next Js, Node, Express, Prisma, Tailwind, Jest, Zustand, PostgreSql.
            </p>
            <div className="flex gap-3 my-2">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
                    fill="#eab224"
                  />
                </svg>
              </button>
              {/* <button className="text-amber-500 border border-mainOrange px-2 rounded hover:bg-mainOrange hover:text-black">
                Live Demo
              </button> */}
            </div>
          </div>
        </div>
        <hr className="my-6 border-1 border-mainOrange" />
        <div className="leangineers flex flex-col sm:flex-row gap-4 sm:gap-3 md:gap-5">
          <div className="w-full md-w-1/2">
            <p className="font-black font-archivo-black text-xl md:text-5xl">
              03
            </p>
            <h2 className="font-black font-archivo-black text-xl md:text-3xl text-amber-500 uppercase">
              LEAN GINEERS WEB SITE
            </h2>
            <p>
              LeanGineer´s company website showcasing the company&apos;s
              portfolio and service offerings, featuring a blog page and a
              contact form.
            </p>
            <h3 className="text-amber-500">Stack:</h3>
            <p className="text-black font-semibold">
              Html, Css, Js, React, React-Bootstrap, Sytled Components, Redux,
              Node Js, Express, Mongoose, Mongo DB
            </p>
            <div className="flex gap-3 my-2">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
                    fill="#eab224"
                  />
                </svg>
              </button>
              {/* <button className="text-amber-500 border border-mainOrange px-2 rounded hover:bg-mainOrange hover:text-black">
                Live Demo
              </button> */}
            </div>
          </div>
          <div className="bg-leangineers w-2/3 h-48 md:w-1/2 sm:h-auto bg-center rounded-xl bg-cover"/>
        </div>
        <hr className="my-6 border-1 border-mainOrange" />
        <div className="tasky flex flex-col-reverse sm:flex-row gap-4 sm:gap-3 md:gap-5">
          <div className="bg-tasky w-2/3 h-48 md:w-1/2 sm:h-auto bg-center rounded-xl bg-cover"/>
          <div className="w-full md-w-1/2">
            <p className="font-black font-archivo-black text-xl md:text-5xl text-amber-500 ">
              04
            </p>
            <h2 className="font-black font-archivo-black text-xl md:text-3xl uppercase">
              Tasky
            </h2>
            <p>
              Front-end application for managing pending tasks, the form
              includes the necessary validations to create an event. In addition
              to creating events, they can be updated and deleted. Furthermore,
              each event is saved in the user&apos;s browser.
            </p>
            <h3 className="text-amber-500">Stack:</h3>
            <p className="text-black font-semibold">
              Html, Css, Js, Stylyled Components, React, Hooks, Context Api,
              Node Js, Express, Mongoose, Mongo DB.
            </p>
            <div className="flex gap-3 my-2">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
                    fill="#eab224"
                  />
                </svg>
              </button>
              {/* <button className="text-amber-500 border border-mainOrange px-2 rounded hover:bg-mainOrange hover:text-black">
                Live Demo
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
