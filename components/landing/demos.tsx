"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const demos = [
  {
    title: "Boda News",
    type: "Boda",
    description: "Diseño original estilo periódico para anunciar tu evento como la noticia del año.",
    colors: ["bg-stone-100", "bg-stone-200", "bg-stone-50"],
    image: "/demos/boda-news.png",
  },
  {
    title: "XV Años Palo de Rosa",
    type: "XV Años",
    description: "La delicadeza del color palo de rosa en un diseño romántico y moderno.",
    colors: ["bg-pink-100", "bg-pink-200", "bg-rose-50"],
    image: "/demos/xv-rosa.png",
  },
  {
    title: "XV Años Vino",
    type: "XV Años",
    description: "Elegancia y distinción con tonos vino y detalles dorados.",
    colors: ["bg-rose-100", "bg-rose-200", "bg-rose-50"],
    image: "/demos/xv-vino.png",
  }
]

export function Demos() {
  return (
    <section id="demos" className="py-20 lg:py-32 bg-[oklch(0.99_0.005_80)]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[oklch(0.45_0.08_145)] font-medium tracking-wider uppercase text-sm mb-4">
            Galería
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
            Inspírate con nuestros diseños
          </h2>
          <p className="text-[oklch(0.45_0.02_60)] text-lg">
            Explora algunos de nuestros diseños más populares y encuentra la inspiración para tu evento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {demos.map((demo, index) => (
            <div
              key={demo.title}
              className="group relative bg-[oklch(0.97_0.01_80)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Preview */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={demo.image}
                  alt={`Diseño de invitación ${demo.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge */}
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 left-4 bg-[oklch(0.97_0.01_80)]/80 backdrop-blur-sm z-10"
                >
                  {demo.type}
                </Badge>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[oklch(0.25_0.02_60)]/0 group-hover:bg-[oklch(0.25_0.02_60)]/10 transition-colors duration-300" />
              </div>

              {/* Card Footer */}
              <div className="p-6">
                <h3 className="font-serif text-xl mb-2">{demo.title}</h3>
                <p className="text-sm text-[oklch(0.45_0.02_60)] mb-4">{demo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
