const sqlQuery = {
  registerUser: "INSERT INTO USER (userID, username, password) VALUES",
  getManagerUser: "SELECT * FROM USER WHERE username = ? and password = ? ",
  getPatienInfoByID:
    "SELECT firstname, lastname, phone FROM PATIENT WHERE PATIENT.patientID = ?",
  addNewPatient: "INSERT INTO PATIENT SET ?",
  getPatienInfoByDoctorID:
    "SELECT * FROM PATIENT_INPATIENT INNER JOIN PATIENT ON PATIENT.patientID = PATIENT_INPATIENT.patientID WHERE PATIENT_INPATIENT.treatDocID = ?",
};

module.exports = sqlQuery;
