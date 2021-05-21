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

import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ChangeStudentAdmissionStatusService } from '../change-student-admission-status.service';
import { ChangeStudentAdmissionStatusData } from './data/change-student-admission-status-data';
import { ActivatedRoute } from '@angular/router';
import { ComboBoxes, Option } from '../combo-boxes';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { UtilConfig } from '../utils/config';

@Component({
  selector: 'app-change-student-admission-status',
  templateUrl: './change-student-admission-status.component.html',
  styleUrls: ['./change-student-admission-status.component.css']
})
export class ChangeStudentAdmissionStatusComponent implements OnInit {
  @Input() updateFormModel: ChangeStudentAdmissionStatusData;
  private cb: ComboBoxes = new ComboBoxes();

  animal: string;
  name: string;

  updateForm = this.fb.group({
    enrolmentNo: [null, Validators.required],
    admissionStatus: [null, Validators.required],
  })

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private changeStudentAdmissionStatusService: ChangeStudentAdmissionStatusService,
    public dialog: MatDialog) {
    this.fb = fb;
  }

  admissionStatuses: Option[] = this.cb.getAdmissionStatuses_noTerminate();

  ngOnInit() {
    this.handlePathVariable();
  }

  handlePathVariable() {
    var enrolmentNo: number;
    var admissionStatus: string;
    this.route.params.subscribe(e => {
      enrolmentNo = e.id;
      admissionStatus = e.admissionStatus;
    });

    if (enrolmentNo) {

      this.updateForm.patchValue({
        enrolmentNo: enrolmentNo,
        admissionStatus: admissionStatus,
      });
    }
  }

  onSubmit() {
    if (this.updateForm.status === 'INVALID') {
      return;
    }

    var data = {};
    this.changeStudentAdmissionStatusService.updateAdmissionStatus(this.updateForm.value)
      .subscribe((result) => {
        if (result.status !== 200) {
          data = { message: result.message, type: "Error" };
          this.openDialog(data);
          return;
        }

        data = { message: "Data updated successfully", type: "Success" };
        this.openDialog(data);

      });
  }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: UtilConfig.dialogBoxSize,
      data: data
    });
  }
}
