"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play } from "lucide-react"

export function Hero() {
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-4">
              <p className="text-[oklch(0.45_0.08_145)] font-medium tracking-wider uppercase text-sm">
                Invitaciones Digitales Premium
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-balance">
                Invitaciones elegantes para momentos{" "}
                <span className="text-[oklch(0.45_0.08_145)] italic">inolvidables</span>
              </h1>
              <p className="text-[oklch(0.45_0.02_60)] text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Diseños únicos y personalizados para bodas, XV años, bautizos y eventos especiales.
                Comparte la emoción de tu celebración de forma elegante y moderna.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-base px-8 py-6 rounded-full bg-[oklch(0.45_0.08_145)] text-[oklch(0.99_0.005_80)] hover:bg-[oklch(0.45_0.08_145)]/90"
                onClick={() => scrollToSection("paquetes")}
              >
                Ver Paquetes
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 rounded-full bg-transparent"
                onClick={() => scrollToSection("demos")}
              >
                <Play className="mr-2 h-4 w-4" />
                Ver Demos
              </Button>
            </div>

            {/* <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center">
                <p className="font-serif text-3xl text-[oklch(0.45_0.08_145)]">500+</p>
                <p className="text-sm text-[oklch(0.45_0.02_60)]">Invitaciones creadas</p>
              </div>
              <div className="w-px h-12 bg-[oklch(0.88_0.02_80)]" />
              <div className="text-center">
                <p className="font-serif text-3xl text-[oklch(0.45_0.08_145)]">100%</p>
                <p className="text-sm text-[oklch(0.45_0.02_60)]">Clientes satisfechos</p>
              </div>
            </div> */}
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-64 md:w-72 lg:w-80 bg-[oklch(0.25_0.02_60)] rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[oklch(0.25_0.02_60)] rounded-b-2xl" />
                <div className="bg-[oklch(0.99_0.005_80)] rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Mock Invitation Content */}
                  <div className="h-full flex flex-col items-center justify-center p-6 text-center bg-[oklch(0.98_0.01_97)] relative">
                    <div className="absolute inset-3 border border-[oklch(0.45_0.08_145)]/20 rounded-[2rem]" />
                    <div className="space-y-5 relative z-10 w-full">
                      {!showEasterEgg ? (
                        <>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[oklch(0.45_0.02_60)]">Te invitamos a celebrar</p>
                          <h3 className="font-serif text-3xl text-[oklch(0.25_0.02_60)]">Esme & Alexis</h3>
                          <div className="w-12 h-px bg-[oklch(0.45_0.08_145)] mx-auto opacity-50" />
                          <p className="text-xs text-[oklch(0.45_0.02_60)] uppercase tracking-widest">Nuestra Boda</p>
                          <div className="py-2">
                            <p className="font-serif text-5xl text-[oklch(0.45_0.08_145)]">21</p>
                            <p className="text-xs uppercase tracking-widest text-[oklch(0.45_0.02_60)] mt-1">Agosto 2027</p>
                          </div>
                          <div className="pt-2">
                            <button
                              onClick={() => setShowEasterEgg(true)}
                              className="inline-block px-5 py-2 bg-[oklch(0.45_0.08_145)] text-[oklch(0.99_0.005_80)] text-[10px] font-medium uppercase tracking-wider rounded-full transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm hover:shadow-md"
                            >
                              Confirmar Asistencia
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="animate-in zoom-in duration-500 flex flex-col items-center justify-center py-4">
                          <span className="text-5xl mb-4">🎁</span>
                          <h3 className="font-serif text-2xl text-[oklch(0.45_0.08_145)] mb-2 leading-tight">
                            ¡Obtuviste un cupón!
                          </h3>
                          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border-2 border-dashed border-[oklch(0.45_0.08_145)]/30 w-full max-w-[200px] mx-auto mb-4">
                            <p className="text-[10px] text-[oklch(0.45_0.02_60)] uppercase tracking-wider mb-1">Código:</p>
                            <p className="text-2xl font-bold font-mono text-[oklch(0.25_0.02_60)] tracking-wider">DESC10</p>
                          </div>
                          <p className="text-xs text-[oklch(0.45_0.02_60)] mb-4">
                            10% de descuento en tu paquete
                          </p>
                          <button
                            onClick={() => setShowEasterEgg(false)}
                            className="text-[10px] text-[oklch(0.45_0.02_60)] underline hover:text-[oklch(0.45_0.08_145)] transition-colors"
                          >
                            Volver a la invitación
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-[oklch(0.45_0.08_145)]/30 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[oklch(0.55_0.06_145)]/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-[oklch(0.45_0.02_60)]" />
      </div>
    </section>
  )
}
