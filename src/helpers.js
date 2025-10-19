const sanetizeAiAnswer = (rawText) => {  
  if (!rawText || typeof rawText !== "string") {
    return { intent: null, message: "Invalid AI response." };
  }

  try {
    let cleanText = rawText
      .replace(/```json|```/g, "")
      .trim();

    const firstBrace = cleanText.indexOf("{");
    const lastBrace = cleanText.lastIndexOf("}");
    if (firstBrace === -1 || lastBrace === -1) {
      throw new Error("No JSON found in AI response");
    }

    cleanText = cleanText.slice(firstBrace, lastBrace + 1);

    const parsed = JSON.parse(cleanText);

    if (typeof parsed.intent !== "object" || !parsed.message) {
      throw new Error("Missing required fields in JSON");
    }

    return parsed;
  } catch (err) {
    console.warn("sanitizeAnswer: Failed to parse JSON →", err.message);

    return {
      intent: null,
      message: rawText
        .replace(/```json|```/g, "")
        .replace(/\n+/g, " ")
        .trim(),
    };
  }
}

export {
  sanetizeAiAnswer
}