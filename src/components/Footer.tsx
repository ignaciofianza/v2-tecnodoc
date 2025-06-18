import { motion } from "motion/react";
import { SiInstagram, SiWhatsapp, SiGmail } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white border-t border-gray-200 py-8 px-4 text-center text-sm text-gray-600 flex flex-col items-center gap-4"
    >
      {/* Íconos de redes */}
      <div className="flex gap-6 text-xl text-gray-700">
        <a
          href="mailto:tecnodoc@ignaciofianza.com"
          aria-label="Email"
          className="hover:text-green-600 transition-colors"
        >
          <SiGmail />
        </a>
        <a
          href="https://wa.me/59898688030"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="hover:text-green-600 transition-colors"
        >
          <SiWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/tecnodoc.uy/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="hover:text-green-600 transition-colors"
        >
          <SiInstagram />
        </a>
      </div>

      {/* Copyright */}
      <div>© {year} TecnoDoc. Derechos reservados.</div>

      {/* Créditos */}
      <div>
        Hecho con <span className="text-red-500">❤</span> por{" "}
        <a
          href="https://ignaciofianza.com"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 text-green-700 hover:text-green-800"
        >
          Ignacio Fianza
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
