import web1 from '@/resource/imagenes/web_1.png';
import web2 from '@/resource/imagenes/web_2.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'Frontend' | 'Backend' | 'Fullstack' | 'Mobile';
  demoUrl?: string;
  githubUrl?: string;
  status?: 'Desarrollando' | 'Implementando';
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Sistema de Ventas e Inventario',
    description: 'Sistema POS integral para la gestión de stock y ventas de una empresa ferretera, con dashboard administrativo interactivo.',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1000',
    tags: ['React', 'Node.js', 'MySQL'],
    category: 'Fullstack',
    githubUrl: 'https://github.com/ManuelDevr?tab=repositories'
  },
  {
    id: '2',
    title: 'Web Cataluña',
    description: 'Plataforma web responsiva centrada en la experiencia de usuario y diseño moderno para mejorar la visibilidad digital de una Joyeria.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL'],
    category: 'Fullstack',
    githubUrl: 'https://github.com/ManuelDevr?tab=repositories'
  },
  {
    id: '3',
    title: 'Rick and Morty Explorer',
    description: 'Explorador interactivo de personajes, ubicaciones y episodios de Rick and Morty. Consumo de API REST, filtros avanzados y scroll infinito.',
    image: web1,
    tags: ['React', 'API REST', 'Tailwind', 'Framer Motion'],
    category: 'Frontend',
    demoUrl: 'https://manueldevr.github.io/Rick_And_Morty/',
    githubUrl: 'https://github.com/ManuelDevr/Rick_And_Morty'
  },
  {
    id: '4',
    title: 'Lista de Tareas',
    description: 'Aplicación minimalista de gestión de tareas diarias centrada en la simplicidad y eficiencia del usuario.',
    image: web2,
    tags: ['React', 'TypeScript', 'Tailwind', 'Local Storage'],
    category: 'Frontend',
    demoUrl: 'https://manueldevr.github.io/Lista_de_Tareas/',
    githubUrl: 'https://github.com/ManuelDevr/Lista_de_Tareas'
  },
  {
    id: '5',
    title: 'API REST Autenticación',
    description: 'Desarrollo de una API robusta para la gestión de usuarios y autenticación segura.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000',
    tags: ['Node.js', 'Express', 'JWT', 'MongoDB'],
    category: 'Backend',
    githubUrl: 'https://github.com/ManuelDevr?tab=repositories'
  }
];
