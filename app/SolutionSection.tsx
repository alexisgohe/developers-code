"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Database, Settings, Shield } from "lucide-react"

const solutions = [
  {
    icon: <Globe size={30} />,
    title: "Más clientes desde tu web",
    description:
      "Creamos sitios optimizados para convertir visitas en oportunidades reales de negocio.",
  },
  {
    icon: <Database size={30} />,
    title: "Control total de tu operación",
    description:
      "Centraliza ventas, inventario y datos en un sistema diseñado para tu empresa.",
  },
  {
    icon: <Settings size={30} />,
    title: "Procesos automatizados",
    description:
      "Elimina tareas manuales y reduce errores con flujos automatizados.",
  },
  {
    icon: <Shield size={30} />,
    title: "Tecnología confiable",
    description:
      "Sistemas seguros, escalables y listos para crecer contigo.",
  },
]

export default function SolutionSection() {
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
          La solución no es trabajar más…
          <span className="block text-cyan-400 mt-2">
            es trabajar mejor con tecnología
          </span>
        </motion.h2>

        {/* 🧠 Subtexto */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-16"
        >
          Diseñamos soluciones tecnológicas enfocadas en resultados reales,
          no solo en funcionalidades.
        </motion.p>

        {/* 🔥 Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => (
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
              className="group relative bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
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