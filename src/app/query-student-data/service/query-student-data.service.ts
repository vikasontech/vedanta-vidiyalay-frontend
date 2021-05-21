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
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentAdmissionFormData, StudentSearchFormData } from 'src/app/student-admission-form/student-admission-form-data';
import { NetworkConfig, ApiConfig } from 'src/app/utils/NetworkConfig';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryStudentDataService {

  constructor(private http: HttpClient) { }


  getData(studentData: StudentSearchFormData): Observable<any> {
    let params = new HttpParams()
      .set('enrolmentNo', this.convertToString(studentData.id))
      .set('standard', this.convertToString(studentData.standard))
      .set('year', '')
      .set('status', '')
      .set('name', this.convertNullToBlank(studentData.name))
      .set('fatherName', this.convertNullToBlank(studentData.fatherName))
      .set('motherName', this.convertNullToBlank(studentData.motherName));

    return this.http.get<StudentAdmissionFormData[]>(NetworkConfig.url + ApiConfig.queryStudentDeatails,
      { params: params });

    // return this.http.get<StudentAdmissionFormData[]>(
        // '../assets/student-data.json');
  }

  convertToString(num: number): string {
    return (num)?num+'':'';
  }

  convertNullToBlank(val: string): string {
    return (val || val === 'null') ? val : '';
  }

}


// return this.http.get<StudentAdmissionFormData[]>(
//   '../assets/data.json'