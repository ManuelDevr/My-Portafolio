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
                Soy un Ingeniero de Software con una profunda pasión por resolver problemas complejos a través de código limpio y eficiente. Mi enfoque se centra en la atención al detalle y la creación de experiencias de usuario excepcionales.
              </p>
              <p>
                A lo largo de mi carrera, he liderado el desarrollo de productos digitales innovadores, colaborando con equipos multidisciplinarios para transformar ideas audaces en realidades técnicas sólidas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Atención al detalle',
              'Pasión por la tecnología',
              'Visión de producto',
              'Aprendizaje continuo'
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-base text-gray-300">
                <CheckCircle2 size={20} className="text-glow-blue" />
                {item}
              </div>
            ))}
          </div>

          <a 
            href="https://docs.google.com/document/d/1gt74twdyZKhsDygeijq3hBc5JMVoNLUx50064ABbdnk/edit?usp=sharing" 
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

