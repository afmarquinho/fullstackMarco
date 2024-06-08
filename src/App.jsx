import Aside from "./Aside";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="w-11/12 mx-auto max-w-[1200px]">
        <Aside />
        
      </main>
    </>
  );
};
export default App;
