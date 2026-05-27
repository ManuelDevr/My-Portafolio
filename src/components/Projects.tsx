import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

const categories = ['Todos', 'Frontend', 'Backend', 'Fullstack'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="proyectos" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Intro */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Proyectos <span className="text-glow-blue tracking-tighter">Seleccionados</span></h2>
          <p className="text-gray-400 max-w-2xl">
            He trabajado en una amplia gama de proyectos, desde aplicaciones móviles hasta complejos sistemas distribuidos. Mi enfoque siempre está en la escalabilidad y el rendimiento.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat 
                  ? 'bg-glow-blue text-white border-glow-blue' 
                  : 'bg-deep-800 text-gray-400 border-white/5 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
