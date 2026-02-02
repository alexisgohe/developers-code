"use client"

import { Package, MessageSquare, Palette, Share2 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Elige tu paquete",
    description: "Selecciona el paquete que mejor se adapte a tu evento y presupuesto.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Envíanos tu información",
    description: "Compártenos los detalles de tu evento, fotos y preferencias de diseño.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Diseñamos tu invitación",
    description: "Creamos tu invitación personalizada y te la enviamos para revisión.",
  },
  {
    number: "04",
    icon: Share2,
    title: "Comparte con tus invitados",
    description: "Recibe el link de tu invitación y compártelo con todos tus seres queridos.",
  },
]

export function Process() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[oklch(0.45_0.08_145)] font-medium tracking-wider uppercase text-sm mb-4">
            Proceso
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
            Así de fácil es trabajar con nosotros
          </h2>
          <p className="text-[oklch(0.45_0.02_60)] text-lg">
            En solo 4 simples pasos tendrás tu invitación lista para compartir.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-[oklch(0.88_0.02_80)]" />

            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Number Circle */}
                <div className="relative inline-flex items-center justify-center w-32 h-32 mb-6">
                  {/* Background Circle */}
                  <div className="absolute inset-0 rounded-full bg-[oklch(0.92_0.02_80)]" />
                  {/* Icon Circle */}
                  <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-[oklch(0.45_0.08_145)] text-[oklch(0.99_0.005_80)]">
                    <step.icon className="h-8 w-8" />
                  </div>
                  {/* Number Badge */}
                  <div className="absolute -top-1 -right-1 w-10 h-10 rounded-full bg-[oklch(0.25_0.02_60)] text-[oklch(0.97_0.01_80)] flex items-center justify-center text-sm font-medium">
                    {step.number}
                  </div>
                </div>

                <h3 className="font-serif text-xl mb-3">{step.title}</h3>
                <p className="text-[oklch(0.45_0.02_60)] text-sm leading-relaxed max-w-xs mx-auto">
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
