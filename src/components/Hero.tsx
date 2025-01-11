import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export const Hero = () => {
  const { scrollY } = useScroll();
  const [ref] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const leftSlide = useTransform(scrollY, [0, 300], [0, -100]);
  const rightSlide = useTransform(scrollY, [0, 300], [0, 100]);
  const yPos = useTransform(scrollY, [0, 300], [0, 50]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialAnimationComplete(true);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/90 to-primary">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50" />
        <img
          src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&q=80&w=1920&h=1080&fit=crop"
          alt="Servicio de mudanzas profesional"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-transparent" />
      <motion.div
        ref={ref}
        style={initialAnimationComplete ? { opacity, y: yPos } : {}}
        className="container mx-auto px-4 z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            className="text-7xl md:text-9xl font-bold text-white mb-8 leading-tight"
          >
            <motion.span
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 1,
                delay: 0.4
              }}
              style={initialAnimationComplete ? { x: leftSlide } : {}}
              className="block"
            >
              El Futuro
            </motion.span>
            <motion.span
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 1,
                delay: 0.4
              }}
              style={initialAnimationComplete ? { x: rightSlide } : {}}
              className="text-accent block"
            >
              del Moving
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 1,
              delay: 0.4
            }}
            style={initialAnimationComplete ? { x: leftSlide } : {}}
            className="text-2xl md:text-3xl text-white/90 mb-12 max-w-2xl"
          >
            Transformando la experiencia de mudanza con tecnología y excelencia
          </motion.p>
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 1,
              delay: 0.6
            }}
            style={initialAnimationComplete ? { x: rightSlide } : {}}
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#FB923C" }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-12 py-6 rounded-full text-xl font-semibold hover:bg-accent/90 transition-colors"
            >
              Iniciar Mudanza
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white"
        >
          <svg 
            className="w-8 h-8"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};
