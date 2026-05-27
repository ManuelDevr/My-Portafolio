import { motion } from 'framer-motion';
import { techStack } from '@/data/tech';
import type { TechItem } from '@/data/tech';

const categories = ['Frontend', 'Backend', 'Herramientas', 'Aprendiendo'];

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-24 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="space-y-16">
        {/* Título de la sección */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Tecnologías <span className="text-glow-blue tracking-tighter">& Herramientas</span></h2>
          <p className="text-gray-400 max-w-2xl">
            Mi stack tecnológico está en constante evolución. Utilizo las mejores herramientas para construir aplicaciones modernas, rápidas y escalables, enfocándome siempre en la calidad del código y la experiencia del usuario.
          </p>
        </div>

        {/* Estructura de 4 columnas horizontales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {categories.map((category) => (
            <div key={category} className="space-y-10">
              {/* Título de categoría */}
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] border-b border-white/5 pb-4">
                {category}
              </h3>
              
              {/* Rejilla de iconos dentro de cada columna */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-10">
                {techStack
                  .filter((tech) => tech.category === category)
                  .map((tech, index) => (
                    <TechIcon key={tech.name} tech={tech} index={index} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechIcon({ tech, index }: { tech: TechItem; index: number }) {
  const Icon = tech.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex flex-col items-center gap-3 group"
    >
      {/* Contenedor cuadrado gris oscuro profundo */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 bg-[#0a0a0a] rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-glow-blue/40 transition-all duration-300 shadow-xl group-hover:shadow-glow-blue/5">
        <Icon size={32} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
        
        {/* Efecto de resplandor suave al hover */}
        <div className="absolute inset-0 bg-glow-blue/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
      </div>

      {/* Tipografía: Mayúsculas, centrada, pequeña y blanca/gris clara */}
      <span className="text-[10px] md:text-[11px] font-bold text-gray-500 group-hover:text-white text-center uppercase tracking-widest leading-none transition-colors duration-300">
        {tech.name}
      </span>
    </motion.div>
  );
}
