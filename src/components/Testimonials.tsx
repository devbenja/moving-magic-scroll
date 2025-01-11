import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "María González",
      role: "Cliente Residencial",
      content: "El servicio fue excepcional. El equipo fue muy profesional y cuidadoso con todas nuestras pertenencias durante la mudanza.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "Gerente de Oficina",
      content: "La mejor empresa de mudanzas con la que hemos trabajado. Su eficiencia y organización hicieron que nuestra reubicación de oficina fuera sin problemas.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "Propietaria de Tienda",
      content: "Increíble atención al detalle y servicio al cliente. Recomiendo totalmente sus servicios de mudanza comercial.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-primary to-black relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf')] bg-cover bg-center opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/50 transition-all h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-white/80 text-lg mb-6 flex-grow">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-accent">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};