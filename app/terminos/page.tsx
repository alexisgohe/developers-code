"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <section className="bg-white text-[#00023f] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-[#f36523]/10 rounded-2xl text-[#f36523] mb-4">
            <FileText size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Términos y Condiciones</h1>
          <p className="text-gray-500">Vigentes desde: 24 de mayo de 2024</p>
        </motion.div>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <p>
            Al acceder y utilizar este sitio web, usted acepta los términos y condiciones aquí descritos. Si no está de acuerdo, le sugerimos abstenerse de utilizar el sitio.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-[#00023f] mb-4">1. Uso del Sitio</h2>
            <p>
              Este sitio web tiene como objetivo brindar información sobre los servicios de consultoría tecnológica y desarrollo de software de Developers Code. El usuario se compromete a hacer un uso lícito del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#00023f] mb-4">2. Propiedad Intelectual</h2>
            <p>
              Todo el contenido visual, código, logotipos y textos son propiedad exclusiva de Developers Code o de sus respectivos autores. Queda prohibida su reproducción total o parcial sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#00023f] mb-4">3. Servicios y Presupuestos</h2>
            <p>
              Cualquier cotización generada a través de nuestros formularios es informativa y está sujeta a cambios tras un análisis técnico detallado. La prestación formal de servicios se rige por un contrato independiente firmado por ambas partes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#00023f] mb-4">4. Limitación de Responsabilidad</h2>
            <p>
              Developers Code no se hace responsable por daños derivados del uso indebido de la información contenida en el sitio o por fallas temporales en la disponibilidad del mismo.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
