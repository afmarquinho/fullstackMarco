import Aside from "./Aside";
import Navbar from "./Navbar";
import Projects from "./Projects";


const App = () => {
  return (
    <>
      <Navbar />
      <main className="w-11/12 mx-auto max-w-[800px]">
        <Aside />
        <Projects/>
      </main>
    </>
  );
};
export default App;
