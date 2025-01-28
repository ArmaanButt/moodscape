import { createOpenAI } from "@ai-sdk/openai";

export const openai = createOpenAI({
  apiKey: process.env.OPENAI_ACCESS_TOKEN || "",
  organization: process.env.OPENAI_ORGANIZATION_ID,
});
