"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, X } from "lucide-react"
import Image from "next/image"

const demos = [
  {
    title: "Boda News",
    type: "Boda",
    description: "Diseño original estilo periódico para anunciar tu evento como la noticia del año.",
    colors: ["bg-stone-100", "bg-stone-200", "bg-stone-50"],
    image: "/demos/boda-news.png",
    videoUrl: "https://drive.google.com/file/d/1sXX1Z63Gk4c5Z7NYZ7oZKksFF09ng1Pl/preview",
  },
  {
    title: "XV Años Palo de Rosa",
    type: "XV Años",
    description: "La delicadeza del color palo de rosa en un diseño romántico y moderno.",
    colors: ["bg-pink-100", "bg-pink-200", "bg-rose-50"],
    image: "/demos/xv-rosa.png",
    videoUrl: "https://drive.google.com/file/d/1WD2qSeNvo1CkRq4mcJy8D4DztPI7LwUp/preview",
  },
  {
    title: "XV Años Vino",
    type: "XV Años",
    description: "Elegancia y distinción con tonos vino y detalles dorados.",
    colors: ["bg-rose-100", "bg-rose-200", "bg-rose-50"],
    image: "/demos/xv-vino.png",
    videoUrl: "https://drive.google.com/file/d/1sN6AL1khxgCu0mu4-d8f9Sk_anX77Tw3/preview",
  }
]

export function Demos() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <section id="demos" className="py-20 lg:py-32 bg-[oklch(0.99_0.005_80)]">
      <div className="container mx-auto px-4">

        {/* Header */}
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

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {demos.map((demo, index) => (
            <div
              key={demo.title}
              className="group bg-[oklch(0.97_0.01_80)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={demo.image}
                  alt={`Diseño de invitación ${demo.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <Badge
                  variant="secondary"
                  className="absolute top-4 left-4 bg-[oklch(0.97_0.01_80)]/80 backdrop-blur-sm z-10"
                >
                  {demo.type}
                </Badge>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl mb-2">{demo.title}</h3>
                <p className="text-sm text-[oklch(0.45_0.02_60)] mb-4">
                  {demo.description}
                </p>

                <Button
                  variant="outline"
                  className="w-full gap-2 hover:bg-[oklch(0.45_0.08_145)] hover:text-white"
                  onClick={() => setSelectedVideo(demo.videoUrl)}
                >
                  <Play className="w-4 h-4 fill-current" />
                  Ver Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-sm md:max-w-md max-h-[90vh] bg-black rounded-2xl overflow-hidden shadow-2xl aspect-[9/16]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <iframe
                key={selectedVideo}
                src={selectedVideo}
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
