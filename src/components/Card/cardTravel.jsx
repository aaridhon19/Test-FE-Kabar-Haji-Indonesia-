"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import rate from "@/assets/Button/Rating/Star.svg";
import location from "@/assets/Button/Location/icon.svg";
import DetailTravelPage from "@/app/(afterLogin)/travel/[id]/page";

export default function CardTravel() {
  const [travel, setTravel] = useState([]);
  const [selectedTravel, setSelectedTravel] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const showMax = 3;

  const getTravel = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3500/travels`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      setTravel(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTravel();
  }, []);

  const handleCardClick = (item) => {
    setSelectedTravel(item)
  };

  const handleCloseCardClick = () => {
    setSelectedTravel(null);
  }

  const showAllBtn = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="overflow-x-auto px-3 mb-14 mx-4 py-2">
      <div className="flex justify-between mb-2">
        <h1 className="text-2xl font-medium text-start text-black">
          Best Destination
        </h1>
        <button
          onClick={showAllBtn}
          className="text-orange-500 hover:underline"
        >
          {showAll ? "View Less" : "View All"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {(showAll ? travel : travel.slice(0, showMax)).map((item) => (
          <div key={item.id} className="p-7 shadow-inner rounded-lg mb-2 hover:bg-gray-100 transition duration-300 cursor-pointer">
            <div
              className="card w-full cursor-pointer"
              onClick={() => handleCardClick(item)}
            >
              <figure className="overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </figure>
              <div className="card-body px-1 py-4 -mb-4 mt-2">
                <div className="flex justify-between">
                  <h2
                    className="justify-start text-xl"
                    style={{ fontSize: "24px", color: "#1B1E28" }}
                  >
                    {item.name}
                  </h2>
                  <div className="flex justify-between">
                    <Image src={rate} className="h-6 w-5 mr-1.5" />
                    <h1 className="text-black text-xl">{item.rate}</h1>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-between">
                    <Image src={location} className="h-6 w-5 mr-1.5" />
                    <h2
                      className="card-title"
                      style={{
                        fontFamily: "fantasy",
                        fontSize: "18px",
                        color: "#7D848D",
                      }}
                    >
                      {item.location}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedTravel && (
        <DetailTravelPage
          travel={selectedTravel}
          onClose={handleCloseCardClick}
        />
      )}
    </div>
  );
}
