import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LegalPage from "../components/legal/LegalPage";

const EFFECTIVE_DATE = "August 4, 2026";

const cookieSections = [
  {
    title: "About this Cookie Policy",
    paragraphs: [
      "This Cookie Policy explains how JamaicaTools may use cookies, local storage, session storage, pixels and similar browser technologies when you visit jamaicatools.com or use its tools and services.",
      "This policy should be read together with the JamaicaTools Privacy Policy, which provides more information about how personal information may be collected, processed, shared and retained.",
      "JamaicaTools is operated by Betterworks Communication. References to “JamaicaTools,” “we,” “our” and “us” refer to the platform and its operator.",
    ],
  },
  {
    title: "What Cookies Are",
    paragraphs: [
      "Cookies are small text files that a website may place on your computer, phone, tablet or other device through your browser.",
      "Cookies can help a website operate correctly, remember settings, maintain security, understand general usage and support advertising or analytics where those features are enabled.",
      "Similar technologies, including browser local storage and session storage, can store information on your device without using a traditional cookie.",
    ],
  },
  {
    title: "How JamaicaTools Currently Uses Browser Storage",
    paragraphs: [
      "JamaicaTools may use limited browser storage to support essential functions, remember user choices and make tools easier to use.",
      "Some tools may temporarily keep settings, selected options, recently entered values or interface preferences in the browser.",
      "Information stored locally in your browser generally remains on your device unless it is separately submitted to a JamaicaTools server or third-party service.",
    ],
    bullets: [
      "Remembering interface or display preferences.",
      "Maintaining temporary tool settings during a browser session.",
      "Supporting security and abuse-prevention functions.",
      "Remembering consent choices when a cookie-consent system is introduced.",
      "Supporting future features such as favourite or recently used tools.",
    ],
  },
  {
    title: "Categories of Cookies and Similar Technologies",
    subsections: [
      {
        title: "Strictly necessary technologies",
        paragraphs: [
          "These technologies support essential website functions, security, network delivery, form handling or preferences required for a feature to operate.",
          "Blocking strictly necessary technologies may prevent parts of JamaicaTools from working correctly.",
        ],
      },
      {
        title: "Functional technologies",
        paragraphs: [
          "Functional technologies remember choices that improve convenience, such as interface preferences, selected tool settings or locally saved favourites.",
          "JamaicaTools may add or modify functional storage as the platform develops.",
        ],
      },
      {
        title: "Analytics technologies",
        paragraphs: [
          "Analytics technologies can help measure visits, page performance, traffic sources, general device information and how users interact with the platform.",
          "JamaicaTools may introduce an analytics service in the future. When required, non-essential analytics technologies should not be activated until the appropriate notice or consent is provided.",
        ],
      },
      {
        title: "Advertising technologies",
        paragraphs: [
          "Advertising technologies may be used in the future to display, measure or personalize advertisements and to limit how often an advertisement appears.",
          "Third-party advertising providers may use cookies or similar identifiers according to their own policies. JamaicaTools will update this policy and provide suitable controls before enabling advertising technologies where required.",
        ],
      },
    ],
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      "JamaicaTools uses third-party infrastructure and service providers. These providers may set or receive cookies, request identifiers or process technical information as part of providing their services.",
      "The technologies used by a provider depend on the feature being accessed, the provider’s configuration and its own privacy documentation.",
    ],
    bullets: [
      "Netlify for hosting, deployment, serverless functions and contact-form processing.",
      "OpenAI or another configured AI provider for AI Studio requests.",
      "Document and image-processing providers used by particular tools.",
      "Security, monitoring, performance or error-diagnostic services.",
      "Analytics or advertising providers if those services are introduced later.",
    ],
  },
  {
    title: "Contact Forms",
    paragraphs: [
      "The JamaicaTools contact form is processed using Netlify Forms. Netlify and related security systems may process browser, network or technical information to receive submissions and identify spam or abuse.",
      "The contact form includes a honeypot field to reduce automated spam. Additional security or anti-abuse technologies may also be used by the service provider.",
      "Do not include passwords, banking credentials or other unnecessary sensitive information in a contact submission.",
    ],
  },
  {
    title: "AI Studio",
    paragraphs: [
      "AI Studio sends the information required to complete a request to the configured artificial intelligence provider through a server-side function.",
      "The AI provider or hosting infrastructure may process technical request information needed to operate, secure and monitor the service.",
      "Do not submit passwords, payment-card details, authentication keys or highly confidential records through AI Studio.",
    ],
  },
  {
    title: "Local Storage Used by Tools",
    paragraphs: [
      "Some JamaicaTools features may use local storage or session storage instead of cookies.",
      "Local storage can retain information after a browser tab is closed, while session storage is usually removed when the browser session ends.",
      "Removing website data through your browser may delete locally saved settings, favourites, recent tools or other information stored only on your device.",
    ],
  },
  {
    title: "Managing Cookies in Your Browser",
    paragraphs: [
      "Most browsers allow you to view, block or delete cookies and other stored website data.",
      "Browser controls vary by provider and device. Review your browser’s privacy or site-data settings for the available options.",
    ],
    bullets: [
      "Block all cookies or only third-party cookies.",
      "Delete cookies and stored website data.",
      "Clear local storage and session storage.",
      "Set the browser to notify you before a cookie is stored.",
      "Use private or incognito browsing where appropriate.",
    ],
  },
  {
    title: "Effects of Blocking Technologies",
    paragraphs: [
      "Blocking or deleting cookies and similar technologies may affect how JamaicaTools behaves.",
      "You may lose saved preferences, favourite tools, consent selections or temporary tool information.",
      "Some security, form, authentication or future account features may not work correctly when essential storage is blocked.",
    ],
  },
  {
    title: "Consent and Preference Controls",
    paragraphs: [
      "JamaicaTools currently aims to limit unnecessary browser tracking. A dedicated consent banner or preference centre may be introduced when optional analytics, advertising or other non-essential technologies are enabled.",
      "Where consent is legally required, JamaicaTools intends to provide a way to accept, reject or manage relevant non-essential technologies.",
      "Withdrawing consent will not affect processing that was lawful before the preference was changed.",
    ],
  },
  {
    title: "Do Not Track and Global Privacy Signals",
    paragraphs: [
      "Some browsers provide Do Not Track or other privacy-preference signals.",
      "There is not one universally applied technical standard for every signal. JamaicaTools may update its handling of recognized privacy signals as legal and technical requirements develop.",
    ],
  },
  {
    title: "International Processing",
    paragraphs: [
      "Service providers may operate infrastructure in countries outside Jamaica or outside your country of residence.",
      "Cookies and similar technologies may therefore result in technical information being processed internationally.",
      "More information about international processing and service providers is available in the Privacy Policy.",
    ],
  },
  {
    title: "Changes to this Cookie Policy",
    paragraphs: [
      "This Cookie Policy may be updated when JamaicaTools changes its browser-storage practices, adds analytics, introduces advertising, enables account features or changes service providers.",
      "The latest version will be published on this page with an updated effective or revision date.",
      "Material changes may also be highlighted through a notice or consent interface where appropriate.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      "Questions about cookies, browser storage or privacy preferences can be submitted through the JamaicaTools Contact page.",
      "Select “Privacy or Data Question” and describe the browser, device or technology involved where relevant.",
    ],
  },
];

function CookiePolicy() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | JamaicaTools</title>
        <meta
          name="description"
          content="Learn how JamaicaTools may use cookies, local storage and similar browser technologies for essential features, preferences, analytics and advertising."
        />
        <link rel="canonical" href="https://jamaicatools.com/cookies" />

        <meta property="og:title" content="Cookie Policy | JamaicaTools" />
        <meta
          property="og:description"
          content="Information about cookies, local storage, third-party technologies and browser controls on JamaicaTools."
        />
        <meta
          property="og:url"
          content="https://jamaicatools.com/cookies"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <LegalPage
        eyebrow="Privacy and Browser Storage"
        title="Cookie Policy"
        description="This policy explains how cookies and similar browser technologies may be used when you visit or interact with JamaicaTools."
        effectiveDate={EFFECTIVE_DATE}
        updatedDate={EFFECTIVE_DATE}
        notice="JamaicaTools has not yet introduced a full advertising or behavioural-analytics system. This policy also explains how those technologies will be handled if they are enabled later."
        sections={cookieSections}
      >
        <div className="mt-14 rounded-3xl border border-green-200 bg-green-50 p-7 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Questions about browser storage?
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Contact JamaicaTools for questions about cookies, local storage,
            analytics preferences or other privacy controls.
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

export default CookiePolicy;
