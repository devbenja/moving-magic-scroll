import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";

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
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-primary/90 to-black" ref={ref}>
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
        
        {/* Círculos decorativos */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white mb-6">
            Experiencias Reales
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Descubre lo que nuestros clientes dicen sobre nuestra revolución en mudanzas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/50 transition-all h-full flex flex-col">
                <Quote className="w-10 h-10 text-accent mb-4 opacity-50" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-accent text-accent animate-pulse" 
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <p className="text-white/80 text-lg mb-6 flex-grow leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-xl font-bold text-white mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-accent/80">
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