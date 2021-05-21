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
import { FormBuilder, Validators } from '@angular/forms';
import { StudentAdmissionServiceService } from '../student-admission-service.service';
import { StudentAdmissionFormData } from './student-admission-form-data';
import { ComboBoxes, Option } from '../combo-boxes';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { UtilConfig } from '../utils/config';
import { CustomValidator } from '../validation/Validations';


@Component({
  selector: 'app-student-admission-form',
  templateUrl: './student-admission-form.component.html',
  styleUrls: ['./student-admission-form.component.css'],
})
export class StudentAdmissionFormComponent implements OnInit {
  @Input() studentAdmissionFormData: StudentAdmissionFormData;

  newAdmissionForm = this.fb.group({
    name: [null, Validators.required],
    dateOfBirth: [null, Validators.required],
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
    currentClass: null,
    instrumentNo: [null, Validators.required],
  });

  private cb: ComboBoxes = new ComboBoxes();

  genders: Option[] = this.cb.getGenders();
  options: Option[] = this.cb.getOptaions();

  ngOnInit(): void {
    // do nothing
  }

  constructor(private fb: FormBuilder,
    private studentService: StudentAdmissionServiceService,
    public dialog: MatDialog) { }

  onSubmit() {

    if (this.newAdmissionForm.status === 'INVALID') {
      return;
    }
    this.studentService.createStudentData(this.newAdmissionForm.value)
      .subscribe((result) => {
        this.openDialog(result);
      });
  }

  openDialog(result: StudentAdmissionFormData) {
    var message: string = "Student Created Enrolment No.: " + result.id;

    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: UtilConfig.dialogBoxSize,
      data: { type: "Successfull", message: message, showNoButton: false }
    });
  }
}

