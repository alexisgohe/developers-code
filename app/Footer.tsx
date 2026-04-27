"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-white text-[#00023f] border-t border-slate-100">
      
      {/* 🔥 Línea glow superior */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#19a4b7]/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* 🧩 GRID */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* 🧠 Marca */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Developers Code
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Consultoría tecnológica y desarrollo de software empresarial en México.
              Transformamos ideas en soluciones digitales exitosas.
            </p>
          </div>

          {/* 🔗 Otros servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Otros servicios
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/invitaciones"
                  className="text-gray-600 hover:text-[#f36523] transition flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[#f36523] rounded-full opacity-0 group-hover:opacity-100 transition" />
                  Invitaciones digitales para todo tipo de eventos
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-gray-600 hover:text-[#f36523] transition">
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-gray-600 hover:text-[#f36523] transition">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-600 hover:text-[#f36523] transition">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* 📞 Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Contacto
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">

              <li className="flex items-center gap-2 hover:text-[#19a4b7] transition">
                <Mail size={16} />
                <a href="mailto:hola.developerscode@gmail.com">
                  hola.developerscode@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-2 hover:text-[#19a4b7] transition">
                <Phone size={16} />
                <a href="tel:+525651392730">
                  +52 (565) 139-2730
                </a>
              </li>

              <li className="flex items-center gap-2">
                <MapPin size={16} />
                Coatepec, Veracruz, México
              </li>

            </ul>
          </div>
        </div>

        {/* ⚡ Divider */}
        <div className="border-t border-slate-100 pt-6 text-center">

          <p className="text-gray-500 text-sm">
            © 2026 Developers Code. Todos los derechos reservados.{" "}
            <span className="text-[#19a4b7] ml-1">
              Consultoría Tecnológica México
            </span>
          </p>

        </div>
      </div>
    </footer>
  )
}