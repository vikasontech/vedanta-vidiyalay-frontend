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
import { FeeDetailsVM } from './vm/fee-details-vm';
import { SetFeeMasterService } from '../set-fee-master.service';
import { MatDialog } from '@angular/material';
import { DialogBoxUtils } from '../DialogBoxUtils';
import { ComboBoxes, Option } from '../combo-boxes';

@Component({
  selector: 'app-set-fee-master',
  templateUrl: './set-fee-master.component.html',
  styleUrls: ['./set-fee-master.component.css']
})
export class SetFeeMasterComponent implements OnInit {
  @Input() updateFormModel: FeeDetailsVM;

  updateForm = this.fb.group({
    standard: [null, Validators.required],
    year: [null, Validators.required],
    description: null,
    amount: [null, Validators.required],
    isActive: [null, Validators.required],
  });

  dialoagBoxUtils: DialogBoxUtils = new DialogBoxUtils();


  constructor(private fb: FormBuilder,
    private service: SetFeeMasterService,
    private dialog: MatDialog) { }

  private cb: ComboBoxes = new ComboBoxes();

  options: Option[] = this.cb.getFeeActiveOptions();

  ngOnInit() {
  }

  onSubmit() {

    if (this.updateForm.status === 'INVALID') {
      return;
    }

    var data;
    this.service.update(this.updateForm.value)
      .subscribe((result) => {
        if (result.status !== 200) {
          data = { message: result.message, type: "Error!" };
        } else {
          data = { message: "Fee data created successfully!", type: "Success!" };
        }
        this.dialoagBoxUtils.openDialog(data, this.dialog);
        return;

      });
  }
}
