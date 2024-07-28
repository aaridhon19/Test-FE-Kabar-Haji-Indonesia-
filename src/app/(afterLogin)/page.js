import AboutPage from "./about/page";
import FavoritePage from "./favorite/page";
import TravelPage from "./travel/page";


export default function Home() {
  return (
    <div className="home-container min-h-screen flex flex-col">
      <TravelPage />
      <FavoritePage />
      <AboutPage />
    </div>
  );
}