import { motion } from "framer-motion";

const HeroBackground = () => {
  const linkLeftVaraints = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  };

  const linkRightVaraints = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  };
  return (
    <div>
      <div className="w-1 h-[561px] bg-black absolute left-[50%] max-sm:hidden" />

      <motion.div
        variants={linkLeftVaraints}
        initial="initial"
        whileInView="animate"
        transition={linkLeftVaraints}
        className="w-3 h-3 rounded-full bg-black absolute xl:left-[49.70%] max-xl:left-[49.7%] 
        max-lg:left-[49.6%]   max-md:left-[49.5%]  
        xl:top-[170px]  md:top-[160px] max-md:top-[150px]  max-sm:hidden"
      />
      <motion.div
        variants={linkRightVaraints}
        initial="initial"
        whileInView="animate"
        transition={linkRightVaraints}
        className="w-3 h-3 rounded-full bg-black absolute xl:left-[49.70%] max-xl:left-[49.7%]  max-lg:left-[49.6%]
        max-md:left-[49.5%]  xl:top-[280px] md:top-[270px]  max-md:top-[267px] max-sm:hidden"
      />
      <motion.div
        variants={linkLeftVaraints}
        initial="initial"
        whileInView="animate"
        transition={linkLeftVaraints}
        className="w-3 h-3 rounded-full bg-black absolute xl:left-[49.70%] max-xl:left-[49.7%]
         max-md:left-[49.5%] max-lg:left-[49.6%] xl:top-[417px] md:top-[400px] max-md:top-[380px] max-sm:hidden"
      />
      <motion.div
        variants={linkRightVaraints}
        initial="initial"
        whileInView="animate"
        transition={linkRightVaraints}
        className="w-3 h-3 rounded-full bg-black absolute xl:left-[49.70%] max-xl:left-[49.7%]  
        max-lg:left-[49.6%] max-md:left-[49.5%] xl:top-[547px] md:top-[454px] max-md:top-[450px] max-sm:hidden"
      />
    </div>
  );
};

export default HeroBackground;
