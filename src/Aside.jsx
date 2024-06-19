import Foto from "./Foto";
import html from "./assets/icons/html.png";
import css from "./assets/icons/css.png";
import js from "./assets/icons/js.png";
import ts from "./assets/icons/ts.png";
import jest from "./assets/icons/jest.png";
import mongo from "./assets/icons/mongo.jpg";
import postgres from "./assets/icons/postgresql.png";
import vue from "./assets/icons/vue.png";
import react from "./assets/icons/React.webp";
import { motion } from "framer-motion";

const Aside = () => {
  return (
    <aside className="pt-4 sm:pt-12" id="home">
      <div className="w-11/12 max-w-[800px] mx-auto pt-5 md:pt-0 sm:min-h-screen">
        <motion.div
          className=" md:justify-between gap-4 md:gap-20"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 4 }}
        >
          <motion.p
            className="text-lg sm:text-xl md:text-4xl text-mainOrange md:pt-10"
            initial={{ y: "100vh", x: "-500vw" }}
            animate={{ y: 0, x: 0 }}
            transition={{ duration: 3 }}
          >
            Full Stack Developer
          </motion.p>
          <motion.h1
            className="font-black sm:font-semibold text-3xl sm:text-5xl md:text-7xl mb-3 text-white"
            initial={{ x: "-100vw", y: "-1000vh" }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 3 }}
          >
            Marco Fernández
          </motion.h1>
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center">
            <div className="space-y-3 w-full md:w-2/3">
              <p className="">
                Hello! I'm Marco, the best versatile developer specializing in
                creating{" "}
                <span className="text-mainOrange">web apps</span> for
                businesses, education, e-commerce, social networks, and more.
                Let's bring your ideas to life with innovative solutions!
              </p>
              <p className="">
                <span className="text-mainOrange"> &lt;make&gt;</span> it happen
                <span className="text-mainOrange">&lt;/make&gt;</span>
              </p>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
              >
                <h3 className="font-semibold text-mainOrange">
                  Social networks
                </h3>
                <div className="flex gap-5 ">
                  <a
                    href="https://www.linkedin.com/in/marco-fernandez-acosta/"
                    target="_blank"
                    className="sociales linkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        fill="#eab224"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/afmarquinho"
                    target="_blank"
                    className="sociales github"
                  >
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
                  </a>
                  <a
                    href="https://t.me/Marquinhos365"
                    target="_blank"
                    className="sociales telegram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Telegram"
                      role="img"
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                    >
                      <rect width="512" height="512" rx="15%" fill="#eab224" />
                      <path
                        fill="#07070f"
                        d="M199 404c-11 0-10-4-13-14l-32-105 245-144"
                      />
                      <path
                        fill="#07070f"
                        d="M199 404c7 0 11-4 16-8l45-43-56-34"
                      />
                      <path
                        fill="#07070f"
                        d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
              <div className="space-y-2">
                <p className="text-white">Tech Stack</p>
                <div className="flex flex-wrap gap-4">
                  <img src={html} alt="html" srcset="" className="h-6" />
                  <img src={css} alt="html" srcset="" className="h-6" />
                  <img src={js} alt="html" srcset="" className="h-6" />
                  <img src={ts} alt="html" srcset="" className="h-6" />
                  <img src={react} alt="html" srcset="" className="h-6" />
                  <img src={vue} alt="html" srcset="" className="h-6" />
                  <img src={mongo} alt="html" srcset="" className="h-6" />
                  <img src={postgres} alt="html" srcset="" className="h-10" />
                  <img src={jest} alt="html" srcset="" className="h-8" />
                </div>
              </div>
              <p>
                To konow more abour me, download the CV on the botton below.
              </p>
              <div className="flex justify-start gap-2 sm:gap-3">
                <motion.button
                  className=" text-black border border-mainOrange bg-mainOrange rounded-[10rem] hover:bg-mainBlue hover:border-mainBlue transition-all text-sm lg:text-base px-3 py-2 sm:p-2 sm:w-32"
                  initial={{ x: "-1000vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 3 }}
                >
                  Download CV
                </motion.button>
                <motion.a
                  className="text-center text-white border border-white rounded-[10rem] hover:bg-baseBlue hover:border-baseBlue hover:text-black transition-all text-sm lg:text-base px-3 py-2 sm:p-2 sm:w-32"
                  initial={{ x: "1000vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 3 }}
                  href="#about"
                >
                  Contact info
                </motion.a>
              </div>
            </div>
            <Foto />
          </div>
        </motion.div>
      </div>
    </aside>
  );
};
export default Aside;
