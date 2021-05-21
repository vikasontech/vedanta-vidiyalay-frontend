/*
 *     Copyright (C) 2019  Vikas Kumar Verma
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU Affero General Public License as
 *     published by the Free Software Foundation, either version 3 of the
 *     License, or (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU Affero General Public License for more details.
 *
 *     You should have received a copy of the GNU Affero General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { StudentAdmissionServiceService } from '../student-admission-service.service';
import { StudentAdmissionFormData, SearchData } from '../student-admission-form/student-admission-form-data';
import { UpdateStudentDetailsService } from './service/update-student-details.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ComboBoxes, Option } from '../combo-boxes';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { DialogBoxUtils } from '../DialogBoxUtils';
import { MatDialog } from '@angular/material';
import { CustomValidator } from '../validation/Validations';

@Component({
  selector: 'app-update-student-details',
  templateUrl: './update-student-details.component.html',
  styleUrls: ['./update-student-details.component.css']
})
export class UpdateStudentDetailsComponent implements OnInit {

  @Input() studentAdmissionFormData: StudentAdmissionFormData;

  originalStudentData: StudentAdmissionFormData;
  searched: boolean = false;

  getStudentDetailsForm = this.fb.group({
    enrolmentNo: [null, Validators.required],
  });

  newAdmissionForm = this.fb.group({
    id: [null, Validators.required],
    idDisabled: [null],
    name: [null, Validators.required],
    dateOfBirth: [null, Validators.required],
    dateOfAdmission: [null, Validators.required],
    admissionStatus: null,
    admissionStatusDisabled: [null],
    religion: [null, Validators.required],
    caste: [null, Validators.required],
    subcaste: [null, Validators.required],
    gender: [null, Validators.required],
    fatherName: [null, Validators.required],
    motherName: null,
    occupation: null,
    relation: null,
    address1: [null, Validators.required],
    pin1: [null, Validators.compose([
      Validators.required, Validators.minLength(6), Validators.maxLength(6),
      CustomValidator.numberValidator])],
    address2: null,
    pin2: [null, Validators.compose([CustomValidator.numberValidator, Validators.minLength(6), Validators.maxLength(6)])],
    phone1: null,
    phone2: null,
    mobile: [null, Validators.required],
    email: [null, Validators.email],
    bloodGroup: null,
    chechak: null,
    nationality: null,
    motherTongue: null,
    areaOfInterest: null,
    numberOfSiblings: null,
    lastSchoolName: null,
    lastRank: null,
    lastClassYear: null,
    lastClass: null,
    board: null,
    scored: null,
    totalMarks: null,
    reasonForLeave: null,
    transferCertificate: [null, Validators.required],
    lastSchoolMarkSheet: null,
    conduct: null,
    admissionClass: [null, Validators.required],
    admissionClassDisabled: [null],
    currentClass: null,
    instrumentNo: [null, Validators.required],
  });

  private cb: ComboBoxes = new ComboBoxes();

  genders: Option[] = this.cb.getGenders();

  options: Option[] = this.cb.getOptaions();

  ngOnInit(): void {
    this.handlePathVariable();
    this.newAdmissionForm.get('idDisabled').disable();
    this.newAdmissionForm.get('admissionStatusDisabled').disable();
    this.newAdmissionForm.get('admissionClassDisabled').disable();
  }


  handlePathVariable() {
    var enrolmentNo: number
    this.route.params.subscribe(e => {
      enrolmentNo = e.id;
    });

    if (enrolmentNo) {
      this.getStudentDetailsForm.patchValue({
        enrolmentNo: enrolmentNo
      });
      this.onSearch();

    }
  }

  constructor(private fb: FormBuilder,
    private updateStudentService: UpdateStudentDetailsService,
    private route: ActivatedRoute,
    public dialog: MatDialog) {
  }

  onSubmit() {
    var dialoagBoxUtils = new DialogBoxUtils();
    if (this.newAdmissionForm.status === 'INVALID') {
      console.error("form invalid cannot process request.");
      return;
    }

    this.updateStudentService.updateStudentData(this.newAdmissionForm.value, this.originalStudentData)
      .subscribe((result) => {
        console.log(result);
        var data = { message: "Student information updated", type: "Information" };
        dialoagBoxUtils.openDialog(data, this.dialog);
      });
  }


  dateFormate(val: Date) {
    var date = new Date(val);

    var month: number;
    month = date.getMonth();
    month += 1;

    var msmon;
    if (month > 9) {
      msmon = month;
    } else {
      msmon = '0' + month;
    }

    var dayWithPadding: any;
    var day = date.getUTCDate();
    if (day < 10) {
      dayWithPadding = '0' + day;
    } else {
      dayWithPadding = day;
    }


    return date.getFullYear() + '-' + msmon + '-' + dayWithPadding;
  }

  onSearch() {
    var data;
    var searchData
    var dialoagBoxUtils = new DialogBoxUtils();
    this.updateStudentService.searchStudentData(this.getStudentDetailsForm.value)
      .subscribe((result) => {

        if (result.status !== 200) {
          data = { message: result.message, type: "Error" };
          dialoagBoxUtils.openDialog(data, this.dialog);
          return;
        }

        searchData = result.data[0];
        this.searched = true
        this.originalStudentData = result.data[0];

        this.newAdmissionForm.patchValue({
          id: searchData.id,
          idDisabled: searchData.id,
          name: searchData.name,
          dateOfBirth: this.dateFormate(searchData.dateOfBirth),
          dateOfAdmission: this.dateFormate(searchData.dateOfAdmission),
          admissionStatus: searchData.admissionStatus,
          admissionStatusDisabled: searchData.admissionStatus,
          religion: searchData.religion,
          caste: searchData.caste,
          subcaste: searchData.subcaste,
          gender: searchData.gender,
          fatherName: searchData.fatherName,
          motherName: searchData.motherName,
          occupation: searchData.occupation,
          relation: searchData.relation,
          address1: searchData.address1,
          pin1: searchData.pin1,
          address2: searchData.address2,
          pin2: searchData.pin2,
          phone1: searchData.phone1,
          phone2: searchData.phone2,
          mobile: searchData.mobile,
          email: searchData.email,
          bloodGroup: searchData.bloodGroup,
          chechak: searchData.chechak,
          nationality: searchData.nationality,
          motherTongue: searchData.motherTongue,
          areaOfInterest: searchData.areaOfInterest,
          numberOfSiblings: searchData.numberOfSiblings,
          lastSchoolName: searchData.lastSchoolName,
          lastRank: searchData.lastRank,
          lastClassYear: searchData.lastClassYear,
          lastClass: searchData.lastClass,
          board: searchData.board,
          scored: searchData.scored,
          totalMarks: searchData.totalMarks,
          reasonForLeave: searchData.reasonForLeave,
          transferCertificate: searchData.transferCertificate,
          lastSchoolMarkSheet: searchData.lastSchoolMarkSheet,
          conduct: searchData.conduct,
          admissionClass: searchData.admissionClass,
          admissionClassDisabled: searchData.admissionClass,
          currentClass: searchData.currentClass,
          instrumentNo: searchData.instrumentNo
        });

      });

  }

}


// export class CustomValidator {

//   // Validates numbers
//   static numberValidator(number): any {
//     if (number.pristine) {
//       return null;
//     }
//     if (number.value === '') {
//       return null;
//     }
//     const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
//     number.markAsTouched();
//     if (NUMBER_REGEXP.test(number.value) && number.value >= 100000 && number.value <= 999999) {
//       return null;
//     }

//     return {
//       invalidNumber: true
//     };
//   }

// }