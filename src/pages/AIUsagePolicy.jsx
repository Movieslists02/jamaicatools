import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LegalPage from "../components/legal/LegalPage";

const EFFECTIVE_DATE = "August 5, 2026";

const aiPolicySections = [
  {
    title: "About this AI Usage Policy",
    paragraphs: [
      "This AI Usage Policy explains how artificial intelligence features on JamaicaTools should be used, what users should expect from generated content and the responsibilities that apply when submitting prompts or using AI output.",
      "This policy applies to AI Studio and any future JamaicaTools feature that generates, rewrites, summarizes, classifies, analyzes or otherwise processes content using an artificial intelligence provider.",
      "This policy should be read together with the JamaicaTools Privacy Policy, Terms & Conditions and Disclaimer.",
    ],
  },
  {
    title: "How AI Studio Works",
    paragraphs: [
      "AI Studio receives instructions and content entered by the user and sends the information required to complete the request to the configured artificial intelligence provider through a secure server-side function.",
      "The provider processes the request and returns generated output to JamaicaTools, which then displays that output to the user.",
      "JamaicaTools may change the model, provider, prompt instructions, limits or technical configuration used by AI Studio as the service develops.",
    ],
  },
  {
    title: "Available AI Tasks",
    paragraphs: [
      "AI Studio combines several writing and productivity functions into one interface.",
    ],
    bullets: [
      "General content writing.",
      "Rewriting and improving existing text.",
      "Summarizing supplied material.",
      "Writing professional or personal emails.",
      "Generating advertisements and promotional copy.",
      "Creating product descriptions.",
      "Writing social media captions.",
      "Generating video and YouTube script drafts.",
      "Suggesting blog titles and content ideas.",
      "Creating SEO titles, descriptions and keywords.",
      "Drafting resumes and cover letters.",
      "Answering general conversational questions.",
    ],
  },
  {
    title: "AI Output May Be Incorrect",
    paragraphs: [
      "Artificial intelligence can produce content that is inaccurate, incomplete, outdated, biased, misleading or entirely fabricated.",
      "Generated responses may sound confident even when a factual claim is wrong.",
      "JamaicaTools does not guarantee that AI output is correct, current, complete, original, lawful or suitable for a particular purpose.",
    ],
    bullets: [
      "Verify names, dates, statistics and quotations.",
      "Check laws, regulations and official requirements against authoritative sources.",
      "Review calculations and numerical claims independently.",
      "Confirm qualifications, job requirements and professional terminology.",
      "Do not assume a cited source exists unless you verify it.",
    ],
  },
  {
    title: "Human Review Is Required",
    paragraphs: [
      "AI output should be treated as a draft or assistance tool rather than a final authoritative result.",
      "A responsible person should review, edit and approve generated content before it is published, submitted, sent to another person or used in a professional decision.",
      "The user remains responsible for the content they choose to use.",
    ],
  },
  {
    title: "No Professional Advice",
    paragraphs: [
      "AI Studio does not provide legal, financial, tax, accounting, investment, medical, employment or other regulated professional advice.",
      "Generated information may not consider your complete circumstances, current law, professional standards or the requirements of a particular organization.",
      "Consult an appropriately qualified professional before making a significant decision based on AI-generated information.",
    ],
  },
  {
    title: "Privacy and Confidential Information",
    paragraphs: [
      "Content submitted to AI Studio is transmitted to the configured artificial intelligence provider for processing.",
      "Users should remove unnecessary personal, confidential or sensitive information before submitting a request.",
      "Do not assume that AI Studio is an appropriate place to process confidential records merely because the connection uses HTTPS.",
    ],
    bullets: [
      "Do not enter passwords or account-recovery information.",
      "Do not enter credit-card, banking or payment credentials.",
      "Do not enter private API keys, access tokens or authentication secrets.",
      "Do not submit government identification numbers unless strictly necessary and specifically supported.",
      "Do not submit confidential medical, legal, customer, employee or client records without proper authority.",
      "Do not submit trade secrets or confidential contracts unless an authorized and suitable data-processing arrangement exists.",
    ],
  },
  {
    title: "Personal Data About Other People",
    paragraphs: [
      "Do not submit another person’s personal information unless you have a lawful reason and appropriate authority to do so.",
      "Avoid entering names, contact information, identification numbers, health details, employment records or financial information about another person when the task can be completed without it.",
      "Where possible, anonymize or generalize the information before submitting the request.",
    ],
  },
  {
    title: "Resumes and Cover Letters",
    paragraphs: [
      "AI Studio can help structure resumes, cover letters and employment-related documents.",
      "Users must ensure that all qualifications, education, experience, awards, references and achievements are truthful.",
      "Do not use AI Studio to invent employment history, academic credentials, certifications or professional experience.",
    ],
    bullets: [
      "Review spelling and contact information.",
      "Confirm that dates and job titles are accurate.",
      "Remove irrelevant personal or sensitive information.",
      "Adapt the document to the actual job and employer.",
      "Do not misrepresent your skills or experience.",
    ],
  },
  {
    title: "Business and Marketing Content",
    paragraphs: [
      "AI-generated advertisements, product descriptions, website copy and social media posts must be reviewed for accuracy, fairness and legal compliance.",
      "Businesses remain responsible for claims made about prices, products, guarantees, performance, availability and customer outcomes.",
      "Do not publish fabricated testimonials, false scarcity claims or misleading comparisons.",
    ],
  },
  {
    title: "Email and Communication Drafts",
    paragraphs: [
      "AI Studio may help prepare emails, responses and other communications.",
      "The user must review the tone, recipient, factual details, attachments and requested action before sending the message.",
      "Generated content should not be used to impersonate another person or falsely suggest that a message was personally written or approved by someone who did not review it.",
    ],
  },
  {
    title: "SEO and Keyword Suggestions",
    paragraphs: [
      "AI-generated titles, descriptions and keyword suggestions do not guarantee search-engine rankings, traffic, advertising approval or business results.",
      "Search engines may change their policies and ranking systems.",
      "Users should ensure that SEO content accurately describes the page and does not mislead visitors.",
    ],
  },
  {
    title: "Copyright and Intellectual Property",
    paragraphs: [
      "AI output may resemble existing material or contain content that raises copyright, trademark, publicity or other intellectual-property concerns.",
      "JamaicaTools does not guarantee that generated content is unique or free from third-party rights.",
      "Users are responsible for reviewing content and obtaining any permission required before commercial publication or distribution.",
    ],
    bullets: [
      "Do not request unauthorized copies of protected works.",
      "Do not use AI to reproduce substantial portions of books, articles or paid content.",
      "Do not imitate protected brands in a misleading way.",
      "Review names, slogans and logos for possible trademark conflicts.",
      "Use licensed or original media when publishing generated campaigns.",
    ],
  },
  {
    title: "Prohibited and Abusive Uses",
    paragraphs: [
      "AI Studio must not be used for unlawful, harmful, deceptive or abusive activity.",
    ],
    bullets: [
      "Fraud, scams, phishing or identity theft.",
      "Impersonating another person or organization without authority.",
      "Creating malware, credential-stealing content or instructions for unauthorized access.",
      "Harassment, threats, stalking or targeted abuse.",
      "Defamation or knowingly false allegations.",
      "Discriminatory decision-making or unlawful profiling.",
      "Academic cheating or misrepresenting generated work as independently completed where prohibited.",
      "Creating deceptive reviews, testimonials or endorsements.",
      "Bypassing safeguards, usage limits or security controls.",
      "Generating content that violates applicable law or another person’s rights.",
    ],
  },
  {
    title: "Academic and Educational Use",
    paragraphs: [
      "Students may use AI Studio for brainstorming, explanations, editing and study assistance where permitted.",
      "Users must follow the rules of their school, university, examination body or instructor.",
      "Do not submit AI-generated work as your own independent work when disclosure or original authorship is required.",
    ],
  },
  {
    title: "Accuracy of Summaries and Rewrites",
    paragraphs: [
      "AI-generated summaries may omit important qualifications, context or exceptions.",
      "Rewritten material may unintentionally change the original meaning.",
      "Compare the result with the original source before relying on it, especially for contracts, policies, reports, instructions or technical material.",
    ],
  },
  {
    title: "Usage Limits and Availability",
    paragraphs: [
      "JamaicaTools may apply request limits, maximum input sizes, output limits or temporary restrictions to manage operating costs, service capacity and abuse.",
      "AI Studio may become unavailable because of exhausted credits, provider outages, rate limits, maintenance, policy enforcement or technical failures.",
      "JamaicaTools does not guarantee uninterrupted access to a particular model or provider.",
    ],
  },
  {
    title: "Changes to Models and Providers",
    paragraphs: [
      "The model or service provider used by AI Studio may change without preserving identical output style, capability, speed or cost.",
      "A newer model may respond differently to the same instruction.",
      "Users should not build a critical workflow on the assumption that a particular model will remain permanently available.",
    ],
  },
  {
    title: "Moderation and Safety Controls",
    paragraphs: [
      "JamaicaTools or its AI provider may reject, limit, review or block requests that appear unsafe, abusive, unlawful or contrary to provider policies.",
      "Safety controls are not perfect and do not remove the user’s responsibility to use the service lawfully.",
      "Repeated misuse may result in restricted or blocked access.",
    ],
  },
  {
    title: "Reporting Problematic Output",
    paragraphs: [
      "Users are encouraged to report seriously inaccurate, unsafe, discriminatory or inappropriate AI output through the Contact page.",
      "Include the selected task, a general description of the prompt and the problem with the response.",
      "Do not include secret keys, passwords or unnecessary sensitive information in the report.",
    ],
  },
  {
    title: "User Responsibility",
    paragraphs: [
      "The user is responsible for deciding whether AI Studio is appropriate for the intended task.",
      "The user is also responsible for reviewing, correcting, disclosing and lawfully using generated content.",
    ],
    bullets: [
      "Use clear and truthful instructions.",
      "Protect confidential information.",
      "Review the generated response.",
      "Verify important facts.",
      "Follow applicable laws and professional standards.",
      "Disclose AI assistance where required.",
      "Accept responsibility for content you publish or submit.",
    ],
  },
  {
    title: "Changes to this Policy",
    paragraphs: [
      "This AI Usage Policy may be updated when JamaicaTools changes models, service providers, safety controls, available tasks or data-processing practices.",
      "The latest version will be published on this page with an updated effective or revision date.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about AI Studio, generated content, privacy or responsible use may be submitted through the JamaicaTools Contact page.",
      "Identify the AI task involved and describe the issue clearly.",
    ],
  },
];

function AIUsagePolicy() {
  return (
    <>
      <Helmet>
        <title>AI Usage Policy | JamaicaTools</title>
        <meta
          name="description"
          content="Read the JamaicaTools AI Usage Policy covering AI accuracy, privacy, human review, prohibited uses, intellectual property and user responsibilities."
        />
        <link
          rel="canonical"
          href="https://jamaicatools.com/ai-policy"
        />

        <meta
          property="og:title"
          content="AI Usage Policy | JamaicaTools"
        />
        <meta
          property="og:description"
          content="Rules and responsibilities for using JamaicaTools AI Studio safely and responsibly."
        />
        <meta
          property="og:url"
          content="https://jamaicatools.com/ai-policy"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <LegalPage
        eyebrow="Responsible Artificial Intelligence"
        title="AI Usage Policy"
        description="This policy explains how to use JamaicaTools AI Studio responsibly and how generated content should be reviewed."
        effectiveDate={EFFECTIVE_DATE}
        updatedDate={EFFECTIVE_DATE}
        notice="AI-generated content can be wrong or misleading. Review and verify every important result before publishing, submitting or relying on it."
        sections={aiPolicySections}
      >
        <div className="mt-14 rounded-3xl border border-green-200 bg-green-50 p-7 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Report an AI concern
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Contact JamaicaTools if AI Studio produces seriously inaccurate,
            unsafe or inappropriate content, or if you have a question about
            privacy and responsible use.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Contact JamaicaTools
            </Link>

            <Link
              to="/privacy"
              className="rounded-xl border border-green-300 bg-white px-6 py-3 font-semibold text-green-700 transition hover:border-green-700"
            >
              Read Privacy Policy
            </Link>
          </div>
        </div>
      </LegalPage>
    </>
  );
}

export default AIUsagePolicy;
