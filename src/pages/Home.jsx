import Hero from "../components/home/Hero";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import FeaturedTools from "../components/home/FeaturedTools";
import LatestArticles from "../components/home/LatestArticles";

function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <Categories />
      <FeaturedTools />
      <LatestArticles />
    </>
  );
}

export default Home;