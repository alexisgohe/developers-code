"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "¿Qué es Developers Code y qué servicios ofrecen?",
    answer: "Developers Code es una consultoría tecnológica y agencia de desarrollo de software a medida en México. Nos especializamos en la creación de aplicaciones web escalables con Next.js, sistemas empresariales tipo POS (Punto de Venta) para pymes, y productos SaaS. Nuestro enfoque combina excelencia técnica con un diseño UX/UI de alto impacto."
  },
  {
    question: "¿Cuánto cuesta desarrollar una aplicación web a medida?",
    answer: "El costo de un desarrollo a medida depende de la complejidad, integraciones requeridas y la escala del proyecto. Al no usar plantillas genéricas, cada presupuesto es personalizado. Nuestro objetivo es entregar código de alta calidad que represente una inversión rentable a largo plazo. Puedes contactarnos para una cotización sin compromiso."
  },
  {
    question: "¿Qué tecnologías (Tech Stack) utilizan en sus proyectos?",
    answer: "Trabajamos con las tecnologías más modernas y robustas del mercado. En el Frontend utilizamos principalmente React y Next.js con Tailwind CSS para un diseño premium. En el Backend, usamos Node.js, Spring Boot, Supabase y PostgreSQL, garantizando escalabilidad, seguridad y tiempos de respuesta ultra rápidos."
  },
  {
    question: "¿Ofrecen mantenimiento y soporte tras finalizar el desarrollo?",
    answer: "Sí, todos nuestros desarrollos a medida incluyen opciones de mantenimiento preventivo, soporte técnico y actualizaciones. Sabemos que el software es un ente vivo que necesita escalar junto con tu negocio, por lo que ofrecemos pólizas de soporte post-lanzamiento."
  },
  {
    question: "¿Cuánto tiempo toma desarrollar un sistema o sitio web?",
    answer: "El tiempo estimado varía. Una landing page premium puede tomar entre 2 a 4 semanas, mientras que un sistema complejo o SaaS puede tomar de 2 a 6 meses. Durante la fase de planificación establecemos un cronograma transparente con entregas periódicas (sprints)."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-slate-50 py-24 px-8" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#19a4b7]/30 bg-[#19a4b7]/5 text-[#19a4b7] text-sm font-medium mb-6">
            <HelpCircle size={16} />
            <span>Respuestas Directas</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#00023f]">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Resolvemos tus principales dudas sobre nuestro proceso de desarrollo, tecnologías y forma de trabajar.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-[#00023f] md:text-lg pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`text-[#19a4b7] transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={20}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
