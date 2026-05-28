import { motion } from 'framer-motion';
import { techStack } from '@/data/tech';
import type { TechItem } from '@/data/tech';

const topCategories = ['Frontend', 'Backend', 'Bases de datos'];
const bottomCategories = ['Herramientas', 'Aprendiendo'];

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-24 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="space-y-24">
        {/* Título de la sección */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Tecnologías <span className="text-glow-blue tracking-tighter">& Herramientas</span></h2>
          <p className="text-gray-400 max-w-2xl">
            Mi stack tecnológico está en constante evolución. Utilizo las mejores herramientas para construir aplicaciones modernas, rápidas y escalables, enfocándome siempre en la calidad del código y la experiencia del usuario.
          </p>
        </div>

        {/* Primera fila: Frontend, Backend, Bases de Datos */}
        <div className="flex flex-col md:flex-row justify-center gap-x-12 gap-y-16">
          {topCategories.map((category) => (
            <div key={category} className="w-full md:w-1/3 max-w-xs mx-auto md:mx-0">
              <CategoryGroup category={category} />
            </div>
          ))}
        </div>

        {/* Segunda fila: Herramientas, Aprendiendo */}
        <div className="flex flex-col md:flex-row justify-center gap-x-12 gap-y-16">
          {bottomCategories.map((category) => (
            <div key={category} className="w-full md:w-1/3 max-w-xs mx-auto md:mx-0">
              <CategoryGroup category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryGroup({ category }: { category: string }) {
  return (
    <div className="space-y-10 flex flex-col items-center">
      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] border-b border-white/5 pb-4 w-full text-center">
        {category}
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 justify-items-center">
        {techStack
          .filter((tech) => tech.category === category)
          .map((tech, index) => (
            <TechIcon key={tech.name} tech={tech} index={index} />
          ))}
      </div>
    </div>
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
      {/* Contenedor con animación de flotación constante */}
      <motion.div 
        animate={{ 
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3 + (index % 3), // Variación para que no todos suban al mismo tiempo
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-16 h-16 md:w-20 md:h-20 bg-[#0a0a0a] rounded-2xl flex items-center justify-center border border-white/5 transition-all duration-300 shadow-xl group-hover:scale-110"
        style={{ 
          borderColor: `${tech.color}22`,
          boxShadow: `0 10px 30px -15px ${tech.color}44`
        }}
      >
        {/* Icono con color permanente y brillo suave */}
        <Icon 
          size={32} 
          style={{ 
            color: tech.color,
            filter: `drop-shadow(0 0 5px ${tech.color}66)`
          }}
          className="transition-transform duration-500"
        />
        
        {/* Efecto de resplandor de fondo permanente pero sutil */}
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{ 
            background: `radial-gradient(circle at center, ${tech.color}15 0%, transparent 70%)` 
          }}
        />
      </motion.div>

      {/* Nombre de la tecnología */}
      <span className="text-[10px] md:text-[11px] font-bold text-gray-400 group-hover:text-white text-center uppercase tracking-widest leading-none transition-colors duration-300">
        {tech.name}
      </span>
    </motion.div>
  );
}
