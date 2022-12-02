import React from "react";
import Logo from "../assets/logo.png";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className="flex items-center justify-center bg-white py-5 border-b-2">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => {
          router.push("/home");
        }}
      >
        <img
          src="https://hcmut.edu.vn/img/news/25127666.png?t=25127704"
          alt="hcmutlogo"
          style={{
            width: "150px",
            height: "auto",
          }}
        />
        <h1 className="text-blue-500 text-2xl font-bold">Hospital Database</h1>
      </div>
    </header>
  );
};

export default Header;
