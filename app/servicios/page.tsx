"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Globe, Database, Settings, ArrowRight } from "lucide-react"

// Componente animado para secciones
const AnimatedSection = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.section>
)

// Componente para tarjetas flotantes
const FloatingCard = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
    className="group"
  >
    {children}
  </motion.div>
)

export default function ServiciosPage() {
  const servicios = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Landing Básica",
      description: "Ideal para emprendedores o negocios que necesitan presencia en línea.",
      features: [
        "1 sección (scroll simple)",
        "Diseño responsivo",
        "Formulario de contacto",
        "Optimización básica para buscadores",
        "Entrega en 3-5 días hábiles",
      ],
      price: "$1,200 MXN",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Landing Completa",
      description: "Para negocios establecidos que buscan destacar con una web profesional.",
      features: [
        "Hasta 5 secciones",
        "Formulario, ubicación, redes sociales",
        "Optimización SEO avanzada",
        "Animaciones sutiles",
        "Entrega en 7 días hábiles",
      ],
      price: "$2,500 MXN",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Tienda en Línea",
      description: "Perfecta para emprendedores que quieren vender en línea con facilidad.",
      features: [
        "Catálogo de productos",
        "Pasarela de pago (Stripe o MercadoPago)",
        "Carrito de compras",
        "Panel básico de administración",
        "Entrega en 10-15 días hábiles",
      ],
      price: "Desde $6,000 MXN",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Sistema a la Medida",
      description: "Soluciones 100% adaptadas a tu negocio. Cotización personalizada.",
      features: [
        "Dashboard, control de usuarios, reportes",
        "Funcionalidad específica por industria",
        "Escalable y seguro",
        "Incluye consultoría técnica",
      ],
      price: "Desde $12,000 MXN",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Nuestros <span className="text-blue-400">Servicios de Desarrollo</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            En <strong>Developers Code</strong> transformamos tus ideas en soluciones digitales reales.<br />
            Te ofrecemos planes claros, precios accesibles y resultados medibles.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-blue-400 text-center">🧰 Paquetes de Desarrollo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {servicios.map((servicio, idx) => (
              <FloatingCard key={idx} delay={idx * 0.1}>
                <article className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {servicio.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{servicio.title}</h3>
                  <p className="mb-2 text-gray-300">{servicio.description}</p>
                  <ul className="list-disc pl-5 text-sm mb-2 text-gray-400 text-left">
                    {servicio.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <p className="font-bold text-lg mt-2 text-green-400">{servicio.price}</p>
                </article>
              </FloatingCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">👨‍💼 Consultoría Tecnológica</h2>
          <p className="mb-4 text-gray-300">
            ¿Tienes un sistema antiguo, un equipo de desarrollo sin guía, o estás por iniciar un proyecto complejo? Te ayudamos con:
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-400">
            <li>Revisión de arquitectura y código</li>
            <li>Planes de mejora técnica</li>
            <li>Elección de stack tecnológico</li>
            <li>Mentoría para equipos de desarrollo</li>
          </ul>
          <p className="font-bold text-green-400">Desde $500 MXN por sesión.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">🔧 Mantenimiento y Soporte</h2>
          <p className="mb-4 text-gray-300">
            Paquetes mensuales para mantener tu sitio o sistema funcionando sin interrupciones:
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-400">
            <li>Corrección de errores y ajustes</li>
            <li>Actualizaciones de seguridad</li>
            <li>Monitoreo básico de rendimiento</li>
            <li>Soporte por correo o WhatsApp</li>
          </ul>
          <p className="font-bold text-green-400">Desde $600 MXN al mes</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="text-center py-20 px-4 bg-gradient-to-r from-blue-900/50 to-green-900/50">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-white">
          ¿Listo para <span className="text-blue-400">empezar?</span>
        </h2>
        <p className="mb-6 text-gray-300">
          Contáctanos hoy y recibe una propuesta en menos de 24 horas.
        </p>
        <Link href="/contacto" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-500 hover:to-green-500 transition-all duration-300"
          >
            Solicitar Cotización <ArrowRight className="inline ml-2 w-5 h-5" />
          </motion.button>
        </Link>
      </AnimatedSection>
    </div>
  )
}