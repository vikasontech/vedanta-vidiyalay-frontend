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
import { ComboServiceService } from '../combo-service.service';
import { Option } from '../combo-boxes';
import { DepositFineService } from '../deposit-fine.service';


@Component({
  selector: 'app-deposit-fine',
  templateUrl: './deposit-fine.component.html',
  styleUrls: ['./deposit-fine.component.css']
})
export class DepositFineComponent implements OnInit {
  @Input() updateFormModel: DepositFormDataModel;

  updateForm = this.fb.group({
    fineId: [null, Validators.required],
    amount: [null, Validators.required],
    instrumentNo: [null, Validators.required],
    transactionMode: [null, Validators.required],
  });

  constructor(private fb: FormBuilder,
    private cbService: ComboServiceService,
    private service: DepositFineService,
    private dialog: MatDialog) { }

  transactionModes: Option[];
  ngOnInit() {
    this.cbService.comboTransactionType(false)
      .subscribe(
        data => {
          this.transactionModes = data.data[0];
        }
      );
  }


  onSubmit() {
    var dialoagBoxUtils = new DialogBoxUtils();
    if (this.updateForm.status === 'INVALID') {
      return;
    }

    this.service.save(this.updateForm.value)
      .subscribe((result) => {

        var data = { message: "Fine amount deposited!", type: "Information" };
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

export class DepositFormDataModel {
  fineId: number;
  amount: number;
  instrumentNo: string;
  transactionMode: string;
}
