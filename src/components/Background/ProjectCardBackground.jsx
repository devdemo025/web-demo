import { motion } from "framer-motion";
const ProjectCardBackground = () => {
  const linkRightVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transtion: {
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  };
  return (
    <div className="z-1 relative h-[100%] -top-[1015px]  left-[10.8%]  w-10 ">
      <div className="w-1 h-[1370px] bg-black relative -top-10 left-[11.3%]  max-sm:hidden" />
      <motion.div
        variants={linkRightVariants}
        initial="initial"
        whileInView="animate"
        transition={linkRightVariants}
        className="w-3 h-3 rounded-full bg-black relative  -top-[1355px] max-sm:hidden"
      />
      <motion.div
        variants={linkRightVariants}
        initial="initial"
        whileInView="animate"
        transition={linkRightVariants}
        className="w-3 h-3 rounded-full bg-black relative  -top-[1090px] max-sm:hidden"
      />
      <motion.div
        variants={linkRightVariants}
        initial="initial"
        whileInView="animate"
        transition={linkRightVariants}
        className="w-3 h-3 rounded-full bg-black relative -top-[450px] max-sm:hidden"
      />
    </div>
  );
};

export default ProjectCardBackground;
