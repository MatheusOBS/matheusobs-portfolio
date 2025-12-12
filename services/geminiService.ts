import { GoogleGenAI, Chat } from "@google/genai";
import { PROFILE, PROJECTS, SKILLS, BLOG_POSTS } from '../constants';

let chatSession: Chat | null = null;

const getSystemInstruction = (): string => {
  return `
    Você é o assistente virtual do portfólio de ${PROFILE.name}.
    
    Aqui estão as informações sobre o ${PROFILE.name}:
    - Bio: ${PROFILE.bio}
    - Sobre: ${PROFILE.longBio}
    - Habilidades principais: ${SKILLS.map(s => s.name).join(', ')}
    - Projetos recentes: ${PROJECTS.map(p => p.title + ": " + p.description).join('; ')}
    - Artigos recentes no blog: ${BLOG_POSTS.map(b => b.title).join('; ')}
    
    Seu objetivo é responder perguntas de visitantes, recrutadores ou outros desenvolvedores sobre o Matheus de forma profissional, amigável e concisa.
    Se perguntarem o contato, forneça: ${PROFILE.email}.
    Se perguntarem sobre algo que não está no contexto, diga educadamente que não tem essa informação específica, mas sugira entrar em contato por e-mail.
    Responda sempre em Português do Brasil, a menos que falem com você em outra língua.
  `;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return "Erro: API Key não configurada. Por favor, configure a chave de API para usar o chat.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: getSystemInstruction(),
        },
      });
    }

    const response = await chatSession.sendMessage({ message });
    return response.text || "Desculpe, não consegui processar sua resposta.";
  } catch (error) {
    console.error("Erro ao comunicar com Gemini:", error);
    return "Desculpe, ocorreu um erro temporário no meu sistema de IA.";
  }
};