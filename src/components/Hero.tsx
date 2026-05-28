import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, ArrowRight } from 'lucide-react';
import ProfileImg from '@/resource/imagenes/IMG.png';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-glow text-glow-blue font-medium tracking-wide text-sm md:text-base">DESARROLLADOR WEB</h2>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              Hola, soy <span className="bg-clip-text text-transparent bg-gradient-to-r from-glow-blue to-glow-purple">Manuel</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
            Me apasiona construir software funcional, escalable y centrado en el usuario. 
            Tengo experiencia práctica con JavaScript, PHP y frameworks como React, Node.js, Spring Boot, Laravel y Symfony. 
            Actualmente busco prácticas profesionales para seguir creciendo en entornos ágiles.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-3 bg-glow-blue hover:bg-glow-blue/80 text-white rounded-full transition-all flex items-center gap-2 group shadow-lg shadow-glow-blue/20 font-bold">
              Contáctame <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex gap-4 items-center">
              <a href="https://github.com/ManuelDevr" target="_blank" rel="noopener noreferrer" className="p-3 bg-deep-800 hover:bg-deep-700 rounded-full transition-colors text-gray-300 hover:text-white border border-white/5">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/manuel-geovanni-nole-almeyda" target="_blank" rel="noopener noreferrer" className="p-3 bg-deep-800 hover:bg-deep-700 rounded-full transition-colors text-gray-300 hover:text-white border border-white/5">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:manuel777nole@gmail.com" className="p-3 bg-deep-800 hover:bg-deep-700 rounded-full transition-colors text-gray-300 hover:text-white border border-white/5">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glow circle background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-glow-blue to-glow-purple rounded-full blur-3xl opacity-20 animate-glow-pulse" />
            
            {/* Image Container - Sin fondos negros, ocupando todo el espacio */}
            <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden shadow-2xl">
               <img 
                 src={ProfileImg} 
                 alt="Manuel Profile" 
                 className="object-cover w-full h-full"
               />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

