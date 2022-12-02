import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "antd";
import {
  AccountBookOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
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
        <div className="flex flex-col items-center gap-3">
          <Button
            type="default"
            size="large"
            className="flex items-center"
            onClick={() => {
              router.push("/search");
            }}
            style={{
              background: "#fff!important",
            }}
          >
            <span>Search patient infomation</span>
            <SearchOutlined />
          </Button>

          <Button
            type="default"
            size="large"
            className="flex items-center"
            onClick={() => {
              router.push("/add");
            }}
            style={{
              background: "#fff!important",
            }}
          >
            <span>Add new patient</span>
            <PlusCircleOutlined />
          </Button>

          <Button
            type="default"
            size="large"
            className="flex items-center"
            onClick={() => {
              router.push("/list");
            }}
            style={{
              background: "#fff!important",
            }}
          >
            <span>List patients treated by a doctor</span>
            <UnorderedListOutlined />
          </Button>

          <Button
            type="default"
            size="large"
            className="flex items-center"
            onClick={() => {
              router.push("/payment");
            }}
            style={{
              background: "#fff!important",
            }}
          >
            <span>Show payment report</span>
            {/* <UnorderedListOutlined /> */}
            <AccountBookOutlined />
          </Button>
        </div>
        <div className="mt-5">
          <img
            src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?w=2000&t=st=1669952093~exp=1669952693~hmac=0769427c4c561bdde5f1da0f020166421d2a01c4f623c9a1e38d4e6ae40daacb"
            alt="hospital"
            style={{
              width: "600px",
              height: "auto",
            }}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default home;
