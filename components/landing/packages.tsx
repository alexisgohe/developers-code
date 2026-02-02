"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Crown } from "lucide-react"
import { cn } from "@/lib/utils"

const packages = [
  {
    name: "Básico",
    price: "$249",
    originalPrice: "$399",
    description: "Perfecto para quienes buscan elegancia y simplicidad.",
    icon: Star,
    popular: false,
    features: [
      "Invitación web personalizada",
      "Diseño base + colores del evento",
      "Nombre del evento",
      "2 fotografías",
      "Fecha y hora del evento",
      "Mensaje final de agradecimiento",
    ],
    buttonText: "Elegir Básico",
  },
  {
    name: "Premium",
    price: "$499",
    originalPrice: "$699",
    description: "Nuestra opción más popular con todo lo esencial.",
    icon: Crown,
    popular: true,
    features: [
      "Todo lo del Básico +",
      "3 fotografías",
      "Dirección de misa y salón (Google Maps)",
      "Cuenta regresiva animada",
      "Código de vestimenta",
      "Itinerario del evento (Misa, Recepción, Cena, Baile)",
      "Confirmación por WhatsApp",
      "Canción principal (sin autoplay)",
      "Animaciones básicas",
    ],
    buttonText: "Elegir Premium",
  },
  {
    name: "Elite",
    price: "$799",
    originalPrice: "$1,099",
    description: "La experiencia más completa y exclusiva.",
    icon: Crown,
    popular: false,
    features: [
      "De 6 a 12 fotografías + galería",
      "Video opcional",
      "Foto del lugar + Google Maps",
      "Código de vestimenta con colores",
      "Itinerario detallado completo",
      "Formulario RSVP (Google Sheets)",
      "Agregar a Google/Apple Calendar",
      "Hashtag personalizado",
      "Álbum compartido en Google Fotos",
      "Canción principal automática",
      "Mesa de regalos",
      "Sobre animado de apertura",
      "Animaciones premium",
    ],
    buttonText: "Quiero el Elite",
  },
]

export function Packages() {
  const handleWhatsAppClick = (packageName: string) => {
    const message = `Hola, quiero cotizar el paquete ${packageName}`
    const url = `https://wa.me/525651392730?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section id="paquetes" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[oklch(0.45_0.08_145)] font-medium tracking-wider uppercase text-sm mb-4">
            Paquetes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
            Elige el paquete perfecto para tu evento
          </h2>
          <p className="text-[oklch(0.45_0.02_60)] text-lg">
            Cada paquete está diseñado para adaptarse a diferentes necesidades y presupuestos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.name}
              className={cn(
                "relative flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl animate-in fade-in slide-in-from-bottom-4",
                pkg.popular && "border-[oklch(0.45_0.08_145)] shadow-lg scale-105 lg:scale-110"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-[oklch(0.45_0.08_145)] text-[oklch(0.99_0.005_80)] text-xs font-medium px-4 py-1 rounded-bl-lg">
                  Recomendado
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className={cn(
                  "inline-flex items-center justify-center w-14 h-14 rounded-full mx-auto mb-4",
                  pkg.popular ? "bg-[oklch(0.45_0.08_145)] text-[oklch(0.99_0.005_80)]" : "bg-[oklch(0.45_0.08_145)]/10 text-[oklch(0.45_0.08_145)]"
                )}>
                  <pkg.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-serif text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-sm">{pkg.description}</CardDescription>
                <div className="pt-4 flex items-baseline justify-center gap-2">
                  <span className="text-lg text-[oklch(0.45_0.02_60)] opacity-60 line-through decoration-red-500/50">
                    {pkg.originalPrice}
                  </span>
                  <span className="font-serif text-4xl text-[oklch(0.25_0.02_60)]">{pkg.price}</span>
                  <span className="text-[oklch(0.45_0.02_60)] text-sm"> MXN</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[oklch(0.45_0.08_145)] shrink-0 mt-0.5" />
                      <span className="text-sm text-[oklch(0.45_0.02_60)]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button
                  className={cn(
                    "w-full rounded-full py-6",
                    pkg.popular 
                      ? "bg-[oklch(0.45_0.08_145)] text-[oklch(0.99_0.005_80)] hover:bg-[oklch(0.45_0.08_145)]/90" 
                      : "border-[oklch(0.88_0.02_80)] text-[oklch(0.25_0.02_60)] hover:bg-[oklch(0.92_0.02_80)]"
                  )}
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={() => handleWhatsAppClick(pkg.name)}
                >
                  {pkg.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
