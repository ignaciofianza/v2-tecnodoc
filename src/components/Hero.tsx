import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-white px-4"
    >
      <div className="max-w-4xl text-center flex flex-col gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900"
        >
          Soluciones rápidas y confiables para tus dispositivos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto"
        >
          En <span className="font-semibold text-green-600">TecnoDoc</span>,
          reparamos celulares, laptops, consolas y más, con profesionalismo y
          sin vueltas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-4 flex justify-center gap-4 flex-wrap"
        >
          <Button
            variant="outline"
            className="text-lg px-6 py-4 bg-gray-200 hover:bg-gray-300"
            onClick={() => scrollToSection("#servicios")}
          >
            Ver Servicios
          </Button>

          <Button
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-6 py-4"
            onClick={() => scrollToSection("#contacto")}
          >
            Contacto
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
