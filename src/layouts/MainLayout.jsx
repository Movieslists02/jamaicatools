import { Outlet } from "react-router-dom";
import CookieConsent from "../components/layout/CookieConsent";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ScrollToTop from "../components/layout/ScrollToTop";

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <ScrollToTop />

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}

export default MainLayout;
