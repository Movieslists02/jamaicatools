const faqs = [
  {
    id: "what-is-jamaicatools",
    category: "General",
    question: "What is JamaicaTools?",
    answer:
      "JamaicaTools is a growing collection of free calculators, PDF utilities, image tools, AI resources and practical guides created for people in Jamaica, the Caribbean and beyond.",
    keywords: ["about", "website", "platform", "jamaica", "caribbean"],
  },
  {
    id: "is-jamaicatools-free",
    category: "General",
    question: "Is JamaicaTools free to use?",
    answer:
      "Most JamaicaTools features are free to use. Certain AI-powered tools may have temporary usage limits because they rely on paid third-party services.",
    keywords: ["free", "price", "cost", "payment"],
  },
  {
    id: "account-required",
    category: "General",
    question: "Do I need an account?",
    answer:
      "No. Most tools can be used without registering or signing in. Account features may be introduced later for options such as saved results, favourites and recently used tools.",
    keywords: ["account", "register", "login", "sign in"],
  },
  {
    id: "mobile-support",
    category: "General",
    question: "Can I use JamaicaTools on my phone?",
    answer:
      "Yes. JamaicaTools is designed to work on mobile phones, tablets, laptops and desktop computers. A modern browser and stable internet connection are recommended.",
    keywords: ["mobile", "phone", "tablet", "responsive"],
  },
  {
    id: "who-created-jamaicatools",
    category: "General",
    question: "Who created JamaicaTools?",
    answer:
      "JamaicaTools was created and is maintained by Betterworks Communication as a practical digital resource for individuals, professionals, students and businesses.",
    keywords: ["creator", "owner", "betterworks communication"],
  },
  {
    id: "calculator-accuracy",
    category: "Using Tools",
    question: "How accurate are the calculators?",
    answer:
      "The calculators use the formulas, assumptions and rates described on their respective pages. Results should be treated as estimates and independently verified before important financial, tax, legal, medical or business decisions.",
    keywords: ["accurate", "calculator", "estimate", "results"],
  },
  {
    id: "save-results",
    category: "Using Tools",
    question: "Can I save my results?",
    answer:
      "Most tools currently do not permanently store results. Where available, you can copy, print or download the generated output. More saving and export features may be added later.",
    keywords: ["save", "download", "results", "history"],
  },
  {
    id: "print-results",
    category: "Using Tools",
    question: "Can I print or download results?",
    answer:
      "Some tools include copy, print or download options. Additional export features will be introduced as the platform continues to grow.",
    keywords: ["print", "download", "export", "copy"],
  },
  {
    id: "tool-updates",
    category: "Using Tools",
    question: "Are the tools updated regularly?",
    answer:
      "JamaicaTools is actively developed. Tools may be improved when formulas, regulations, browser technology or user needs change.",
    keywords: ["update", "current", "maintenance"],
  },
  {
    id: "file-uploads",
    category: "Using Tools",
    question: "Why do some tools require file uploads?",
    answer:
      "Document and image tools need access to the file being processed. Only upload files you are authorized to use, and avoid uploading highly sensitive documents unless the tool clearly explains how they are handled.",
    keywords: ["upload", "files", "pdf", "image"],
  },
  {
    id: "supported-browsers",
    category: "Using Tools",
    question: "Which browsers are supported?",
    answer:
      "JamaicaTools is intended to work in current versions of Chrome, Edge, Firefox, Safari and other modern browsers. Older browsers may not support every feature.",
    keywords: ["browser", "chrome", "edge", "firefox", "safari"],
  },
  {
    id: "ai-studio-purpose",
    category: "AI Tools",
    question: "What can the AI Studio do?",
    answer:
      "AI Studio can help write, rewrite and summarize content, create emails, advertisements, product descriptions, social media captions, scripts, SEO metadata, resumes, cover letters and conversational responses.",
    keywords: ["ai", "writer", "summarizer", "chat"],
  },
  {
    id: "ai-model",
    category: "AI Tools",
    question: "What powers the AI Studio?",
    answer:
      "The AI Studio uses a third-party artificial intelligence service through a secure server-side integration. The specific model may change as the service is improved or operating costs change.",
    keywords: ["model", "openai", "artificial intelligence"],
  },
  {
    id: "ai-errors",
    category: "AI Tools",
    question: "Why did the AI Studio return an error?",
    answer:
      "AI requests can fail because of temporary service interruptions, usage limits, network problems, invalid input or unavailable API capacity. Wait briefly, review your instructions and try again.",
    keywords: ["error", "failed", "rate limit", "ai"],
  },
  {
    id: "ai-accuracy",
    category: "AI Tools",
    question: "Are AI-generated results always accurate?",
    answer:
      "No. AI can produce incorrect, incomplete or outdated information. Review names, dates, calculations, qualifications, quotations and factual claims before using or publishing the result.",
    keywords: ["accuracy", "mistakes", "hallucination", "review"],
  },
  {
    id: "ai-content-storage",
    category: "AI Tools",
    question: "Is the content I enter into AI Studio stored?",
    answer:
      "JamaicaTools sends the information required to complete your request to its AI service provider. Do not enter passwords, financial account information, private identification numbers or highly confidential material.",
    keywords: ["stored", "privacy", "prompt", "content"],
  },
  {
    id: "ai-usage-limits",
    category: "AI Tools",
    question: "Are there limits on AI usage?",
    answer:
      "Usage limits may be applied to manage operating costs, prevent abuse and keep the service available. Limits may change as JamaicaTools develops.",
    keywords: ["limit", "quota", "credits", "usage"],
  },
  {
    id: "data-selling",
    category: "Privacy & Security",
    question: "Does JamaicaTools sell personal information?",
    answer:
      "JamaicaTools does not intend to sell personal information. Details about data collection, service providers and user rights are explained in the Privacy Policy.",
    keywords: ["sell data", "personal information", "privacy"],
  },
  {
    id: "uploaded-file-handling",
    category: "Privacy & Security",
    question: "How are uploaded files handled?",
    answer:
      "File handling depends on the tool. Some processing may occur directly in the browser, while advanced features may require server-side or third-party processing. Review the relevant tool instructions and Privacy Policy before uploading sensitive material.",
    keywords: ["files", "storage", "upload", "server"],
  },
  {
    id: "cookies",
    category: "Privacy & Security",
    question: "Does JamaicaTools use cookies?",
    answer:
      "JamaicaTools may use cookies or similar technologies for essential functionality, analytics, preferences, advertising and service improvement. More information will be available in the Cookie Policy.",
    keywords: ["cookies", "tracking", "analytics"],
  },
  {
    id: "site-security",
    category: "Privacy & Security",
    question: "Is JamaicaTools secure?",
    answer:
      "The website uses HTTPS encryption and modern web-development practices. No internet service can guarantee absolute security, so users should avoid submitting unnecessary sensitive information.",
    keywords: ["secure", "https", "encryption", "safety"],
  },
  {
    id: "contact-form-data",
    category: "Privacy & Security",
    question: "What happens to information submitted through the contact form?",
    answer:
      "Contact-form information is used to review and respond to your inquiry, investigate reports and improve the platform. Do not include passwords or sensitive financial information.",
    keywords: ["contact", "form", "email", "message"],
  },
  {
    id: "report-bug",
    category: "Support",
    question: "How do I report a problem?",
    answer:
      "Use the Contact page and select Report a Problem. Include the tool name, what you expected, what happened, your device and browser, and any error message you received.",
    keywords: ["bug", "problem", "report", "support"],
  },
  {
    id: "request-tool",
    category: "Support",
    question: "Can I request a new tool?",
    answer:
      "Yes. Use the Contact page and select Suggest a Tool. Describe the problem the tool should solve, the information users would enter and the result it should provide.",
    keywords: ["request", "suggest", "new tool", "idea"],
  },
  {
    id: "business-inquiries",
    category: "Support",
    question: "Can businesses partner or advertise with JamaicaTools?",
    answer:
      "Business, partnership, sponsorship and advertising inquiries can be submitted through the Contact page. Opportunities are reviewed individually.",
    keywords: ["business", "advertise", "partnership", "sponsor"],
  },
  {
    id: "contact-jamaicatools",
    category: "Support",
    question: "How do I contact JamaicaTools?",
    answer:
      "Visit the Contact page, choose the most appropriate inquiry type and submit the form. Provide enough detail for the request to be reviewed properly.",
    keywords: ["contact", "email", "support", "message"],
  },
];

export const faqCategories = [
  "All",
  "General",
  "Using Tools",
  "AI Tools",
  "Privacy & Security",
  "Support",
];

export default faqs;
