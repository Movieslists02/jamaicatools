import { Link, useParams } from "react-router-dom";
import SEO from "../components/seo/SEO";
import StructuredData from "../components/seo/StructuredData";
import NotFound from "./NotFound";

import CurrencyConverter from "../components/calculators/CurrencyConverter";
import IncomeTaxCalculator from "../components/calculators/IncomeTaxCalculator";
import LoanCalculator from "../components/calculators/LoanCalculator";
import NISCalculator from "../components/calculators/NISCalculator";
import SalaryCalculator from "../components/calculators/SalaryCalculator";
import BMICalculator from "../components/calculators/BMICalculator";

import ToolInformation from "../components/tools/ToolInformation";
import ToolFAQ from "../components/tools/ToolFAQ";
import RelatedTools from "../components/tools/RelatedTools";

import BackgroundRemover from "../components/tools/images/BackgroundRemover";
import ImageCompressor from "../components/tools/images/ImageCompressor";
import ImageConverter from "../components/tools/images/ImageConverter";
import ImageResizer from "../components/tools/images/ImageResizer";
import ImageCropper from "../components/tools/images/ImageCropper";
import ImageRotator from "../components/tools/images/ImageRotator";
import ImageWatermarker from "../components/tools/images/ImageWatermarker";

import MergePDF from "../components/tools/pdf/MergePDF";
import SplitPDF from "../components/tools/pdf/SplitPDF";
import CompressPDF from "../components/tools/pdf/CompressPDF";
import PDFToImages from "../components/tools/pdf/PDFToImages";
import ImagesToPDF from "../components/tools/pdf/ImagesToPDF";
import PDFToWord from "../components/tools/pdf/PDFToWord";
import WordToPDF from "../components/tools/pdf/WordToPDF";
import ProtectPDF from "../components/tools/pdf/ProtectPDF";
import UnlockPDF from "../components/tools/pdf/UnlockPDF";
import RotatePDF from "../components/tools/pdf/RotatePDF";
import OrganizePDF from "../components/tools/pdf/OrganizePDF";
import ExtractPDFPages from "../components/tools/pdf/ExtractPDFPages";
import DeletePDFPages from "../components/tools/pdf/DeletePDFPages";
import OCRPDF from "../components/tools/pdf/OCRPDF";
import RepairPDF from "../components/tools/pdf/RepairPDF";
import SignPDF from "../components/tools/pdf/SignPDF";
import PDFPageNumbers from "../components/tools/pdf/PDFPageNumbers";
import PDFToExcel from "../components/tools/pdf/PDFToExcel";
import ExcelToPDF from "../components/tools/pdf/ExcelToPDF";
import PDFToPowerPoint from "../components/tools/pdf/PDFToPowerPoint";
import PowerPointToPDF from "../components/tools/pdf/PowerPointToPDF";
import WatermarkPDF from "../components/tools/pdf/WatermarkPDF";
import PDFToText from "../components/tools/pdf/PDFToText";

import AIWriter from "../components/tools/ai/AIWriter";

import tools from "../data/tools";
import { getToolContent } from "../data/toolContent";

const toolComponents = {
  "loan-calculator": LoanCalculator,
  "salary-calculator": SalaryCalculator,
  "income-tax-calculator": IncomeTaxCalculator,
  "currency-converter": CurrencyConverter,
  "nis-calculator": NISCalculator,
  "bmi-calculator": BMICalculator,

  "background-remover": BackgroundRemover,
  "image-compressor": ImageCompressor,
  "image-converter": ImageConverter,
  "image-resizer": ImageResizer,
  "crop-image": ImageCropper,
  "rotate-flip-image": ImageRotator,
  "watermark-image": ImageWatermarker,

  "merge-pdf": MergePDF,
  "split-pdf": SplitPDF,
  "compress-pdf": CompressPDF,
  "pdf-to-images": PDFToImages,
  "images-to-pdf": ImagesToPDF,
  "pdf-to-word": PDFToWord,
  "word-to-pdf": WordToPDF,
  "protect-pdf": ProtectPDF,
  "unlock-pdf": UnlockPDF,
  "rotate-pdf": RotatePDF,
  "organize-pdf": OrganizePDF,
  "extract-pdf-pages": ExtractPDFPages,
  "delete-pdf-pages": DeletePDFPages,
  "ocr-pdf": OCRPDF,
  "repair-pdf": RepairPDF,
  "sign-pdf": SignPDF,
  "pdf-page-numbers": PDFPageNumbers,
  "pdf-to-excel": PDFToExcel,
  "excel-to-pdf": ExcelToPDF,
  "pdf-to-powerpoint": PDFToPowerPoint,
  "powerpoint-to-pdf": PowerPointToPDF,
  "watermark-pdf": WatermarkPDF,
  "pdf-to-text": PDFToText,

  "ai-writer": AIWriter,
};

function ToolDetails() {
  const { slug } = useParams();

  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    return <NotFound />;
  }

  const ToolComponent = toolComponents[tool.slug];
  const content = getToolContent(tool.slug);

  const toolUrl = `https://jamaicatools.com/tools/${tool.slug}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: tool.title,
      url: toolUrl,
      description: tool.seoDescription || tool.description,
      applicationCategory: tool.category,
      operatingSystem: "Any",
      browserRequirements: "Requires a modern web browser",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: {
        "@type": "Organization",
        name: "JamaicaTools",
        url: "https://jamaicatools.com/",
      },
      keywords: tool.keywords?.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://jamaicatools.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tools",
          item: "https://jamaicatools.com/tools",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: tool.title,
          item: toolUrl,
        },
      ],
    },
  ];

  if (content?.faqs?.length) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <>
      <SEO
        title={tool.seoTitle || tool.title}
        description={tool.seoDescription || tool.description}
        canonical={`/tools/${tool.slug}`}
        keywords={tool.keywords}
      />

      <StructuredData data={structuredData} />

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Link
            to="/tools"
            className="font-semibold text-green-700 transition hover:text-green-800"
          >
            ← Back to all tools
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
            <main className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
                {tool.category}
              </p>

              <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
                <span aria-hidden="true">{tool.icon}</span>{" "}
                {tool.title}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                {tool.description}
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
                {ToolComponent ? (
                  <ToolComponent />
                ) : (
                  <div className="py-10 text-center">
                    <h2 className="text-2xl font-bold text-slate-900">
                      Tool Coming Soon
                    </h2>

                    <p className="mt-3 text-slate-600">
                      This tool is listed but is not available yet.
                    </p>

                    <Link
                      to="/tools"
                      className="mt-6 inline-block font-semibold text-green-700 hover:text-green-800"
                    >
                      Browse available tools →
                    </Link>
                  </div>
                )}
              </div>
            </main>

            <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-slate-900">
                Tool information
              </h2>

              <dl className="mt-5 space-y-5 text-sm">
                <div>
                  <dt className="font-semibold text-slate-900">
                    Category
                  </dt>

                  <dd className="mt-1 text-slate-600">
                    {tool.category}
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-slate-900">
                    Cost
                  </dt>

                  <dd className="mt-1 text-slate-600">
                    Free to use
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-slate-900">
                    Availability
                  </dt>

                  <dd className="mt-1 text-slate-600">
                    Online through a modern web browser
                  </dd>
                </div>

                {content?.reviewedDate && (
                  <div>
                    <dt className="font-semibold text-slate-900">
                      Content reviewed
                    </dt>

                    <dd className="mt-1 text-slate-600">
                      {content.reviewedDate}
                    </dd>
                  </div>
                )}

                {(tool.keywords ?? []).length > 0 && (
                  <div>
                    <dt className="font-semibold text-slate-900">
                      Topics
                    </dt>

                    <dd className="mt-3">
                      <div className="flex flex-wrap gap-2">
                        {tool.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </dd>
                  </div>
                )}
              </dl>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-sm leading-6 text-slate-500">
                  JamaicaTools provides this tool for general informational
                  and planning purposes. Verify important results before
                  making financial, legal, medical or other significant
                  decisions.
                </p>
              </div>
            </aside>
          </div>

          {content && (
            <div className="mx-auto max-w-5xl">
              <ToolInformation content={content} />

              <ToolFAQ faqs={content.faqs} />
            </div>
          )}

          <RelatedTools tool={tool} />
        </div>
      </section>
    </>
  );
}

export default ToolDetails;
