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
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { StudentAdmissionFormData } from '../student-admission-form/student-admission-form-data';
import { FormBuilder } from '@angular/forms';
import { QueryStudentDataService } from './service/query-student-data.service';
import { SchollerReportService } from '../scholler-report.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-query-student-data',
  templateUrl: './query-student-data.component.html',
  styleUrls: ['./query-student-data.component.css']
})
export class QueryStudentDataComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'dateOfBirth', 'dateOfAdmission', 'religion', 'caste', 'subcaste', 'gender', 'fatherName', 'motherName', 'occupation', 'relation', 'address1', 'pin1', 'address2', 'pin2', 'phone1', 'phone2', 'mobile', 'email', 'bloodGroup', 'numberOfSiblings', 'admissionClass', 'isFeeDue', 'instrumentNo', 'admissionStatus', 'dateOfTermination', 'termiate', 'report'];
  dataSource = new MatTableDataSource<StudentAdmissionFormData>();

  constructor(private service: QueryStudentDataService,
    private fb: FormBuilder,
    private reportService: SchollerReportService,
    private router: Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.onSearch();
  }

  onSearch() {
    this.service.getData(this.studentForm.value)
      .subscribe(
        data => {
          this.dataSource = new MatTableDataSource<StudentAdmissionFormData>(data);
          this.dataSource.paginator = this.paginator;
        }
      );
  }

  studentForm = this.fb.group({
    id: null,
    standard: null,
    year: null,
    name: null,
    fatherName: null,
    motherName: null,
  });


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  printSchollerReport(enrolmentNo: number): void {
    console.log('printSchollerReport: ', enrolmentNo);
    this.reportService.printReport(enrolmentNo);
  }

  editStudentDetail(enrolmentNo: number) {
    console.log('editStudentDetail');

    this.router.navigateByUrl("/udpate-student-data/" + enrolmentNo);
  }


  updateAdmissionStatus(enrolmentNo: number, admissionStatus: string) {
    console.log('updateAdmissionStatus');

    this.router.navigateByUrl("/update-student-admission-status/" + enrolmentNo + "/" + admissionStatus);
  }

  termiateStudent(enrolmentNo: number, name: string, fatherName: string, admissionClass: number) {
    console.log('updateAdmissionStatus');
    // <a href="{{element.id}}/{{element.name}}/{{element.fatherName}}/{{element.admissionClass}}">
    this.router.navigateByUrl("/terminate-student/" + enrolmentNo +
      "/" +
      name +
      "/" +
      fatherName +
      "/" +
      admissionClass
    );
  }

}
