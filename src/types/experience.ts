// src/types/experience.ts
export interface Skill {
  name: string;
  level: 'Básico' | 'Intermediário' | 'Avançado';
  icon: string;
}

export interface ExperienceSection {
  title: string;
  skills: Skill[];
}

// src/types/project.ts
export interface Project {
  title: string;
  image: string;
  description: string;
  githubUrl: string;
  demoUrl: string;
}

// src/types/social.ts
export interface SocialLink {
  icon: string;
  url: string;
  name: string;
}