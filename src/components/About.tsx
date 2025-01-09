import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Rocket, Users, Award } from "lucide-react";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const stats = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Experiencia",
      value: "15+",
      suffix: "años",
      description: "Liderando la industria",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mudanzas Completadas",
      value: "10k+",
      suffix: "",
      description: "Familias satisfechas",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Satisfacción",
      value: "98",
      suffix: "%",
      description: "Clientes felices",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black to-primary" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493397212122-2b85dda8106b')] bg-cover bg-center opacity-10" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div 
          variants={itemVariants}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.h2 
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 1
            }}
            className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white mb-8"
          >
            Innovación en Movimiento
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-white/80 leading-relaxed"
            variants={itemVariants}
          >
            Revolucionamos la industria de las mudanzas combinando tecnología de punta 
            con un servicio excepcional para crear experiencias inolvidables.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/50 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-accent/20 rounded-xl text-accent">
                    {stat.icon}
                  </div>
                  <ArrowRight className="w-6 h-6 text-accent opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all" />
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: index * 0.2 
                  }}
                >
                  <h3 className="text-7xl font-bold text-white mb-2">
                    {stat.value}
                    <span className="text-accent">{stat.suffix}</span>
                  </h3>
                  <p className="text-xl text-white/80 font-medium mb-2">{stat.title}</p>
                  <p className="text-white/60">{stat.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent text-white rounded-full text-lg font-medium hover:bg-accent/90 transition-colors"
          >
            Descubre Más
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};
