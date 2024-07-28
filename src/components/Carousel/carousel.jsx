import slide1 from "@/assets/Carousel/slide1.svg";
import slide2 from "@/assets/Carousel/slide2.svg";
import slide3 from "@/assets/Carousel/slide3.svg";
import text1 from "@/assets/Carousel/slideText1.svg";
import text2 from "@/assets/Carousel/slideText2.svg";
import text3 from "@/assets/Carousel/slideText3.svg";
import Image from "next/image";

export default function Carousel() {
  return (
    <section className="py-8">
      <div className="carousel rounded-box mx-4">
        <div className="carousel-item flex border-r border-b border-gray-300 p-4 rounded-lg justify-between items-center mr-6 shadow-lg">
          <Image className="h-60 w-60" src={slide1} alt="Slide 1" />
          <div className="ml-4 flex justify-center">
            <Image src={text1} alt="Text 1" />
          </div>
        </div>

        <div className="carousel-item flex border-l border-r border-b border-gray-300 p-4 rounded-lg justify-between items-center mr-6 shadow-lg">
          <Image className="h-60 w-60" src={slide2} alt="Slide 2" />
          <div className="ml-4 flex justify-center">
            <Image src={text2} alt="Text 2" />
          </div>
        </div>

        <div className="carousel-item flex border-l border-b border-gray-300 p-4 rounded-lg justify-between items-center shadow-lg">
          <Image className="h-60 w-60" src={slide3} alt="Slide 3" />
          <div className="ml-4 flex justify-center">
            <Image src={text3} alt="Text 3" />
          </div>
        </div>
      </div>
    </section>
  );
}
