import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/5 bg-deep-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="space-y-2 text-center md:text-left">
            {/* Tu firma destacada */}
            <h2 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-glow-blue to-glow-purple tracking-tighter uppercase">
              Manuel Nole
            </h2>
            <p className="text-gray-400 text-lg">DESARROLLADOR WEB</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 text-base font-medium text-gray-400">
            <a href="#" className="hover:text-glow-blue transition-colors">Inicio</a>
            <a href="#proyectos" className="hover:text-glow-blue transition-colors">Proyectos</a>
            <a href="#sobre-mi" className="hover:text-glow-purple transition-colors">Sobre mí</a>
            <a href="#tecnologias" className="hover:text-glow-blue transition-colors">Tecnologías</a>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://github.com/ManuelDevr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/manuel-geovanni-nole-almeyda" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Manuel Nole. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
