import React from "react";
import Header from "../components/Header";
import { Input, Button, Table } from "antd";
import axios from "axios";
const { Search } = Input;

const columns = [
  {
    title: "PatientID",
    dataIndex: "patientID",
    key: "patientID",
  },
  {
    title: "Firstname",
    dataIndex: "firstname",
    key: "firstname",
  },
  {
    title: "Lastname",
    dataIndex: "lastname",
    key: "lastname",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
];
const search = () => {
  const [patient, setPatient] = React.useState();
  const onSearch = async (value: string) => {
    const response = await axios.get(
      `http://localhost:3001/api/searchPatient/${value}`
    );

    if (response) setPatient(response.data.data);
  };

  const onGetAll = async () => {
    const response = await axios.get(`http://localhost:3001/api/allPatients/`);

    if (response) setPatient(response.data.data);
  };
  return (
    <section>
      <Header />
      <div className="flex flex-col items-center px-4 py-4">
        <div>
          <h1 className="text-2xl font-bold">Search Patient Information</h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Search
            placeholder="Enter patient ID"
            enterButton
            size="large"
            onSearch={onSearch}
          />
          <Button
            type="default"
            style={{
              background: "#fff!important",
            }}
            onClick={onGetAll}
          >
            Show all patients' information
          </Button>

          <Button
            type="default"
            style={{
              background: "#fff!important",
            }}
            onClick={() => {
              setPatient(undefined);
            }}
          >
            Hide all patients' information
          </Button>
        </div>
      </div>
      {patient && (
        <>
          <div className="mx-[10rem]">
            <Table dataSource={patient} columns={columns} />
          </div>
        </>
      )}
    </section>
  );
};

export default search;
