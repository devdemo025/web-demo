import { motion } from "framer-motion";

const ProjectBackground = () => {
  const linkRightVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transtion: {
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  };
  return (
    <div>
      <div className="w-1 xl:h-[1.16%] max-xl:h-[1.16%]  bg-black absolute left-[50%] max-sm:hidden max-lg:hidden max-xl:hidden" />
      <div
        className="xl:w-[525px] max-xl:w-[100px] lg:w-[442px] max-lg:w-[388px] md:w-[373px] max-md:w-[281px] h-[4px]
         bg-black absolute left-[11.3%] xl:top-[1373px] max-xl:top-[1180px]  md:top-[1120px]   max-sm:hidden"
      />
      <div
        className="w-1 xl:h-[1390px] max-xl:h-[1150px] lg:h-[1100px]  max-lg:h-[1120px] md:h-[910px] max-md:h-[760px] 
      bg-black absolute left-[11.3%] xl:top-[1373px] max-xl:top-[1180px] md:top-[1120px]  max-sm:hidden"
      />
      <motion.div
        variants={linkRightVariants}
        initial="initial"
        whileInView="animate"
        transition={linkRightVariants}
        className="w-3 h-3 rounded-full bg-black absolute xl:left-[11%] md:left-[10.9%] max-md:left-[10.7%] xl:top-[1417px]
         max-xl:top-[1363px] max-lg:top-[1418px] md:top-[1170px] max-md:top-[1210px] max-sm:hidden"
      />
      <motion.div
        variants={linkRightVariants}
        initial="initial"
        s
        whileInView="animate"
        transition={linkRightVariants}
        className="w-3 h-3 rounded-full bg-black absolute xl:left-[11%] md:left-[10.9%] max-md:left-[10.7%]  xl:top-[1700px]
       max-xl:top-[1600px] md:top-[1400px] max-md:top-[1370px] max-sm:hidden"
      />
      <motion.div
        variants={linkRightVariants}
        initial="initial"
        whileInView="animate"
        transition={linkRightVariants}
        className="w-3 h-3 rounded-full bg-black absolute xl:left-[11%] md:left-[10.9%] max-md:left-[10.7%] 
         xl:top-[2350px] max-xl:top-[2050px] md:top-[1800px] max-md:top-[1680px] max-sm:hidden"
      />
    </div>
  );
  s;
};

export default ProjectBackground;
