import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Inicio', href: '#' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Tecnologías', href: '#tecnologias' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const glassStyle = {
    backgroundColor: 'rgba(5, 5, 5, 0.45)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50"
      style={glassStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Aumentado de h-16 a h-20 para dar aire a las letras más grandes */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-glow-blue to-glow-purple tracking-tighter">
              Manuel Nole
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-base lg:text-lg font-semibold tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <a href="https://github.com/ManuelDevr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/manuel-geovanni-nole-almeyda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            
            <div className="md:hidden flex items-center ml-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-deep-800 border-b border-white/5"
          style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-lg font-bold text-gray-300 hover:text-white hover:bg-deep-700"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}

