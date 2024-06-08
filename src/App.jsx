import About from "./About";
import Aside from "./Aside";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Aside />
        <Projects/>
        <About/>
        <Contact></Contact>
      </main>
    </>
  );
};
export default App;
