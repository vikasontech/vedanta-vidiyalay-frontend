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
import { StudentAdmissionFormData, SearchData, BasicResponse } from 'src/app/student-admission-form/student-admission-form-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NetworkConfig, ApiConfig } from 'src/app/utils/NetworkConfig';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ExceptionHandle } from 'src/app/utils/exception-handle';


@Injectable({
  providedIn: 'root'
})
export class UpdateStudentDetailsService {
  private exception = new ExceptionHandle();
  
  constructor(private http: HttpClient) { }
  
  searchStudentData(request: SearchData): Observable<any> {
  // return this.http.get("../../assets/one-student-detail.json")
    return this.http.get(NetworkConfig.url + ApiConfig.queryStudentDeatailById + request.enrolmentNo)
    .pipe(
      catchError(this.exception.handleError('Error'))
    );
  }

  updateStudentData(request: StudentAdmissionFormData, originalData: StudentAdmissionFormData): Observable<any> {
    request.id = originalData.id;
    request.admissionStatus = originalData.admissionStatus;
    return this.http.post(NetworkConfig.url + ApiConfig.updateSTudentData, request);

  }
}

