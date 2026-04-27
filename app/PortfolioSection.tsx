"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Sistema POS para MIPYMES",
    description:
      "Centralización de ventas, inventario y reportes en un solo sistema.",
    image: "/portafolio/sistema-pos-preview.png",
    results: [
      "Automatización de inventario",
      "Control financiero en tiempo real",
    ],
    link: "#",
  },
  {
    title: "Landing Page Restaurante",
    description:
      "Optimización de presencia digital y captación de clientes.",
    image: "/portafolio/restaurante-preview.jpg",
    results: [
      "Mejora en velocidad y UX",
      "Optimización SEO",
    ],
    link: "https://alexisgohe.github.io/restaurante/",
  },
  {
    title: "Smera SaaS",
    description:
      "Gestión de menús, importación de productos con IA y analítica de visitas para restaurantes.",
    image: "/portafolio/smera.png",
    results: [
      "Gestión de múltiples sucursales",
      "Importación mágica de menús (PDF/Foto) con IA",
    ],
    link: "https://smera-saas.vercel.app/",
  },
  {
    title: "PDF Tools",
    description:
      "Compresor de PDF, conversor de PDF a Word e imagen, todo en una sola herramienta fácil de usar.",
    image: "/portafolio/pdf_tools.png",
    results: [
      "Compresión de PDF sin pérdida de calidad",
      "Conversión de PDF a Word e imagen con alta precisión",
    ],
    link: "#",
  },
  {
    title: "Tourify",
    description:
      "Planifica viajes en colaboración.",
    image: "/portafolio/tourify.png",
    results: [
      "Exploración inteligente de destinos y actividades",
      "Gestión colaborativa de itinerarios"
    ],
    link: "#",
  },
  {
    title: "Lockly",
    description:
      "Gestor de contraseñas.",
    image: "/portafolio/lockly.png",
    results: [
      "Gestiona tus contraseñas de forma segura y eficiente",
      "De facil uso, con una interfaz intuitiva y amigable"
    ],
    link: "#",
  },
]

export default function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="portafolio"
      ref={ref}
      className="relative py-24 px-6 bg-[#030712] text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* 🧠 Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Resultados reales en proyectos reales
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            No solo desarrollamos software. Creamos soluciones que impactan directamente en el negocio.
          </p>
        </motion.div>

        {/* 🔥 Proyectos */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const imageRef = useRef(null)

            // 🎯 Parallax imagen
            const { scrollYProgress } = useScroll({
              target: imageRef,
              offset: ["start end", "end start"],
            })

            const y = useTransform(scrollYProgress, [0, 1], [50, -50])

            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* 🖼 Imagen */}
                <motion.div
                  ref={imageRef}
                  style={{ y }}
                  className="relative group overflow-hidden rounded-2xl"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay hover */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300" />
                </motion.div>

                {/* 🧠 Texto */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6">
                    {project.description}
                  </p>

                  {/* Resultados */}
                  <ul className="mb-6 space-y-2">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                        {result}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
                  >
                    Ver proyecto
                    <ExternalLink size={16} />
                  </a>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}