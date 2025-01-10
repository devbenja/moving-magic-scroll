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
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black to-primary" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493397212122-2b85dda8106b')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white mb-16 text-center">
          Nuestros Servicios
        </h2>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/50 transition-all">
                <div className="text-accent mb-8 transform transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {service.title}
                </h3>
                <p className="text-white/80 text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};