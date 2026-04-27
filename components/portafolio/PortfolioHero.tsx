import { Code2 } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="relative pt-32 pb-32 px-8 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
            Donde el Código se Convierte en <span className="text-blue-500">Valor Real</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl">
            Explora nuestra trayectoria construyendo soluciones de alto rendimiento, 
            arquitectura escalable y experiencias digitales de impacto.
          </p>

          <div className="flex gap-4">
            <div className="w-16 h-2 bg-orange-400 rounded-full" />
            <div className="w-8 h-2 bg-blue-600 rounded-full" />
          </div>
        </div>
      </div>

      {/* decoración */}
      <div className="absolute -right-20 top-20 opacity-10 text-blue-600 select-none pointer-events-none">
        <Code2 size={300} strokeWidth={1} />
      </div>
    </section>
  );
}