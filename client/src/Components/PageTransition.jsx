import { motion } from "framer-motion";

// Alternative: Luxury Staggered Reveal Transition
const PageTransition = ({ children }) => {
  return (
    <>
      {/* Staggered Curtain Panels - Enter */}
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={`enter-${index}`}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1],
            delay: index * 0.08
          }}
          style={{
            position: "fixed",
            top: 0,
            left: `${index * 20}%`,
            width: "20%",
            height: "100vh",
            background: index % 2 === 0 
              ? "linear-gradient(180deg, #273272 0%, #1a1f4d 100%)"
              : "linear-gradient(180deg, #1a1f4d 0%, #273272 100%)",
            transformOrigin: "top",
            zIndex: 9999,
            pointerEvents: "none"
          }}
        />
      ))}

      {/* Staggered Curtain Panels - Exit */}
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={`exit-${index}`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
            delay: index * 0.06
          }}
          style={{
            position: "fixed",
            top: 0,
            left: `${index * 20}%`,
            width: "20%",
            height: "100vh",
          background: index % 2 === 0 
  ? "linear-gradient(180deg, #A6223C 0%, #A6223C 100%)"
  : "linear-gradient(180deg, #102147 0%, #A6223C 100%)",

            transformOrigin: "bottom",
            zIndex: 9999,
            pointerEvents: "none"
          }}
        />
      ))}

      {/* Shimmer Effect */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        exit={{ x: "-100%" }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.2
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)",
          zIndex: 10000,
          pointerEvents: "none"
        }}
      />

      {/* Content Animation */}
      <motion.div
        initial={{ 
          opacity: 0, 
          scale: 0.95,
          filter: "blur(8px)"
        }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          filter: "blur(0px)"
        }}
        exit={{ 
          opacity: 0, 
          scale: 1.05,
          filter: "blur(8px)"
        }}
        transition={{
          duration: 0.6,
          ease: [0.43, 0.13, 0.23, 0.96],
          delay: 0.4
        }}
        style={{ width: "100%", minHeight: "100vh" }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;