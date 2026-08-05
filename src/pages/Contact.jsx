import { useState } from "react";
import SEO from "../components/seo/SEO";
import { Link } from "react-router-dom";
import {
  FiAlertCircle,
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiHelpCircle,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiTool,
} from "react-icons/fi";
import InlineMessage from "../components/common/InlineMessage";
import LoadingOverlay from "../components/common/LoadingOverlay";

const INQUIRY_OPTIONS = [
  {
    value: "general",
    label: "General Question",
  },
  {
    value: "tool-suggestion",
    label: "Suggest a Tool",
  },
  {
    value: "bug-report",
    label: "Report a Problem",
  },
  {
    value: "business",
    label: "Business or Partnership Inquiry",
  },
  {
    value: "privacy",
    label: "Privacy or Data Question",
  },
  {
    value: "other",
    label: "Other",
  },
];

const contactReasons = [
  {
    icon: FiTool,
    title: "Suggest a Tool",
    description:
      "Tell us about a calculator, converter or digital utility that would be helpful to people in Jamaica or the Caribbean.",
  },
  {
    icon: FiAlertCircle,
    title: "Report a Problem",
    description:
      "Let us know when a tool is not loading, produces an unexpected result or is difficult to use.",
  },
  {
    icon: FiBriefcase,
    title: "Business Inquiries",
    description:
      "Contact us regarding partnerships, sponsorships, advertising or other professional opportunities.",
  },
  {
    icon: FiHelpCircle,
    title: "Ask a Question",
    description:
      "Send questions about JamaicaTools, our content, privacy practices or how a particular feature works.",
  },
];

const initialForm = {
  name: "",
  email: "",
  inquiry: "general",
  subject: "",
  message: "",
  botField: "",
};

function encodeFormData(formData) {
  return new URLSearchParams({
    "form-name": "jamaicatools-contact",
    name: formData.name,
    email: formData.email,
    inquiry: formData.inquiry,
    subject: formData.subject,
    message: formData.message,
    "bot-field": formData.botField,
  }).toString();
}

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [fieldErrors, setFieldErrors] = useState({});
  const [submissionError, setSubmissionError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;

    setFormData((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    setFieldErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));

    setSubmissionError("");
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Please enter a subject.";
    }

    if (formData.message.trim().length < 20) {
      errors.message =
        "Please provide at least 20 characters so we can understand your request.";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.botField) {
      setIsSubmitted(true);
      return;
    }

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setSubmissionError(
        "Please review the highlighted fields before submitting.",
      );
      return;
    }

    setFieldErrors({});
    setSubmissionError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodeFormData({
          ...formData,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("The form submission was not accepted.");
      }

      setFormData(initialForm);
      setIsSubmitted(true);
    } catch {
      setSubmissionError(
        "Your message could not be sent right now. Please try again shortly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const startAnotherMessage = () => {
    setFormData(initialForm);
    setFieldErrors({});
    setSubmissionError("");
    setIsSubmitted(false);
  };

  return (
    <>
      <SEO
        title="Contact JamaicaTools | Support and Tool Suggestions"
        description="Contact JamaicaTools to suggest a tool, report a problem, ask a question or discuss a business opportunity."
        canonical="/contact"
        keywords={[
          "contact JamaicaTools",
          "suggest a tool",
          "report a problem",
          "JamaicaTools support",
        ]}
      />

      <main>
        <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Contact JamaicaTools
            </p>

            <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Questions, suggestions and feedback are welcome
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Tell us how JamaicaTools can improve, report a problem or get in
              touch regarding a business opportunity.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                How we can help
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Send the right message to the right place
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Choose the inquiry type that best matches your reason for
                contacting us and provide as much relevant detail as possible.
              </p>

              <div className="mt-8 space-y-5">
                {contactReasons.map(
                  ({ icon: Icon, title, description }) => (
                    <article
                      key={title}
                      className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-lg text-green-700">
                        <Icon />
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-900">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {description}
                        </p>
                      </div>
                    </article>
                  ),
                )}
              </div>

              <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">
                <div className="flex items-start gap-3">
                  <FiClock className="mt-1 shrink-0 text-xl text-green-700" />

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Response expectations
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Messages are reviewed as soon as reasonably possible.
                      Complex technical reports or business inquiries may take
                      additional time to evaluate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
              {isSubmitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
                    <FiCheckCircle />
                  </div>

                  <h2 className="mt-6 text-3xl font-bold text-slate-900">
                    Your message was sent
                  </h2>

                  <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
                    Thank you for contacting JamaicaTools. Your message has
                    been received and will be reviewed.
                  </p>

                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={startAnotherMessage}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
                    >
                      Send Another Message
                      <FiMessageSquare />
                    </button>

                    <Link
                      to="/tools"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-green-700 hover:text-green-700"
                    >
                      Browse Tools
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-xl text-green-700">
                      <FiMail />
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        Send us a message
                      </h2>
                      <p className="mt-2 leading-7 text-slate-600">
                        Fields marked with an asterisk are required.
                      </p>
                    </div>
                  </div>

                  <form
                    name="jamaicatools-contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    noValidate
                    onSubmit={handleSubmit}
                    className="mt-8"
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="jamaicatools-contact"
                    />

                    <p className="absolute -left-[10000px] h-px w-px overflow-hidden">
                      <label>
                        Do not fill this out:
                        <input
                          name="botField"
                          value={formData.botField}
                          onChange={updateField}
                          tabIndex="-1"
                          autoComplete="off"
                        />
                      </label>
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="mb-2 block font-semibold text-slate-900"
                        >
                          Name *
                        </label>

                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={formData.name}
                          maxLength={100}
                          autoComplete="name"
                          onChange={updateField}
                          aria-invalid={Boolean(fieldErrors.name)}
                          aria-describedby={
                            fieldErrors.name
                              ? "contact-name-error"
                              : undefined
                          }
                          className={`h-13 w-full rounded-xl border px-4 outline-none transition focus:ring-2 ${
                            fieldErrors.name
                              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                              : "border-slate-300 focus:border-green-700 focus:ring-green-100"
                          }`}
                        />

                        {fieldErrors.name && (
                          <p
                            id="contact-name-error"
                            className="mt-2 text-sm font-medium text-red-700"
                          >
                            {fieldErrors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="mb-2 block font-semibold text-slate-900"
                        >
                          Email Address *
                        </label>

                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          value={formData.email}
                          maxLength={150}
                          autoComplete="email"
                          onChange={updateField}
                          aria-invalid={Boolean(fieldErrors.email)}
                          aria-describedby={
                            fieldErrors.email
                              ? "contact-email-error"
                              : undefined
                          }
                          className={`h-13 w-full rounded-xl border px-4 outline-none transition focus:ring-2 ${
                            fieldErrors.email
                              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                              : "border-slate-300 focus:border-green-700 focus:ring-green-100"
                          }`}
                        />

                        {fieldErrors.email && (
                          <p
                            id="contact-email-error"
                            className="mt-2 text-sm font-medium text-red-700"
                          >
                            {fieldErrors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-inquiry"
                          className="mb-2 block font-semibold text-slate-900"
                        >
                          Inquiry Type *
                        </label>

                        <select
                          id="contact-inquiry"
                          name="inquiry"
                          value={formData.inquiry}
                          onChange={updateField}
                          className="h-13 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                        >
                          {INQUIRY_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-subject"
                          className="mb-2 block font-semibold text-slate-900"
                        >
                          Subject *
                        </label>

                        <input
                          id="contact-subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          maxLength={150}
                          onChange={updateField}
                          aria-invalid={Boolean(fieldErrors.subject)}
                          aria-describedby={
                            fieldErrors.subject
                              ? "contact-subject-error"
                              : undefined
                          }
                          className={`h-13 w-full rounded-xl border px-4 outline-none transition focus:ring-2 ${
                            fieldErrors.subject
                              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                              : "border-slate-300 focus:border-green-700 focus:ring-green-100"
                          }`}
                        />

                        {fieldErrors.subject && (
                          <p
                            id="contact-subject-error"
                            className="mt-2 text-sm font-medium text-red-700"
                          >
                            {fieldErrors.subject}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-6">
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block font-semibold text-slate-900"
                      >
                        Message *
                      </label>

                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        maxLength={5000}
                        rows={8}
                        onChange={updateField}
                        aria-invalid={Boolean(fieldErrors.message)}
                        aria-describedby={
                          fieldErrors.message
                            ? "contact-message-error"
                            : "contact-message-help"
                        }
                        placeholder="Include relevant details, tool names, browser information or examples that may help us understand your request."
                        className={`w-full resize-y rounded-xl border px-4 py-4 leading-7 outline-none transition focus:ring-2 ${
                          fieldErrors.message
                            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                            : "border-slate-300 focus:border-green-700 focus:ring-green-100"
                        }`}
                      />

                      <div className="mt-2 flex flex-col gap-1 text-xs text-slate-500 sm:flex-row sm:justify-between">
                        <span id="contact-message-help">
                          Please do not include passwords or sensitive financial
                          information.
                        </span>
                        <span>{formData.message.length}/5000</span>
                      </div>

                      {fieldErrors.message && (
                        <p
                          id="contact-message-error"
                          className="mt-2 text-sm font-medium text-red-700"
                        >
                          {fieldErrors.message}
                        </p>
                      )}
                    </div>

                    {submissionError && (
                      <InlineMessage type="error">
                        {submissionError}
                      </InlineMessage>
                    )}

                    <LoadingOverlay
                      show={isSubmitting}
                      text="Sending your message securely..."
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-7 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <FiSend />
                    </button>

                    <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                      By submitting this form, you agree that JamaicaTools may
                      use the provided information to respond to your inquiry.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900">
              Looking for an answer before contacting us?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Browse the tool directory or check the upcoming FAQ page for
              answers to common questions about JamaicaTools.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/tools"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                Browse Tools
                <FiArrowRight />
              </Link>

              <Link
                to="/about"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-green-700 hover:text-green-700"
              >
                About JamaicaTools
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
