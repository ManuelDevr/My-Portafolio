export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'Frontend' | 'Backend' | 'Fullstack' | 'Mobile';
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Rick and Morty Explorer',
    description: 'Explorador interactivo de personajes, ubicaciones y episodios de Rick and Morty. Consumo de API REST, filtros avanzados y scroll infinito.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000',
    tags: ['React', 'API REST', 'Tailwind', 'Framer Motion'],
    category: 'Frontend',
    demoUrl: '#',
    githubUrl: 'https://github.com/ManuelDevr/Rick_And_Morty'
  },
  {
    id: '2',
    title: 'Lista de Tareas',
    description: 'Aplicación minimalista de gestión de tareas diarias centrada en la simplicidad y eficiencia del usuario.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000',
    tags: ['React', 'TypeScript', 'Tailwind', 'Local Storage'],
    category: 'Frontend',
    demoUrl: '#',
    githubUrl: 'https://github.com/ManuelDevr/Lista_de_Tareas'
  }
];
