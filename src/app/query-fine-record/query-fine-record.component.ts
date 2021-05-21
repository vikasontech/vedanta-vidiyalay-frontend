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
import { StudentFeeDueVM } from '../student-admission-form/student-admission-form-data';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { QueryFineRecordService } from '../query-fine-record.service';
import { CreateFineMasterService } from '../create-fine-master.service';
import { Option } from '../combo-boxes';
import { Router } from '@angular/router';
import { ComboServiceService } from '../combo-service.service';


@Component({
  selector: 'app-query-fine-record',
  templateUrl: './query-fine-record.component.html',
  styleUrls: ['./query-fine-record.component.css']
})
export class QueryFineRecordComponent implements OnInit {
  displayedColumns: string[] = ['id', 'enrolmentNo', 'fineType', 'amount', 'description', 'status', 'update'];
  searchForm = this.fb.group({
    enrolmentNo: null,
    fineType: null,
  });
  @Input() searchDueFeeFormModel: StudentFeeDueVM;

  dataSource = new MatTableDataSource<SearchFineRecordModel>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder,
    private service: QueryFineRecordService,
    private comboService: ComboServiceService,
    private router: Router) { }

  options: Option[];
  ngOnInit() {

    this.comboService.getFineType(true)
      .subscribe(
        data => {
          this.options = data.data[0];
        }
      );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onSearch() {

    this.service.getData(this.searchForm.value)
      .subscribe(
        data => {
          console.log('data: ', data);
          this.dataSource = new MatTableDataSource<SearchFineRecordModel>(data);
          console.log('datasource: ', this.dataSource);
          this.dataSource.paginator = this.paginator;
        }
      );
  }


  updateFineRecord(id: number, enrolmentNo: number) {
    this.router.navigateByUrl("/update-fine-record/id/" + id + "/enrolment-no/" + enrolmentNo);
  }



}

export class SearchFineRecordModel {
  enrolmentNo: number;
  fineType: string;
}


