import { useState } from "react";
import CalculatorActions from "../../common/CalculatorActions";
import CalculatorHeader from "../../common/CalculatorHeader";
import CalculatorSection from "../../common/CalculatorSection";
import CalculatorShell from "../../common/CalculatorShell";
import InlineMessage from "../../common/InlineMessage";
import LoadingOverlay from "../../common/LoadingOverlay";
import ToolDisclaimer from "../../common/ToolDisclaimer";

const TASKS = [
  {
    value: "writer",
    label: "AI Writer",
    icon: "✍️",
    placeholder:
      "Describe the article, blog post, website copy or other content you need.",
  },
  {
    value: "rewriter",
    label: "AI Rewriter",
    icon: "📝",
    placeholder:
      "Paste the text you want rewritten and describe any changes you need.",
  },
  {
    value: "summarizer",
    label: "AI Summarizer",
    icon: "📄",
    placeholder: "Paste the text or information you want summarized.",
  },
  {
    value: "email",
    label: "Email Writer",
    icon: "📧",
    placeholder:
      "Describe the email purpose, recipient and message you want to communicate.",
  },
  {
    value: "ad-copy",
    label: "Ad Copy Generator",
    icon: "📢",
    placeholder:
      "Describe your product, service, offer, audience and advertising goal.",
  },
  {
    value: "product-description",
    label: "Product Description Generator",
    icon: "🛒",
    placeholder:
      "Describe the product, features, benefits, customers and selling points.",
  },
  {
    value: "social-caption",
    label: "Social Media Caption Generator",
    icon: "📱",
    placeholder:
      "Describe the post, promotion, event or message for your social media caption.",
  },
  {
    value: "youtube-script",
    label: "YouTube Script Generator",
    icon: "🎬",
    placeholder:
      "Describe your video topic, audience, key points and desired call to action.",
  },
  {
    value: "blog-titles",
    label: "Blog Title Generator",
    icon: "📰",
    placeholder:
      "Describe the blog topic and the type of readers you want to attract.",
  },
  {
    value: "seo-meta",
    label: "SEO Meta Generator",
    icon: "🔍",
    placeholder:
      "Describe the webpage, its purpose and the main keyword you want to target.",
  },
  {
    value: "keywords",
    label: "Keyword Generator",
    icon: "🏷️",
    placeholder:
      "Enter your business, topic, product or webpage subject.",
  },
  {
    value: "resume",
    label: "Resume Writer",
    icon: "💼",
    placeholder:
      "Enter your work history, education, skills, achievements and target position.",
  },
  {
    value: "cover-letter",
    label: "Cover Letter Generator",
    icon: "💌",
    placeholder:
      "Enter the job description, company details and your relevant experience.",
  },
  {
    value: "chat",
    label: "AI Chat Assistant",
    icon: "🤖",
    placeholder: "Ask the AI assistant a question or request help with a task.",
  },
];

const TONES = [
  "professional",
  "friendly",
  "persuasive",
  "informative",
  "confident",
  "conversational",
  "formal",
  "casual",
  "empathetic",
  "enthusiastic",
];

const LENGTHS = [
  {
    value: "short",
    label: "Short",
    description: "A brief and focused response",
  },
  {
    value: "medium",
    label: "Medium",
    description: "A moderately detailed response",
  },
  {
    value: "long",
    label: "Long",
    description: "A detailed and developed response",
  },
];

const PLATFORM_TASKS = new Set([
  "ad-copy",
  "social-caption",
  "youtube-script",
  "seo-meta",
]);

function AIWriter() {
  const [taskType, setTaskType] = useState("writer");
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("professional");
  const [audience, setAudience] = useState("");
  const [keywords, setKeywords] = useState("");
  const [platform, setPlatform] = useState("");
  const [length, setLength] = useState("medium");
  const [result, setResult] = useState("");
  const [usage, setUsage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const selectedTask =
    TASKS.find((task) => task.value === taskType) || TASKS[0];

  const isChatMode = taskType === "chat";
  const showPlatform = PLATFORM_TASKS.has(taskType);

  const clearFeedback = () => {
    setError("");
    setSuccessMessage("");
  };

  const clearOutput = () => {
    setResult("");
    setUsage(null);
    clearFeedback();
  };

  const resetStudio = () => {
    setTaskType("writer");
    setPrompt("");
    setTone("professional");
    setAudience("");
    setKeywords("");
    setPlatform("");
    setLength("medium");
    setResult("");
    setUsage(null);
    setMessages([]);
    clearFeedback();
  };

  const handleTaskChange = (nextTaskType) => {
    setTaskType(nextTaskType);
    setPrompt("");
    setResult("");
    setUsage(null);
    setMessages([]);
    setPlatform("");
    clearFeedback();
  };

  const generateContent = async () => {
    const normalizedPrompt = prompt.trim();

    if (normalizedPrompt.length < 3) {
      clearOutput();
      setError("Please enter instructions or text for the AI.");
      return;
    }

    clearFeedback();
    setResult("");
    setUsage(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai-writer", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          taskType,
          prompt: normalizedPrompt,
          tone,
          audience: audience.trim(),
          keywords: keywords.trim(),
          platform: platform.trim(),
          length,
          messages: isChatMode ? messages : [],
        }),
      });

      let data;

      try {
        data = await response.json();
      } catch {
        throw new Error(
          "The server returned an unreadable response. Please try again.",
        );
      }

      if (!response.ok) {
        throw new Error(
          data.error || "The AI Studio could not complete this request.",
        );
      }

      if (!data.text) {
        throw new Error("The AI Studio returned an empty response.");
      }

      if (isChatMode) {
        setMessages((currentMessages) => [
          ...currentMessages,
          {
            role: "user",
            content: normalizedPrompt,
          },
          {
            role: "assistant",
            content: data.text,
          },
        ]);

        setPrompt("");
      } else {
        setResult(data.text);
      }

      setUsage(data.usage || null);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "The AI Studio could not complete this request.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const copyResult = async () => {
    const textToCopy = isChatMode
      ? messages
          .map((message) => {
            const speaker =
              message.role === "assistant" ? "AI Assistant" : "You";

            return `${speaker}:\n${message.content}`;
          })
          .join("\n\n")
      : result;

    if (!textToCopy) {
      return;
    }

    try {
      await navigator.clipboard.writeText(textToCopy);
      setSuccessMessage("Results copied to your clipboard.");
      setError("");
    } catch {
      setError("The results could not be copied automatically.");
      setSuccessMessage("");
    }
  };

  const hasCopyableResult = isChatMode ? messages.length > 0 : Boolean(result);

  return (
    <CalculatorShell title="AI Studio">
      <CalculatorHeader
        title="✨ JamaicaTools AI Studio"
        subtitle="Write, rewrite, summarize, generate marketing content and chat with AI from one secure workspace."
      />

      <form
        noValidate
        onSubmit={(event) => {
          event.preventDefault();

          if (!isLoading) {
            generateContent();
          }
        }}
      >
        <div>
          <label
            htmlFor="ai-studio-task"
            className="mb-2 block font-semibold text-slate-900"
          >
            Choose an AI Tool
          </label>

          <select
            id="ai-studio-task"
            value={taskType}
            onChange={(event) => handleTaskChange(event.target.value)}
            className="h-14 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
          >
            {TASKS.map((task) => (
              <option key={task.value} value={task.value}>
                {task.icon} {task.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4">
          <p className="font-semibold text-green-800">
            {selectedTask.icon} {selectedTask.label}
          </p>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            Enter clear details below so the AI can produce a useful and
            relevant result.
          </p>
        </div>

        {isChatMode && messages.length > 0 && (
          <CalculatorSection
            title="Conversation"
            subtitle="Your current AI assistant conversation."
            tone="slate"
          >
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`rounded-2xl p-4 ${
                    message.role === "assistant"
                      ? "border border-green-200 bg-green-50"
                      : "border border-slate-200 bg-slate-50"
                  }`}
                >
                  <p className="mb-2 text-sm font-bold text-slate-900">
                    {message.role === "assistant"
                      ? "AI Assistant"
                      : "You"}
                  </p>

                  <div className="whitespace-pre-wrap leading-7 text-slate-700">
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </CalculatorSection>
        )}

        <div className="mt-6">
          <label
            htmlFor="ai-studio-prompt"
            className="mb-2 block font-semibold text-slate-900"
          >
            {isChatMode
              ? "What would you like to ask?"
              : "Instructions or Source Text"}
          </label>

          <textarea
            id="ai-studio-prompt"
            value={prompt}
            maxLength={12000}
            rows={8}
            onChange={(event) => {
              setPrompt(event.target.value);
              clearFeedback();

              if (!isChatMode) {
                setResult("");
                setUsage(null);
              }
            }}
            placeholder={selectedTask.placeholder}
            className="w-full resize-y rounded-xl border border-slate-300 px-4 py-4 leading-7 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
          />

          <div className="mt-2 flex flex-col gap-1 text-xs text-slate-500 sm:flex-row sm:justify-between">
            <span>
              Include the purpose, important details and desired result.
            </span>

            <span>{prompt.length}/12000 characters</span>
          </div>
        </div>

        {!isChatMode && (
          <>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="ai-studio-tone"
                  className="mb-2 block font-semibold text-slate-900"
                >
                  Tone
                </label>

                <select
                  id="ai-studio-tone"
                  value={tone}
                  onChange={(event) => {
                    setTone(event.target.value);
                    clearOutput();
                  }}
                  className="h-14 w-full rounded-xl border border-slate-300 bg-white px-4 capitalize outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                >
                  {TONES.map((toneOption) => (
                    <option key={toneOption} value={toneOption}>
                      {toneOption.charAt(0).toUpperCase() +
                        toneOption.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="ai-studio-audience"
                  className="mb-2 block font-semibold text-slate-900"
                >
                  Target Audience
                </label>

                <input
                  id="ai-studio-audience"
                  type="text"
                  value={audience}
                  maxLength={500}
                  onChange={(event) => {
                    setAudience(event.target.value);
                    clearOutput();
                  }}
                  placeholder="Example: Jamaican small-business owners"
                  className="h-14 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                />
              </div>

              <div>
                <label
                  htmlFor="ai-studio-keywords"
                  className="mb-2 block font-semibold text-slate-900"
                >
                  Keywords or Important Phrases
                </label>

                <input
                  id="ai-studio-keywords"
                  type="text"
                  value={keywords}
                  maxLength={600}
                  onChange={(event) => {
                    setKeywords(event.target.value);
                    clearOutput();
                  }}
                  placeholder="Example: digital marketing, website, Jamaica"
                  className="h-14 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {showPlatform && (
                <div>
                  <label
                    htmlFor="ai-studio-platform"
                    className="mb-2 block font-semibold text-slate-900"
                  >
                    Platform or Destination
                  </label>

                  <input
                    id="ai-studio-platform"
                    type="text"
                    value={platform}
                    maxLength={100}
                    onChange={(event) => {
                      setPlatform(event.target.value);
                      clearOutput();
                    }}
                    placeholder="Example: Instagram, Facebook or Google"
                    className="h-14 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                  />
                </div>
              )}
            </div>

            <div className="mt-6">
              <p className="mb-3 font-semibold text-slate-900">
                Output Length
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {LENGTHS.map((lengthOption) => (
                  <label
                    key={lengthOption.value}
                    className={`cursor-pointer rounded-xl border p-4 transition ${
                      length === lengthOption.value
                        ? "border-green-700 bg-green-50"
                        : "border-slate-200 bg-white hover:border-green-400"
                    }`}
                  >
                    <input
                      type="radio"
                      name="ai-studio-length"
                      value={lengthOption.value}
                      checked={length === lengthOption.value}
                      onChange={(event) => {
                        setLength(event.target.value);
                        clearOutput();
                      }}
                      className="sr-only"
                    />

                    <span className="block font-semibold text-slate-900">
                      {lengthOption.label}
                    </span>

                    <span className="mt-1 block text-sm leading-5 text-slate-500">
                      {lengthOption.description}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        <CalculatorActions
          onReset={resetStudio}
          onCopy={copyResult}
          disableCopy={!hasCopyableResult}
          calculateLabel={
            isLoading
              ? "Generating..."
              : isChatMode
                ? "Send Message"
                : `Generate ${selectedTask.label}`
          }
          calculateType="submit"
          isCopied={Boolean(successMessage)}
        />
      </form>

      <LoadingOverlay
        show={isLoading}
        text={
          isChatMode
            ? "The AI assistant is responding..."
            : `Generating ${selectedTask.label.toLowerCase()}...`
        }
      />

      {error && <InlineMessage type="error">{error}</InlineMessage>}

      {successMessage && (
        <InlineMessage type="success">
          {successMessage}
        </InlineMessage>
      )}

      {!isChatMode && result && (
        <CalculatorSection
          title="Generated Result"
          subtitle="Review and edit the AI-generated content before using it."
          tone="slate"
        >
          <div className="whitespace-pre-wrap rounded-xl border border-slate-200 bg-white p-5 leading-7 text-slate-700">
            {result}
          </div>
        </CalculatorSection>
      )}

      {usage && (
        <p className="mt-4 text-right text-xs text-slate-500">
          Tokens used: {usage.totalTokens ?? "Unavailable"}
        </p>
      )}

      <ToolDisclaimer>
        AI-generated results may contain mistakes. Review names, dates,
        qualifications, statistics, claims and legal, medical or financial
        information before using or publishing the result.
      </ToolDisclaimer>
    </CalculatorShell>
  );
}

export default AIWriter;
