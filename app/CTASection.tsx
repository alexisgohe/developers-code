"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative py-28 px-6 bg-slate-50 text-[#00023f] overflow-hidden">
      
      {/* 🔥 Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#19a4b7]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center">

        {/* 🧠 Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Tu empresa no necesita más trabajo…
          <span className="block text-[#19a4b7] mt-2">
            necesita mejores sistemas
          </span>
        </motion.h2>

        {/* 🧠 Subtexto */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Agenda una consultoría gratuita y descubre cómo puedes automatizar
          procesos, reducir errores y escalar tu negocio con tecnología.
        </motion.p>

        {/* 🔥 Botones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* CTA principal */}
          <Link href="/contacto">
            <button className="group relative overflow-hidden bg-[#00023f] hover:bg-[#19a4b7] text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:-translate-y-1">
              
              <span className="relative z-10 flex items-center gap-3">
                Solicitar consultoría gratuita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>

              {/* shimmer */}
              <div className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-700 skew-x-12" />
            </button>
          </Link>

          {/* CTA secundario */}
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600 font-medium">
            
            <a
              href="mailto:hola.developerscode@gmail.com"
              className="flex items-center gap-2 hover:text-[#f36523] transition"
            >
              <Mail size={16} />
              Enviar correo
            </a>

            <a
              href="tel:+525651392730"
              className="flex items-center gap-2 hover:text-[#f36523] transition"
            >
              <Phone size={16} />
              Llamar ahora
            </a>
          </div>
        </motion.div>

        {/* 💡 confianza / refuerzo */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-500 text-sm mt-8"
        >
          Respuesta en menos de 24 horas · Sin compromiso
        </motion.p>
      </div>
    </section>
  )
}