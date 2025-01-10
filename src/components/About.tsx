import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Rocket, Users, Award } from "lucide-react";

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef, // Limita el scroll a esta sección
    offset: ["start end", "end start"], // Activa al entrar y salir de la sección
  });

  // Animaciones para el h2
  const h2Opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const h2TranslateX = useTransform(scrollYProgress, [0, 0.5], [-200, 0]);

  const pOpacity = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);
  const pTranslateX = useTransform(scrollYProgress, [0.2, 0.5], [200, 0]);

  const stats = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Años de Experiencia",
      value: "15",
      suffix: "+",
      description: "Liderando la industria",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mudanzas Completadas",
      value: "10",
      suffix: "K+",
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
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-black to-primary"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493397212122-2b85dda8106b')] bg-cover bg-center opacity-10" />

      <div className="max-w-7xl mx-auto text-center mb-10">
        <motion.h2
          className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white mb-4"
          style={{
            opacity: h2Opacity,
            x: h2TranslateX,
          }}
        >
          Innovación en Mudanzas
        </motion.h2>
        <motion.p
          className="max-w-4xl mx-auto text-xl md:text-2xl text-white/80 leading-relaxed mb-12"
          style={{
            opacity: pOpacity,
            x: pTranslateX,
          }}
        >
          Revolucionamos la industria de las mudanzas combinando tecnología de
          punta con un servicio excepcional para crear experiencias inolvidables.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/50 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-accent/20 rounded-xl text-accent">
                    {stat.icon}
                  </div>
                  <ArrowRight className="w-6 h-6 text-accent opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all" />
                </div>

                <motion.div>
                  <h3 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-2">
                    {stat.value}
                    <span className="text-accent">{stat.suffix}</span>
                  </h3>
                  <p className="text-lg sm:text-xl text-white font-medium mb-2">
                    {stat.title}
                  </p>
                  <p className="text-white/60">{stat.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
