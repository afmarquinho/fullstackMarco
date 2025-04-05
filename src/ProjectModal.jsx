import GalleryGrid from "./GalleryGrid";


export const ProjectModal = ({ project, setClose }) => {
  const content = {
    jana: {
      title: "Jana Management ERP",
      description: `Jana is a TypeScript-based platform built with the PERN stack to manage bidding processes in metalworking companies.
          The frontend uses React with Redux for global state and Zod for strict validation. The backend, built with Node.js and Express, integrates Sequelize for PostgreSQL data handling.
          It features JWT authentication, file upload with Multer, testing with Jest, and API documentation via Swagger. The architecture is scalable and focused on financial and operational logic.`,
      stack:
        "Typescript, React, Redux, Zod, Express, Postgresql, Sequelize, Jest, Swagger, Bcryptjs",
    },
    kassya: {
      title: "Kassya Management ERP",
      description: `Kassya is a modular ERP built with Next.js, combining SSR and SPA capabilities. Prisma is used as the ORM to efficiently model data in PostgreSQL.
          Global state is managed with Zustand, while Zod and React Hook Form handle validation and form control. The UI is styled with TailwindCSS and features dynamic dashboards with Recharts.
          The system includes Jest for testing and is designed to easily scale functionalities such as procurement, inventory, and control modules.`,
      stack: "Next Js, Node, Prisma, PostgreSql, Zustand, Zod, Recharts",
    },
    tasky: {
      title: "Tasky",
      description: `Tasky is a project and task management frontend developed with React.
          It emphasizes modular components and a clean architecture with persistent data handling.
          While currently frontend-only, it's structured for easy future integration with backend services.`,
      stack: "Stylyled Components, React, Hooks",
    },
    leangineer: {
      title: "Leangineer",
      description: `Leangineer is a promotional website built with the MERN stack to offer business reengineering consulting services.
          The backend API is developed in Express with MongoDB integration, while the frontend in React renders scalable static and dynamic content.
          It’s designed as a lightweight, modular solution that can evolve into a more complex platform with features like contact forms, portfolios, or blog sections.`,
      stack:
        "React, React-Bootstrap, Sytled Components, Redux, Express, Mongoose, Mongo DB",
    },
  };

  console.log(content[project].stack.split(","));

  const onCloseModal = () => {
    setClose(false);
  };

  return (
    <div
      className={`fixed inset-0 bg-amber-800 z-[100] bg-opacity-90 flex justify-center items-center`}
    >
      <div
        className={`bg-indigo-950 w-11/12 max-w-[1100px] p-5 m-auto relative rounded`}
      >
        <button
          className={`bg-white roundedp-2 top-2 right-2 absolute text-indigo-950 font-extrabold px-2 py-1 rounded `}
          onClick={onCloseModal}
        >
          Cerrar
        </button>
        <h2 className="font-black font-archivo-black text-xl md:text-3xl text-white uppercase text-center">
          {content[project].title || "Project"}
        </h2>
        <p>{content[project].description || "Description"}</p>
        <p>
          <span className={`font-medium`}>Stack:</span>{" "}
          {content[project].stack.split(",").map((element, i) => (
            <span
              key={i}
              className={`bg-blue-400 mx-1 bg-opacity-25 px- rounded-full font-medium`}
            >
              {element}
            </span>
          ))}
        </p>
        <GalleryGrid/>
      </div>
    </div>
  );
};
