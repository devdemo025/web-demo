import { motion } from "framer-motion";

const AboutBackground = () => {
  const linkLeftVariants = {
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
    <div className="">
      <div
        className="w-1 xl:h-[23%] max-xl:h-[23.8%] lg:h-[24.3%] max-lg:h-[23.6%]
       md:h-[25.2%] max-md:h-[28.2%] bg-black absolute left-[50%] max-sm:hidden "
      />
      <motion.div
        variants={linkLeftVariants}
        initial="initial"
        whileInView="animate"
        transition={linkLeftVariants}
        className="w-3 h-3 rounded-full bg-black absolute xl:left-[49.70%] max-xl:left-[49.7%] 
         max-lg:left-[49.6%] max-md:left-[49.5%]  xl:top-[695px] max-xl:top-[595px] md:top-[563px] max-md:top-[518px] max-sm:hidden"
      />
      <motion.div
        variants={linkRightVaraints}
        initial="initial"
        whileInView="animate"
        transistion={linkRightVaraints}
        className="w-3 h-3 rounded-full bg-black absolute xl:left-[49.70%] max-xl:left-[49.7%] 
         max-lg:left-[49.6%] max-md:left-[49.5%] xl:top-[850px] max-xl:top-[790px] md:top-[740px] max-md:top-[650px] max-sm:hidden"
      />
      <motion.div
        variants={linkLeftVariants}
        initial="initial"
        whileInView="animate"
        transition={linkLeftVariants}
        className="w-3 h-3 rounded-full bg-black absolute xl:left-[49.70%] max-xl:left-[49.7%] 
         max-lg:left-[49.6%] max-md:left-[49.5%] xl:top-[980px]  max-xl:top-[880px] md:top-[800px] max-md:top-[770px] max-sm:hidden"
      />
      <motion.div
        variants={linkRightVaraints}
        initial="initial"
        whileInView="animate"
        transition={linkRightVaraints}
        className="w-3 h-3 rounded-full bg-black absolute xl:left-[49.70%] max-xl:left-[49.7%]  
        max-lg:left-[49.6%] max-md:left-[49.5%] xl:top-[1120px] max-xl:top-[1100px] md:top-[995px] max-md:top-[995px]  max-sm:hidden"
      />
    </div>
  );
};

export default AboutBackground;
