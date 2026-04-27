"use client"

import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    title: "Análisis del negocio",
    description:
      "Entendemos tu operación, detectamos problemas y definimos oportunidades reales.",
  },
  {
    title: "Diseño de la solución",
    description:
      "Creamos la arquitectura y experiencia enfocada en eficiencia y crecimiento.",
  },
  {
    title: "Desarrollo e implementación",
    description:
      "Construimos tu sistema con tecnología moderna y entregas iterativas.",
  },
  {
    title: "Optimización continua",
    description:
      "Medimos, mejoramos y escalamos tu solución conforme crece tu negocio.",
  },
]

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  stepsRef.current = []

  useLayoutEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", // Scroll más corto y ágil
          pin: true,
          scrub: true,
        },
      })

      stepsRef.current.forEach((step, index) => {
        if (!step) return
        tl.to(step, {
          opacity: 1,
          y: 0,
          duration: 0.5,
        }, index === 0 ? 0 : "-=0.3") // Los pasos se van sumando a la lista
      });
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="proceso"
      ref={containerRef}
      className="relative bg-white text-[#00023f] overflow-hidden"
    >
      {/* Contenedor de 100vh donde ocurre toda la magia */}
      <div className="h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 lg:gap-24 items-center w-full">

            {/* 🧠 Texto lateral */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Así es como llevamos tu negocio
                <span className="block text-[#19a4b7]">
                  al siguiente nivel
                </span>
              </h2>

              <p className="text-gray-600 text-lg">
                No improvisamos. Seguimos un proceso claro que garantiza resultados reales.
              </p>
            </div>

            {/* 🔥 Steps */}
            <div className="space-y-6 md:space-y-8 pt-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    stepsRef.current[index] = el
                  }}
                  className="flex flex-col justify-center opacity-0 translate-y-10"
                >
                  <div className="text-sm text-[#f36523] font-bold mb-2">
                    0{index + 1}
                  </div>

                  <h3 className="text-2xl font-semibold mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
    </section>
  )
}