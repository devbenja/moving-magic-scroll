import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

export const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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

  const plugin = React.useMemo(
    () =>
      Autoplay({
        delay: 4000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    []
  );

  return (
    <section className="py-24 bg-gradient-to-b from-black to-primary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white mb-6">
            Experiencias Reales
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Descubre lo que nuestros clientes dicen sobre nuestra revolución en mudanzas
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin]}
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group h-full"
                >
                  <div className="p-8 rounded-2xl bg-black/40 border border-white/10 hover:border-accent/50 transition-all h-full flex flex-col">
                    <Quote className="w-10 h-10 text-accent mb-4 opacity-50" />
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-accent text-accent" 
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white border-white hover:bg-white/20" />
          <CarouselNext className="text-white border-white hover:bg-white/20" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                current === index ? "bg-accent" : "bg-white/20"
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};