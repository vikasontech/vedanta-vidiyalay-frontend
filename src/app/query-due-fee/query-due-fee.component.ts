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
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DueFeesDetailsData, StudentFeeDueVM } from '../student-admission-form/student-admission-form-data';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { QueryDueFeeService } from '../query-due-fee.service';

@Component({
  selector: 'app-query-due-fee',
  templateUrl: './query-due-fee.component.html',
  styleUrls: ['./query-due-fee.component.css']
})
export class QueryDueFeeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'amount', 'totalFine', 'standard', 'name', 'fatherName', 'phone', 'mobile', 'email', 'admissionStatus'];

  searchForm = this.fb.group({
    enrolmentNo: null,
    standard: null,
    status: null,
    name: null,
    amount: null,
    fatherName: null,
  });

  @Input() searchDueFeeFormModel: StudentFeeDueVM;

  dataSource = new MatTableDataSource<DueFeesDetailsData>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder,
    private service: QueryDueFeeService) { }

  ngOnInit() {
    // do nothing
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onSearch() {

    this.service.getData(this.searchForm.value)
      .subscribe(
        data => {
          this.dataSource = new MatTableDataSource<DueFeesDetailsData>(data);
          this.dataSource.paginator = this.paginator;
        }
      );
  }
}
