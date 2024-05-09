import { motion } from "framer-motion";

const ContactBackground = () => {
  const linkBottomVaraints = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  };
  return (
    <div className="">
      <div
        className="w-1 h-[55px] bg-black absolute xl:left-[11.3%] max-xl:left-[11.3%] lg:left-[11.3%]
        max-lg:left-[11.3%] md:left-[11.3%] max-md:left-[11.3%] max-sm:left-[5.3%] sm:left-[5%]  xl:-top-[10px] 
      max-xl:top-[2000px] lg:top-[2070px]  max-lg:top-[2300px] md:top-[0px] max-md:top-[0px] max-sm:hidden "
      />
      <motion.div
        variants={linkBottomVaraints}
        initial="initial"
        whileInView="animate"
        transition={linkBottomVaraints}
        className="w-3 h-3 rounded-full bg-black absolute xl:left-[11%] md:left-[10.9%] max-md:left-[10.7%]  xl:top-[45px] max-xl:top-[2320px]
         lg:top-[2270px]  max-lg:top-[2350px] md:top-[45px] max-md:top-[45px] max-sm:hidden"
      />
    </div>
  );
};

export default ContactBackground;
