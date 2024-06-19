import { useState } from "react";

const About = () => {
  const [skills, setSkills] = useState(2);
  const [about, setAbout] = useState(1);

  return (
    <div className="w-full pb-10 md:pt-10" id="about">
      <div className="w-11/12 max-w-[800px] mx-auto mt-10">
        <h1 className="uppercase text-md sm:text-xl font-bold text-white pb-5 sticky md:static top-0 text-center bg-opacity-10 md:bg-opacity-100 backdrop-blur-md md:backdrop-blur-0">
          About Me
        </h1>

        <div>
          <div className="flex justify-end">
            <p className="bg-mainOrange text-black p-4 rounded me-0">
              I'm a passionate and creative full stack developer with a love for
              technologies. Known for my problem-solving skills and ability to
              work under pressure, I lead projects with discipline and a
              commitment to continuous learning. My diverse skill set allows me
              to deliver innovative solutions efficiently and effectively.
            </p>
          </div>
        </div>
        <div>
          <h2 className="uppercase text-md sm:text-lg font-bold text-white py-5">
            Skills
          </h2>
          <div>
            <div className="flex gap-3 mb-5">
              <button
                className={`px-2 py-1 w-24 bg-gradient-to-b text-black rounded-md ${
                  skills === 1
                    ? "from-mainBlue to-cyan-700 text-white"
                    : "from-mainOrange to-mainOrange"
                }`}
                onClick={() => setSkills(1)}
              >
                FontEnd
              </button>
              <button
                className={`px-2 py-1 w-24 bg-gradient-to-b text-black rounded-md ${
                  skills === 2
                    ? "from-mainBlue to-cyan-700 text-white"
                    : "from-mainOrange to-mainOrange"
                }`}
                onClick={() => setSkills(2)}
              >
                BackEnd
              </button>
              <button
                className={`px-2 py-1 w-24 bg-gradient-to-b text-black rounded-md ${
                  skills === 3
                    ? "from-mainBlue to-cyan-700 text-white"
                    : "from-mainOrange to-mainOrange"
                }`}
                onClick={() => setSkills(3)}
              >
                Other
              </button>
            </div>
            {skills === 1 ? (
              <>
                <h3 className="text-center uppercase text-black font-semibold bg-cyan-200 p-4 mb-2">
                  Frontend
                </h3>
                <ul className="list-disc ps-5">
                  <li>HTML, CSS, JavaScript, Typescript</li>
                  <li>React Js, Vue Js.</li>
                  <li>
                    Styled Components, Bootstrap, Tailwind Css, Saas, Element
                    Plus, Material UI
                  </li>
                  <li>Redux, Context API, Hooks</li>
                </ul>
              </>
            ) : skills === 2 ? (
              <>
                <h3 className="text-center uppercase text-black font-semibold bg-cyan-200 p-4 mb-2">
                  Backend
                </h3>
                <ul className="list-disc ps-5">
                  <li>Node, Express</li>
                  <li>Mongoose, MongoDB</li>
                  <li>Sequelize,PostgreSQL</li>
                </ul>
              </>
            ) : (
              <>
                <h3 className="text-center uppercase text-black font-semibold bg-cyan-200 p-4 mb-2">
                  Other Skills
                </h3>
                <ul className="list-disc ps-5">
                  <li>Git, Github, Figma</li>
                  <li>Jest</li>
                  <li>Swagger</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
