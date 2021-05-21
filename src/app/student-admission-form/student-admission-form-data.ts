export class StudentAdmissionFormData {
  id: number;
  name: string;
  dateOfBirth: string;
  dateOfAdmission: string;
  admissionStatus: string;
  religion: string;
  caste: string;
  subcaste: string;
  gender: string;
  fatherName: string;
  motherName: string;
  occupation: string;
  relation: string;
  address1: string;
  pin1: string;
  address2: string;
  pin2: string;
  phone1: string;
  phone2: string;
  mobile: string;
  email: string;
  bloodGroup: string;
  chechak: string;
  nationality: string;
  motherTongue: string;
  areaOfInterest: string;
  numberOfSiblings: string;
  lastSchoolName: string;
  lastRank: number;
  lastClassYear: number;
  lastClass: number;
  board: string;
  scored: number;
  totalMarks: number;
  reasonForLeave: string;
  transferCertificate: string;
  lastSchoolMarkSheet: string;
  conduct: string;
  admissionClass: number;
  currentClass: number;
  instrumentNo: string;
}

export class StudentSearchFormData {
  id: number;
  standard: number;
  year: null;
  name: null;
  fatherName: null;
  motherName: null;

}

export class DueFeesDetailsData {
  id: number;
  amount: number;
  standard: string;
  name: number;
  fatherName: string;
  phone: string;
  mobile: string;
  email: string;
  admissionStatus: string;
}

export class SearchData {
  enrolmentNo: number;
}


export interface StudentFeeDueVM {
  enrolmentNo: number;
  standard: number;
  status: string;
  name: string;
  amount: number;
  totalFine: number;
  fatherName: string;
}

export class TerminateStudentFormData {
  enrolmentNo: number;
  reasonForLeave: string;
}

export interface ConfirmationDialogData {
  type: string;
  message: string;
  result: boolean;
  showNoButton: boolean;
}

export class Response {
  code: number;
  message: string;
  status: number;
  error: ErrorResponse;
  data: any;
}

class ErrorResponse {
  error: string;
  detail: string;
  path: string;
  title: string;
}

export class BasicResponse {
  message: string;
  status: number;
  error: ErrorResponse[];
  data: any[];
}

export class CreateStudentAccountVM {
  enrolmentNo: number;
  name: string;
  dateOfOpening: string;
  totalFee: number;
  dueAmount: number;
  accountType: string;
}
