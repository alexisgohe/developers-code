"use client"

import type React from "react"

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

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
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
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas, rápidas y escalables con las últimas tecnologías.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Sistemas a la Medida",
      description: "Soluciones personalizadas que se adaptan perfectamente a tu negocio.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Asesoría Técnica",
      description: "Consultoría especializada para optimizar tu arquitectura tecnológica.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Automatizaciones y APIs",
      description: "Integración de sistemas y automatización de procesos empresariales.",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Enfoque Técnico Profesional",
      description: "Metodologías probadas y mejores prácticas en cada proyecto.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Atención Personalizada",
      description: "Comunicación directa y seguimiento constante de tu proyecto.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Experiencia Real",
      description: "Años de experiencia en proyectos complejos y desafiantes.",
    },
  ]

  const workProcess = [
    {
      step: "01",
      title: "Reunión Inicial",
      description: "Analizamos tus necesidades y definimos objetivos claros.",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "Planificación",
      description: "Diseñamos la arquitectura y planificamos el desarrollo.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Desarrollo",
      description: "Implementamos la solución con actualizaciones constantes.",
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "Entrega Final",
      description: "Desplegamos, probamos y entregamos tu proyecto completo.",
      icon: <Rocket className="w-6 h-6" />,
    },
  ]

  const techStack = [
    {
      name: "React",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-blue-400 to-cyan-400",
      description: "Biblioteca para interfaces de usuario",
    },
    {
      name: "Next.js",
      icon: <Globe className="w-8 h-8" />,
      color: "from-gray-400 to-gray-600",
      description: "Framework de React para producción",
    },
    {
      name: "Node.js",
      icon: <Server className="w-8 h-8" />,
      color: "from-green-400 to-green-600",
      description: "Runtime de JavaScript del lado servidor",
    },
    {
      name: "Python",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-yellow-400 to-blue-500",
      description: "Lenguaje versátil para backend y AI",
    },
    {
      name: "TypeScript",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-blue-500 to-blue-700",
      description: "JavaScript con tipado estático",
    },
    {
      name: "AWS",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-orange-400 to-yellow-500",
      description: "Servicios de nube de Amazon",
    },
    {
      name: "MongoDB",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-green-700",
      description: "Base de datos NoSQL",
    },
    {
      name: "PostgreSQL",
      icon: <Database className="w-8 h-8" />,
      color: "from-blue-600 to-indigo-600",
      description: "Base de datos relacional avanzada",
    },
    {
      name: "Docker",
      icon: <Layers className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600",
      description: "Contenedorización de aplicaciones",
    },
    {
      name: "GraphQL",
      icon: <Zap className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600",
      description: "Lenguaje de consulta para APIs",
    },
    {
      name: "React Native",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-cyan-400 to-blue-500",
      description: "Desarrollo móvil multiplataforma",
    },
    {
      name: "Tailwind CSS",
      icon: <Chrome className="w-8 h-8" />,
      color: "from-teal-400 to-cyan-500",
      description: "Framework CSS utility-first",
    },
  ]

  const portfolio = [
    {
      title: "E-commerce Avanzado",
      description:
        "Plataforma completa de comercio electrónico con gestión de inventario, pagos y analytics en tiempo real.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      results: ["300% aumento en ventas", "50% reducción en tiempo de carga", "99.9% uptime"],
      link: "#",
      category: "E-commerce",
    },
    {
      title: "Sistema de Gestión Empresarial",
      description:
        "ERP personalizado para automatizar procesos de recursos humanos, contabilidad y gestión de proyectos.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Python", "MongoDB", "AWS"],
      results: ["80% reducción en tareas manuales", "Integración con 15+ sistemas", "ROI del 250%"],
      link: "#",
      category: "Sistema Empresarial",
    },
    {
      title: "App Móvil FinTech",
      description:
        "Aplicación móvil para gestión financiera personal con IA para análisis de gastos y recomendaciones.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Node.js", "AI/ML", "Firebase"],
      results: ["100K+ usuarios activos", "4.8★ rating en stores", "40% mejora en ahorro personal"],
      link: "#",
      category: "Aplicación Móvil",
    },
    {
      title: "Plataforma de Automatización",
      description: "Sistema de automatización de procesos empresariales con integración de múltiples APIs y workflows.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["TypeScript", "GraphQL", "Docker", "Microservicios"],
      results: ["90% automatización de procesos", "60% reducción de errores", "24/7 operación autónoma"],
      link: "#",
      category: "Automatización",
    },
  ]

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
          className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y1 }}
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              Developers Code
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-2xl md:text-3xl text-gray-300 mb-4">Soluciones digitales serias.</p>
              <p className="text-2xl md:text-3xl text-gray-300 mb-12">
                <span className="text-blue-400 font-semibold">Resultados reales.</span>
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              Solicitar Cotización
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
              Nuestros <span className="text-blue-400">Servicios</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio al siguiente nivel
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
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
              ¿Por qué <span className="text-purple-400">elegirnos?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <FloatingCard key={index} delay={index * 0.2}>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-purple-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
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
              Nuestro <span className="text-cyan-400">Stack Tecnológico</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trabajamos con las tecnologías más modernas y confiables del mercado
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <FloatingCard key={index} delay={index * 0.05}>
                <motion.div
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
                </motion.div>
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
              Nuestro <span className="text-cyan-400">Proceso</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un enfoque estructurado que garantiza resultados excepcionales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((process, index) => (
              <FloatingCard key={index} delay={index * 0.15}>
                <div className="relative">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
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
                </div>
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
              Nuestro <span className="text-purple-400">Portafolio</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Casos de éxito que demuestran nuestra experiencia y capacidad de entrega
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <FloatingCard key={index} delay={index * 0.2}>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
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
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Resultados:</h4>
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
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors group/link"
                    >
                      Ver proyecto completo
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              Ver todos los proyectos
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para <span className="text-blue-400">transformar</span> tu negocio?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Contáctanos hoy y descubre cómo podemos llevar tu proyecto al siguiente nivel
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="mailto:hola.developerscode@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-3"
            >
              <Mail className="w-5 h-5" />
              hola.developerscode@gmail.com
            </motion.a>

            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              +52 (555) 123-4567
            </motion.a>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Developers Code. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
