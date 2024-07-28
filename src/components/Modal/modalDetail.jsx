"use client"
import btnBack from "@/assets/Button/Back/icon.svg";
import btnBookmark from "@/assets/Button/Bookmark/icon.svg";
import rate from "@/assets/Button/Rating/Star.svg";
import location from "@/assets/Button/Location/icon.svg";
import Image from "next/image";
import { useState } from "react";

export default function ModalDetail({ travel, onClose }) {
  if (!travel) return null;

  const [showDesc, setShowDesc] = useState(false);
  const shortLocation = travel.location.split(",")[0];
  const maxDesc = 100;

  const handleShowDesc = () => {
    setShowDesc(!showDesc);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg max-w-lg w-full bg-opacity-95">
        <div className="absoulte top-2 left-2 flex justify-between space-x-2 mx-4 mt-8">
          <div
            onClick={onClose}
            className="bg-gray-400 p-2 rounded-full hover:bg-gray-300 transition duration-300 cursor-pointer z-10"
          >
            <Image src={btnBack} className="object-cover h-7 w-7" alt="Back" />
          </div>
          <div className="bg-gray-400 p-2 rounded-full hover:bg-gray-300 transition duration-300 cursor-pointer z-10">
            <Image
              src={btnBookmark}
              className="object-cover h-7 w-7"
              alt="Back"
            />
          </div>
        </div>
        <img
          src={travel.image}
          alt={travel.name}
          width={600}
          height={400}
          className="w-full mb-4 -mt-16 rounded-lg"
        />
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B1E28" }}>
          {travel.name}
        </h2>
        <p className="mb-4 text-black" style={{ color: "#7D848D" }}>
          {travel.location}
        </p>
        <div className="flex justify-between mr-2">
          <div className="flex justify-between">
            <Image src={location} className="h-6 w-5 mr-1.5" />
            <p className="mb-4 text-black" style={{ color: "#7D848D" }}>
              {shortLocation}
            </p>
          </div>
          <div className="flex justify-between">
            <Image src={rate} className="h-6 w-5 mr-1.5" />
            <p className="mb-4 text-black">{travel.rate}</p>
          </div>
          <div className="flex justify-between">
            <p className="mb-4 text-blue-400">${travel.price}/</p>
            <p className="mb-4 text-black" style={{ color: "#7D848D" }}>
              Person
            </p>
          </div>
        </div>
        <h2
          className="text-xl mt-2 mb-2 font-medium"
          style={{ color: "#1B1E28" }}
        >
          About Destination
        </h2>
        <p className="mb-4" style={{ color: "#7D848D" }}>
          {showDesc
            ? travel.description
            : `${travel.description.slice(0, maxDesc)}...`}
          {travel.description.length > maxDesc && (
            <span
              onClick={handleShowDesc}
              style={{ color:"#FF7029"}}
              className="cursor-pointer ml-2"
            >
              {showDesc ? "" : "Read more"}
            </span>
          )}
        </p>
        <div className="mt-5">
          <button
            type="submit"
            className="w-full p-4 rounded-lg font-medium"
            style={{
              backgroundColor: "#24BAEC",
              marginBottom: 5,
              fontSize: "20px",
              fontStyle: "Semibold",
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
