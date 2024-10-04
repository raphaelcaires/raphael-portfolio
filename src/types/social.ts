export interface SocialLink {
  icon: string;    // Ícone do Font Awesome ou outro conjunto de ícones
  url: string;     // URL do perfil social
  name: string;    // Nome da rede social (para uso em aria-label e title)
  color?: string;  // Cor opcional específica para o ícone/botão
}

export interface SocialLinks {
  linkedin: SocialLink;
  github: SocialLink;
  email: SocialLink;
}

// Objeto de constantes para redes sociais pré-configuradas
export const DEFAULT_SOCIAL_LINKS: SocialLinks = {
  linkedin: {
    icon: 'fab fa-linkedin',
    url: 'https://linkedin.com/',
    name: 'LinkedIn',
    color: '#0077B5'
  },
  github: {
    icon: 'fab fa-github',
    url: 'https://github.com/',
    name: 'GitHub',
    color: '#333'
  },
  email: {
    icon: 'email',
    url: 'mailto:example@email.com',
    name: 'Email',
    color: '#EA4335'
  }
};

// Type para validação de plataformas sociais suportadas
export type SocialPlatform = keyof typeof DEFAULT_SOCIAL_LINKS;

// Interface para configuração de links sociais com informações adicionais
export interface SocialConfig {
  platform: SocialPlatform;
  username: string;
  showIcon?: boolean;
  customColor?: string;
}

// Type helper para criar URLs de redes sociais
export type SocialURLBuilder = (username: string) => string;

// Objeto com funções para construir URLs de redes sociais
export const SOCIAL_URL_BUILDERS: Record<SocialPlatform, SocialURLBuilder> = {
  linkedin: (username: string) => `https://linkedin.com/in/${username}`,
  github: (username: string) => `https://github.com/${username}`,
  email: (email: string) => `mailto:${email}`
};