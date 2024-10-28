import LatestCollection from "../components/LatestCollection";
import Hero from "../components/Hero";
import BestSeller from "../components/BestSeller";
import OursPolicy from "../components/OursPolicy";
import NewsLetters from "../components/NewsLetters";

function Home() {
  return (
    <>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OursPolicy />
      <NewsLetters />
    </>
  );
}

export default Home;
