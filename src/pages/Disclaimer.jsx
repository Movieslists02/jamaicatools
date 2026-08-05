import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LegalPage from "../components/legal/LegalPage";

const EFFECTIVE_DATE = "August 4, 2026";

const disclaimerSections = [
  {
    title: "General Information Only",
    paragraphs: [
      "JamaicaTools provides calculators, digital utilities, artificial intelligence features, articles and other resources for general informational, educational and convenience purposes.",
      "Information and automated results available through JamaicaTools are not guaranteed to be complete, current, accurate or suitable for every user or situation.",
      "Your use of JamaicaTools does not create a professional-client, adviser-client, attorney-client, accountant-client, medical-provider or fiduciary relationship.",
    ],
  },
  {
    title: "No Financial Advice",
    paragraphs: [
      "Financial calculators, salary estimates, loan calculations, investment projections, currency information and related articles are provided for general planning and educational purposes.",
      "Results may differ from actual amounts because of changing rates, fees, taxes, thresholds, market conditions, lender policies, employer deductions, rounding and individual circumstances.",
      "JamaicaTools does not recommend or endorse any investment, security, lender, financial institution, insurance product or financial strategy.",
    ],
    bullets: [
      "Verify important calculations independently.",
      "Review current official rates and rules.",
      "Consult a qualified financial adviser, accountant or tax professional.",
      "Do not invest, borrow or make a major financial decision solely from a JamaicaTools result.",
    ],
  },
  {
    title: "No Tax or Accounting Advice",
    paragraphs: [
      "Tax, payroll, statutory deduction and accounting tools provide estimates based on the formulas and assumptions implemented at the time.",
      "Tax laws, thresholds, contribution limits and administrative practices may change. Individual treatment may also depend on income type, employment status, exemptions, benefits, deductions and other circumstances.",
      "JamaicaTools is not a substitute for guidance from Tax Administration Jamaica, another competent authority, an accountant or a qualified tax professional.",
    ],
  },
  {
    title: "No Legal Advice",
    paragraphs: [
      "Legal pages, business resources, document templates, AI-generated text and articles are provided as general information and should not be treated as legal advice.",
      "Laws, regulations, contractual requirements and legal rights vary according to location and circumstances.",
      "Consult a qualified attorney before relying on content involving contracts, disputes, employment, privacy, intellectual property, compliance or other legal matters.",
    ],
  },
  {
    title: "No Medical or Health Advice",
    paragraphs: [
      "Health calculators and health-related information are intended for general education and personal awareness only.",
      "Results such as body mass index, calorie estimates or other measurements do not diagnose, prevent, treat or cure any medical condition.",
      "Do not delay or disregard professional medical advice because of a JamaicaTools result or article.",
    ],
    bullets: [
      "Consult a qualified healthcare professional regarding symptoms or concerns.",
      "Seek urgent medical help when an emergency may exist.",
      "Do not change medication, treatment, diet or exercise solely from an automated result.",
      "Remember that health calculations may not account for individual medical factors.",
    ],
  },
  {
    title: "Artificial Intelligence Disclaimer",
    paragraphs: [
      "AI Studio uses artificial intelligence to generate, rewrite, summarize or analyze content based on user instructions.",
      "Artificial intelligence may produce inaccurate, incomplete, biased, outdated, fabricated or misleading information, even when the response sounds confident.",
      "AI output must be reviewed and edited by a responsible person before it is published, submitted, relied upon or used professionally.",
    ],
    bullets: [
      "Verify names, dates, laws, qualifications, quotations and statistics.",
      "Check calculations and factual claims against reliable sources.",
      "Review resumes, cover letters, emails and business content before sending them.",
      "Do not rely on AI output as professional legal, financial, medical or employment advice.",
      "Do not submit passwords, private keys, financial credentials or highly confidential information.",
    ],
  },
  {
    title: "Calculator Accuracy",
    paragraphs: [
      "Calculators produce results from the values entered, programmed formulas and assumptions associated with the tool.",
      "Errors may result from incorrect inputs, software defects, outdated rates, rounding, browser behaviour or incomplete assumptions.",
      "A displayed result should be treated as an estimate unless an authoritative source or qualified professional confirms it.",
    ],
  },
  {
    title: "Currency and Market Information",
    paragraphs: [
      "Currency conversions, investment projections and market-related information may not reflect live transaction rates or the exact amount offered by a bank, broker, payment provider or currency dealer.",
      "Actual transactions may include spreads, commissions, taxes, service fees, minimum charges and timing differences.",
      "Market values and exchange rates can change rapidly.",
    ],
  },
  {
    title: "Uploaded Files and File Processing",
    paragraphs: [
      "PDF, image and document tools may process uploaded files in the browser, through JamaicaTools infrastructure or through a third-party service.",
      "JamaicaTools does not guarantee that every file will be converted, compressed, repaired, unlocked, extracted or processed successfully.",
      "Processing may alter formatting, resolution, metadata, fonts, page layout, formulas, signatures or other document properties.",
    ],
    bullets: [
      "Keep an original backup before processing a file.",
      "Open and inspect every generated file before relying on it.",
      "Do not upload files containing unnecessary sensitive information.",
      "Use only files you own or are authorized to process.",
      "Do not assume a repaired or converted document is complete or legally valid.",
    ],
  },
  {
    title: "Password Protection and Document Security",
    paragraphs: [
      "Tools that protect, unlock or otherwise modify documents are provided only for lawful use on files the user owns or is authorized to access.",
      "JamaicaTools does not guarantee that password protection, watermarking, permissions or other document controls will prevent all unauthorized access, copying or alteration.",
      "Users remain responsible for selecting appropriate security measures and complying with applicable laws and agreements.",
    ],
  },
  {
    title: "Articles and Published Content",
    paragraphs: [
      "Blog articles and guides may summarize complex subjects for general audiences.",
      "Content may become outdated when laws, rates, technology, service-provider policies or accepted practices change.",
      "Publication does not guarantee that an article applies to your particular circumstances.",
    ],
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      "Some JamaicaTools features depend on third-party providers for hosting, artificial intelligence, form handling, file conversion, image processing, analytics or related services.",
      "JamaicaTools does not control every aspect of a third-party service and cannot guarantee its availability, security, accuracy, pricing, processing time or policies.",
      "Use of a third-party feature may also be subject to that provider’s terms and privacy practices.",
    ],
  },
  {
    title: "External Links",
    paragraphs: [
      "JamaicaTools may include links to government websites, service providers, businesses or other external resources.",
      "External links are provided for reference or convenience and do not automatically represent endorsement.",
      "JamaicaTools is not responsible for the accuracy, availability, security, content or practices of an external website.",
    ],
  },
  {
    title: "Advertising and Affiliate Relationships",
    paragraphs: [
      "JamaicaTools may display advertisements, sponsored content or affiliate links in the future.",
      "Advertising or affiliate compensation will not guarantee that a product, company or service is appropriate for every user.",
      "Users should independently evaluate prices, terms, warranties, risks and suitability before purchasing or entering an agreement.",
    ],
  },
  {
    title: "Availability and Technical Errors",
    paragraphs: [
      "JamaicaTools may experience interruptions, maintenance, unavailable providers, usage limits, network failures, browser incompatibilities or software defects.",
      "No guarantee is made that every feature will remain continuously available, error-free or compatible with every device and file format.",
      "The platform may change, restrict, suspend or discontinue a feature without notice.",
    ],
  },
  {
    title: "User Responsibility",
    paragraphs: [
      "You are responsible for deciding whether JamaicaTools and its results are appropriate for your intended purpose.",
      "You are also responsible for reviewing inputs, preserving backups, verifying results and obtaining professional advice where required.",
    ],
    bullets: [
      "Check that entered information is correct.",
      "Read the instructions and limitations associated with each tool.",
      "Verify important outputs before acting on them.",
      "Protect your device, files and credentials.",
      "Comply with all applicable laws, contracts and professional obligations.",
    ],
  },
  {
    title: "No Guarantee of Results",
    paragraphs: [
      "JamaicaTools does not guarantee financial savings, improved rankings, employment, business growth, document recovery, successful applications, legal compliance, health outcomes or any other particular result.",
      "Examples, projections and generated content are illustrative and may not reflect actual outcomes.",
    ],
  },
  {
    title: "Limitation of Responsibility",
    paragraphs: [
      "To the fullest extent permitted by law, Betterworks Communication and JamaicaTools are not responsible for loss, damage or expense resulting from reliance on a tool, article, generated response, file-processing result or third-party service.",
      "This includes loss of data, revenue, profit, opportunity, reputation, files, business activity or expected savings.",
      "Nothing in this Disclaimer excludes responsibility that cannot legally be excluded.",
    ],
  },
  {
    title: "Changes to this Disclaimer",
    paragraphs: [
      "This Disclaimer may be updated as JamaicaTools introduces new tools, service providers, paid features, advertisements or content categories.",
      "The most recent version will be published on this page with an updated revision date.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about this Disclaimer or the limitations of a particular tool may be submitted through the JamaicaTools Contact page.",
      "Include the tool or article name and explain the concern clearly, without providing passwords or sensitive credentials.",
    ],
  },
];

function Disclaimer() {
  return (
    <>
      <Helmet>
        <title>Disclaimer | JamaicaTools</title>
        <meta
          name="description"
          content="Read important limitations concerning JamaicaTools calculators, AI-generated content, health information, financial estimates, uploaded files and articles."
        />
        <link rel="canonical" href="https://jamaicatools.com/disclaimer" />

        <meta property="og:title" content="Disclaimer | JamaicaTools" />
        <meta
          property="og:description"
          content="Important limitations for calculators, AI output, financial and health information, file processing and third-party services."
        />
        <meta
          property="og:url"
          content="https://jamaicatools.com/disclaimer"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <LegalPage
        eyebrow="Important Information"
        title="Disclaimer"
        description="This page explains the limitations of JamaicaTools calculators, automated outputs, articles, file tools and third-party services."
        effectiveDate={EFFECTIVE_DATE}
        updatedDate={EFFECTIVE_DATE}
        notice="Do not use JamaicaTools as a substitute for qualified financial, tax, legal, medical or other professional advice."
        sections={disclaimerSections}
      >
        <div className="mt-14 rounded-3xl border border-green-200 bg-green-50 p-7 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Need clarification about a tool?
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Contact JamaicaTools and identify the specific calculator, article,
            AI feature or file-processing tool involved.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Contact JamaicaTools
            </Link>

            <Link
              to="/terms"
              className="rounded-xl border border-green-300 bg-white px-6 py-3 font-semibold text-green-700 transition hover:border-green-700"
            >
              Read Terms & Conditions
            </Link>
          </div>
        </div>
      </LegalPage>
    </>
  );
}

export default Disclaimer;
