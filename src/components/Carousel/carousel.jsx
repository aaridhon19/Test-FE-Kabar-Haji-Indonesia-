import slide1 from "@/assets/Carousel/slide1.svg";
import slide2 from "@/assets/Carousel/slide2.svg";
import slide3 from "@/assets/Carousel/slide3.svg";
import text1 from "@/assets/Carousel/slideText1.svg";
import text2 from "@/assets/Carousel/slideText2.svg";
import text3 from "@/assets/Carousel/slideText3.svg";
import Image from "next/image";

export default function Carousel() {
  return (
    <section className="py-8 bg-gray-100">
      <div className="carousel w-full mx-6 h-60">
        <div style={{backgroundImage: `url(${slide1.src})`}} className="w-full carousel-item flex border-r border-b border-gray-300 p-4 rounded-lg justify-between items-center mr-6 shadow-lg h-1/2-screen bg-cover bg-center relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <Image src={text1} alt="Text 1" />
          </div>
        </div>

        <div style={{backgroundImage: `url(${slide2.src})`}} className="w-full carousel-item flex border-r border-b border-gray-300 p-4 rounded-lg justify-between items-center mr-6 shadow-lg h-1/2-screen bg-cover bg-center relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <Image src={text2} alt="Text 1" />
          </div>
        </div>

        <div style={{backgroundImage: `url(${slide3.src})`}} className="w-full carousel-item flex border-r border-b border-gray-300 p-4 rounded-lg justify-between items-center mr-6 shadow-lg h-1/2-screen bg-cover bg-center relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <Image src={text3} alt="Text 1" />
          </div>
        </div>
      </div>
    </section>
  );
}
