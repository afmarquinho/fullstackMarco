import foto from "./assets/foto.png";

const Foto = () => {
  return (
    <div className="w-[10rem] h-[12rem] overflow-hidden border rounded-lg">
      <img src={foto} alt="" className="w-[10rem] mx-auto"/>
    </div>
  );
};
export default Foto;
