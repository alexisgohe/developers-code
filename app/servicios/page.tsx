import Link from "next/link"
import { ArrowRight, ArrowLeft, LayoutGrid, Briefcase, Wrench } from "lucide-react"
import type { Metadata } from "next"

import { AnimatedSection } from "@/components/ui/animated-section"
import { FloatingCard } from "@/components/ui/floating-card"
import { Button } from "@/components/ui/button"
import { SERVICIOS } from "./data"

export const metadata: Metadata = {
  title: "Cotizaciones | Developers Code",
  description: "Consulta nuestros planes y precios de desarrollo web, tiendas en línea y sistemas a la medida.",
}

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#00023f] overflow-hidden relative">
      {/* 🧠 BACKGROUND ALIGNADO A LANDING */}
      <div className="fixed inset-0 -z-10 bg-white">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,2,63,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,2,63,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
        
        {/* Orbes */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#19a4b7]/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[0%] right-[-5%] w-[600px] h-[600px] bg-[#f36523]/5 blur-[120px] rounded-full" />
      </div>

      <AnimatedSection className="px-4 container mx-auto max-w-5xl pt-4 relative z-10">
        {/* <Link href="/" className="inline-flex items-center text-gray-500 hover:text-[#19a4b7] mt-8 mb-12 transition-colors font-medium">
          <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
          Volver al inicio
        </Link> */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold m-12 tracking-tight">
            Planes y <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00023f] via-[#19a4b7] to-[#f36523]">Cotizaciones</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            En <strong>Developers Code</strong> transformamos tus ideas en soluciones digitales reales.<br />
            Te ofrecemos planes claros, precios accesibles y resultados medibles.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-8 text-[#00023f] text-center flex items-center justify-center gap-3">
            <LayoutGrid className="w-6 h-6 text-[#19a4b7]" aria-hidden="true" />
            Paquetes de Desarrollo
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICIOS.map((servicio, idx) => (
              <FloatingCard key={idx} delay={idx * 0.1}>
                <article className="bg-white/70 backdrop-blur-md border border-[#19a4b7]/20 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,2,63,0.05)] hover:border-[#19a4b7]/60 transition-all duration-300 h-full flex flex-col">
                  <div className="mb-4 text-[#19a4b7] group-hover:text-[#f36523] group-hover:scale-110 transition-all duration-300">
                    {servicio.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#00023f]">{servicio.title}</h3>
                  <p className="mb-4 text-gray-600">{servicio.description}</p>
                  <ul className="list-disc pl-5 text-sm mb-4 text-gray-600 text-left flex-grow space-y-1">
                    {servicio.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <p className="font-extrabold text-lg mt-2 text-[#19a4b7]">{servicio.price}</p>
                </article>
              </FloatingCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-4 mt-20 bg-gradient-to-b from-transparent to-[#19a4b7]/5 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold mb-4 text-[#00023f] flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-[#f36523]" aria-hidden="true" />
            Consultoría Tecnológica
          </h2>
          <p className="mb-4 text-gray-600">
            ¿Tienes un sistema antiguo, un equipo de desarrollo sin guía, o estás por iniciar un proyecto complejo? Te ayudamos con:
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-2">
            <li>Revisión de arquitectura y código</li>
            <li>Planes de mejora técnica</li>
            <li>Elección de stack tecnológico</li>
            <li>Mentoría para equipos de desarrollo</li>
          </ul>
          <p className="font-bold text-[#f36523]">Desde $500 MXN por sesión.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-4 bg-[#00023f]/5 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold mb-4 text-[#00023f] flex items-center gap-3">
            <Wrench className="w-6 h-6 text-[#19a4b7]" aria-hidden="true" />
            Mantenimiento y Soporte
          </h2>
          <p className="mb-4 text-gray-600">
            Paquetes mensuales para mantener tu sitio o sistema funcionando sin interrupciones:
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-2">
            <li>Corrección de errores y ajustes</li>
            <li>Actualizaciones de seguridad</li>
            <li>Monitoreo básico de rendimiento</li>
            <li>Soporte por correo o WhatsApp</li>
          </ul>
          <p className="font-bold text-[#f36523]">Desde $600 MXN al mes</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="text-center py-24 px-4 bg-transparent relative z-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#00023f]">
            ¿Listo para <span className="text-[#19a4b7]">empezar?</span>
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Contáctanos hoy y recibe una propuesta en menos de 24 horas.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg font-bold transition-all bg-[#00023f] hover:bg-[#19a4b7] text-white shadow-lg hover:-translate-y-1">
            <Link href="/contacto">
              Solicitar Cotización <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  )
}