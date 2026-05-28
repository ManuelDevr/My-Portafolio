import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-deep-800 rounded-2xl overflow-hidden border border-white/5 hover:border-glow-blue/50 transition-all duration-300 card-hover-glow"
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        {/* Status Badge */}
        {project.status && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-glow-purple/90 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm uppercase tracking-widest shadow-lg shadow-glow-purple/20">
              {project.status}
            </span>
          </div>
        )}
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-deep-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" className="flex items-center gap-2 text-white bg-glow-blue px-4 py-2 rounded-lg text-sm font-medium hover:bg-glow-blue/80 transition-colors">
              <ExternalLink size={16} /> Ver Demo
            </a>
          )}
          <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 text-white bg-deep-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-deep-600 transition-colors border border-white/10">
            <FaGithub size={16} /> Código
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold group-hover:text-glow-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-deep-700 text-gray-400 rounded-md border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
