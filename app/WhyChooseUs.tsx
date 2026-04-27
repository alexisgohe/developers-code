"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Zap, Shield, Code2 } from "lucide-react"

const differentiators = [
  {
    icon: <Users size={28} />,
    title: "Hablas con desarrolladores",
    description:
      "Sin intermediarios. Comunicación directa con quien construye tu solución.",
  },
  {
    icon: <Zap size={28} />,
    title: "Resultados rápidos",
    description:
      "Entregas iterativas que generan valor desde las primeras semanas.",
  },
  {
    icon: <Shield size={28} />,
    title: "Tecnología sólida",
    description:
      "Arquitecturas escalables, seguras y listas para crecer contigo.",
  },
  {
    icon: <Code2 size={28} />,
    title: "Soluciones a medida",
    description:
      "Nada genérico. Cada sistema se adapta a tu negocio.",
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 bg-[#020617] text-white"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* 🧠 Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          No solo desarrollamos software…
          <span className="block text-cyan-400 mt-2">
            construimos soluciones que funcionan
          </span>
        </motion.h2>

        {/* 🧠 Subtexto */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mb-16"
        >
          Estas son las razones por las que nuestros clientes confían en nosotros.
        </motion.p>

        {/* 🔥 Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm overflow-hidden text-left"
            >
              {/* Glow hover */}
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition duration-300 rounded-2xl" />

              {/* Icon */}
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}