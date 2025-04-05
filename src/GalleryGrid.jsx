import img1 from "./assets/kassya/1.jpg";
import img2 from "./assets/kassya/5.jpg";
import img3 from "./assets/kassya/3.jpg";
import img4 from "./assets/kassya/4.jpg";
import img5 from "./assets/kassya/7.jpg";
import img6 from "./assets/kassya/2.jpg";

const GalleryGrid = () => {
  return (
    <div
      className={`h-96 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5`}
    >
      <div className={`bg-amber-500 p-1 md:p-2 rounded-md overflow-hidden col-span-2`}>
        <img src={img1} alt="titulo" className={`w-full h-full hover:scale-110 transition-transform duration-500`} />
      </div>
      <div className={`bg-amber-500 p-1 md:p-2 rounded-md overflow-hidden row-span-2`}>
        <img src={img2} alt="titulo" className={`rounded w-full h-full hover:scale-110 transition-transform duration-500`} />
      </div>
      <div className={`bg-amber-500 p-1 md:p-2 rounded-md overflow-hidden`}>
        {" "}
        <img src={img3} alt="titulo" className={`rounded w-full h-full hover:scale-110 transition-transform duration-500`} />
      </div>
      <div className={`bg-amber-500 p-1 md:p-2 rounded-md overflow-hidden`}>
        {" "}
        <img src={img4} alt="titulo" className={`rounded w-full h-full hover:scale-110 transition-transform duration-500`} />
      </div>
      <div className={`bg-amber-500 p-1 md:p-2 rounded-md overflow-hidden`}>
        {" "}
        <img src={img5} alt="titulo" className={`rounded w-full h-full hover:scale-110 transition-transform duration-500`} />
      </div>
      <div className={`bg-amber-500 p-1 md:p-2 rounded-md overflow-hidden`}>
        {" "}
        <img src={img6} alt="titulo" className={`rounded w-full h-full hover:scale-110 transition-transform duration-500`} />
      </div>
    </div>
  );
};
export default GalleryGrid;
