import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/90 to-primary">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40" />
        <img
          src="https://images.unsplash.com/photo-1517022812141-23620dba5c23"
          alt="Moving background"
          className="w-full h-full object-cover"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Mudanzas Profesionales
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Hacemos que mudarse sea una experiencia sin preocupaciones
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-colors"
        >
          Solicitar Presupuesto
        </motion.button>
      </motion.div>
    </div>
  );
};