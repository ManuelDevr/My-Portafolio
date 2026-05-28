import type { IconType } from 'react-icons';
import { FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { DiDatabase, DiMongodb } from 'react-icons/di';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, 
  SiPython, SiPostgresql, SiDocker, SiGit, 
  SiJavascript, SiPhp, 
  SiLaravel, SiSymfony, SiMysql, SiJira, 
  SiOpenjdk, SiSpringboot
} from 'react-icons/si';

export interface TechItem {
  name: string;
  icon: IconType;
  category: 'Frontend' | 'Backend' | 'Bases de datos' | 'Herramientas' | 'Aprendiendo';
  color: string;
}

export const techStack: TechItem[] = [
  // Frontend
  { name: 'HTML', icon: FaHtml5, category: 'Frontend', color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, category: 'Frontend', color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Frontend', color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Frontend', color: '#3178C6' },
  { name: 'React', icon: SiReact, category: 'Frontend', color: '#61DAFB' },
  { name: 'Tailwind', icon: SiTailwindcss, category: 'Frontend', color: '#06B6D4' },
  
  // Backend
  { name: 'PHP', icon: SiPhp, category: 'Backend', color: '#777BB4' },
  { name: 'Python', icon: SiPython, category: 'Backend', color: '#3776AB' },
  { name: 'Laravel', icon: SiLaravel, category: 'Backend', color: '#FF2D20' },
  { name: 'Symfony', icon: SiSymfony, category: 'Backend', color: '#FFFFFF' },
  
  // Bases de datos
  { name: 'MySQL', icon: SiMysql, category: 'Bases de datos', color: '#4479A1' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Bases de datos', color: '#4169E1' },
  { name: 'Oracle SQL', icon: DiDatabase, category: 'Bases de datos', color: '#F80000' },
  { name: 'SQL Server', icon: FaDatabase, category: 'Bases de datos', color: '#CC2927' },
  { name: 'MongoDB', icon: DiMongodb, category: 'Bases de datos', color: '#47A248' },
  
  // Herramientas
  { name: 'Docker', icon: SiDocker, category: 'Herramientas', color: '#2496ED' },
  { name: 'Git', icon: SiGit, category: 'Herramientas', color: '#F05032' },
  { name: 'Jira', icon: SiJira, category: 'Herramientas', color: '#0052CC' },
  
  // Aprendiendo
  { name: 'Java', icon: SiOpenjdk, category: 'Aprendiendo', color: '#ED8B00' },
  { name: 'Spring Boot', icon: SiSpringboot, category: 'Aprendiendo', color: '#6DB33F' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Aprendiendo', color: '#FFFFFF' },
];
