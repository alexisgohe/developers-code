"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"

export function CTA() {
  const handleWhatsAppClick = (packageName: string) => {
    const message = `Hola, quiero cotizar un ${packageName}`
    const url = `https://wa.me/525651392730?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }
  return (
    <section className="py-20 lg:py-32 bg-[oklch(0.45_0.08_145)] text-[oklch(0.99_0.005_80)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 border border-[oklch(0.99_0.005_80)] rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-[oklch(0.99_0.005_80)] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[oklch(0.99_0.005_80)] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
            Haz de tu celebración algo verdaderamente especial
          </h2>
          <p className="text-[oklch(0.99_0.005_80)]/80 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            Cada momento merece ser celebrado con elegancia. Permítenos crear la invitación perfecta 
            que refleje la magia de tu evento y emocione a todos tus invitados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => handleWhatsAppClick("paquete personalizado")}
              className="text-base px-8 py-6 rounded-full bg-[oklch(0.99_0.005_80)] text-[oklch(0.45_0.08_145)] hover:bg-[oklch(0.99_0.005_80)]/90"
            >
              Cotizar mi Invitación
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <p className="mt-8 text-sm text-[oklch(0.99_0.005_80)]/60">
            Respuesta en menos de 24 horas • Asesoría personalizada
          </p>
        </div>
      </div>
    </section>
  )
}
