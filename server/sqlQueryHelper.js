const sqlQuery = {
  registerUser: "INSERT INTO USER (userID, username, password) VALUES",
  getManagerUser: "SELECT * FROM USER WHERE username = ? and password = ? ",
  getPatienInfoByID:
    "SELECT firstname, lastname, phone FROM PATIENT WHERE PATIENT.patientID = ?",
  addNewPatient: "INSERT INTO PATIENT SET ?",
  getPatienInfoByDoctorID:
    "SELECT * FROM PATIENT_INPATIENT INNER JOIN PATIENT ON PATIENT.patientID = PATIENT_INPATIENT.patientID WHERE PATIENT_INPATIENT.treatDocID = ?",
  searchPatientInfo:
    "SELECT P.patientID, P.firstname, P.lastname, P.phone, ip.treatmentID, tr.medicationID, tr.rsult, tr.treatDocID, tr.recovered, ip.dateOfAdmission, ip.dateOfDischarged FROM PATIENT P LEFT JOIN PATIENT_INPATIENT ip ON P.patientID = ip.patientID LEFT JOIN TREATMENT tr ON tr.treatmentID = ip.treatmentID WHERE P.patientID = ?",

  getFeeReport:
    "SELECT P.firstname, P.lastname , ip.treatmentFee, P.patientID, ip.dateOfAdmission,ip.dateOfDischarged, ex.examinationFee, me.medicationPrice FROM PATIENT P LEFT JOIN PATIENT_INPATIENT ip ON ip.patientID = p.patientID LEFT JOIN PATIENT_OUTPATIENT op ON op.patientID = p.patientID LEFT JOIN EXAMINATION ex ON ex.patientID = op.patientID LEFT JOIN MEDICATION me ON me.medicationID = ex.medicationID WHERE P.patientID = ?",

  getAllPatients: "SELECT patientID, firstname, lastname, phone FROM PATIENT",
};

module.exports = sqlQuery;
