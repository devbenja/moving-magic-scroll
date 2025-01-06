import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-primary mb-6">
            Sobre Nosotros
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Con más de 15 años de experiencia, nos especializamos en hacer que su
            mudanza sea una experiencia sin estrés. Nuestro equipo profesional
            está comprometido con la excelencia y el cuidado de sus pertenencias.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <h3 className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                  {stat.suffix}
                </h3>
                <p className="text-gray-600">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};