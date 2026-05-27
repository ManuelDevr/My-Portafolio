export default function Footer() {
  return (
    <footer className="py-20 px-4 border-t border-white/5 bg-deep-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-4 text-center md:text-left">
          {/* Tu firma destacada */}
          <h2 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-glow-blue to-glow-purple tracking-tighter uppercase">
            Manuel Nole
          </h2>
          <p className="text-gray-400 text-lg">DESARROLLADOR WEB</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-10 text-base lg:text-lg font-medium text-gray-400">
          <a href="#proyectos" className="hover:text-glow-blue transition-colors">Proyectos</a>
          <a href="#sobre-mi" className="hover:text-glow-purple transition-colors">Sobre mí</a>
          <a href="#tecnologias" className="hover:text-glow-blue transition-colors">Tecnologías</a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Manuel Nole. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
