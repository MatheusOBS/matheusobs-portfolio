import { Project, BlogPost, Skill } from "./types";

export const PROFILE = {
  name: "Matheus Oliveira Barbosa Santos",
  shortName: "matheusOBS",
  role: "Engenheiro de Software Full Stack",
  bio: "Apaixonado por criar experiências web escaláveis e bonitas. Especialista em React, Node.js e Arquitetura de Nuvem.",
  longBio:
    "Olá! Sou Matheus, um desenvolvedor baseado no Brasil. Tenho ajudado startups e empresas a transformar ideias em realidade através de código limpo e design centrado no usuário. Meu foco atual é na integração de IA em aplicações web modernas e desenvolvimento full stack.",
  email: "MatheusOliveiraDevContato@gmail.com",
  socials: {
    github: "https://github.com/MatheusOBS",
    linkedin:
      "https://www.linkedin.com/in/matheus-oliveira-barbosa-santos-21b508269/",
    instagram: "https://www.instagram.com/soumatheusdev/",
  },
};

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "AWS / Cloud", level: 75 },
  { name: "Gemini AI API", level: 80 },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Pergunta Certa",
    description:
      "Aplicação interativa focada em perguntas e respostas para validação de conhecimento e aprendizado.",
    tags: ["React", "Node.js", "Full Stack"],
    link: "https://github.com/MatheusOBS?tab=repositories",
    github: "https://github.com/MatheusOBS?tab=repositories",
    image: "https://picsum.photos/600/400?random=10",
  },
  {
    id: 2,
    title: "Agente IA WhatsApp Pro",
    description:
      "Um agente profissional que atende seus clientes sozinho no WhatsApp. O Agente IA WhatsApp Pro entende áudios, imagens, vídeos e documentos, responde dúvidas, marca consultas, faz triagem e realiza atendimentos completos – como um atendente humano, só que 24/7.",
    tags: ["Node.js", "AI", "WhatsApp API"],
    link: "https://matheusobs.github.io/-Agente-IA-WhatsApp-Pro/",
    github: "https://github.com/MatheusOBS/-Agente-IA-WhatsApp-Pro",
    image: "./agente-whatsapp.png",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "O Futuro do Desenvolvimento Web com IA",
    excerpt:
      "Como ferramentas como o Gemini e Copilot estão mudando a forma como escrevemos código e construímos interfaces.",
    date: "10 Out, 2023",
    readTime: "5 min",
    category: "Tecnologia",
    content:
      "A inteligência artificial não é apenas uma tendência passageira...",
    image: "https://picsum.photos/800/400?random=4",
  },
  {
    id: 2,
    title: "Dominando Tailwind CSS em 2024",
    excerpt:
      "Dicas avançadas de configuração, otimização e padrões de design para levar seu CSS para o próximo nível.",
    date: "25 Set, 2023",
    readTime: "8 min",
    category: "Tutorial",
    content:
      "Tailwind CSS revolucionou a maneira como estilizamos aplicações...",
    image: "https://picsum.photos/800/400?random=5",
  },
  {
    id: 3,
    title: "Por que escolhi TypeScript?",
    excerpt:
      "Uma análise profunda sobre os benefícios de tipagem estática em grandes projetos frontend.",
    date: "15 Ago, 2023",
    readTime: "6 min",
    category: "Opinião",
    content:
      "A transição de JavaScript puro para TypeScript pode parecer difícil no início...",
    image: "https://picsum.photos/800/400?random=6",
  },
];
