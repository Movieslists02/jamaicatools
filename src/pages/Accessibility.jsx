import { Link } from "react-router-dom";
import LegalPage from "../components/legal/LegalPage";
import SEO from "../components/seo/SEO";

const EFFECTIVE_DATE = "August 5, 2026";

const accessibilitySections = [
  {
    title: "Our Accessibility Commitment",
    paragraphs: [
      "JamaicaTools is committed to improving access to its calculators, document utilities, image tools, artificial intelligence features, articles and public information for people with disabilities.",
      "We aim to design and maintain JamaicaTools so that it can be used by people with different visual, auditory, physical, speech, cognitive and neurological needs.",
      "Accessibility is an ongoing responsibility. Features will continue to be reviewed and improved as JamaicaTools grows.",
    ],
  },
  {
    title: "Accessibility Standard",
    paragraphs: [
      "JamaicaTools is working toward alignment with the Web Content Accessibility Guidelines version 2.2 at Level AA.",
      "WCAG provides testable recommendations for making web content more perceivable, operable, understandable and robust.",
      "This statement does not claim that every page, tool or third-party feature currently satisfies every WCAG 2.2 Level AA success criterion.",
    ],
  },
  {
    title: "Measures We Are Taking",
    paragraphs: [
      "Accessibility considerations are included in the design and development of JamaicaTools.",
    ],
    bullets: [
      "Using semantic HTML headings, labels, buttons, links and landmarks.",
      "Providing keyboard-operable navigation and interactive controls.",
      "Maintaining visible focus indicators for keyboard users.",
      "Using colour combinations intended to provide readable contrast.",
      "Adding text labels and accessible names to form controls.",
      "Providing meaningful alternative text for informative images where applicable.",
      "Avoiding unnecessary automatic movement, flashing or time limits.",
      "Designing responsive layouts for phones, tablets and desktop devices.",
      "Displaying clear validation messages and status information.",
      "Using plain language where practical.",
    ],
  },
  {
    title: "Keyboard Navigation",
    paragraphs: [
      "JamaicaTools is intended to support navigation by keyboard without requiring a mouse or touch screen.",
      "Users should generally be able to move through links, buttons, form fields, filters and accordion controls using the Tab and Shift+Tab keys.",
      "Enter or Space should activate supported buttons and controls according to standard browser behaviour.",
    ],
    bullets: [
      "Use Tab to move forward through interactive elements.",
      "Use Shift+Tab to move backward.",
      "Use Enter to follow links or submit supported forms.",
      "Use Space or Enter to activate buttons and expandable FAQ items.",
      "Use browser shortcuts to zoom or navigate headings where supported.",
    ],
  },
  {
    title: "Screen Readers and Assistive Technology",
    paragraphs: [
      "JamaicaTools uses semantic page structures and accessible labels intended to support screen readers and other assistive technologies.",
      "Compatibility can vary according to the browser, operating system, assistive technology, page and tool being used.",
      "We cannot guarantee identical behaviour across every assistive-technology combination, but reports of compatibility barriers are welcome.",
    ],
  },
  {
    title: "Text, Contrast and Zoom",
    paragraphs: [
      "The website uses scalable text and responsive layouts intended to remain usable when browser zoom is increased.",
      "Users can normally enlarge text or the entire page through browser or operating-system settings.",
      "Some complex calculators, tables, document previews or generated content may require horizontal scrolling at very high zoom levels.",
    ],
    bullets: [
      "Use browser zoom controls to enlarge or reduce page content.",
      "Enable operating-system text scaling where available.",
      "Use high-contrast or colour-filter settings provided by your device.",
      "Report text or controls that become hidden, overlap or cannot be reached.",
    ],
  },
  {
    title: "Forms and Error Messages",
    paragraphs: [
      "Forms are intended to include visible labels, required-field indicators and understandable validation messages.",
      "When an error occurs, JamaicaTools aims to identify the affected field and explain how the problem can be corrected.",
      "Status messages, loading indicators and successful submissions should be communicated visually and, where supported, through accessible markup.",
    ],
  },
  {
    title: "Calculators and Interactive Tools",
    paragraphs: [
      "Calculators and utilities may contain interactive controls, results panels, file selectors and processing states.",
      "We aim to make these controls keyboard accessible and provide clear labels, instructions and result headings.",
      "Some advanced visual functions, previews or drag-and-drop interactions may currently be more difficult to use with certain assistive technologies.",
    ],
  },
  {
    title: "PDF, Image and Document Tools",
    paragraphs: [
      "Uploaded documents and generated files may contain accessibility limitations inherited from the original file or introduced by the selected conversion process.",
      "JamaicaTools does not guarantee that a converted PDF, Word document, spreadsheet, presentation or image will automatically meet accessibility standards.",
      "Users creating public, educational, employment or official documents should review the generated file for headings, reading order, alternative text, table structure, colour contrast and keyboard accessibility.",
    ],
  },
  {
    title: "Artificial Intelligence Features",
    paragraphs: [
      "AI Studio is designed with labelled controls, keyboard-accessible form fields and readable output areas.",
      "AI-generated content may not use accessible headings, plain language, descriptive links or appropriate image descriptions unless the user requests and reviews those features.",
      "Generated content should be checked and edited before publication to ensure it meets the accessibility needs of the intended audience.",
    ],
  },
  {
    title: "Videos, Audio and Future Media",
    paragraphs: [
      "If JamaicaTools introduces video, audio or other multimedia content, we intend to consider captions, transcripts, controls and other accessibility support.",
      "Third-party embedded media may have accessibility limitations outside JamaicaTools’ direct control.",
    ],
  },
  {
    title: "Known Limitations",
    paragraphs: [
      "JamaicaTools is still under active development, and some accessibility barriers may remain.",
    ],
    bullets: [
      "Some drag-and-drop file interfaces may be easier to use with a pointer than with a keyboard.",
      "File previews and visual editing tools may not fully describe every visual change to screen-reader users.",
      "Generated PDFs and converted documents may not contain complete accessibility tagging.",
      "Third-party services may present controls, errors or challenges that JamaicaTools cannot directly modify.",
      "Some long legal pages and tool interfaces may require additional navigation improvements.",
      "Colour contrast, focus order or status announcements may require further testing in certain components.",
    ],
  },
  {
    title: "Third-Party Content and Services",
    paragraphs: [
      "JamaicaTools relies on third-party providers for hosting, forms, artificial intelligence and other technical services.",
      "External websites, embedded services and generated files are governed by the accessibility practices of their respective providers.",
      "Where possible, JamaicaTools will favour providers and integration methods that support accessible use.",
    ],
  },
  {
    title: "Accessibility Testing",
    paragraphs: [
      "Accessibility evaluation may include keyboard testing, browser zoom, automated checking and manual review of page structure and forms.",
      "Automated tools can identify some barriers but cannot confirm that a website is fully accessible.",
      "Feedback from people using assistive technology is especially valuable and may reveal issues that automated testing does not detect.",
    ],
  },
  {
    title: "Requesting Assistance",
    paragraphs: [
      "If you cannot access a tool, article, form or document, contact JamaicaTools and describe the assistance required.",
      "Where reasonably possible, we will try to provide the information in another format or help identify an alternative method for completing the task.",
      "Response time may depend on the complexity of the request and the availability of an accessible alternative.",
    ],
  },
  {
    title: "Reporting an Accessibility Barrier",
    paragraphs: [
      "Accessibility problems can be reported through the JamaicaTools Contact page.",
      "Select the most relevant inquiry type and include enough detail for the issue to be reproduced.",
    ],
    bullets: [
      "The page address or name of the affected tool.",
      "A description of the problem.",
      "The browser and operating system being used.",
      "The assistive technology and version, where applicable.",
      "The steps taken before the problem occurred.",
      "The accessible format or outcome you need.",
    ],
  },
  {
    title: "Feedback and Continuous Improvement",
    paragraphs: [
      "Accessibility feedback will be reviewed as part of JamaicaTools’ ongoing development process.",
      "Not every request can be completed immediately, but reported barriers can help guide future design and engineering priorities.",
      "This statement may be updated as accessibility work, testing methods, tools and legal requirements change.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "To report an accessibility barrier or request assistance, use the JamaicaTools Contact page.",
      "Do not include passwords, banking credentials or other unnecessary sensitive information in the message.",
    ],
  },
];

function Accessibility() {
  return (
    <>
      <SEO
        title="Accessibility Statement"
        description="Learn about JamaicaTools accessibility goals, WCAG 2.2 efforts, keyboard support, assistive technology, known limitations and how to report a barrier."
        canonical="/accessibility"
      />

      <LegalPage
        eyebrow="Inclusive Access"
        title="Accessibility Statement"
        description="JamaicaTools is working to make its tools, information and services easier to use for people with disabilities."
        effectiveDate={EFFECTIVE_DATE}
        updatedDate={EFFECTIVE_DATE}
        notice="JamaicaTools is working toward WCAG 2.2 Level AA. This statement is not a certification that every page and feature currently conforms fully."
        sections={accessibilitySections}
      >
        <div className="mt-14 rounded-3xl border border-green-200 bg-green-50 p-7 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Found an accessibility barrier?
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Tell us which page or tool was difficult to use, what assistive
            technology you were using and the result you were trying to
            achieve.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Report an Accessibility Issue
            </Link>

            <Link
              to="/faq"
              className="rounded-xl border border-green-300 bg-white px-6 py-3 font-semibold text-green-700 transition hover:border-green-700"
            >
              Visit the FAQ
            </Link>
          </div>
        </div>
      </LegalPage>
    </>
  );
}

export default Accessibility;
