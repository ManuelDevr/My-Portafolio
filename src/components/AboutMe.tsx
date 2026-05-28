import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';
import ProfileImg from '@/resource/imagenes/IMG.png';

export default function AboutMe() {
  return (
    <section id="sobre-mi" className="py-24 px-4 bg-deep-800/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Image/Visual - Sin fondos negros */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center lg:justify-start"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-glow-purple/20 rounded-3xl blur-2xl" />
            <div className="relative w-full h-full rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <img 
                src={ProfileImg} 
                alt="Manuel Profile" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Sobre <span className="text-glow-purple">mí</span></h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
              <p>
                Soy egresado de la carrera de Desarrollo de Sistemas de Información en el instituto IDAT. Me especializo en la creación de aplicaciones web escalables utilizando tecnologías modernas como React, Node.js y Spring Boot.
              </p>
              <p>
                Me destaco por mi capacidad de trabajo en equipo, habiendo aplicado metodologías ágiles (Scrum) en proyectos académicos. Busco constantemente optimizar procesos de negocio a través del software.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Resolución de problemas',
              'Diseño responsivo',
              'Mejora continua',
              'Adaptabilidad'
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-base text-gray-300">
                <CheckCircle2 size={20} className="text-glow-blue" />
                {item}
              </div>
            ))}
          </div>

          <a 
            href="https://drive.google.com/file/d/1u6hcb1Z8tNU0SultiX1tDqEATyGSnl7Y/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-deep-700 hover:bg-deep-600 px-8 py-4 rounded-full border border-white/10 transition-all group font-bold text-lg w-fit"
          >
            <FileText size={22} className="group-hover:scale-110 transition-transform" />
            <span>Ver CV completo</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

