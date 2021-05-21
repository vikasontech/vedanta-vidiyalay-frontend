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
import { DepositFeeFormData } from './data/depsit-fee-form-data';
import { DepositStudentFeeService } from '../deposit-student-fee.service';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { DialogBoxUtils } from '../DialogBoxUtils';
import { CustomValidator } from '../validation/Validations';
import { UtilConfig } from '../utils/config';

@Component({
  selector: 'app-deposit-student-fee',
  templateUrl: './deposit-student-fee.component.html',
  styleUrls: ['./deposit-student-fee.component.css']
})

export class DepositStudentFeeComponent implements OnInit {
  @Input() depositFeeFormData: DepositFeeFormData;

  depositForm = this.fb.group({
    enrolmentNo: [null, Validators.required],
    amount: [null, Validators.compose([
      Validators.required, Validators.minLength(6), Validators.maxLength(6),
      CustomValidator.numberValidator_nonzero])],
    instrumentNo: [null, Validators.required],
    transactionMode: [null, Validators.required],

  })

  transactionModes: TransactionMode[] = [
    { value: 'CASH', viewValue: 'Cash' },
    { value: 'CHEQUE', viewValue: 'Cheque' },
    { value: 'BANK_TRANSFER', viewValue: 'Bank Transfer' },
  ];

  constructor(private fb: FormBuilder,
    private depositStudentFeeService: DepositStudentFeeService,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  onSubmit() {
    var dialoagBoxUtils = new DialogBoxUtils();
    if (this.depositForm.status === 'INVALID') {
      return;
    }

    this.depositStudentFeeService.depositFee(this.depositForm.value)
      .subscribe((result) => {

        var data = { message: "Account Created for student", type: "Information" };
        if (result.status !== 200) {
          data = { message: result.message, type: "Error" };
          dialoagBoxUtils.openDialog(data, this.dialog);
          return;
        }

        this.showInformation(this.depositForm.value.enrolmentNo, result.data[0]);
      });

  }


  showInformation(enrolmentNo: number, amount: number) {
    // var message:string =  "Student Created Enrolment No.: " + result.id;
    var message: string = "Fee deposited for enrolment no: " + enrolmentNo + " remaining due fee: " + amount;

    this.dialog.open(DialogBoxComponent, {
      width: UtilConfig.dialogBoxSize,
      data: { type: "Successfull!", message: message, showNoButton: false }
    });

  }
}


export interface TransactionMode {
  value: string;
  viewValue: string;
}

