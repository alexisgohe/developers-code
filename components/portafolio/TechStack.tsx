'use client'

import { Cpu, Terminal } from "lucide-react";
import Image from "next/image";

const tech = [
  "NextJs",
  "TypeScript",
  "Tailwind",
  "PostgreSQL",
  "NodeJs",
  "Docker",
  "Java",
  "Spring",
  "Supabase",
  "Appwrite",
  "Python",
  "React",
  "MySQL",
  "Express",
  "Flutter",
];

export default function TechStack() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Cpu className="text-blue-600" size={32} />
            Nuestro Arsenal Tecnológico
          </h2>
          <p className="text-gray-600">
            Seleccionamos el stack ideal para cada proyecto.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tech.map((t) => (
            <div
              key={t}
              className="bg-gray-100 p-6 rounded-xl text-center hover:bg-gray-200 transition flex flex-col items-center gap-2"
            >
              <Image 
                src={`/icons/${t.toLowerCase()}.svg`} 
                width={32}
                height={32}
                className="w-8 h-8 object-contain" 
                alt={`${t} logo`}
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <span className="font-medium text-gray-800 text-sm">{t}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}