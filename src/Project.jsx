import { useState } from "react";

const Project = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const onShow = (card) => {
    switch (card) {
      case "card1":
        setShow1(!show1);
        break;
      case "card2":
        setShow2(!show2);
        break;
      case "card3":
        setShow3(!show3);
        break;
      case "card4":
        setShow4(!show4);
        break;
      default:
        break;
    }
  };

  return (
    <section
      className="relative pt-2 pb-4 md:pt-20 w-11/12 max-w-[900px] mx-auto"
      id="projects"
    >
      <h1
        className="uppercase text-2xl md:text-4xl font-black font-archivo-black sticky md:static top-0 text-center text-amber-500 z-30 bg-indigo-950 pb-10"
        id="projects"
      >
        Projects
      </h1>
      {/* cards */}
      <div className={`grid grid-cols-3 grid-rows-4 md:grid-rows-2 gap-5`}>
        {/* Card # 1 */}
        <div
          className={`card col-span-3 md:col-span-2 cursor-pointer`}
          onMouseEnter={() => onShow("card1")}
          onMouseLeave={() => onShow("card1")}
        >
          <div
            className={`absolute  z-[5] bg-kassya bg-no-repeat bg-cover bg-center transition-all duration-700
              ${show1 ? "inset-[-10px]" : "inset-0"}`}
          />
          <div
            className={`card-faded absolute z-10 inset-0 transform transition-transform duration-150 ${
              show1 ? "translate-y-full" : "translate-y-0"
            }`}
          />
          <div
            className={`bg-indigo-950  bg-opacity-80 absolute left-0 right-0 bottom-0 z-10 transition-all duration-500 ease-in-out ${
              show1 ? "top-0" : "top-[100%]"
            }`}
          />
          <h2
            className={`absolute left-0 right-0 font-archivo-black text-base lg:text-lg w-full z-20 text-center transition-all duration-500 ease-in-out ${
              show1
                ? "translate-y-full bottom-48 text-amber-500"
                : "translate-y-0 bottom-5"
            }`}
          >
            Kassya Management - ERP
          </h2>
          <div
            className={`${
              show1 ? "translate-y-0" : "translate-y-full opacity-0"
            } my-2 space-y-2 w-full transform transition-all duration-500 ease-in-out relative z-20`}
          >
            <p className={``}>
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button
              className={`bg-amber-500 hover:bg-amber-400 text-indigo-950 font-medium p-2 transition-colors duration-200`}
            >
              + More Info
            </button>
          </div>
        </div>

        {/* Card # 2 */}
        <div
          className={`card col-span-3 md:col-span-1 cursor-pointer`}
          onMouseEnter={() => onShow("card2")}
          onMouseLeave={() => onShow("card2")}
        >
          <div
            className={`absolute  z-[5] bg-jana bg-no-repeat bg-cover bg-left transition-all duration-700
              ${show2 ? "inset-[-10px]" : "inset-0"}`}
          />
          <div
            className={`card-faded absolute z-10 inset-0 transform transition-transform duration-150 ${
              show2 ? "translate-y-full" : "translate-y-0"
            }`}
          />
          <div
            className={`bg-indigo-950  bg-opacity-80 absolute left-0 right-0 bottom-0 z-10 transition-all duration-500 ease-in-out ${
              show2 ? "top-0" : "top-[100%]"
            }`}
          />
          <h2
            className={`absolute left-0 right-0 font-archivo-black text-base lg:text-lg w-full z-20 text-center transition-all duration-500 ease-in-out ${
              show2
                ? "translate-y-full bottom-48 text-amber-500"
                : "translate-y-0 bottom-5"
            }`}
          >
            Kassya Management - ERP
          </h2>
          <div
            className={`${
              show2 ? "translate-y-0" : "translate-y-full opacity-0"
            } my-2 space-y-2 w-full transform transition-all duration-500 ease-in-out relative z-20`}
          >
            <p className={``}>
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button
              className={`bg-amber-500 hover:bg-amber-400 text-indigo-950 font-medium p-2 transition-colors duration-200`}
            >
              + More Info
            </button>
          </div>
        </div>

        {/* Card # 3 */}
        <div
          className={`card col-span-3 md:col-span-1 cursor-pointer`}
          onMouseEnter={() => onShow("card3")}
          onMouseLeave={() => onShow("card3")}
        >
          <div
            className={`absolute  z-[5] bg-tasky bg-no-repeat bg-cover bg-left transition-all duration-700
              ${show3 ? "inset-[-10px]" : "inset-0"}`}
          />
          <div
            className={`card-faded absolute z-10 inset-0 transform transition-transform duration-150 ${
              show3 ? "translate-y-full" : "translate-y-0"
            }`}
          />
          <div
            className={`bg-indigo-950  bg-opacity-80 absolute left-0 right-0 bottom-0 z-10 transition-all duration-500 ease-in-out ${
              show3 ? "top-0" : "top-[100%]"
            }`}
          />
          <h2
            className={`absolute left-0 right-0 font-archivo-black text-base lg:text-lg w-full z-20 text-center transition-all duration-500 ease-in-out ${
              show3
                ? "translate-y-full bottom-48 text-amber-500"
                : "translate-y-0 bottom-5"
            }`}
          >
            Kassya Management - ERP
          </h2>
          <div
            className={`${
              show3 ? "translate-y-0" : "translate-y-full opacity-0"
            } my-2 space-y-2 w-full transform transition-all duration-500 ease-in-out relative z-20`}
          >
            <p className={``}>
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button
              className={`bg-amber-500 hover:bg-amber-400 text-indigo-950 font-medium p-2 transition-colors duration-200`}
            >
              + More Info
            </button>
          </div>
        </div>

        {/* Card # 4 */}
        <div
          className={`card col-span-3 md:col-span-2 cursor-pointer`}
          onMouseEnter={() => onShow("card4")}
          onMouseLeave={() => onShow("card4")}
        >
          <div
            className={`absolute  z-[5] bg-leangineers bg-no-repeat bg-cover bg-center transition-all duration-700
              ${show4 ? "inset-[-10px]" : "inset-0"}`}
          />
          <div
            className={`card-faded absolute z-10 inset-0 transform transition-transform duration-150 ${
              show4 ? "translate-y-full" : "translate-y-0"
            }`}
          />
          <div
            className={`bg-indigo-950  bg-opacity-80 absolute left-0 right-0 bottom-0 z-10 transition-all duration-500 ease-in-out ${
              show4 ? "top-0" : "top-[100%]"
            }`}
          />
          <h2
            className={`absolute left-0 right-0 font-archivo-black text-base lg:text-lg w-full z-20 text-center transition-all duration-500 ease-in-out ${
              show4
                ? "translate-y-full bottom-48 text-amber-500"
                : "translate-y-0 bottom-5"
            }`}
          >
            Kassya Management - ERP
          </h2>
          <div
            className={`${
              show4 ? "translate-y-0" : "translate-y-full opacity-0"
            } my-2 space-y-2 w-full transform transition-all duration-500 ease-in-out relative z-20`}
          >
            <p className={``}>
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button
              className={`bg-amber-500 hover:bg-amber-400 text-indigo-950 font-medium p-2 transition-colors duration-200`}
            >
              + More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project;