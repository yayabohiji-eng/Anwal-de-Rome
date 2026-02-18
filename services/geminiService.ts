
import { GoogleGenAI } from "@google/genai";
import { MENU_DATA } from "../constants";

// Using the recommended pattern for Google GenAI SDK
export const getAIRecommendation = async (userPrompt: string) => {
  // Always use a named parameter for the API key from process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const menuContext = MENU_DATA.map(item => 
    `- ${item.name} (${item.nameAr}): ${item.description} [Price: ${item.price}]`
  ).join('\n');

  const systemInstruction = `
    You are the virtual head waiter at "Anwal de Roma", a high-end Moroccan-Italian fusion restaurant.
    Your goal is to recommend dishes from our menu based on the user's preferences.
    Be elegant, sophisticated, and helpful. 
    Our menu includes:
    ${menuContext}
    
    If the user asks for something not on the menu, politely explain that we specialize in specific fusion dishes.
    Always reply in the language the user used (French, Arabic, or English).
  `;

  try {
    // Correct way to call generateContent with model and prompt
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    
    // Access the .text property directly
    return response.text || "I'm sorry, I couldn't generate a recommendation right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Désolé, je rencontre une petite difficulté technique. Veuillez consulter notre carte papier ou me poser une question plus simple.";
  }
};
