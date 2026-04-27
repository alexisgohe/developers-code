"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Monitor, Palette, Cloud, Cpu, ArrowUpRight } from "lucide-react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicios" ref={ref} className="bg-slate-50 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* 🧠 HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00023f]">
            Nuestros <span className="text-[#19a4b7]">Servicios</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Soluciones técnicas diseñadas para escalar, desde la arquitectura inicial hasta la implementación en la nube.
          </p>
        </motion.div>

        {/* 🧩 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 🌐 WEB APP (GRANDE) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-8 bg-white p-10 rounded-3xl border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,2,63,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(0,2,63,0.15)] transition-all duration-500 group"
          >
            <div className="flex flex-col md:flex-row gap-10">
              <div className="bg-[#19a4b7]/10 p-5 rounded-2xl text-[#19a4b7] group-hover:scale-110 transition-transform duration-500 shrink-0 h-fit w-fit">
                <Monitor size={32} />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#00023f]">
                    Desarrollo Web Premium
                  </h3>
                  <ArrowUpRight className="text-slate-300 group-hover:text-[#f36523] transition-colors" />
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  Creamos experiencias interactivas de alto rendimiento utilizando frameworks modernos y arquitectura limpia pensada para el futuro.
                </p>

                <div className="flex gap-2 flex-wrap">
                  {["React", "Node.js", "Next.js", "TypeScript"].map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-[#f36523]/5 text-[#f36523] text-xs font-bold rounded-full border border-[#f36523]/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* 🎨 UI/UX (PEQUEÑO) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-4 bg-white p-10 rounded-3xl border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,2,63,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(0,2,63,0.15)] transition-all duration-500 group"
          >
            <div className="bg-[#f36523]/10 p-5 rounded-2xl w-fit mb-8 group-hover:rotate-12 transition-transform duration-500 text-[#f36523]">
              <Palette size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#00023f]">Diseño UI/UX</h3>
            <p className="text-gray-600 leading-relaxed">
              Interfaces centradas en el usuario que equilibran estética moderna con funcionalidad intuitiva.
            </p>
          </motion.div>

          {/* ☁️ CLOUD (PEQUEÑO) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-4 bg-white p-10 rounded-3xl border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,2,63,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(0,2,63,0.15)] transition-all duration-500 group"
          >
            <div className="bg-[#19a4b7]/10 p-5 rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform duration-500 text-[#19a4b7]">
              <Cloud size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#00023f]">Cloud & Ops</h3>
            <p className="text-gray-600 leading-relaxed">
              Infraestructura robusta y escalable para garantizar que tu negocio nunca se detenga.
            </p>
          </motion.div>

          {/* ⚙️ EXCELENCIA TÉCNICA (GRANDE) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-8 bg-white p-10 rounded-3xl border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,2,63,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(0,2,63,0.15)] transition-all duration-500 group overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center gap-4 justify-center lg:justify-start mb-4">
                  <Cpu className="text-[#00023f]" size={28} />
                  <h3 className="text-2xl font-bold text-[#00023f]">Excelencia Técnica</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Nuestro código sigue estándares internacionales de seguridad y mantenibilidad, asegurando una inversión rentable a largo plazo.
                </p>
              </div>

              <div className="w-full lg:w-fit shrink-0">
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-[#00023f] p-6 rounded-2xl font-mono text-[11px] text-[#19a4b7] border border-blue-900/50 shadow-inner"
                >
                  <code className="leading-tight">
                    <span className="text-[#f36523]">class</span> DevelopersCode {"{"} <br />
                    &nbsp;&nbsp;build() {"{"} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#f36523]">return</span> innovation <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + precision; <br />
                    &nbsp;&nbsp;{"}"} <br />
                    {"}"}
                  </code>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}