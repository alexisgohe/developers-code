"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Code2,
  Shield,
  Users,
  ArrowRight,
  Mail,
  Phone,
  Globe,
  Database,
  Settings,
  Cpu,
  MessageSquare,
  FileText,
  Rocket,
  ExternalLink,
  Chrome,
  Smartphone,
  Cloud,
  Server,
  Layers,
  Zap,
} from "lucide-react"

const AnimatedSection = ({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

const FloatingCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className="group"
    >
      {children}
    </motion.div>
  )
}

export default function DevelopersCodeLanding() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sitios Web Profesionales",
      description: "Desarrollamos sitios web corporativos, e-commerce y landing pages optimizadas para SEO y conversión en México.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Sistemas Empresariales a Medida",
      description: "Software personalizado para empresas mexicanas: sistemas POS, CRM, ERP y aplicaciones de gestión empresarial.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Consultoría Tecnológica",
      description: "Asesoría especializada en arquitectura de software, migración de sistemas y estrategia digital para PYMES.",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Mantenimiento y Soporte",
      description: "Soporte técnico continuo, actualizaciones de seguridad y mantenimiento preventivo de sistemas empresariales.",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Metodología Profesional",
      description: "Aplicamos las mejores prácticas de desarrollo ágil y tecnologías modernas en cada proyecto de software.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Atención Personalizada",
      description: "Comunicación directa con nuestros desarrolladores y seguimiento detallado en cada etapa del proyecto.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Experiencia Comprobada",
      description: "Más de 5 años desarrollando soluciones tecnológicas para empresas mexicanas de diversos sectores.",
    },
  ]

  const workProcess = [
    {
      step: "01",
      title: "Análisis y Diagnóstico Tecnológico",
      description: "Evaluamos tus necesidades empresariales y definimos la arquitectura de software más adecuada para tu negocio.",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      step: "02", 
      title: "Propuesta Técnica y Diseño",
      description: "Creamos la propuesta de solución, wireframes y diseños de interfaz adaptados a tu marca y usuarios.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Desarrollo e Implementación",
      description: "Desarrollamos tu software con metodología ágil, entregas parciales y pruebas continuas de calidad.",
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "Despliegue y Capacitación",
      description: "Implementamos el sistema en producción, capacitamos a tu equipo y entregamos documentación técnica completa.",
      icon: <Rocket className="w-6 h-6" />,
    },
  ]

  const techStack = [
    {
      name: "React",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-blue-400 to-cyan-400",
      description: "Desarrollo de interfaces modernas y responsivas",
    },
    {
      name: "Next.js",
      icon: <Globe className="w-8 h-8" />,
      color: "from-gray-400 to-gray-600",
      description: "Framework para aplicaciones web de alto rendimiento",
    },
    {
      name: "Node.js",
      icon: <Server className="w-8 h-8" />,
      color: "from-green-400 to-green-600",
      description: "Backend escalable y APIs RESTful",
    },
    {
      name: "Angular",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-yellow-400 to-blue-500", 
      description: "Aplicaciones empresariales robustas",
    },
    {
      name: "TypeScript",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-blue-500 to-blue-700",
      description: "Código mantenible y escalable",
    },
    {
      name: "MySQL",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-green-700",
      description: "Base de datos empresarial confiable",
    },
    {
      name: "PostgreSQL",
      icon: <Database className="w-8 h-8" />,
      color: "from-blue-600 to-indigo-600",
      description: "Base de datos avanzada para sistemas complejos",
    },
    {
      name: "Flutter",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-cyan-400 to-blue-500",
      description: "Apps móviles para iOS y Android",
    },
    {
      name: "Tailwind CSS",
      icon: <Chrome className="w-8 h-8" />,
      color: "from-teal-400 to-cyan-500",
      description: "Diseños modernos y responsivos",
    },
  ]

  const portfolio = [
    {
      title: "Sistema POS para MIPYMES",
      description: "Sistema de punto de venta completo para pequeñas y medianas empresas mexicanas, con módulos de inventario, ventas, reportes financieros y corte de caja automatizado.",
      image: "/sistema-pos-preview.jpg",
      technologies: ["Angular", "Express.js", "PostgreSQL"],
      results: [
        "Reducción del 60% en tiempo de procesamiento de ventas",
        "Control de inventario automatizado",
        "Reportes financieros en tiempo real"
      ],
      link: "#contacto",
      category: "Sistema Empresarial",
    },
    {
      title: "Landing Page Restaurante Gourmet",
      description: "Sitio web profesional para restaurante con diseño responsive, optimización SEO y integración con sistemas de reservas online.",
      image: "/restaurante-preview.jpg",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      results: [
        "100% optimizado para dispositivos móviles", 
        "Velocidad de carga: 95/100 Google PageSpeed",
        "Aumento del 40% en reservas online"
      ],
      link: "https://alexisgohe.github.io/restaurante/",
      category: "Sitio Web Corporativo",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-40 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y1 }}
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.header
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="flex justify-center mb-8">
              <Image 
                src="/logo.webp"
                alt="Developers Code - Consultoría Tecnológica y Desarrollo de Software en México" 
                width={300}
                height={128}
                className="h-24 md:h-32 w-auto"
                priority
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Consultoría Tecnológica y <span className="text-blue-400">Desarrollo de Software a Medida</span> en México
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Transformamos tus ideas empresariales en soluciones digitales exitosas.
              </p>
              <p className="text-xl md:text-2xl text-gray-300 mb-12">
                <span className="text-green-400 font-semibold">Resultados medibles, tecnología confiable.</span>
              </p>
            </motion.div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="#contacto">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                Solicitar Cotización Gratuita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          aria-label="Desplázate hacia abajo"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros <span className="text-blue-400">Servicios de Desarrollo</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Soluciones tecnológicas integrales para empresas mexicanas que buscan digitalizar y optimizar sus procesos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <article className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </article>
              </FloatingCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Por qué elegir <span className="text-green-400">Developers Code?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Somos tu socio tecnológico ideal para el crecimiento empresarial en México
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <FloatingCard key={index} delay={index * 0.2}>
                <article className="text-center group">
                  <div className="bg-gradient-to-br from-green-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </article>
              </FloatingCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Tech Stack Section */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tecnologías <span className="text-cyan-400">Modernas y Confiables</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Utilizamos el stack tecnológico más actualizado para garantizar soluciones escalables y de alto rendimiento
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <FloatingCard key={index} delay={index * 0.05}>
                <motion.article
                  whileHover={{ scale: 1.05 }}
                  className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                >
                  <div
                    className={`bg-gradient-to-br ${tech.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{tech.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">{tech.name}</h3>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                    {tech.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                  </div>
                </motion.article>
              </FloatingCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Work Process Section */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestra <span className="text-cyan-400">Metodología de Trabajo</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proceso estructurado que garantiza el éxito de tu proyecto tecnológico desde el primer día
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((process, index) => (
              <FloatingCard key={index} delay={index * 0.15}>
                <article className="relative h-full">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                    <div className="text-6xl font-bold text-cyan-400/20 mb-4">{process.step}</div>
                    <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {process.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{process.description}</p>
                  </div>
                  {index < workProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                  )}
                </article>
              </FloatingCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Portfolio Section */}
      <AnimatedSection className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Casos de <span className="text-green-400">Éxito Empresarial</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proyectos reales que demuestran nuestra capacidad para transformar empresas mexicanas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <FloatingCard key={index} delay={index * 0.2}>
                <article className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300 group">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder-project.jpg"}
                      alt={`${project.title} - Caso de éxito Developers Code`}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-slate-700/50 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      {project.results.length > 0 && (
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Resultados obtenidos:</h4>
                      )}
                      <ul className="space-y-1">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="text-sm text-gray-400 flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Link */}
                    <motion.a
                      href={project.link}
                      target={project.link.startsWith('http') ? '_blank' : '_self'}
                      rel={project.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors group/link"
                    >
                      Ver proyecto completo
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </article>
              </FloatingCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection id="contacto" className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-green-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para <span className="text-blue-400">digitalizar</span> tu empresa?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Contáctanos hoy para una consultoría gratuita y descubre cómo podemos optimizar tus procesos empresariales con tecnología
            </p>
          </motion.div>

          <address className="not-italic">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="mailto:hola.developerscode@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-3"
                aria-label="Enviar correo a Developers Code"
              >
                <Mail className="w-5 h-5" />
                hola.developerscode@gmail.com
              </motion.a>

              <motion.a
                href="tel:+522283175642"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-3"
                aria-label="Llamar a Developers Code"
              >
                <Phone className="w-5 h-5" />
                +52 (228) 317-5642
              </motion.a>
            </div>
          </address>

          {/* Local SEO Info */}
          <div className="mt-8 text-gray-400">
            <p>📍 Coatepect, Veracruz, México | Servicios en toda la República Mexicana</p>
            <p className="mt-2">Consultoría tecnológica y desarrollo de software para empresas mexicanas</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Developers Code</h3>
              <p className="text-gray-400 text-sm">
                Consultoría tecnológica y desarrollo de software empresarial en México. Transformamos ideas en soluciones digitales exitosas.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-white">Servicios</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Desarrollo web profesional</li>
                <li>Software empresarial a medida</li>
                <li>Consultoría tecnológica</li>
                <li>Mantenimiento de sistemas</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-white">Contacto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📧 hola.developerscode@gmail.com</li>
                <li>📞 +52 (228) 317-5642</li>
                <li>📍 Coatepec, Veracruz, México</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700/50 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Developers Code. Todos los derechos reservados. | 
              <span className="text-blue-400 ml-1">Consultoría Tecnológica México</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}