"use client"

import Lenis from "@studio-freight/lenis"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode
}) {
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      // Sincronizamos GSAP con Lenis solo si es necesario, 
      // pero eliminamos el tick manual que suele causar el error de removeChild
      rafRef.current = requestAnimationFrame(raf)
    }

    rafRef.current = requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return <>{children}</>
}