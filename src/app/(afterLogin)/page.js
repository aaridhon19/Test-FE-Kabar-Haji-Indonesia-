import AboutPage from "./about/page";
import FavoritePage from "./favorite/page";
import TravelPage from "./travel/page";
import Carousel from "@/components/Carousel/carousel";
import textHome from "@/assets/Text/titleDestination.svg";
import Image from "next/image";


export default function Home() {
  return (
    <div className="home-container min-h-screen flex flex-col">
      <Carousel />
      <div className="ml-5 mt-6">
        <Image className="h-24" src={textHome} alt="Explore the Beautiful World" />
      </div>
      <TravelPage />
      <div className="-mt-10 -mb-10">
        <FavoritePage />
      </div>
      <AboutPage />
    </div>
  );
}