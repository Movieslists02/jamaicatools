import Hero from "../components/home/Hero";
import SEO from "../components/seo/SEO";
import StructuredData from "../components/seo/StructuredData";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import FeaturedTools from "../components/home/FeaturedTools";
import LatestArticles from "../components/home/LatestArticles";
import CTA from "../components/home/CTA";

function Home() {
  return (
    <>
      <SEO
        title="Free Online Tools for Jamaica and the Caribbean"
        description="Use free calculators, PDF tools, image utilities, AI resources and practical guides created for Jamaica and the Caribbean."
        canonical="/"
        keywords={[
          "Jamaica online tools",
          "Caribbean calculators",
          "PDF tools",
          "image tools",
          "AI tools",
          "free online tools",
        ]}
      />
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "JamaicaTools",
            url: "https://jamaicatools.com/",
            logo: "https://jamaicatools.com/favicon.svg",
            description:
              "Free online calculators, PDF tools, image utilities, AI resources and practical guides for Jamaica and the Caribbean.",
            founder: {
              "@type": "Organization",
              name: "Betterworks Communication",
              url: "https://bc-da.com",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "JamaicaTools",
            alternateName: "Jamaica Tools",
            url: "https://jamaicatools.com/",
            description:
              "Free online calculators, PDF tools, image utilities, AI resources and practical guides for Jamaica and the Caribbean.",
            publisher: {
              "@type": "Organization",
              name: "JamaicaTools",
            },
          },
        ]}
      />
      <Hero />
      <SearchBar />
      <Categories />
      <FeaturedTools />
      <LatestArticles />
      <CTA />
    </>
  );
}

export default Home;