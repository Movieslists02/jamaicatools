import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiFileText,
  FiGlobe,
  FiHeart,
  FiImage,
  FiLock,
  FiMessageCircle,
  FiMonitor,
  FiShield,
  FiTool,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const values = [
  {
    icon: FiUsers,
    title: "Built for Everyday People",
    description:
      "JamaicaTools is designed for students, workers, business owners, creators and families who need practical online tools without unnecessary complexity.",
  },
  {
    icon: FiGlobe,
    title: "Focused on Jamaica and the Caribbean",
    description:
      "Many global platforms overlook Caribbean needs. We are building tools and resources that are useful, relevant and easy to understand in our region.",
  },
  {
    icon: FiZap,
    title: "Fast and Simple",
    description:
      "Our tools are designed to work quickly on phones, tablets and computers, with clear instructions and straightforward results.",
  },
  {
    icon: FiHeart,
    title: "Useful Before Everything Else",
    description:
      "We prioritize practical value over unnecessary features. Each tool should solve a real problem and help users complete a task with confidence.",
  },
];

const categories = [
  {
    icon: FiTrendingUp,
    title: "Finance Tools",
    description:
      "Salary, tax, loan, NIS, currency and other financial calculators designed for practical everyday decisions.",
    query: "finance",
  },
  {
    icon: FiFileText,
    title: "PDF Tools",
    description:
      "Merge, split, compress, convert, organize and manage PDF documents directly from your browser.",
    query: "pdf",
  },
  {
    icon: FiImage,
    title: "Image Tools",
    description:
      "Resize, crop, compress, convert, rotate and prepare images for websites, documents and social media.",
    query: "image",
  },
  {
    icon: FiMonitor,
    title: "AI Tools",
    description:
      "Generate, rewrite, summarize and improve content with responsible AI-powered tools.",
    query: "ai",
  },
];

const commitments = [
  "Clear and easy-to-use interfaces",
  "Mobile-friendly tools for users on the go",
  "Honest descriptions of what each tool can do",
  "Continuous improvements based on real user needs",
  "Responsible handling of uploaded files and user information",
  "No claim that automated results replace professional advice",
];

const roadmap = [
  {
    title: "Expand the Tool Library",
    description:
      "Add more finance, business, document, image, educational and productivity tools.",
  },
  {
    title: "Publish Helpful Guides",
    description:
      "Create practical articles that explain how to use online tools and make better everyday decisions.",
  },
  {
    title: "Improve Caribbean Relevance",
    description:
      "Develop more tools that reflect Jamaican and Caribbean systems, terminology and common needs.",
  },
  {
    title: "Make JamaicaTools More Personal",
    description:
      "Explore useful features such as recently used tools, favourites and saved results while respecting user privacy.",
  },
];

function About() {
  return (
    <>
      <Helmet>
        <title>About JamaicaTools | Free Tools for the Caribbean</title>
        <meta
          name="description"
          content="Learn why JamaicaTools was created and how we are building useful calculators, PDF tools, image utilities and AI resources for Jamaica and the Caribbean."
        />
        <link rel="canonical" href="https://jamaicatools.com/about" />
      </Helmet>

      <main>
        <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                About JamaicaTools
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Practical online tools built for Jamaica and the Caribbean
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                JamaicaTools is a growing platform of free calculators,
                document utilities, image tools, AI resources and practical
                guides created to help people complete everyday tasks more
                easily.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/tools"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-800"
                >
                  Browse All Tools
                  <FiArrowRight />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-green-700 hover:text-green-700"
                >
                  Suggest a Tool
                  <FiMessageCircle />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-green-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
                🇯🇲
              </div>

              <h2 className="mt-6 text-2xl font-bold text-slate-900">
                Our purpose
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Useful online services should not feel confusing, inaccessible
                or disconnected from the people using them. JamaicaTools exists
                to make practical digital tools easier to find and easier to
                use.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Free access to useful online tools",
                  "Clear explanations and straightforward results",
                  "A platform that grows with Caribbean needs",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-green-700" />
                    <p className="font-medium text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                Why we exist
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Technology should make everyday life easier
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                People regularly need help calculating payments, preparing
                documents, converting files, improving images or creating
                content. JamaicaTools brings these tasks together in one
                organized and accessible platform.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {values.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:border-green-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-xl text-green-700">
                    <Icon />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                  What you can find
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                  One platform for many everyday tasks
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The JamaicaTools library is organized into practical
                  categories so users can quickly find what they need.
                </p>
              </div>

              <Link
                to="/tools"
                className="inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800"
              >
                Explore the complete directory
                <FiArrowRight />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map(
                ({ icon: Icon, title, description, query }) => (
                  <Link
                    key={title}
                    to={`/tools?q=${encodeURIComponent(query)}`}
                    className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-green-300 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-xl text-green-700">
                      <Icon />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-green-700">
                      {title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 font-semibold text-green-700">
                      View tools
                      <FiArrowRight />
                    </span>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                Trust and responsibility
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Designed with clarity, privacy and honesty in mind
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We want users to understand what a tool does, what information
                it uses and where human review may still be necessary.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5">
                  <FiLock className="text-2xl text-green-700" />
                  <h3 className="mt-4 font-bold text-slate-900">
                    Privacy awareness
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    We aim to minimize unnecessary collection and clearly
                    explain how information is handled.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <FiShield className="text-2xl text-green-700" />
                  <h3 className="mt-4 font-bold text-slate-900">
                    Responsible results
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Calculations and AI-generated content should be reviewed
                    before important financial, legal or business decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
              <h3 className="text-2xl font-bold text-slate-900">
                Our commitments
              </h3>

              <div className="mt-6 space-y-4">
                {commitments.map((commitment) => (
                  <div key={commitment} className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-green-700" />
                    <p className="leading-7 text-slate-700">{commitment}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6">
                <Link
                  to="/privacy"
                  className="font-semibold text-green-700 hover:text-green-800"
                >
                  Read our Privacy Policy
                </Link>

                <Link
                  to="/terms"
                  className="font-semibold text-green-700 hover:text-green-800"
                >
                  Read our Terms
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                What comes next
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                JamaicaTools is still growing
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The platform will continue to improve as more tools, guides and
                regionally relevant features are developed.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {roadmap.map((item, index) => (
                <article
                  key={item.title}
                  className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-7"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-700 font-bold text-white">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-green-800 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <FiTool className="mx-auto text-4xl text-green-200" />

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Help us build better tools
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-green-50">
              Have an idea for a calculator, converter, business utility or
              Caribbean-focused resource? Your suggestions can help shape what
              JamaicaTools builds next.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-green-800 transition hover:bg-green-50"
              >
                Send a Suggestion
                <FiMessageCircle />
              </Link>

              <Link
                to="/tools"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-green-300 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Browse JamaicaTools
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
