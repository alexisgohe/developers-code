"use client"

import { useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const problems = [
  {
    title: "Sistemas obsoletos",
    description:
      "Herramientas que ya no escalan con tu negocio y generan más problemas que soluciones.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Procesos manuales",
    description:
      "Pierdes horas en tareas repetitivas que deberían estar automatizadas.",
    image:
      "https://images.unsplash.com/photo-1573484557933-fccf1ac71a30?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Pérdida de dinero",
    description:
      "Errores, retrasos y falta de control impactan directamente en tus ingresos.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
  },
]

export default function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  // 🔥 limpiar refs en cada render
  itemsRef.current = []

  useLayoutEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${problems.length * 100}%`,
          scrub: true,
          pin: true,
        },
      })

      itemsRef.current.forEach((item, index) => {
        if (!item) return

        if (index === 0) {
          tl.fromTo(
            item,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5 }
          )

          tl.to({}, { duration: 1 })
        } else {
          tl.to(itemsRef.current[index - 1], {
            opacity: 0,
            y: -40,
            duration: 0.5,
          })

          tl.to(
            {},
            {
              duration: 0.1,
              onStart: () => setActiveIndex(index),
              onReverseComplete: () => setActiveIndex(index - 1),
            },
            "<"
          )

          tl.fromTo(
            item,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5 },
            "<"
          )

          tl.to({}, { duration: 1 })
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative bg-white text-[#00023f]">
      <div className="h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 w-full">

          {/* TÍTULO */}
          <div className="mb-6 md:mb-8 mt-6 md:mt-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Tu negocio tiene{" "}
              <span className="text-[#f36523]">fugas invisibles</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* IMAGEN */}
            <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 hidden md:block">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    activeIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                >
                  <Image
                    src={problem.image}
                    alt={problem.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00023f]/30 via-transparent to-transparent" />
                </div>
              ))}
            </div>

            {/* TEXTO */}
            <div className="relative h-[300px]">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    itemsRef.current[index] = el ?? null
                  }}
                  className="absolute inset-0 flex flex-col justify-center opacity-0"
                >
                  <div className="text-sm text-[#f36523] font-bold mb-4">
                    0{index + 1}
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    {problem.title}
                  </h3>

                  <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                    {problem.description}
                  </p>

                  <div className="mt-8 md:hidden relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                    <Image
                      src={problem.image}
                      alt={problem.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}