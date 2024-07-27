"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import logout from "@/assets/Button/Logout/logoutGif.gif";
import logo from "@/assets/Logo/image.svg";
import btnMessage from "@/assets/Button/Chat/icon.svg";
import btnCalender from "@/assets/Button/Calender/icon.svg";
import btnNotification from "@/assets/Button/Notification/icon.svg";
import btnProfile from "@/assets/Button/Profile/icon.svg";
import menuIcon from "@/assets/Button/Menu/menu.svg"

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

  // Function to handle logout
  const handleLogout = () => {
    // Clear login status and redirect to login page
    Swal.fire({
      title: "Are You Sure?",
      text: "Logout!!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      // Jika user menekan tombol Yes
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logout!",
          text: "Success Logout.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Hapus data login dari localStorage
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("username");
          localStorage.removeItem("access_token");
          setIsLoggedIn(false);
          window.location.href = "/login";
        });
      }
    });
  };

  return (
    <div className="relative w-full h-24 shadow-lg" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="relative w-full z-10 flex justify-between items-center h-full px-4">
        <div className="flex items-center">
          <Image src={logo} className="object-cover h-10 w-10 ml-4" alt="Logo" />
        </div>
        <div className="hidden md:flex flex-grow justify-center items-center space-x-4">
          <Link href="/" className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${currentPath === "/" ? "text-blue-200" : ""}`}>
            Home
          </Link>
          <Link href="/travel" className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${currentPath === "/travel" ? "text-blue-200" : ""}`}>
            Destination
          </Link>
          <Link href="/favorite" className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${currentPath === "/favorite" ? "text-blue-200" : ""}`}>
            Favorite
          </Link>
          <Link href="/about" className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${currentPath === "/about" ? "text-blue-200" : ""}`}>
            About
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4 mr-4">
          <div className="bg-gray-100 p-3 rounded-xl">
            <Image src={btnMessage} className="object-cover h-6 w-6" alt="Message" />
          </div>
          <div className="bg-gray-100 p-3 rounded-xl">
            <Image src={btnCalender} className="object-cover h-6 w-6" alt="Calendar" />
          </div>
          <div className="bg-gray-100 p-3 rounded-xl">
            <Image src={btnNotification} className="object-cover h-6 w-6" alt="Notification" />
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setShowMenu(!showMenu)} className="p-2">
            <Image src={menuIcon} className="object-cover h-8 w-8" alt="Menu" />
          </button>
        </div>
        {isLoggedIn && (
          <div className="relative hidden md:flex">
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
              <Image src={btnProfile} className="h-8 w-8 rounded-full object-cover" alt="Profile" />
              <span className="text-black font-bold" style={{ fontSize: "16px", fontFamily: "sans-serif" }}>
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
                <div className="hover:bg-gray-200 p-4 cursor-pointer text-red-500" onClick={handleLogout}>
                  Logout
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {showMenu && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/" className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${currentPath === "/" ? "text-blue-200" : ""}`}>
              Home
            </Link>
            <Link href="/travel" className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${currentPath === "/travel" ? "text-blue-200" : ""}`}>
              Destination
            </Link>
            <Link href="/favorite" className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${currentPath === "/favorite" ? "text-blue-200" : ""}`}>
              Favorite
            </Link>
            <Link href="/about" className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${currentPath === "/about" ? "text-blue-200" : ""}`}>
              About
            </Link>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 p-3 rounded-xl">
                <Image src={btnMessage} className="object-cover h-6 w-6" alt="Message" />
              </div>
              <div className="bg-gray-100 p-3 rounded-xl">
                <Image src={btnCalender} className="object-cover h-6 w-6" alt="Calendar" />
              </div>
              <div className="bg-gray-100 p-3 rounded-xl">
                <Image src={btnNotification} className="object-cover h-6 w-6" alt="Notification" />
              </div>
              {isLoggedIn && (
                <div className="relative">
                  <div className="flex items-center space-x-4 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
                    <Image src={btnProfile} className="h-8 w-8 rounded-full object-cover" alt="Profile" />
                    <span className="text-black font-bold" style={{ fontSize: "16px", fontFamily: "sans-serif" }}>
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
                      <div className="hover:bg-gray-200 p-4 cursor-pointer text-red-500" onClick={handleLogout}>
                        Logout
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}