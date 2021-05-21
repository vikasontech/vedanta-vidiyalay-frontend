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
import { TerminateStudentService } from '../terminate-student.service';
import { TerminateStudentFormData, ConfirmationDialogData } from '../student-admission-form/student-admission-form-data';
import { ActivatedRoute } from '@angular/router';
import { ComboBoxes, Option } from '../combo-boxes';
import { MatDialog, DateAdapter } from '@angular/material';
import { DialogBoxUtils } from '../DialogBoxUtils';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { updateBinding } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-terminate-student',
  templateUrl: './terminate-student.component.html',
  styleUrls: ['./terminate-student.component.css']
})
export class TerminateStudentComponent implements OnInit {
  private cb: ComboBoxes = new ComboBoxes();
  @Input() updateFormModel: TerminateStudentFormData;

  updateForm = this.fb.group({
    enrolmentNo: null,
    name: null,
    fatherName: null,
    standard: null,
    reasonForLeave: [null, Validators.required],
    // description: [null, Validators.required],
  });

  constructor(private fb: FormBuilder,
    private service: TerminateStudentService,
    private route: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.handlePathVariable();

  }

  rejectReasons: Option[] = this.cb.getRejectReasons();

  handlePathVariable() {

    this.route.params.subscribe(e => {
      this.updateForm.patchValue({
        enrolmentNo: e.id,
        name: e.name,
        fatherName: e.fatherName,
        standard: e.standard,
      });

      this.updateForm.get('enrolmentNo').disable();
      this.updateForm.get('name').disable();
      this.updateForm.get('fatherName').disable();
      this.updateForm.get('standard').disable();
    });
  }

  onSubmit() {

    if (this.updateForm.status === 'INVALID') {
      return;
    }

    var data: ConfirmationDialogData = { result: true, message: "Do you want to termiate this student ?", showNoButton: true, type: "Confirmation" };
    this.onConfirmationDialog(data, this.dialog);
  }

  onConfirmationDialog(data: any, dialog: MatDialog): void {
    const dialogRef = dialog.open(DialogBoxComponent, {
      width: '500px',
      data: data
    });

    var dialogBoxUtils = new DialogBoxUtils();

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.route.params.subscribe(e => {
          var updateData = { enrolmentNo: e.id, reasonForLeave: this.updateForm.value.reasonForLeave };
          this.service.save(updateData)
            .subscribe((result) =>
              dialogBoxUtils.openDialog({ message: "Student Terminated!", type: "Information!" }, dialog)
            );
        });
      }
    });
  }
}
