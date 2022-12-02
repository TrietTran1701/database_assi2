import React from "react";
import Header from "../components/Header";
import { Input, Button, Table } from "antd";
import axios from "axios";
const { Search } = Input;

const columns = [
  {
    title: "DoctorID",
    dataIndex: "treatDocID",
    key: "treatDocID",
  },
  {
    title: "PatientID",
    dataIndex: "patientID",
    key: "patientID",
  },
  {
    title: "Date of Admission",
    dataIndex: "dateOfAdmission",
    key: "dateOfAdmission",
  },
  {
    title: "Date of Discharged",
    dataIndex: "dateOfDischarged",
    key: "dateOfDischarged",
  },
  {
    title: "Sick room",
    dataIndex: "sickRoom",
    key: "sickRoom",
  },
  {
    title: "Diagnose",
    dataIndex: "diagnose",
    key: "diagnose",
  },
  {
    title: "Treatment Fee",
    dataIndex: "treatmentFee",
    key: "treatmentFee",
  },
  {
    title: "NurseID",
    dataIndex: "careNurseID",
    key: "careNurseID",
  },
  {
    title: "TreatmentID",
    dataIndex: "treatmentID",
    key: "treatmentID",
  },
];
const list = () => {
  const [patient, setPatient] = React.useState();
  const onSearch = async (value: string) => {
    const response = await axios.get(`http://localhost:3001/api/doctor/`);

    if (response) setPatient(response.data.data);
  };

  const onGetAll = async () => {
    const response = await axios.get(`http://localhost:3001/api/doctor/`);

    if (response) setPatient(response.data.data);
  };
  return (
    <section>
      <Header />
      <div className="flex flex-col items-center px-4 py-4">
        <div>
          <h1 className="text-2xl font-bold">
            List patients treated by a doctor
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          {/* <Search
            placeholder="Enter doctor's ID"
            enterButton
            size="large"
            onSearch={onSearch}
          /> */}
          <Button
            type="default"
            style={{
              background: "#fff!important",
            }}
            onClick={onGetAll}
          >
            List all patients treated by a doctor
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
            Hide all patients treated by a doctor
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

export default list;
