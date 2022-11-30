const sqlQuery = {
  registerUser: "INSERT INTO USER (userID, username, password) VALUES",
  getManagerUser: "SELECT * FROM USER WHERE username = ? and password = ? ",
  getPatienInfoByID:
    "SELECT firstname, lastname, phone FROM PATIENT WHERE PATIENT.patientID = ?",
  addNewPatient: "INSERT INTO PATIENT SET ?",
};

module.exports = sqlQuery;
