"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CardTravel() {
  const [travel, setTravel] = useState([]);

  const getTravel = async () => {
    try {
      const response = await axios.get("http://localhost:3500/travels");
      setTravel(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTravel();
  }, []);

  const handleCardClick = (id) => {
    // Handle card click
  };

  return (
    <div className="overflow-x-auto px-3 mb-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {travel.map((item) => (
          <div
            key={item.id}
            className="card w-full glass cursor-pointer"
            onClick={() => handleCardClick(item.id)}
          >
            <figure>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover"
              />
            </figure>
            <div className="card-body px-3 py-4">
              <h2
                className="card-title justify-center text-2xl font-bold"
                style={{ fontFamily: "cursive", fontSize: "24px" }}
              >
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
