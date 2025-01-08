import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Truck, Package, ClipboardCheck } from "lucide-react";

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Truck className="w-16 h-16" />,
      title: "Mudanzas Residenciales",
      description:
        "Servicio completo de mudanzas para hogares, con embalaje y desembalaje incluido.",
    },
    {
      icon: <Package className="w-16 h-16" />,
      title: "Mudanzas Comerciales",
      description:
        "Soluciones especializadas para empresas, minimizando el tiempo de inactividad.",
    },
    {
      icon: <ClipboardCheck className="w-16 h-16" />,
      title: "Servicios de Embalaje",
      description:
        "Embalaje profesional con materiales de primera calidad para proteger sus pertenencias.",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-primary relative overflow-hidden min-h-screen flex items-center" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Texto SERVICIOS grande y centrado */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[120px] md:text-[200px] lg:text-[250px] font-bold text-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none tracking-wider"
        >
          SERVICIOS
        </motion.h2>

        {/* Contenedor de tarjetas */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 1.2 + (index * 0.2),
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white/10 backdrop-blur-lg p-12 rounded-2xl shadow-xl border border-white/20 hover:border-accent/50 transition-all group"
            >
              <motion.div 
                className="text-accent mb-8 transform transition-transform duration-300 group-hover:scale-110"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-6">
                {service.title}
              </h3>
              <p className="text-white/80 text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};