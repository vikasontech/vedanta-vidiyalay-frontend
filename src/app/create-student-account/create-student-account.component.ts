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
import { MatDialog } from '@angular/material';
import { CreateStudentAccountVM } from '../student-admission-form/student-admission-form-data';
import { CreateStudentAccountService } from '../create-student-account.service';
import { DialogBoxUtils } from '../DialogBoxUtils';

@Component({
  selector: 'app-create-student-account',
  templateUrl: './create-student-account.component.html',
  styleUrls: ['./create-student-account.component.css']
})
export class CreateStudentAccountComponent implements OnInit {
  @Input() updateFormModel: CreateStudentAccountVM;

  updateForm = this.fb.group({
    enrolmentNo: [null, Validators.required],

  });

  constructor(private fb: FormBuilder,
    public dialog: MatDialog, private service: CreateStudentAccountService) { }

  ngOnInit() {
  }


  onSubmit() {
    var dialoagBoxUtils = new DialogBoxUtils();
    if (this.updateForm.status === 'INVALID') {
      console.error("form invalid cannot process request.");
      return;
    }

    this.service.create(this.updateForm.value)
      .subscribe((result) => {
        console.log(result);
        var data = { message: "Account Created for student", type: "Information" };
        if (result.status !== 200) {
          data = { message: result.message, type: "Error" };
          dialoagBoxUtils.openDialog(data, this.dialog);
          return;
        }

        dialoagBoxUtils.openDialog(data, this.dialog);
      });
  }

}
