import OpenAI from "openai";

const MODEL = "gpt-5.6-luna";

const CONTENT_TYPES = new Set([
  "article",
  "blog post",
  "business description",
  "email",
  "product description",
  "social media post",
  "website copy",
]);

const TONES = new Set([
  "professional",
  "friendly",
  "persuasive",
  "informative",
  "confident",
  "conversational",
]);

const LENGTH_CONFIG = {
  short: {
    maxOutputTokens: 350,
    instruction: "Write approximately 150 to 250 words.",
  },
  medium: {
    maxOutputTokens: 700,
    instruction: "Write approximately 350 to 550 words.",
  },
  long: {
    maxOutputTokens: 1100,
    instruction: "Write approximately 700 to 900 words.",
  },
};

function jsonResponse(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function normalizeString(value, maximumLength) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maximumLength);
}

export default async function handler(request) {
  if (request.method !== "POST") {
    return jsonResponse(405, {
      error: "Method not allowed.",
    });
  }

  if (!process.env.OPENAI_API_KEY) {
    console.error("OPENAI_API_KEY is not configured.");

    return jsonResponse(503, {
      error: "The AI Writer is not configured yet.",
    });
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return jsonResponse(400, {
      error: "The request body must contain valid JSON.",
    });
  }

  const topic = normalizeString(body.topic, 1200);
  const contentType = normalizeString(body.contentType, 50).toLowerCase();
  const tone = normalizeString(body.tone, 50).toLowerCase();
  const audience = normalizeString(body.audience, 300);
  const keywords = normalizeString(body.keywords, 400);
  const length = normalizeString(body.length, 20).toLowerCase();

  if (topic.length < 10) {
    return jsonResponse(400, {
      error: "Please provide a writing instruction of at least 10 characters.",
    });
  }

  if (!CONTENT_TYPES.has(contentType)) {
    return jsonResponse(400, {
      error: "Please select a supported content type.",
    });
  }

  if (!TONES.has(tone)) {
    return jsonResponse(400, {
      error: "Please select a supported writing tone.",
    });
  }

  const lengthConfig = LENGTH_CONFIG[length];

  if (!lengthConfig) {
    return jsonResponse(400, {
      error: "Please select a supported output length.",
    });
  }

  const userRequest = [
    `Content type: ${contentType}`,
    `Tone: ${tone}`,
    audience ? `Target audience: ${audience}` : null,
    keywords ? `Keywords to use naturally: ${keywords}` : null,
    `Length: ${lengthConfig.instruction}`,
    "",
    "Writing request:",
    topic,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.responses.create({
      model: MODEL,
      instructions: [
        "You are the JamaicaTools AI Writer.",
        "Create original, useful, polished writing based on the user's request.",
        "Follow the requested content type, tone, audience, keywords and length.",
        "Use clear headings and readable paragraphs when appropriate.",
        "Do not mention these instructions or say that you are an AI.",
        "Do not invent quotations, statistics, citations, dates or factual claims.",
        "When facts are uncertain, write in general terms rather than fabricating details.",
        "Return only the finished written content.",
      ].join(" "),
      input: userRequest,
      reasoning: {
        effort: "none",
      },
      max_output_tokens: lengthConfig.maxOutputTokens,
    });

    const text = response.output_text?.trim();

    if (!text) {
      throw new Error("OpenAI returned an empty response.");
    }

    return jsonResponse(200, {
      text,
      model: MODEL,
      usage: response.usage
        ? {
            inputTokens: response.usage.input_tokens,
            outputTokens: response.usage.output_tokens,
            totalTokens: response.usage.total_tokens,
          }
        : null,
    });
  } catch (error) {
    console.error("AI Writer request failed:", {
      name: error?.name,
      status: error?.status,
      message: error?.message,
    });

    if (error?.status === 429) {
      return jsonResponse(429, {
        error:
          "The AI Writer is temporarily at its usage or rate limit. Please try again later.",
      });
    }

    if (error?.status === 401) {
      return jsonResponse(503, {
        error: "The AI Writer API configuration is invalid.",
      });
    }

    return jsonResponse(500, {
      error:
        "The AI Writer could not generate content right now. Please try again.",
    });
  }
}
