import { motion } from "motion/react";

const About = () => {
  const cards = [
    {
      icon: "🎓",
      title: "Formación",
      text: "Estudiante de UTU con enfoque técnico. 3 años de experiencia resolviendo problemas reales.",
    },
    {
      icon: "🛠",
      title: "Servicios",
      text: "Reparación de dispositivos, instalación de software, limpieza de equipos, redes y conectividad.",
    },
    {
      icon: "🤝",
      title: "Confianza",
      text: "Más de 15 clientes atendidos con satisfacción. Comunicación clara y trato directo.",
    },
    {
      icon: "🔍",
      title: "Enfoque",
      text: "Atención honesta, diagnósticos reales y soluciones adaptadas a cada caso.",
    },
  ];

  return (
    <section id="about" className="bg-gray-50 py-24 px-4 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h2 className="text-4xl font-bold text-gray-900">Sobre TecnoDoc</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            TecnoDoc nace en 2024 como una propuesta de servicio técnico
            profesional, centrado en brindar soluciones rápidas y honestas. El
            proyecto está liderado por Nacho, estudiante avanzado de UTU con más
            de 3 años de experiencia práctica en reparación de{" "}
            <strong>celulares, laptops, computadoras</strong> y resolución de
            problemas de <strong>software y conectividad</strong>.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Cada reparación se atiende de forma personalizada, con comunicación
            directa y compromiso real con el cliente. Lejos de ser un servicio
            impersonal, en TecnoDoc el enfoque está en construir confianza y
            soluciones efectivas.
          </p>
        </motion.div>

        {/* Cards animadas */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="border rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {card.icon} {card.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
