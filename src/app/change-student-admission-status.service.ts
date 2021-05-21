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
import { ChangeStudentAdmissionStatusData } from './change-student-admission-status/data/change-student-admission-status-data';

import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
import { NetworkConfig, ApiConfig } from '../app/utils/NetworkConfig';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ExceptionHandle } from './utils/exception-handle';
import { StudentAdmissionFormData } from './student-admission-form/student-admission-form-data';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ChangeStudentAdmissionStatusService {
  private exception = new ExceptionHandle();
  private url = NetworkConfig.url + ApiConfig.updateStudentAdmissionStatus;

  constructor(private http: HttpClient) { }

  updateAdmissionStatus(formdata: ChangeStudentAdmissionStatusData): Observable<any> {
    var result: any;
    result = this.http.post<StudentAdmissionFormData>(this.url, formdata, httpOptions)
      .pipe(
        catchError(
          result = this.exception.handleError<StudentAdmissionFormData>('update student admission data')
        )
      );
    console.log('error details: ', result);
    return result;
  }

}
