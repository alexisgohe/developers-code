"use client"

import { useLayoutEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { gsap } from "gsap"
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mascotRef = useRef<HTMLDivElement>(null)

  // 🧠 Mouse tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX / window.innerWidth - 0.5
    const y = e.clientY / window.innerHeight - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const springConfig = { damping: 25, stiffness: 120 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // 🎯 Parallax layers
  const xMascot = useTransform(springX, [-0.5, 0.5], [-25, 25])
  const yMascot = useTransform(springY, [-0.5, 0.5], [-25, 25])

  const xFloating = useTransform(springX, [-0.5, 0.5], [15, -15])
  const yFloating = useTransform(springY, [-0.5, 0.5], [15, -15])

  // 🔥 3D rotation (NUEVO)
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10])

  // 💡 Spotlight dinámico (NUEVO)
  const spotlightX = useTransform(springX, [-0.5, 0.5], [-80, 80])
  const spotlightY = useTransform(springY, [-0.5, 0.5], [-80, 80])

  useLayoutEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: { each: 0.08 },
      })

      gsap.from(".hero-subtitle", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      })

      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      })

      gsap.from(".hero-mascot", {
        scale: 0.85,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[90vh] flex items-center overflow-hidden px-6 bg-transparent text-[#00023f]"
    >
      {/* 🧠 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,2,63,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,2,63,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

        {/* Orbes */}
        <motion.div
          style={{ x: xFloating, y: yFloating }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#19a4b7]/10 blur-[100px] rounded-full"
        />
        <motion.div
          style={{
            x: useTransform(springX, (val) => val * 20),
            y: useTransform(springY, (val) => val * 20),
          }}
          className="absolute bottom-[0%] right-[-5%] w-[600px] h-[600px] bg-[#f36523]/5 blur-[120px] rounded-full"
        />
      </div>

      {/* 🔥 ICONOS (menos agresivos) */}
      <motion.div
        style={{ x: xFloating, y: yFloating }}
        className="absolute top-[10%] left-[35%] text-[#19a4b7]/20 hidden lg:block rotate-12"
      >
        <Code2 size={80} />
      </motion.div>
      
      <motion.div style={{ x: useTransform(springX, (val) => val * 40), y: useTransform(springY, (val) => val * 40) }} className="absolute bottom-[18%] right-[45%] text-[#f36523]/10 hidden lg:block -rotate-12">
        <Zap size={80} />
      </motion.div>

      {/* 💎 Código flotante (NUEVO) */}
      <motion.pre
        style={{ x: xFloating, y: yFloating }}
        className="absolute bottom-10 left-10 text-xs text-[#00023f]/30 font-mono hidden lg:block"
      >
        {`const growth = scale(business);`}
      </motion.pre>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* 🧠 TEXTO */}
        <div className="text-center md:text-left relative z-20">

          <div className="hero-title inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#19a4b7]/30 bg-[#19a4b7]/5 text-[#19a4b7] text-sm font-medium mb-8 backdrop-blur-sm">
            <Sparkles size={14} className="text-[#f36523]" />
            <span>Desarrollo de Software a Medida en México</span>
          </div>

          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            Consultoría y Software que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00023f] via-[#19a4b7] to-[#f36523]">
              escala tu negocio
            </span>
          </h1>

          <p className="hero-subtitle text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Agencia de desarrollo web y software a medida. Automatiza procesos, reduce costos y transforma tu empresa con soluciones Next.js diseñadas para crecer.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/contacto" aria-label="Ir al formulario de contacto para solicitar cotización">
              <button className="group relative overflow-hidden bg-[#00023f] hover:bg-[#19a4b7] px-8 py-4 rounded-full font-bold transition-all duration-300 text-white shadow-lg hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar cotización
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* 🐶 MASCOTA */}
        <div className="hero-mascot flex justify-center relative z-10">

          {/* 🔥 Spotlight dinámico */}
          <motion.div
            style={{ x: spotlightX, y: spotlightY }}
            className="absolute w-[500px] h-[500px] bg-[#19a4b7]/20 blur-[120px] rounded-full"
          />

          <motion.div
            ref={mascotRef}
            style={{
              x: xMascot,
              y: yMascot,
              rotateX,
              rotateY,
            }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative z-10 drop-shadow-[0_20px_50px_rgba(59,130,246,0.25)]"
          >
            <Image
              src="/mascota.png"
              alt="Mascota Developers Code"
              width={500}
              height={500}
              className="w-[250px] md:w-[370px] lg:w-[470px]"
              priority
            />
          </motion.div>
        </div>
      </div>
      {/* Scroll indicator */} <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} > <div className="w-6 h-10 border border-gray-300 rounded-full flex justify-center"> <div className="w-1 h-3 bg-[#19a4b7] rounded-full mt-2" /> </div> </motion.div>
    </section>
  )
}