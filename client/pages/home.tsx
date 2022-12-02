import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
// import { Router } from "next/router";
import { useRouter } from "next/router";

const home = () => {
  const router = useRouter();
  return (
    <div>
      <Header />

      <section className="px-4 py-4 flex flex-col items-center ">
        <div className=" ">
          <h1 className="text-2xl font-semibold">
            Welcome to Hospital Database
          </h1>
        </div>
        <div>
          <Button
            type="default"
            size="large"
            className="flex items-center"
            onClick={() => {
              router.push("/search");
            }}
          >
            <span>Search patient infomation</span>
            <SearchOutlined />
          </Button>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default home;
