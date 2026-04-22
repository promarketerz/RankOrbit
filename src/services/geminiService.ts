import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const optimizeResume = async (resumeText: string, jobDescription: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        You are an expert SEO Career Coach. 
        Analyze the following Resume and Job Description. 
        Rewrite the resume to perfectly match the job requirements, emphasizing Technical SEO, Content Strategy, or Lead Gen where relevant.
        Focus on measurable impact (e.g., % organic growth, ROI).
        
        RESUME:
        \${resumeText}
        
        JOB DESCRIPTION:
        \${jobDescription}
        
        Return the optimized resume in a clean Markdown format.
      `,
    });
    return response.text;
  } catch (error) {
    console.error("AI Optimization failed:", error);
    return "Failed to optimize. Please check your connection components.";
  }
};
