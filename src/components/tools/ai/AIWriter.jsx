import { useState } from "react";
import { copyResults as copyToClipboard } from "../../../utils/copyResults";
import CalculatorActions from "../../common/CalculatorActions";
import CalculatorHeader from "../../common/CalculatorHeader";
import CalculatorSection from "../../common/CalculatorSection";
import CalculatorShell from "../../common/CalculatorShell";
import InlineMessage from "../../common/InlineMessage";
import LoadingOverlay from "../../common/LoadingOverlay";
import ToolDisclaimer from "../../common/ToolDisclaimer";

const CONTENT_TYPES = [
  { value: "article", label: "Article" },
  { value: "blog post", label: "Blog Post" },
  { value: "business description", label: "Business Description" },
  { value: "email", label: "Email" },
  { value: "product description", label: "Product Description" },
  { value: "social media post", label: "Social Media Post" },
  { value: "website copy", label: "Website Copy" },
];

const TONES = [
  { value: "professional", label: "Professional" },
  { value: "friendly", label: "Friendly" },
  { value: "persuasive", label: "Persuasive" },
  { value: "informative", label: "Informative" },
  { value: "confident", label: "Confident" },
  { value: "conversational", label: "Conversational" },
];

const LENGTHS = [
  { value: "short", label: "Short — approximately 150–250 words" },
  { value: "medium", label: "Medium — approximately 350–550 words" },
  { value: "long", label: "Long — approximately 700–900 words" },
];

function AIWriter() {
  const [topic, setTopic] = useState("");
  const [contentType, setContentType] = useState("blog post");
  const [tone, setTone] = useState("professional");
  const [audience, setAudience] = useState("");
  const [keywords, setKeywords] = useState("");
  const [length, setLength] = useState("medium");
  const [result, setResult] = useState("");
  const [usage, setUsage] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clearOutput = () => {
    setResult("");
    setUsage(null);
    setError("");
    setMessage("");
  };

  const resetWriter = () => {
    setTopic("");
    setContentType("blog post");
    setTone("professional");
    setAudience("");
    setKeywords("");
    setLength("medium");
    clearOutput();
  };

  const generateContent = async () => {
    const normalizedTopic = topic.trim();

    if (normalizedTopic.length < 10) {
      clearOutput();
      setError(
        "Please enter a writing instruction containing at least 10 characters.",
      );
      return;
    }

    setError("");
    setMessage("");
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
          topic: normalizedTopic,
          contentType,
          tone,
          audience: audience.trim(),
          keywords: keywords.trim(),
          length,
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
          data.error || "The AI Writer could not generate content.",
        );
      }

      if (!data.text) {
        throw new Error("The AI Writer returned an empty response.");
      }

      setResult(data.text);
      setUsage(data.usage || null);
    } catch (requestError) {
      setResult("");
      setUsage(null);
      setError(
        requestError instanceof Error
          ? requestError.message
          : "The AI Writer could not generate content. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!result) {
      return;
    }

    await copyToClipboard(result, setMessage);
  };

  return (
    <CalculatorShell title="AI Writer">
      <CalculatorHeader
        title="✨ AI Content Writer"
        subtitle="Create original content using a secure server-side AI service."
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
            className="mb-2 block font-semibold text-slate-900"
            htmlFor="ai-writer-topic"
          >
            What should the AI write?
          </label>

          <textarea
            id="ai-writer-topic"
            value={topic}
            maxLength={1200}
            rows={7}
            onChange={(event) => {
              setTopic(event.target.value);
              clearOutput();
            }}
            placeholder="Example: Write a helpful blog post explaining how small Jamaican businesses can improve their online presence without a large marketing budget."
            className="w-full resize-y rounded-xl border border-slate-300 px-4 py-4 leading-7 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
          />

          <div className="mt-2 flex flex-col gap-1 text-xs text-slate-500 sm:flex-row sm:justify-between">
            <span>
              Describe the topic, purpose and important details.
            </span>

            <span>{topic.length}/1200 characters</span>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label
              className="mb-2 block font-semibold text-slate-900"
              htmlFor="ai-writer-content-type"
            >
              Content Type
            </label>

            <select
              id="ai-writer-content-type"
              value={contentType}
              onChange={(event) => {
                setContentType(event.target.value);
                clearOutput();
              }}
              className="h-14 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
            >
              {CONTENT_TYPES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              className="mb-2 block font-semibold text-slate-900"
              htmlFor="ai-writer-tone"
            >
              Writing Tone
            </label>

            <select
              id="ai-writer-tone"
              value={tone}
              onChange={(event) => {
                setTone(event.target.value);
                clearOutput();
              }}
              className="h-14 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
            >
              {TONES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              className="mb-2 block font-semibold text-slate-900"
              htmlFor="ai-writer-audience"
            >
              Target Audience
            </label>

            <input
              id="ai-writer-audience"
              type="text"
              value={audience}
              maxLength={300}
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
              className="mb-2 block font-semibold text-slate-900"
              htmlFor="ai-writer-keywords"
            >
              Keywords
            </label>

            <input
              id="ai-writer-keywords"
              type="text"
              value={keywords}
              maxLength={400}
              onChange={(event) => {
                setKeywords(event.target.value);
                clearOutput();
              }}
              placeholder="Example: digital marketing, website, Jamaica"
              className="h-14 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div className="md:col-span-2">
            <label
              className="mb-2 block font-semibold text-slate-900"
              htmlFor="ai-writer-length"
            >
              Output Length
            </label>

            <select
              id="ai-writer-length"
              value={length}
              onChange={(event) => {
                setLength(event.target.value);
                clearOutput();
              }}
              className="h-14 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
            >
              {LENGTHS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <CalculatorActions
          onReset={resetWriter}
          onCopy={handleCopy}
          disableCopy={!result}
          calculateLabel={isLoading ? "Generating..." : "Generate Content"}
          calculateType="submit"
          isCopied={Boolean(message)}
        />
      </form>

      <LoadingOverlay
        show={isLoading}
        text="Writing your content securely..."
      />

      {error && <InlineMessage type="error">{error}</InlineMessage>}

      {message && (
        <InlineMessage type="success">{message}</InlineMessage>
      )}

      {result && (
        <>
          <CalculatorSection
            title="Generated Content"
            subtitle="Review and edit the content before publishing it."
            tone="slate"
          >
            <div className="whitespace-pre-wrap rounded-xl border border-slate-200 bg-white p-5 leading-7 text-slate-700">
              {result}
            </div>
          </CalculatorSection>

          {usage && (
            <p className="mt-4 text-right text-xs text-slate-500">
              Tokens used: {usage.totalTokens ?? "Unavailable"}
            </p>
          )}
        </>
      )}

      <ToolDisclaimer>
        AI-generated content may contain mistakes. Review names, dates,
        statistics, claims and legal or financial information before using or
        publishing the result.
      </ToolDisclaimer>
    </CalculatorShell>
  );
}

export default AIWriter;
