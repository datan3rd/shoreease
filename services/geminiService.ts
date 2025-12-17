import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { Message } from '../types';

// Initialize the API client
// Note: In a real production app, ensure your API key is secured appropriately.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Sandy", the helpful AI concierge for ShoreEase, a new concept service launching in New Jersey in Summer 2026.
ShoreEase is like "Uber for beach equipment."

Here is what we do:
1. **Valet Service:** We pick up the user's existing beach gear (chairs, umbrellas, coolers) from their rental home or car, transport it to their chosen spot on the beach, set it up perfectly, and take it down/return it at the end of the day.
2. **Rental Service:** Users rent high-quality beach gear from us. We place it at their chosen GPS location on the beach before they arrive.

Key Benefits:
- No hauling heavy gear through sand.
- Relaxation starts the moment you hit the sand.
- Focus on NJ beaches (start with Point Pleasant, Manasquan, Sea Girt, Spring Lake).

Your Goal:
- Answer questions about the service.
- Encourage them to join the waitlist for Summer 2026.
- Be friendly, sunny, and professional.
- If asked about pricing, say "We are finalizing our 2026 subscription tiers, but early waitlist members will get a 20% discount."

Do not make up specific technical details about the app interface that don't exist yet. Focus on the service concept.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): void => {
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    throw new Error("Failed to initialize chat session.");
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({
      message: userMessage
    });
    
    return response.text || "I'm sorry, I didn't catch that. Could you ask again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the beach tower right now. Please try again later.";
  }
};