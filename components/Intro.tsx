import { motion } from "framer-motion";

import Logo from "@/components/Logo";

function Intro() {
  return (
    <motion.div
      className="fixed left-0 top-0 z-[3] flex h-screen w-full items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1, duration: 1, ease: "easeOut" }} // ✅ 1.5초 동안 서서히 사라짐
    >
      <div className="w-[100px] mo:w-[80px]">
        <Logo type="icon" />
      </div>
    </motion.div>
  );
}

export default Intro;
