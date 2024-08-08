// import html from "./assets/icons/html.png";
// import css from "./assets/icons/css.png";
// import js from "./assets/icons/js.png";
// import ts from "./assets/icons/ts.png";
// import jest from "./assets/icons/jest.png";
// import mongo from "./assets/icons/mongo.jpg";
// import postgres from "./assets/icons/postgresql.png";
// import vue from "./assets/icons/vue.png";
// import react from "./assets/icons/React.webp";

const Hero = () => {
  return (
    <>
      <div className="bg-[url('./assets/fondo.jpg')] bg-fixed bg-top bg-no-repeat bg-cover pt-1 md:pt-20  h-screen relative" id="home">
        {/* Capa degradda */}
        <div className="h-screen absolute bg-custom-gradient top-0 bottom-0 right-0 left-0"></div>

        {/* Contenido del Hero */}
        <div className="relative w-full h-full max-w-[1200px] flex flex-col md:flex-row mx-auto">
          {/* Espacio para la foto */}
          <div className="w-full md:w-1/3 h-full bg-[url('./assets/foto.png')] bg-top md:bg-center bg-cover bg-no-repeat"></div>

          {/* Texto del Hero */}
          <div className="w-11/12 md:w-2/3 flex justify-center items-center mx-auto">
            <div className="w-full max-w-[35rem] space-y-0 md:space-y-10">
              <p className="text-2xl md:text-5xl font-archivo-black">
                <span className=" md:text-amber-500">I&apos;m</span> full Stack
                Developer <br />{" "}
                <span className="md:text-amber-500">Marco Fernández</span>
              </p>
              {/* Presentacion */}
              <p className="md:text-xl bg-indigo-950 md:bg-transparent md:text p-2">
                Innovative Full Stack Developer driven by perfection and
                continuous learning. Transforming your boldest ideas into
                reality with creativity and precision. Let&apos;s create
                something extraordinary together.
              </p>
            </div>
            {/* Fin Presetancion */}
          </div>
          {/* Fin del texto del hero */}
        </div>
        {/* Fin del contenido del Hero */}

        {/* <p className="">
            <span className="text-mainOrange"> &lt;make&gt;</span> it happen
            <span className="text-mainOrange">&lt;/make&gt;</span>
          </p> */}

        {/* <div className="space-y-2">
            <p className="text-white">Tech Stack</p>
            <div className="flex flex-wrap gap-4">
              <img src={html} alt="html" className="h-6" />
              <img src={css} alt="html" className="h-6" />
              <img src={js} alt="html" className="h-6" />
              <img src={ts} alt="html" className="h-6" />
              <img src={react} alt="html" className="h-6" />
              <img src={vue} alt="html" className="h-6" />
              <img src={mongo} alt="html" className="h-6" />
              <img src={postgres} alt="html" className="h-10" />
              <img src={jest} alt="html" className="h-8" />
            </div>
          </div> */}
        {/* <p>To konow more abour me, download the CV on the botton below.</p>
          <div className="flex justify-start gap-2 sm:gap-3">
            <button>Download CV</button>
            <a>Contact info</a>
          </div> */}
      </div>
    </>
  );
};
export default Hero;
