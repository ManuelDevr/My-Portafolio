import type { IconType } from 'react-icons';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, 
  SiNodedotjs, SiPython, SiPostgresql, SiExpress,
  SiDocker, SiGit, SiNginx, SiFramer,
  SiJavascript, SiRust, SiGo
} from 'react-icons/si';

export interface TechItem {
  name: string;
  icon: IconType;
  category: 'Frontend' | 'Backend' | 'Herramientas' | 'Aprendiendo';
}

export const techStack: TechItem[] = [
  // Frontend (Orden: React, Next.js, TypeScript, Tailwind, JavaScript, Framer Motion)
  { name: 'React', icon: SiReact, category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Frontend' },
  { name: 'Tailwind', icon: SiTailwindcss, category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Frontend' },
  { name: 'Framer Motion', icon: SiFramer, category: 'Frontend' },
  
  // Backend (Orden: Node.js, Python, Postgres, Express)
  { name: 'Node.js', icon: SiNodedotjs, category: 'Backend' },
  { name: 'Python', icon: SiPython, category: 'Backend' },
  { name: 'Postgres', icon: SiPostgresql, category: 'Backend' },
  { name: 'Express', icon: SiExpress, category: 'Backend' },
  
  // Herramientas (Orden: Docker, Git, Nginx)
  { name: 'Docker', icon: SiDocker, category: 'Herramientas' },
  { name: 'Git', icon: SiGit, category: 'Herramientas' },
  { name: 'Nginx', icon: SiNginx, category: 'Herramientas' },
  
  // Aprendiendo (Orden: Rust, Go)
  { name: 'Rust', icon: SiRust, category: 'Aprendiendo' },
  { name: 'Go', icon: SiGo, category: 'Aprendiendo' },
];
