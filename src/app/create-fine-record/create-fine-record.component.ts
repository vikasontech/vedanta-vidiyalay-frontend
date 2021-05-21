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
import { CreateFineMasterService } from '../create-fine-master.service';
import { DialogBoxUtils } from '../DialogBoxUtils';
import { UtilConfig } from '../utils/config';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material';
import { ComboBoxes, Option } from '../combo-boxes';
import { CreateFineRecordService } from '../create-fine-record.service';
import { CreateFineMasterModel } from '../create-fine-master/create-fine-master.component';
import { ComboServiceService } from '../combo-service.service';

@Component({
  selector: 'app-create-fine-record',
  templateUrl: './create-fine-record.component.html',
  styleUrls: ['./create-fine-record.component.css']
})
export class CreateFineRecordComponent implements OnInit {
  @Input() createFineRecord: CreateFineRecordModel;

  createForm = this.fb.group({
    enrolmentNo: [null, Validators.required],
    fineType: [null, Validators.required],
    description: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private service: CreateFineRecordService,
    private comboService: ComboServiceService,
    private dialog: MatDialog) { }

  options: Option[];
  ngOnInit() {
    this.comboService.getFineType(false)
      .subscribe(
        data => {
          this.options = data.data[0];
        }
      );
  }


  onSubmit() {
    var dialoagBoxUtils = new DialogBoxUtils();
    if (this.createForm.status === 'INVALID') {
      return;
    }

    this.service.save(this.createForm.value)
      .subscribe((result) => {

        var data = { message: "Fine record created!", type: "Information" };
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

export class CreateFineRecordModel {
  enrolmentNo: number;
  fineType: string;
  description: string;
}
