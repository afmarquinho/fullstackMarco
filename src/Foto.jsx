import foto from "./assets/foto.png";

const Foto = () => {
  return (
    <div className="h-[20rem] w-auto sm:w-[20rem] sm:h-auto p-1 rounded-lg overflow-hidden">
      <div className="contenedor relative w-full h-full rounded-lg contenedor">
        <div className="w-full h-full overflow-hidden rounded-lg bg-mainBg flex justify-center items-center">
          <img src={foto} alt="" className="w-full  mx-auto bg-mainBlue" />
        </div>
      </div>
    </div>
  );
};
export default Foto;
