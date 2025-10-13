import { systemPrompt } from "./systemPrompt";

const generateBotResponse = async (history) => {
  console.log(history)
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const systemInstruction = { role: "user", parts: [{ text: systemPrompt }] };

  const contents = history.map(({ role, text }) => ({
    role,
    parts: [{ text }],
  }));

  const lastMessage = contents[contents.length - 1];
  if (!lastMessage || lastMessage.role !== "user") {
    contents.push({ role: "user", parts: [{ text: "..." }] });
  }

  const body = {
    contents,
    system_instruction: systemInstruction,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      requestOptions
    );

    const data = await response.json();
    if (!response.ok)
      throw new Error(data.error?.message || "Something went wrong!");

    const apiResponse =
      data.candidates?.[0]?.content?.parts?.[0]?.text
        ?.replace(/\*\*(.*?)\*\*/g, "$1")
        .trim() || "";

    return { ans: apiResponse };
  } catch (error) {
    console.error(error);
    return { ans: error.message, isError: true };
  }
};

export { generateBotResponse };
