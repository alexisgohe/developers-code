"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"

export default function PrivacyPage() {
  return (
    <section className="bg-white text-[#00023f] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-[#19a4b7]/10 rounded-2xl text-[#19a4b7] mb-4">
            <ShieldCheck size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Aviso de Privacidad</h1>
          <p className="text-gray-500">Última actualización: 24 de mayo de 2024</p>
        </motion.div>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#00023f] mb-4 border-l-4 border-[#f36523] pl-4">1. Identidad y Domicilio del Responsable</h2>
            <p>
              Developers Code, con domicilio en Coatepec, Veracruz, México, es responsable del tratamiento de sus datos personales conforme a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#00023f] mb-4 border-l-4 border-[#f36523] pl-4">2. Datos Personales que Recabamos</h2>
            <p>Para las finalidades señaladas en el presente aviso, podemos recabar sus datos de las siguientes formas:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cuando usted nos los proporciona directamente a través de nuestros formularios de contacto.</li>
              <li>A través de cookies para mejorar su experiencia de navegación.</li>
              <li>Mediante comunicaciones telefónicas o correos electrónicos.</li>
            </ul>
            <p className="mt-4 font-semibold">Los datos que obtenemos son:</p>
            <p>Nombre completo, teléfono, correo electrónico, nombre de su empresa y ubicación.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#00023f] mb-4 border-l-4 border-[#f36523] pl-4">3. Finalidades del Tratamiento</h2>
            <p>Sus datos personales serán utilizados para las siguientes finalidades primarias:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proveer los servicios de consultoría y desarrollo de software solicitados.</li>
              <li>Responder a sus solicitudes de información y presupuestos.</li>
              <li>Dar cumplimiento a obligaciones contraídas con nuestros clientes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#00023f] mb-4 border-l-4 border-[#f36523] pl-4">4. Derechos ARCO</h2>
            <p>
              Usted tiene derecho a conocer qué datos personales tenemos de usted (Acceso), para qué los utilizamos y las condiciones del uso que les damos. Asimismo, es su derecho solicitar la corrección de su información (Rectificación), que la eliminemos de nuestros registros (Cancelación), así como oponerse al uso de sus datos para fines específicos (Oposición).
            </p>
            <p className="mt-4">
              Para ejercer sus derechos ARCO, puede enviar una solicitud al correo: <span className="text-[#19a4b7] font-bold">hola.developerscode@gmail.com</span>
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
