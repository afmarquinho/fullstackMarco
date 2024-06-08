import { useState } from "react";

const About = () => {
  const [skills, setSkills] = useState(2);

  return (
    <div className="w-full bg-gradient-to-bl from-deepBg pb-10" id="about">
      <div className="w-11/12 max-w-[800px] mx-auto mt-10">
        <h1 className="uppercase text-md sm:text-xl font-bold text-mainBlue py-5 text-center">
          About Me
        </h1>
        <h2 className="uppercase text-md sm:text-lg font-bold text-mainOrange py-5">
          Skills
        </h2>
        <div>
          <div className="flex gap-3 mb-5">
            <button
              className={`px-2 py-1 w-24 bg-gradient-to-b text-black rounded-md ${
                skills === 1 ? "from-mainBlue to-cyan-800 text-white" : "from-mainOrange to-amber-600"
              }`}
              onClick={() => setSkills(1)}
            >
              FontEnd
            </button>
            <button
              className={`px-2 py-1 w-24 bg-gradient-to-b text-black rounded-md ${
                skills === 2 ? "from-mainBlue to-cyan-800 text-white" : "from-mainOrange to-amber-600"
              }`}
              onClick={() => setSkills(2)}
            >
              BackEnd
            </button>
            <button
              className={`px-2 py-1 w-24 bg-gradient-to-b text-black rounded-md ${
                skills === 3 ? "from-mainBlue to-cyan-800 text-white" : "from-mainOrange to-amber-600"
              }`}
              onClick={() => setSkills(3)}
            >
              Other
            </button>
          </div>
          {skills === 1 ? (
            <ul className="list-disc">
              <h3 className="text-center uppercase text-white font-semibold">
                Frontend
              </h3>
              <li>HTML, CSS, JavaScript, Typescript</li>
              <li>React Js, Vue Js.</li>
              <li>
                Styled Components, Bootstrap, Tailwind Css, Saas, Element Plus,
                Material UI
              </li>
              <li>Redux, Context API, Hooks</li>
            </ul>
          ) : skills === 2 ? (
            <ul className="list-disc">
              <h3 className="text-center uppercase text-white font-semibold">
                Backend
              </h3>
              <li>Node, Express</li>
              <li>Mongoose, MongoDB</li>
              <li>Sequelize,PostgreSQL</li>
            </ul>
          ) : (
            <ul className="list-disc">
              <h3 className="text-center uppercase text-white font-semibold">
                Other Skills
              </h3>
              <li>Git, Github, Figma</li>
              <li>Jest</li>
              <li>Swagger</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default About;
