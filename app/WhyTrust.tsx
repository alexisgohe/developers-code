"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ShieldCheck, Handshake, Zap, Trophy } from "lucide-react"
import Image from "next/image"

export default function WhyTrust() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* IMÁGENES / VISUAL */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="space-y-4 pt-12">
            <div className="h-64 bg-gray-200 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop"
                alt="Modern Workspace"
                width={400}
                height={600}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>

            <div className="p-6 bg-[#00023f] rounded-xl text-white">
              <p className="text-3xl font-bold">99.9%</p>
              <p className="text-xs uppercase tracking-widest">
                Uptime Garantizado
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-[#f36523]/10 border border-[#f36523]/20 rounded-xl text-[#00023f] flex items-center gap-4">
              <Trophy className="text-[#f36523]" size={24} />
              <p className="font-bold">Resultados Profesionales</p>
            </div>

            <div className="h-80 bg-gray-200 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Our Team"
                width={400}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-[#00023f]">
            ¿Por qué confiar en Developers Code?
          </h2>

          <ul className="space-y-8">
            
            <motion.li 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex gap-6"
            >
              <div className="w-14 h-14 bg-[#19a4b7]/10 rounded-2xl flex items-center justify-center text-[#19a4b7] shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Visión Estructural
                </h4>
                <p className="text-gray-600">
                  Diseñamos bases sólidas para que tu negocio escale sin límites técnicos.
                </p>
              </div>
            </motion.li>

            <motion.li 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex gap-6"
            >
              <div className="w-14 h-14 bg-[#f36523]/10 rounded-2xl flex items-center justify-center text-[#f36523] shrink-0">
                <Handshake size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Compromiso de Confianza
                </h4>
                <p className="text-gray-600">
                  Transparencia total en cada sprint y resultados medibles.
                </p>
              </div>
            </motion.li>

            <motion.li 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex gap-6"
            >
              <div className="w-14 h-14 bg-[#00023f]/5 rounded-2xl flex items-center justify-center text-[#00023f] shrink-0">
                <Zap size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Agilidad Cinética
                </h4>
                <p className="text-gray-600">
                  Desarrollo rápido sin sacrificar calidad.
                </p>
              </div>
            </motion.li>

          </ul>
        </motion.div>
      </div>
    </section>
  );
}