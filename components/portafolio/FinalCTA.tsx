import { Rocket, ArrowRight } from "lucide-react";
import Link from "next/link"

export default function FinalCTA() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="bg-gray-50 rounded-3xl p-16 flex flex-col md:flex-row items-center gap-10">
          
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              ¿Tienes una idea en mente?
            </h2>

            <Link href="/contacto">
              <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
                Iniciar Proyecto
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>

          <div className="text-blue-600 opacity-20">
            <Rocket size={120} />
          </div>

        </div>

      </div>
    </section>
  );
}