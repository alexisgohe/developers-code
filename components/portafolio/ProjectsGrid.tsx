"use client";

import { ExternalLink, Github, Code2 } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Smera SaaS",
    description: "Gestión de menús con IA para importación de PDFs/imágenes y analítica para restaurantes.",
    tag: "SaaS",
    tech: ["Nextjs", "Nodejs", "Appwrite"],
    image: "/portafolio/smera.jpg",
    link: "https://smera-saas.vercel.app/",
  },
  {
    title: "Landing Page Restaurante",
    description: "Web estática accesible (WCAG) enfocada en usabilidad, inclusión y diseño premium.",
    tag: "Web",
    tech: ["React", "Tailwind"],
    image: "/portafolio/restaurante.jpg",
    link: "https://alexisgohe.github.io/restaurante/",
    code: "https://github.com/alexisgohe/restaurante",
  },
  {
    title: "PDF Tools",
    description: "Herramienta de conversión (PDF a Word/Imagen) y compresión eficiente de documentos.",
    tag: "Utilidad",
    tech: ["Nextjs", "Nodejs", "Python"],
    image: "/portafolio/pdf_tools.jpg",
  },
  {
    title: "Tourify",
    description: "Planificador colaborativo de viajes con itinerarios en tiempo real y recomendaciones.",
    tag: "Viajes",
    tech: ["Nextjs", "Nodejs", "Supabase"],
    image: "/portafolio/tourify.jpg",
  },
  {
    title: "Lockly",
    description: "Gestor de contraseñas seguro con generación aleatoria y almacenamiento cifrado.",
    tag: "Seguridad",
    tech: ["Nextjs", "Nodejs", "Supabase"],
    image: "/portafolio/lockly.jpg",
  },
  {
    title: "Developers Code Moments",
    description: "Landing page sobre creación de invitaciones digitales.",
    tag: "Web",
    tech: ["Nextjs", "Tailwind"],
    image: "/portafolio/developers-code-moments.jpg",
    link: "https://developers-code.vercel.app/invitaciones",
  },
  {
    title: "POS para MIPYMES",
    description: "Sistema de punto de venta con gestión de inventarios, ventas y reportes detallados.",
    tag: "Business",
    tech: ["Nextjs", "Nodejs", "Spring"],
    image: "/portafolio/pos.jpg",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="bg-[#f3f3f9] py-24 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {projects.map((p, i) => (
          <div
            key={i}
            className={`bg-white border border-gray-200 rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:border-blue-500/30`}
          >
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('unsplash')) {
                    target.srcset = '';
                    target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop';
                  }
                }}
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              <span className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full z-20">
                {p.tag}
              </span>
            </div>

            <div className="p-8 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-gray-900">{p.title}</h3>

              <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                {p.description}
              </p>

              <div className="flex gap-2 flex-wrap mb-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 text-[10px] font-bold bg-gray-50 text-gray-600 px-2 py-1 rounded-md border border-gray-200"
                  >
                    <Image 
                      src={`/icons/${t.toLowerCase()}.svg`} 
                      width={12}
                      height={12}
                      className="w-3 h-3 object-contain" 
                      alt={`${t} icon`}
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`Ver demostración en vivo de ${p.title}`} className="flex items-center gap-1.5 text-blue-600 text-sm font-bold hover:text-blue-700 transition">
                    <ExternalLink size={14} />
                    Demo
                  </a>
                )}
                {p.code && (
                  <a href={p.code} target="_blank" rel="noopener noreferrer" aria-label={`Ver código fuente de ${p.title} en GitHub`} className="flex items-center gap-1.5 text-gray-500 text-sm font-bold hover:text-gray-900 transition">
                    <Code2 size={14} />
                    Código
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}