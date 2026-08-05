import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LegalPage from "../components/legal/LegalPage";

const EFFECTIVE_DATE = "August 4, 2026";

const privacySections = [
  {
    title: "About this Privacy Policy",
    paragraphs: [
      "This Privacy Policy explains how JamaicaTools collects, uses, processes, stores and shares information when you visit jamaicatools.com, use an online tool, submit a contact form or interact with an AI-powered feature.",
      "JamaicaTools is operated by Betterworks Communication. In this policy, “JamaicaTools,” “we,” “our” and “us” refer to the JamaicaTools platform and its operator.",
      "By using JamaicaTools, you acknowledge the practices described in this policy. Where consent is legally required, we will request it before carrying out the relevant processing.",
    ],
  },
  {
    title: "Information We May Collect",
    paragraphs: [
      "The information collected depends on the feature you use and the information you choose to provide.",
    ],
    subsections: [
      {
        title: "Information you provide directly",
        bullets: [
          "Your name, email address, inquiry type, subject and message when you use the contact form.",
          "Text, instructions, prompts, documents or other content entered into AI Studio.",
          "Images, PDF documents, spreadsheets, presentations or other files submitted to a processing tool.",
          "Feedback, tool suggestions, bug reports and business inquiries.",
        ],
      },
      {
        title: "Information generated through your use",
        bullets: [
          "Calculator inputs and generated results.",
          "Converted, compressed, edited or generated files.",
          "AI-generated content and technical information about the request.",
          "Error messages and diagnostic information needed to investigate technical problems.",
        ],
      },
      {
        title: "Information collected automatically",
        bullets: [
          "Internet Protocol address and approximate location derived from it.",
          "Browser type, operating system, device type and screen information.",
          "Pages visited, referring pages, dates, times and general interaction information.",
          "Server logs, security events and information needed to prevent abuse.",
        ],
      },
    ],
  },
  {
    title: "How We Use Information",
    paragraphs: [
      "We process information only for purposes connected with operating, protecting and improving JamaicaTools.",
    ],
    bullets: [
      "Provide calculators, converters, document tools, image utilities and AI features.",
      "Process and respond to contact-form submissions.",
      "Investigate bugs, failed requests, abuse, fraud or security incidents.",
      "Maintain, test and improve the website and its tools.",
      "Understand which features are useful and how the platform performs.",
      "Comply with legal obligations and enforce applicable terms.",
      "Communicate about an inquiry, requested support or a business opportunity.",
    ],
  },
  {
    title: "Calculators and Tool Inputs",
    paragraphs: [
      "Most calculator inputs are used to produce the requested result. JamaicaTools does not require users to provide a name or account merely to use ordinary calculators.",
      "Do not enter real account numbers, passwords, tax registration numbers, banking credentials or other unnecessary personal identifiers into a calculator.",
      "Some browser-based features may process information directly on your device. Other advanced tools may send the submitted information to a server or service provider to complete the requested operation.",
    ],
  },
  {
    title: "Uploaded Files",
    paragraphs: [
      "PDF, image and document tools may require access to the files you select. The processing method depends on the individual tool.",
      "Some tools may process files inside your browser. Other tools may transmit files to JamaicaTools infrastructure or a third-party processing provider.",
      "Uploaded files should not be treated as permanent storage. However, temporary copies, processing records, backups or security logs may remain for a limited period depending on the provider and technical requirements.",
    ],
    bullets: [
      "Upload only files you own or are authorized to process.",
      "Do not upload passwords, private keys or authentication credentials.",
      "Avoid highly confidential legal, medical, financial or identification records unless the tool clearly supports that use.",
      "Download and verify the processed result before closing the page.",
      "Keep your own original copy of every important file.",
    ],
  },
  {
    title: "AI Studio and Artificial Intelligence",
    paragraphs: [
      "When you use AI Studio, the instructions and content you provide are transmitted securely to the configured artificial intelligence service so that a response can be generated.",
      "The AI provider may process request content, generated output and technical metadata according to its own terms, privacy documentation and retention controls.",
      "AI-generated results may be inaccurate or incomplete. Do not rely on an AI response as the sole basis for an important legal, financial, medical, employment, educational or business decision.",
    ],
    bullets: [
      "Do not submit passwords, card numbers or banking credentials.",
      "Do not submit confidential customer or employee records unless properly authorized.",
      "Review factual claims, calculations, names, qualifications, dates and quotations.",
      "Remove unnecessary personal information before submitting a prompt.",
    ],
  },
  {
    title: "Contact Forms",
    paragraphs: [
      "JamaicaTools uses Netlify Forms to receive and manage contact submissions. Information entered into the contact form is transmitted to Netlify and made available to JamaicaTools through the project dashboard.",
      "Contact information is used to respond to inquiries, review suggestions, investigate reports and evaluate professional opportunities.",
      "Netlify may automatically evaluate submissions for spam and abuse. A legitimate submission may occasionally be classified as spam and may require manual review.",
    ],
  },
  {
    title: "Cookies and Browser Storage",
    paragraphs: [
      "JamaicaTools may use cookies, local storage or similar browser technologies for essential functionality, preferences, security, analytics and service improvement.",
      "Essential technologies may be required for parts of the website to work correctly. Optional analytics or advertising technologies will be described in the Cookie Policy when implemented.",
      "You can control cookies through your browser settings. Blocking some technologies may affect website functionality.",
    ],
  },
  {
    title: "Service Providers and Information Sharing",
    paragraphs: [
      "JamaicaTools does not intend to sell personal information. Information may be shared with providers that perform services needed to operate the platform.",
    ],
    bullets: [
      "Website hosting, deployment and serverless-function providers.",
      "Contact-form processing and spam-prevention providers.",
      "Artificial intelligence API providers.",
      "Document and image processing providers.",
      "Security, monitoring, analytics and error-diagnostic providers.",
      "Professional advisers or authorities where disclosure is legally required.",
    ],
  },
  {
    title: "International Processing",
    paragraphs: [
      "JamaicaTools and its service providers may process information on servers located outside Jamaica or the country where you live.",
      "Different countries may have different privacy laws. Where required, reasonable contractual, organizational or technical safeguards will be used for international processing.",
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "Information is retained only for as long as reasonably necessary for the purpose for which it was collected, to operate and secure JamaicaTools, to resolve disputes or to meet legal obligations.",
      "Retention periods vary according to the type of information, the tool used, the provider involved, the sensitivity of the information and whether an unresolved security, support or legal issue exists.",
      "Contact submissions may be retained while the inquiry remains relevant. Uploaded files and AI requests may be subject to shorter or provider-controlled retention periods.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "JamaicaTools uses HTTPS and reasonable technical and organizational safeguards intended to protect information against unauthorized access, loss, alteration or misuse.",
      "No website, transmission method or storage system can guarantee absolute security. You are responsible for protecting your device, browser, accounts and any files downloaded from the website.",
      "Please report suspected security or privacy issues through the Contact page without including sensitive credentials in the message.",
    ],
  },
  {
    title: "Your Privacy Rights",
    paragraphs: [
      "Depending on your location and the applicable law, you may have rights regarding personal information JamaicaTools holds about you.",
    ],
    bullets: [
      "Request information about whether your personal data is being processed.",
      "Request access to personal data associated with you.",
      "Ask for inaccurate or incomplete information to be corrected.",
      "Request deletion or restriction where legally available.",
      "Object to certain processing or withdraw consent where processing relies on consent.",
      "Raise a complaint with the relevant data-protection authority.",
    ],
  },
  {
    title: "Children’s Privacy",
    paragraphs: [
      "JamaicaTools is a general-audience platform and is not intentionally designed to collect personal information from young children.",
      "A parent or guardian who believes a child has submitted personal information should contact JamaicaTools so the situation can be reviewed.",
    ],
  },
  {
    title: "Third-Party Websites",
    paragraphs: [
      "JamaicaTools may link to external websites, providers or resources. Their privacy practices are controlled by their own policies.",
      "Review the privacy and security information of a third-party service before submitting personal information or uploading sensitive files.",
    ],
  },
  {
    title: "Changes to this Policy",
    paragraphs: [
      "This Privacy Policy may be updated when JamaicaTools adds features, changes service providers or must respond to legal or operational requirements.",
      "The latest version will be published on this page with an updated effective or revision date. Material changes may also be highlighted elsewhere on the website.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      "Questions, correction requests, deletion requests and other privacy inquiries can be submitted through the JamaicaTools Contact page.",
      "Select “Privacy or Data Question” as the inquiry type and describe the request clearly. We may need to request reasonable information to verify that a request relates to you before taking action.",
    ],
  },
];

function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | JamaicaTools</title>
        <meta
          name="description"
          content="Learn how JamaicaTools collects, uses, protects and shares information when you use calculators, file tools, AI Studio and the contact form."
        />
        <link rel="canonical" href="https://jamaicatools.com/privacy" />

        <meta property="og:title" content="Privacy Policy | JamaicaTools" />
        <meta
          property="og:description"
          content="Information about privacy, uploaded files, AI processing, contact forms, cookies and user rights on JamaicaTools."
        />
        <meta
          property="og:url"
          content="https://jamaicatools.com/privacy"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <LegalPage
        eyebrow="Legal and Privacy"
        title="Privacy Policy"
        description="This policy explains what information JamaicaTools may process, why it is used and the choices available to users."
        effectiveDate={EFFECTIVE_DATE}
        updatedDate={EFFECTIVE_DATE}
        notice="Please do not submit passwords, banking credentials, private authentication keys or unnecessary highly sensitive information through JamaicaTools."
        sections={privacySections}
      >
        <div className="mt-14 rounded-3xl border border-green-200 bg-green-50 p-7 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Need to make a privacy request?
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Use the Contact page and select the privacy or data inquiry option.
            Include enough information for the request to be identified, but do
            not send passwords or sensitive credentials.
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

export default Privacy;
