"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/assets/Logo/image.svg";
import btnMessage from "@/assets/Button/Chat/icon.svg";
import btnCalender from "@/assets/Button/Calender/icon.svg";
import btnNotification from "@/assets/Button/Notification/icon.svg";
import btnProfile from "@/assets/Button/Profile/icon.svg";
import menuIcon from "@/assets/Button/Menu/menu.svg";
import ButtonLogout from "../Button/buttonLogout";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [capUsername, setCapUsername] = useState("");
  const [currentPath, setCurrentPath] = useState("/");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Fungsi untuk memeriksa status login dari localStorage
  const checkLoginStatus = () => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
      const username = localStorage.getItem("username");
      setCapUsername(username.charAt(0).toUpperCase() + username.slice(1));
      setCurrentPath(window.location.pathname);
    } else {
      window.location.href = "/login";
    }
  };

  // Memanggil checkLoginStatus saat component dimuat
  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <div
      className="relative w-full h-24 shadow-lg"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="relative w-full z-10 flex justify-between items-center h-full px-4">
        <div className="flex items-center">
          <Image
            src={logo}
            className="object-cover h-10 w-10 ml-4"
            alt="Logo"
          />
        </div>
        <div className="hidden md:flex flex-grow justify-center items-center space-x-4 ml-52">
          <Link
            href="/"
            className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${
              currentPath === "/" ? "text-blue-200" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/travel"
            className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${
              currentPath === "/travel" ? "text-blue-200" : ""
            }`}
          >
            Destination
          </Link>
          <Link
            href="/favorite"
            className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${
              currentPath === "/favorite" ? "text-blue-200" : ""
            }`}
          >
            Favorite
          </Link>
          <Link
            href="/about"
            className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${
              currentPath === "/about" ? "text-blue-200" : ""
            }`}
          >
            About
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-4 mr-4">
          <Link href="/message">
            <div className="bg-gray-100 p-3 rounded-xl hover:bg-gray-200 transition duration-300">
              <Image
                src={btnMessage}
                className="object-cover h-6 w-6"
                alt="Message"
              />
            </div>
          </Link>
          <Link href="/calendar">
            <div className="bg-gray-100 p-3 rounded-xl hover:bg-gray-200 transition duration-300">
              <Image
                src={btnCalender}
                className="object-cover h-6 w-6"
                alt="Calendar"
              />
            </div>
          </Link>
          <Link href="/notification">
            <div className="bg-gray-100 p-3 rounded-xl hover:bg-gray-200 transition duration-300">
              <Image
                src={btnNotification}
                className="object-cover h-6 w-6"
                alt="Notification"
              />
            </div>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setShowMenu(!showMenu)} className="p-2">
            <Image src={menuIcon} className="object-cover h-8 w-8" alt="Menu" />
          </button>
        </div>
        {isLoggedIn && (
          <div className="relative hidden md:flex mr-4">
            <div
              className="flex items-center space-x-4 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <Image
                src={btnProfile}
                className="h-8 w-8 -mr-2 rounded-full object-cover transition-transform duration-300 transform hover:scale-110"
                alt="Profile"
              />
              <span
                className="text-black font-bold"
                style={{ fontSize: "16px", fontFamily: "sans-serif" }}
              >
                {capUsername}
              </span>
            </div>
            {showDropdown && (
              <div className="absolute right-0 mt-12 w-48 bg-white rounded-lg overflow-hidden z-20 border ">
                <Link href="/profile">
                  <div className="hover:bg-gray-200 p-4 cursor-pointer text-black">
                    Profile
                  </div>
                </Link>
                <ButtonLogout setIsLoggedIn={setIsLoggedIn} />
              </div>
            )}
          </div>
        )}
      </div>
      {showMenu && (
        <div className="md:hidden">
          <div className="flex flex-col items-end space-y-4 mr-4 mt-4">
            <Link
              href="/"
              className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${
                currentPath === "/" ? "text-blue-200" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/travel"
              className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${
                currentPath === "/travel" ? "text-blue-200" : ""
              }`}
            >
              Destination
            </Link>
            <Link
              href="/favorite"
              className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${
                currentPath === "/favorite" ? "text-blue-200" : ""
              }`}
            >
              Favorite
            </Link>
            <Link
              href="/about"
              className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${
                currentPath === "/about" ? "text-blue-200" : ""
              }`}
            >
              About
            </Link>
            <Link href="/message">
            <div className="bg-gray-100 p-3 rounded-xl hover:bg-gray-200 transition duration-300">
                <Image
                  src={btnMessage}
                  className="object-cover h-6 w-6"
                  alt="Message"
                />
              </div>
            </Link>
            <Link href="/calendar">
            <div className="bg-gray-100 p-3 rounded-xl hover:bg-gray-200 transition duration-300">
                <Image
                  src={btnCalender}
                  className="object-cover h-6 w-6"
                  alt="Calendar"
                />
              </div>
            </Link>
            <Link href="/notification">
            <div className="bg-gray-100 p-3 rounded-xl hover:bg-gray-200 transition duration-300">
                <Image
                  src={btnNotification}
                  className="object-cover h-6 w-6"
                  alt="Notification"
                />
              </div>
            </Link>
            {isLoggedIn && (
              <div className="relative">
                <div
                  className="flex items-center space-x-4 cursor-pointer mt-2"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <Image
                    src={btnProfile}
                    className="h-8 w-8 -mr-2 rounded-full object-cover transition-transform duration-300 transform hover:scale-110"
                    alt="Profile"
                  />
                  <span
                    className="text-black font-bold"
                    style={{ fontSize: "16px", fontFamily: "sans-serif" }}
                  >
                    {capUsername}
                  </span>
                </div>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg overflow-hidden z-20">
                    <Link href="/profile">
                      <div className="hover:bg-gray-200 p-4 cursor-pointer text-black">
                        Profile
                      </div>
                    </Link>
                    <ButtonLogout setIsLoggedIn={setIsLoggedIn} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
