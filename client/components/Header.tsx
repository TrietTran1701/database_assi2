import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-center bg-white py-10 border-b-2">
      <img
        src="https://hcmut.edu.vn/img/news/25127666.png?t=25127704"
        alt="hcmutlogo"
        style={{
          width: "150px",
          height: "auto",
        }}
      />
      <h1 className="text-blue-500 text-2xl font-bold">Hospital Database</h1>
    </header>
  );
};

export default Header;
