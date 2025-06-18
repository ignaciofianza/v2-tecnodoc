import { motion } from "motion/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const servicios = [
  {
    title: "Reparación de celulares",
    desc: "Soluciones para fallas comunes y complejas en smartphones.",
    emoji: "📱",
    incluye: [
      "Cambio de pantalla, batería, botones",
      "Conector de carga, limpieza interna, micrófono",
      "Reinicio, fallos de sistema, sobrecalentamiento",
      "Diagnóstico sin costo en la mayoría de los casos",
    ],
  },
  {
    title: "Laptops y PC",
    desc: "Mejorá el rendimiento o renová tu equipo desde cero.",
    emoji: "💻",
    incluye: [
      "Formateo, reinstalación de sistemas",
      "Cambio de SSD, RAM o limpieza profunda",
      "Armado de PCs a medida según tu uso",
      "Corrección de fallos físicos o lógicos",
    ],
  },
  {
    title: "Software y sistemas",
    desc: "Soluciones para problemas de sistema operativo, apps o seguridad.",
    emoji: "🧠",
    incluye: [
      "Instalación de Windows, Linux u Office",
      "Recuperación de archivos eliminados",
      "Eliminación de virus, troyanos o malware",
      "¿Buscás desarrollo de aplicaciones? Visita ignaciofianza.com",
    ],
  },
  {
    title: "Redes e internet",
    desc: "Diagnóstico y mejoras en tu red doméstica o de oficina.",
    emoji: "🌐",
    incluye: [
      "Mejora de señal WiFi y cableado estructurado",
      "Instalación de routers, repetidores o mesh",
      "Conexión entre dispositivos (impresoras, cámaras, etc.)",
      "Solución de cortes, lentitud o interferencias",
    ],
  },
];

// Scroll suave a una sección
const scrollToSection = (id: string) => {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Services = () => {
  return (
    <section
      id="servicios"
      className="py-24 px-4 bg-gray-100 flex justify-center"
    >
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Nuestros servicios
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {servicios.map((servicio, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <Card className="h-full flex flex-col justify-between hover:shadow-md transition-shadow bg-white">
                <CardHeader>
                  <div className="text-4xl">{servicio.emoji}</div>
                  <CardTitle className="text-xl text-gray-800">
                    {servicio.title}
                  </CardTitle>
                  <CardDescription>{servicio.desc}</CardDescription>
                </CardHeader>
                <CardContent className="pt-2 pb-0">
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    {servicio.incluye.map((tarea, idx) => (
                      <li key={idx}>{tarea}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => scrollToSection("#contacto")}
                    variant="outline"
                    className="ml-auto"
                  >
                    Solicitar servicio
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
