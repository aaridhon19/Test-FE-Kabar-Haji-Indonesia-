"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import location from "@/assets/Button/Location/icon.svg";
import favorite from "@/assets/Button/Favorite/icon.svg";
import ModalDetailFav from "../Modal/modalDetailFav";
import Loading from "../Loading/loading";

export default function CardFavorite() {
  const [fav, setFav] = useState([]);
  const [selectedFav, setSelectedFav] = useState(null);
  const [loading, setLoading] = useState(false);

  const getFav = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3500/travels/favorites?minRate=4.7`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      setFav(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFav();
  }, []);

  const handleCardFavClick = (item) => {
    setSelectedFav(item);
  };

  const handleCloseCardFavClick = () => {
    setSelectedFav(null);
  };

  const handleFavClick = (e, item) => {
    e.stopPropagation();
    console.log("Fav clicked", item);
  };

  return (
    <div className="overflow-x-auto px-3 mb-14 mx-4 py-2">
      <div className="flex justify-between mb-2">
        <h1 className="text-2xl font-medium text-start text-black">
          Favorite Place
        </h1>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {fav.map((item) => (
            <div
              key={item.id}
              className="p-7 shadow-inner rounded-lg mb-2 hover:bg-gray-100 transition duration-300 cursor-pointer"
            >
              <div className="flex justify-center items-center">
                <div
                  className="card w-80 shadow-lg cursor-pointer"
                  onClick={() => handleCardFavClick(item)}
                >
                  <figure className="overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-80 h-50 object-cover rounded-xl"
                    />
                    <Image
                      src={favorite}
                      className="absolute h-10 w-10 top-6 right-5 bg-gray-300 bg-opacity-60 p-2 rounded-full hover:bg-gray-400 transition duration-300 cursor-pointer"
                      onClick={(e) => handleFavClick(e, item)}
                    />
                  </figure>
                  <div className="card-body px-1 py-4">
                    <div className="flex justify-center">
                      <h2
                        className="justify-center text-xl font-medium"
                        style={{ fontSize: "20px", color: "#1B1E28" }}
                      >
                        {item.name}
                      </h2>
                    </div>
                    <div className="flex justify-center">
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
      )}
      {selectedFav && (
        <ModalDetailFav
          fav={selectedFav}
          onCloseFav={handleCloseCardFavClick}
        />
      )}
    </div>
  );
}
