import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const Tools = lazy(() => import("../pages/Tools"));
const ToolDetails = lazy(() => import("../pages/ToolDetails"));
const Blog = lazy(() => import("../pages/Blog"));
const BlogPost = lazy(() => import("../pages/BlogPost"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const FAQ = lazy(() => import("../pages/FAQ"));
const Privacy = lazy(() => import("../pages/Privacy"));
const Terms = lazy(() => import("../pages/Terms"));
const CookiePolicy = lazy(() => import("../pages/CookiePolicy"));
const Disclaimer = lazy(() => import("../pages/Disclaimer"));
const Accessibility = lazy(() => import("../pages/Accessibility"));
const AIUsagePolicy = lazy(() => import("../pages/AIUsagePolicy"));
const NotFound = lazy(() => import("../pages/NotFound"));

function PageLoader() {
  return (
    <div
      className="flex min-h-[55vh] items-center justify-center bg-slate-50 px-4"
      role="status"
      aria-live="polite"
    >
      <div className="text-center">
        <div
          aria-hidden="true"
          className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-green-200 border-t-green-700"
        />

        <p className="mt-4 font-semibold text-slate-700">
          Loading JamaicaTools...
        </p>
      </div>
    </div>
  );
}

function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/:slug" element={<ToolDetails />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/ai-policy" element={<AIUsagePolicy />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
