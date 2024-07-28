import AboutPage from "./about/page";
import FavoritePage from "./favorite/page";
import TravelPage from "./travel/page";
import Carousel from "@/components/Carousel/carousel";


export default function Home() {
  return (
    <div className="home-container min-h-screen flex flex-col">
      <Carousel />
      <TravelPage />
      <FavoritePage />
      <AboutPage />
    </div>
  );
}