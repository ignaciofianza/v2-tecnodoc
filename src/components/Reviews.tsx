import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const reviews = [
  {
    nombre: "Camila Rodríguez",
    inicial: "CR",
    texto:
      "Reparación impecable. Me solucionó un problema con la laptop que nadie podía solucionarme!.",
    estrellas: 4,
  },
  {
    nombre: "Martín Pereira",
    inicial: "MP",
    texto: "Servicio prolijo y honesto. Muy claro en cada paso del proceso.",
    estrellas: 4,
  },
  {
    nombre: "Lucía Techera",
    inicial: "LT",
    texto: "Cambié la batería de mi notebook. Quedó como nueva, ¡gracias!",
    estrellas: 5,
  },
  {
    nombre: "Santiago Gómez",
    inicial: "SG",
    texto: "Tenía un virus en la compu, En TecnoDoc lo supieron resolver al toque.",
    estrellas: 4,
  },
  {
    nombre: "Valentina Ruiz",
    inicial: "VR",
    texto:
      "Muy profesional, excelente atención y resultados. Súper recomendable.",
    estrellas: 5,
  },
];

const duplicatedReviews = [...reviews, ...reviews];

const ReviewsCarousel = () => {
  return (
    <section id="reviews" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          ¿Qué dicen nuestros clientes?
        </motion.h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 30,
            }}
          >
            {duplicatedReviews.map((review, idx) => (
              <div
                key={idx}
                className="w-[300px] shrink-0"
              >
                <Card className="h-full flex flex-col justify-between shadow-sm">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarFallback>{review.inicial}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">
                        {review.nombre}
                      </CardTitle>
                      <div className="flex gap-1 text-yellow-500">
                        {Array.from({ length: review.estrellas }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4 text-sm text-gray-700 leading-relaxed">
                    {review.texto}
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
