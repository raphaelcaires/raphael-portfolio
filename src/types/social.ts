export interface SocialLink {
  icon: string;
  url: string;
  name: string;
  color?: string;
}

export interface SocialLinks {
  linkedin: SocialLink;
  github: SocialLink;
  email: SocialLink;
}

// Redes sociais padrão
export const defaultSocialLinks: SocialLinks = {
  linkedin: {
    icon: 'fab fa-linkedin',
    url: 'https://linkedin.com/in/dev-',
    name: 'LinkedIn',
    color: '#0077B5',
  },
  github: {
    icon: 'fab fa-github',
    url: 'https://github.com/',
    name: 'GitHub',
    color: '#333',
  },
  email: {
    icon: 'fas fa-envelope',
    url: 'mailto:example@email.com',
    name: 'Email',
    color: '#EA4335',
  },
};

// Tipos para as plataformas sociais
export type SocialPlatform = keyof typeof defaultSocialLinks;

export interface SocialConfig {
  platform: SocialPlatform;
  username: string;
  showIcon?: boolean;
  customColor?: string;
}

// Função para construir URLs de redes sociais
export const buildSocialURL = (platform: SocialPlatform, username: string): string => {
  const baseURL = defaultSocialLinks[platform].url;
  const urlBuilders: Record<SocialPlatform, (username: string) => string> = {
    linkedin: (username) => `${baseURL}${username}`,
    github: (username) => `${baseURL}${username}`,
    email: (username) => `mailto:${username}`,
  };

  const builder = urlBuilders[platform];

  if (!builder) {
    throw new Error(`Plataforma desconhecida: ${platform}`);
  }
  return builder(username);
};

// Obter links sociais com base nas configurações
export const getSocialLinks = (configs: SocialConfig[]): SocialLink[] => {
  return configs.map(({ platform, username, showIcon = true, customColor }) => {
    const { icon, name } = defaultSocialLinks[platform];
    const url = buildSocialURL(platform, username);
    const color = customColor || defaultSocialLinks[platform].color;

    return {
      icon: showIcon ? icon : '',
      url,
      name,
      color,
    };
  });
};
