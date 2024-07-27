"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import logout from "@/assets/Button/Logout/logoutGif.gif";
import logo from "@/assets/Logo/image.svg";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [capUsername, setCapUsername] = useState("");
  const [currentPath, setCurrentPath] = useState("/");

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
    <div
      className="relative w-full h-24"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="relative w-full z-10 flex justify-between items-center h-full px-4">
        <div className="flex items-center">
          <Image
            src={logo}
            className="object-cover h-10 w-10"
            alt="Logo"
          />
        </div>
        <div className="flex-grow flex justify-center items-center space-x-4">
          {/* Centered Links */}
          <Link
            href="/"
            className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${
              currentPath === "/" ? "bg-gray-100" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/travel"
            className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${
              currentPath === "/travel" ? "bg-gray-100" : ""
            }`}
          >
            Destination
          </Link>
          <Link
            href="/about"
            className={`text-black p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${
              currentPath === "/about" ? "bg-gray-100" : ""
            }`}
          >
            About
          </Link>
        </div>
        {isLoggedIn && (
          <div className="flex items-center space-x-4">
            <span
              className="text-black font-bold"
              style={{ fontSize: "20px" }}
            >
              {capUsername}
            </span>
            <button
              onClick={handleLogout}
              className="hover:bg-gray-200 p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105"
              title="Logout"
              style={{ cursor: "pointer" }}
            >
              <Image src={logout} width={32} height={32} alt="Logout" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
