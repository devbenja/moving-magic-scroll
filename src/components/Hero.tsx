import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Hero = () => {
  const { scrollY } = useScroll();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const leftSlide = useTransform(scrollY, [0, 300], [0, -100]);
  const rightSlide = useTransform(scrollY, [0, 300], [0, 100]);
  const yPos = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/90 to-primary">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50" />
        <img
          src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
          alt="Moving background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-transparent" />
      <motion.div
        ref={ref}
        style={{ opacity, y: yPos }}
        className="container mx-auto px-4 z-10"
      >
        <div className="max-w-4xl">
          <motion.h1 
            className="text-7xl md:text-9xl font-bold text-white mb-8 leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                type: "spring",
                duration: 1,
                bounce: 0.3
              }}
              style={{ x: leftSlide }}
              className="block"
            >
              El Futuro
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                type: "spring",
                duration: 1,
                bounce: 0.3,
                delay: 0.2
              }}
              style={{ x: rightSlide }}
              className="text-accent block"
            >
              del Moving
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl text-white/90 mb-12 max-w-2xl"
          >
            Transformando la experiencia de mudanza con tecnología y excelencia
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
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