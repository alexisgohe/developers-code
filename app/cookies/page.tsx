"use client"

import { motion } from "framer-motion"
import { Info } from "lucide-react"

export default function CookiesPage() {
  return (
    <section className="bg-white text-[#00023f] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-[#19a4b7]/10 rounded-2xl text-[#19a4b7] mb-4">
            <Info size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Cookies</h1>
          <p className="text-gray-500">Transparencia sobre tu navegación</p>
        </motion.div>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#00023f] mb-4">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su navegador cuando visita nuestro sitio web. Nos ayudan a que el sitio funcione correctamente y a entender cómo interactúa con nosotros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#00023f] mb-4">Cookies que utilizamos</h2>
            <div className="grid gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <h4 className="font-bold text-[#19a4b7]">Cookies Técnicas</h4>
                <p className="text-sm">Necesarias para el funcionamiento del sitio y la navegación básica.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <h4 className="font-bold text-[#f36523]">Cookies de Análisis</h4>
                <p className="text-sm">Utilizamos herramientas como Google Analytics para entender el tráfico y mejorar nuestra oferta de servicios.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#00023f] mb-4">¿Cómo gestionar las cookies?</h2>
            <p>
              Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador que utilice:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-sm">
              <li>Configuración de cookies en Chrome.</li>
              <li>Configuración de cookies en Firefox.</li>
              <li>Configuración de cookies en Safari.</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}