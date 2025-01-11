import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Mudanza Residencial Elite",
    description: "Servicio completo de mudanza para una residencia de lujo en el centro de la ciudad.",
    image: "https://images.unsplash.com/photo-1600125693229-a0c8e1642a05?auto=format&q=80&w=1920",
  },
  {
    title: "Proyecto Corporativo",
    description: "Traslado completo de oficinas para una empresa tecnológica líder.",
    image: "https://images.unsplash.com/photo-1609145348310-db4b23c6d7dd?auto=format&q=80&w=1920",
  },
  {
    title: "Mudanza Internacional",
    description: "Coordinación y ejecución de mudanza internacional con múltiples contenedores.",
    image: "https://images.unsplash.com/photo-1600125692439-9f0a12e61051?auto=format&q=80&w=1920",
  },
];

export const OurWork = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Nuestro Trabajo
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
            <img
              src={projects[currentProject].image}
              alt={projects[currentProject].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20 max-w-2xl">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={projects[currentProject].title}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                {projects[currentProject].title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                key={projects[currentProject].description}
                className="text-white/80 text-lg md:text-xl"
              >
                {projects[currentProject].description}
              </motion.p>
            </div>
          </motion.div>

          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-4 right-4 z-30">
            <button
              onClick={previousProject}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors text-white"
              aria-label="Proyecto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextProject}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors text-white"
              aria-label="Siguiente proyecto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentProject === index ? "bg-accent" : "bg-white/20"
                }`}
                aria-label={`Ir al proyecto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};