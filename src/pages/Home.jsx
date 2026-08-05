import Hero from "../components/home/Hero";
import SEO from "../components/seo/SEO";
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