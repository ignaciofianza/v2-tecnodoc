import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { SiGmail, SiInstagram, SiWhatsapp } from "react-icons/si";

const Contact = () => {
  const [state, handleSubmit] = useForm("manjbooz");

  return (
    <section
      id="contacto"
      className="py-24 px-4 bg-gray-50 flex justify-center"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Izquierda: redes de contacto */}
        {/* Izquierda: redes de contacto */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-gray-900">Contacto</h2>
          <p className="text-gray-700">
            ¿Querés una respuesta rápida? Mándame un mensaje por alguno de estos
            canales:
          </p>

          <div className="space-y-4">
            <a
              href="mailto:tecnodoc@ignaciofianza.com"
              className="flex items-center justify-center md:justify-start gap-3 text-gray-800 hover:text-green-600 transition-colors"
            >
              <SiGmail className="w-5 h-5" />
              tecnodoc@ignaciofianza.com
            </a>
            <a
              href="https://wa.me/59898688030"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center md:justify-start gap-3 text-gray-800 hover:text-green-600 transition-colors"
            >
              <SiWhatsapp className="w-5 h-5" />
              +598 98 688 030
            </a>
            <a
              href="https://www.instagram.com/tecnodoc.uy/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center md:justify-start gap-3 text-gray-800 hover:text-green-600 transition-colors"
            >
              <SiInstagram className="w-5 h-5" />
              @tecnodoc.uy
            </a>
          </div>
        </motion.div>

        {/* Derecha: formulario */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-6 bg-white p-6 rounded-xl shadow-sm"
        >
          <h3 className="text-xl font-semibold text-gray-900">
            O completa el formulario
          </h3>

          {state.succeeded ? (
            <p className="text-green-600 font-medium">
              ¡Gracias por tu mensaje! Te responderé pronto.
            </p>
          ) : (
            <>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Tu email
                </label>
                <Input id="email" type="email" name="email" required />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Tu mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="resize-none"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <Button
                type="submit"
                disabled={state.submitting}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Enviar mensaje
              </Button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
