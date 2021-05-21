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
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { DialogBoxUtils } from '../DialogBoxUtils';
import { UtilConfig } from '../utils/config';
import { UpdateFineRecordService } from '../update-fine-record.service';
import { CreateFineMasterService } from '../create-fine-master.service';
import { Option, ComboBoxes } from '../combo-boxes';
import { ActivatedRoute } from '@angular/router';
import { ComboServiceService } from '../combo-service.service';

@Component({
  selector: 'app-update-fine-record',
  templateUrl: './update-fine-record.component.html',
  styleUrls: ['./update-fine-record.component.css']
})
export class UpdateFineRecordComponent implements OnInit {

  @Input() updateFormModel: UpdateFineRecordModel;

  cb = new ComboBoxes();

  constructor(private fb: FormBuilder,
    private service: UpdateFineRecordService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private serviceForFineType: ComboServiceService, ) { }

  updateForm = this.fb.group({
    idDisable: null,
    enrolmentNoDisable: null,
    id: null,
    enrolmentNo: null,
    fineType: [null, Validators.required],
    description: [null, Validators.required],
    status: [null, Validators.required],
    amount: [null, Validators.required],
  });


  options: Option[];
  fineStatusOptions: Option[] = this.cb.getFineStatus();
  ngOnInit() {
    this.updateForm.get('idDisable').disable();
    this.updateForm.get('enrolmentNoDisable').disable();

    this.serviceForFineType.getFineType(false)
      .subscribe(
        data => {
          this.options = data.data[0];
        }
      );
    this.handlePathVariable();
  }

  handlePathVariable() {
    var enrolmentNo: number;
    var id: number;
    this.route.params.subscribe(e => {
      enrolmentNo = e.enrolmentNo;
      id = e.id;
    });

    if (enrolmentNo) {

      this.updateForm.patchValue({
        enrolmentNo: enrolmentNo,
        enrolmentNoDisable: enrolmentNo,
        id: id,
        idDisable: id,
      });
    }
  }




  onSubmit() {
    var dialoagBoxUtils = new DialogBoxUtils();
    if (this.updateForm.status === 'INVALID') {
      return;
    }

    this.service.save(this.updateForm.value)
      .subscribe((result) => {

        var data = { message: "Fine record updated!", type: "Information" };
        if (result.status !== 200) {
          data = { message: result.message, type: "Error" };
          dialoagBoxUtils.openDialog(data, this.dialog);
          return;
        }

        this.dialog.open(DialogBoxComponent, {
          width: UtilConfig.dialogBoxSize,
          data: data
        });
      });
  }
}

export class UpdateFineRecordModel {
  id: number;
  enrolmentNo: number;
  fineType: string;
  description: string;
  status: string;
  amount: number;
}
