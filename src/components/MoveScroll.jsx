import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const MoveScroll = ({ children, width = "fit-content" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start({
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.2,
              ease: [0.17, 0.67, 0.83, 0.67],
            },
          }); // Start the animation
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <div ref={ref}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={controls}>
        {children}
      </motion.div>
    </div>
  );
};

export default MoveScroll;
