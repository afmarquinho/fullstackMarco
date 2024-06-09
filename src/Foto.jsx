import { motion } from "framer-motion";
import foto from "./assets/foto.png";

const Foto = () => {
  return (
    <motion.div
      className="w-[15rem] h-[15rem] md:w-1/3 md:h-[25rem] rounded-lg overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay:1.5 }}
    >
      <div className="contenedor relative w-full h-full rounded-lg">
        <div className="foto w-full h-full overflow-hidden rounded-lg flex justify-center items-center bg-no-repeat bg-top md:bg-center bg-cover"></div>
      </div>
    </motion.div>
  );
};
export default Foto;
