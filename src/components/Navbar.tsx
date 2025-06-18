import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "¿Quiénes Somos?", href: "#about" },
    { label: "Servicios", href: "#servicios" },
  ];

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-white shadow-sm z-50"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div
          onClick={() => scrollToSection("#inicio")}
          className="text-2xl font-bold text-green-600 cursor-pointer"
        >
          <img src="/images/logo_black.png" alt="TecnoDoc Logo" className="w-25" />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <span
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="cursor-pointer text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              {link.label}
            </span>
          ))}
          <span onClick={() => scrollToSection("#contacto")}>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Contacto
            </Button>
          </span>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 w-full bg-white/80 backdrop-blur-md shadow-md px-4 pb-6 pt-2 flex flex-col gap-4 z-40"
        >
          {links.map((link) => (
            <span
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="cursor-pointer text-gray-800 hover:text-green-600 font-medium transition-colors"
            >
              {link.label}
            </span>
          ))}

          <span onClick={() => scrollToSection("#contacto")}>
            <Button className="bg-green-600 hover:bg-green-700 text-white w-full mt-2">
              Contacto
            </Button>
          </span>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
