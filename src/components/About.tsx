import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-32 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-16 text-center">
            Innovación en <span className="text-accent">Movimiento</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Experiencia",
                value: "15+",
                suffix: "años",
              },
              {
                title: "Mudanzas Completadas",
                value: "10k+",
                suffix: "",
              },
              {
                title: "Clientes Satisfechos",
                value: "98",
                suffix: "%",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-12 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-accent/50 transition-all"
              >
                <motion.h3 
                  className="text-6xl font-bold text-accent mb-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                >
                  {stat.value}
                  {stat.suffix}
                </motion.h3>
                <p className="text-xl text-white/80">{stat.title}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-white/80 mt-16 text-center max-w-4xl mx-auto"
          >
            Con más de 15 años de experiencia, nos especializamos en hacer que su
            mudanza sea una experiencia sin estrés. Nuestro equipo profesional
            está comprometido con la excelencia y el cuidado de sus pertenencias.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};