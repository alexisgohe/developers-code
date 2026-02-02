"use client"

import { Smartphone, UserCheck, Palette, Leaf } from "lucide-react"

const benefits = [
  {
    icon: Smartphone,
    title: "Acceso Universal",
    description: "Tus invitados pueden ver la invitación desde cualquier dispositivo: celular, tablet o computadora.",
  },
  {
    icon: UserCheck,
    title: "Confirmación Fácil",
    description: "Sistema integrado para que tus invitados confirmen asistencia con un solo clic.",
  },
  {
    icon: Palette,
    title: "Diseño Personalizado",
    description: "Cada invitación es única, diseñada especialmente para reflejar el estilo de tu evento.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sin impresiones ni papel. Una forma elegante y sustentable de invitar a tus seres queridos.",
  },
]

export function Benefits() {
  return (
    <section className="py-20 lg:py-32 bg-[oklch(0.99_0.005_80)]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[oklch(0.45_0.08_145)] font-medium tracking-wider uppercase text-sm mb-4">
            Ventajas
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
            ¿Por qué elegir invitaciones digitales?
          </h2>
          <p className="text-[oklch(0.45_0.02_60)] text-lg">
            Moderniza la forma de compartir tus momentos especiales con una experiencia única para tus invitados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group text-center p-8 rounded-2xl bg-[oklch(0.97_0.01_80)] hover:bg-[oklch(0.92_0.02_80)] transition-all duration-300 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[oklch(0.90_0.05_145)] text-[oklch(0.45_0.08_145)] mb-6 group-hover:bg-[oklch(0.45_0.08_145)] group-hover:text-[oklch(0.99_0.005_80)] transition-colors duration-300">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl mb-3">{benefit.title}</h3>
              <p className="text-[oklch(0.45_0.02_60)] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
