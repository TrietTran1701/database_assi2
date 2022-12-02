const sqlQuery = {
  registerUser: "INSERT INTO USER (userID, username, password) VALUES",
  getManagerUser: "SELECT * FROM USER WHERE username = ? and password = ? ",
  getPatienInfoByID:
    "SELECT firstname, lastname, phone FROM PATIENT WHERE PATIENT.patientID = ?",
  addNewPatient: "INSERT INTO PATIENT SET ?",
  getPatienInfoByDoctorID:
    "SELECT tr.treatDocID, ip.* FROM TREATMENT tr LEFT JOIN PATIENT_INPATIENT ip ON ip.treatmentID = tr.treatmentID",
  searchPatientInfo:
    "SELECT P.patientID, P.firstname, P.lastname, P.phone, ip.treatmentID, tr.medicationID, tr.rsult, tr.treatDocID, tr.recovered, ip.dateOfAdmission, ip.dateOfDischarged FROM PATIENT P LEFT JOIN PATIENT_INPATIENT ip ON P.patientID = ip.patientID LEFT JOIN TREATMENT tr ON tr.treatmentID = ip.treatmentID WHERE P.patientID = ?",

  getFeeReport:
    "SELECT P.patientID, P.firstname, P.lastname , ip.treatmentFee, ip.dateOfAdmission,ip.dateOfDischarged, ex.examinationFee, me.medicationPrice FROM PATIENT P LEFT JOIN PATIENT_INPATIENT ip ON ip.patientID = p.patientID LEFT JOIN PATIENT_OUTPATIENT op ON op.patientID = p.patientID LEFT JOIN EXAMINATION ex ON ex.patientID = op.patientID LEFT JOIN MEDICATION me ON me.medicationID = ex.medicationID WHERE P.patientID = ?",

  getAllPatients:
    "SELECT patientID, firstname, lastname, phone FROM PATIENT ORDER BY patientID",
};

module.exports = sqlQuery;
