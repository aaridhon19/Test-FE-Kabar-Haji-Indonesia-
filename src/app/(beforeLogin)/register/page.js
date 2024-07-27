"use client"
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import loginImage from "@/assets/Login/image.svg";
import btnFb from "@/assets/Button/LoginBtn/Facebook.svg";
import btnTwitter from "@/assets/Button/LoginBtn/Twitter.svg";
import btnIg from "@/assets/Button/LoginBtn/Instagram.svg";
import btnPw from "@/assets/Button/Eye/Icon.svg";

export default function RegisterPage() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    useEffect(() => {
        // Mengecek status register dari localStorage
        const loggedInStatus = localStorage.getItem("isLoggedIn");
        if (loggedInStatus === "true") {
            setIsLoggedIn(true);
            // Mengarahkan ke halaman users
            window.location.href = "/";
        }
    }, []);

    // Fungsi untuk register
    const register = async (e) => {
        e.preventDefault();
        try {
            // console.log(username, email, password);
            const response = await axios.post("http://localhost:3500/register", {
                username,
                email,
                password,
            });
            console.log(response);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Register Success",
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                setIsLoggedIn(true);
                window.location.href = "/login";
            });
        } catch (error) {
            console.log(error.response.data);
            Swal.fire({
                position: "center",
                icon: "error",
                title: `${error.response.data.msg}`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    if (isLoggedIn) {
        // Jika sudah login, tidak perlu menampilkan halaman login
        return null;
    }

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    }

    return (
        <div className="h-screen w-full fixed lg:flex grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bg-white">
            <div className="h-full w-1/2 hidden lg:flex flex-col items-center justify-between relative z-10" style={{ backgroundColor: "#24BAEC" }}>
                <div className="flex-grow flex items-center justify-center">
                    <Image
                        src={loginImage}
                        className="object-cover"
                        alt="Login Image"
                    />
                </div>
                <div className="text-center pb-4 mb-10" style={{ color: "#FFFFFF", fontSize: "2rem", fontWeight: "bold" }}>
                    Travenor
                </div>
            </div>


            <div className="h-screen fixed w-full flex flex-col lg:w-1/2 lg:flex lg:justify-center lg:text-white lg:right-0">
                <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
                    <div className="mx-auto" style={{ color: "#1B1E28", fontSize: 32, fontStyle: "bold", fontFamily: "SF UI Display", marginBottom: "10px" }}>
                        <h1>Sign up now</h1>
                    </div>
                    <div className="mx-auto" style={{ color: "#7D848D", fontSize: 16, fontFamily: "Nunito Sans", fontStyle: "normal", marginBottom: 20 }}>
                        <h1>Please fill the details and create account</h1>
                    </div>
                    <div className="mt-6">
                        <form id="register-form" onSubmit={register}>
                            <div>
                                <label className="mb-2 block font-bold" htmlFor="email" style={{ color: "#707B81", fontSize: 14, fontFamily: "Nunito Sans", fontStyle: "Semibold" }}>
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="inline-block w-full rounded-lg bg-white p-3.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30 border border-solid border-#DED2D9"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    style={{ fontSize: 14 }}
                                />
                            </div>
                            <div>
                                <label className="mt-4 mb-2 block font-bold" htmlFor="email" style={{ color: "#707B81", fontSize: 14, fontFamily: "Nunito Sans", fontStyle: "Semibold", marginTop:30 }}>
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="inline-block w-full rounded-lg bg-white p-3.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30 border border-solid border-#DED2D9"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{ fontSize: 14 }}
                                />
                            </div>
                            <div className="mt-4" style={{ marginTop: 30 }}>
                                <label className="mb-2 block font-bold" htmlFor="password" style={{ color: "#707B81", fontSize: 14, fontFamily: "Nunito Sans", fontStyle: "Semibold" }}>
                                    Password
                                </label>
                                <div className="relative w-full">
                                    <input
                                        type={isPasswordVisible ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="inline-block w-full rounded-lg bg-white p-3.5 pr-10 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30 border border-solid border-gray-300"
                                        placeholder="********"
                                        style={{ fontSize: 14, marginBottom: 20 }}
                                    />
                                    <div className="absolute right-4 top-1/3 transform -translate-y-1/2" onClick={togglePasswordVisibility}>
                                        <Image
                                            src={btnPw}
                                            alt="Password Icon"
                                            className="h-6 w-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <button type='submit' className="w-full p-4 rounded-lg" style={{ backgroundColor: "#24BAEC", marginBottom: 25, fontSize: "16px", fontStyle: "Semibold" }}>
                                    Sign Up
                                </button>
                            </div>
                        </form>

                        <div className="mt-2 flex w-full justify-center sm:flex-row mb-5">
                            {/* Register*/}
                            <div className="text-center pb-2 text-sm" style={{ color: "#707B81" }}>
                                Don’t have an account?{" "}
                                <a className="text-body"
                                    href="/login">
                                    <button
                                        className="tracking-wide font-bold inline-flex flex-grow-0 flex-shrink-0 justify-center items-center focus:outline-none focus:ring-1 active:ring-0 focus:ring-offset-0 disabled:bg-stroke disabled:text-gray disabled:cursor-not-allowed space-x-2 h-10 text-sm bg-transparent focus:bg-transparent focus:ring-transparent border-1.5 border-transparent px-1 text-primary focus:text-primary/75 !w-auto !min-w-fit !py-0.5 normal-case"
                                        type="button"
                                    >
                                        <span className="tracking-[0.03em] leading-none" style={{ color: "#FF7029" }}>
                                            Sign in
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="text-center pb-2 text-sm mb-10" style={{ color: "#707B81" }}>
                            Or connect
                        </div>
                        <div className="flex justify-center items-center space-x-4 pb-2 text-sm" style={{ color: "#707B81" }}>
                            <Image
                                src={btnFb}
                                className="object-cover h-12 w-12"
                                alt="Facebook Icon"
                            />
                            <Image
                                src={btnIg}
                                className="object-cover h-12 w-12"
                                alt="Instagram Icon"
                            />
                            <Image
                                src={btnTwitter}
                                className="object-cover h-12 w-12"
                                alt="Twitter Icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}