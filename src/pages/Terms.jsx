import { Link } from "react-router-dom";
import LegalPage from "../components/legal/LegalPage";
import SEO from "../components/seo/SEO";

const EFFECTIVE_DATE = "August 4, 2026";

const termsSections = [
  {
    title: "Acceptance of These Terms",
    paragraphs: [
      "These Terms & Conditions govern your access to and use of JamaicaTools, including its website, calculators, document tools, image utilities, AI features, articles, contact forms and related services.",
      "By accessing or using JamaicaTools, you agree to these Terms and acknowledge the Privacy Policy. If you do not agree, you should not use the platform.",
      "Additional terms, notices or instructions displayed within a particular tool also apply to your use of that feature.",
    ],
  },
  {
    title: "About JamaicaTools",
    paragraphs: [
      "JamaicaTools is a digital platform operated by Betterworks Communication. It provides calculators, file-processing utilities, artificial intelligence features, guides and other online resources.",
      "Some features are provided directly by JamaicaTools, while others depend on third-party hosting, artificial intelligence, document conversion, image processing, analytics or infrastructure providers.",
      "The platform may be changed, expanded, restricted, suspended or discontinued at any time.",
    ],
  },
  {
    title: "Eligibility and Responsible Use",
    paragraphs: [
      "You may use JamaicaTools only if you are legally capable of agreeing to these Terms or are using the service with the authorization and supervision of a parent, guardian or responsible organization.",
      "You are responsible for ensuring that your use of JamaicaTools complies with applicable laws, workplace policies, contracts and professional obligations.",
    ],
    bullets: [
      "Use accurate information when a tool requires factual inputs.",
      "Review generated results before relying on or sharing them.",
      "Use only files and content that you own or are authorized to process.",
      "Protect your device, account credentials and downloaded files.",
      "Follow all instructions and limitations displayed within each tool.",
    ],
  },
  {
    title: "Free and Paid Features",
    paragraphs: [
      "Many JamaicaTools features are currently available without charge. Free availability does not create a promise that a feature will remain free indefinitely.",
      "JamaicaTools may introduce subscriptions, usage limits, paid downloads, premium processing, advertisements, sponsorships or other monetization methods.",
      "Before a paid feature is introduced, applicable prices, payment terms and relevant conditions should be displayed before the user completes the transaction.",
    ],
  },
  {
    title: "Accounts and Future Account Features",
    paragraphs: [
      "Most JamaicaTools features currently do not require an account. Account-based features may be introduced for saved results, favourites, usage history, premium services or other functionality.",
      "If accounts are introduced, users will be responsible for maintaining the confidentiality of their credentials and all activity performed through their accounts.",
      "JamaicaTools may suspend or restrict an account associated with abuse, fraud, security risks, unauthorized activity or violations of these Terms.",
    ],
  },
  {
    title: "Calculators and Generated Results",
    paragraphs: [
      "Calculators are intended to provide estimates based on the information entered, formulas used and assumptions described by the relevant tool.",
      "Results may differ from actual figures because of changing laws, rates, thresholds, employer practices, rounding, individual circumstances, incomplete information or technical limitations.",
      "Calculator results do not constitute financial, accounting, tax, investment, legal, medical, employment or other professional advice.",
    ],
    bullets: [
      "Verify important calculations independently.",
      "Consult the appropriate authority or qualified professional when accuracy is essential.",
      "Do not make a significant financial or legal decision solely from an automated result.",
      "Review the assumptions and limitations displayed by the tool.",
    ],
  },
  {
    title: "AI Studio",
    paragraphs: [
      "AI Studio uses a third-party artificial intelligence service to generate, rewrite, summarize or analyze content based on user instructions.",
      "Artificial intelligence can produce incorrect, incomplete, biased, outdated or misleading output. Generated content must be reviewed before it is published, submitted, relied upon or used in a professional context.",
      "JamaicaTools does not guarantee that AI-generated output is original, accurate, legally compliant, suitable for a particular purpose or free from similarities to other content.",
    ],
    bullets: [
      "Do not submit passwords, banking credentials or authentication keys.",
      "Do not submit confidential customer, employee or client information without proper authority.",
      "Verify quotations, names, dates, laws, statistics and factual claims.",
      "Review resumes, cover letters and business communications before sending them.",
      "Do not use AI Studio to impersonate, deceive, defraud, harass or unlawfully manipulate another person.",
    ],
  },
  {
    title: "Uploaded Files and User Content",
    paragraphs: [
      "You retain responsibility for files, text, images, prompts, documents and other content submitted to JamaicaTools.",
      "By submitting content, you confirm that you have the legal right and necessary authorization to upload, process, convert, modify or transmit it.",
      "You grant JamaicaTools and its service providers the limited permission necessary to receive, process, transmit and return the submitted content for the requested purpose.",
    ],
    bullets: [
      "Do not upload stolen, unlawful or unauthorized material.",
      "Do not upload malware, malicious scripts or files intended to damage systems.",
      "Do not upload material that violates copyright, privacy, confidentiality or contractual obligations.",
      "Keep an original backup of every important file.",
      "Inspect downloaded results before deleting the original.",
    ],
  },
  {
    title: "Acceptable Use",
    paragraphs: [
      "You must not misuse JamaicaTools, interfere with its operation or use it in a manner that could harm another person, the platform or a service provider.",
    ],
    bullets: [
      "Attempting to gain unauthorized access to servers, functions, keys, accounts or restricted systems.",
      "Bypassing limits, rate controls, access restrictions or security protections.",
      "Submitting automated requests at a volume that disrupts or burdens the service.",
      "Uploading viruses, malware, malicious code or deliberately corrupted files.",
      "Using the platform for fraud, impersonation, harassment, discrimination or unlawful surveillance.",
      "Using AI features to create deceptive, defamatory or illegal material.",
      "Reverse engineering or extracting protected service credentials.",
      "Scraping, copying or republishing substantial portions of the platform without authorization.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "The JamaicaTools name, branding, website design, code, original articles, tool interfaces, graphics and other platform materials are owned by or licensed to Betterworks Communication unless stated otherwise.",
      "These Terms do not transfer ownership of JamaicaTools intellectual property to users.",
      "You may use ordinary tool results for lawful personal or business purposes, subject to any third-party rights and the limitations of the individual tool.",
    ],
    bullets: [
      "Do not copy or reproduce the JamaicaTools interface as a competing service.",
      "Do not remove copyright, trademark or ownership notices.",
      "Do not present JamaicaTools content as your own original platform content.",
      "Do not use the JamaicaTools name or branding to imply an unauthorized partnership.",
    ],
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      "JamaicaTools depends on third-party services for hosting, deployment, forms, artificial intelligence, document processing, image processing, analytics and other functionality.",
      "Third-party services may have their own terms, privacy policies, limitations and availability conditions.",
      "JamaicaTools is not responsible for a third-party service changing its prices, limits, processing methods, policies or availability.",
    ],
  },
  {
    title: "External Links",
    paragraphs: [
      "Articles, tools or pages may link to external websites for reference or convenience.",
      "A link does not necessarily represent endorsement, control or responsibility for the external website.",
      "You are responsible for reviewing external terms, privacy practices, security and accuracy before relying on another service.",
    ],
  },
  {
    title: "Availability and Modifications",
    paragraphs: [
      "JamaicaTools is provided subject to availability. Features may be interrupted by maintenance, service-provider failures, network problems, security incidents, usage limits or technical errors.",
      "We may modify, replace, limit, suspend or discontinue any page, tool or feature without guaranteeing uninterrupted access.",
      "We do not guarantee that every tool will remain compatible with all browsers, devices, formats or third-party systems.",
    ],
  },
  {
    title: "No Professional Advice",
    paragraphs: [
      "Information provided through JamaicaTools is for general informational and educational purposes.",
      "Nothing on JamaicaTools creates a professional-client relationship or replaces advice from a qualified accountant, attorney, medical practitioner, financial adviser, tax professional, engineer or other licensed professional.",
      "You remain responsible for obtaining appropriate professional guidance before making decisions that may have significant legal, financial, medical or business consequences.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    paragraphs: [
      "To the fullest extent permitted by applicable law, JamaicaTools is provided on an “as is” and “as available” basis.",
      "JamaicaTools does not guarantee that the platform will always be available, error-free, secure, complete, current or suitable for every intended purpose.",
      "We do not guarantee the accuracy of calculator results, AI output, converted documents, compressed files, third-party data or educational content.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by applicable law, Betterworks Communication and JamaicaTools will not be liable for indirect, incidental, special, consequential or punitive loss arising from the use of or inability to use the platform.",
      "This includes loss of data, files, profits, business opportunities, reputation, revenue or expected savings.",
      "You are responsible for maintaining backups, verifying results and determining whether a tool is appropriate for your intended purpose.",
      "Nothing in these Terms excludes or limits a right or liability that cannot legally be excluded or limited.",
    ],
  },
  {
    title: "Indemnification",
    paragraphs: [
      "To the extent permitted by law, you agree to be responsible for claims, losses, costs or expenses arising from your unlawful use of JamaicaTools, violation of these Terms, infringement of another person’s rights or unauthorized submission of content.",
      "This obligation does not apply to the extent a claim was caused directly by JamaicaTools acting unlawfully.",
    ],
  },
  {
    title: "Privacy",
    paragraphs: [
      "Use of JamaicaTools is also governed by the Privacy Policy, which explains how information may be collected, processed, shared and retained.",
      "Do not use JamaicaTools unless you have reviewed the privacy information relevant to the feature you intend to use.",
    ],
  },
  {
    title: "Suspension and Termination",
    paragraphs: [
      "JamaicaTools may block, restrict or terminate access when reasonably necessary to protect the platform, service providers, users or the public.",
      "Reasons may include abuse, unlawful activity, repeated security violations, automated misuse, fraud, excessive resource consumption or violation of these Terms.",
    ],
  },
  {
    title: "Changes to These Terms",
    paragraphs: [
      "These Terms may be updated as JamaicaTools introduces new tools, payment features, accounts, service providers or legal requirements.",
      "The updated version will be published on this page with a revised effective or last-updated date.",
      "Continued use after an updated version takes effect means that you accept the revised Terms, where permitted by law.",
    ],
  },
  {
    title: "Governing Law and Disputes",
    paragraphs: [
      "These Terms are intended to be governed by the laws of Jamaica, without excluding any mandatory consumer rights that apply in another jurisdiction.",
      "Before starting formal proceedings, users are encouraged to contact JamaicaTools and provide a reasonable opportunity for the issue to be reviewed.",
      "Where a dispute cannot be resolved informally, it may be submitted to the courts or other competent dispute-resolution body with jurisdiction.",
    ],
  },
  {
    title: "Severability",
    paragraphs: [
      "If a provision of these Terms is found to be invalid, unlawful or unenforceable, the remaining provisions will continue to apply to the extent legally possible.",
      "An invalid provision may be interpreted or limited as closely as possible to its intended lawful purpose.",
    ],
  },
  {
    title: "Entire Agreement",
    paragraphs: [
      "These Terms, the Privacy Policy and any additional notices displayed for a particular feature form the agreement governing your use of JamaicaTools.",
      "They replace earlier representations or understandings concerning use of the platform, except where a separate written agreement applies.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about these Terms may be submitted through the JamaicaTools Contact page.",
      "Select the most appropriate inquiry type and provide sufficient information for the matter to be reviewed.",
    ],
  },
];

function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Read the terms governing use of JamaicaTools calculators, AI Studio, uploaded files, online utilities, articles and related services."
        canonical="/terms"
      />

      <LegalPage
        eyebrow="Legal Information"
        title="Terms & Conditions"
        description="These Terms explain the rules, responsibilities and limitations that apply when using JamaicaTools."
        effectiveDate={EFFECTIVE_DATE}
        updatedDate={EFFECTIVE_DATE}
        notice="JamaicaTools provides general informational tools and automated outputs. Verify important results and seek qualified professional advice where appropriate."
        sections={termsSections}
      >
        <div className="mt-14 rounded-3xl border border-green-200 bg-green-50 p-7 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Questions about these Terms?
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Contact JamaicaTools with questions about platform use, uploaded
            content, business arrangements or your responsibilities as a user.
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

export default Terms;
