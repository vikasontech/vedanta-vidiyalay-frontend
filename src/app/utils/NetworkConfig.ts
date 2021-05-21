export const NetworkConfig = {
  url: "https://vedanta-app-gateway.herokuapp.com",
}

export const ApiConfig = {
  createStudent: "/student-service/api/student-resource/newAdmission",
  depositStudentFee: "/account-service/api/fee-deposit/deposit",
  updateStudentAdmissionStatus: "/student-service/api/student-resource/update/student/admission/status",
  queryFeeDetails: "/account-service/api/query-fee/findAll",
  queryStudentDeatailById: "/student-service/api/query-student/details/students/",
  updateSTudentData: "/student-service/api/update-student-resource/update",
  queryStudentDeatails: "/student-service/api/query-student/details/students",
  udpateFeeMaster: "/account-service/api/create-fee/create",
  searchFeeDue: "/student-service/api/fee_due/details",
  terminateStudent: "/student-service/api/terminate-student/",
  createStudentAccount: "/account-service/api/create-account/account",
  printJasperReport: "/student-service/enrolment/{enrolmentNo}/scholer_report.pdf",
  createFineMaster: "/fine-service/api/fine/create-update-fine-master/new",
  createFineRecord: "/fine-service/api/update-fine-record/create",
  updateFineRecord: "/fine-service/api/update-fine-record/update",
  searchFineRecord: "/student-service/api/query-fine-record",
  combosData: "/student-service/api/combo",
  depositFine: "/fine-service/api/fine/deposit",
  recalculateFeeDueStatus: "/account-service/api/fee-due-recalculater-resource/recalculate",

}
