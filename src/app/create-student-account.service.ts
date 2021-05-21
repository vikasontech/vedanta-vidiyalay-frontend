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
import { HttpClient } from '@angular/common/http';
import { NetworkConfig, ApiConfig } from './utils/NetworkConfig';
import { CreateStudentAccountVM } from './student-admission-form/student-admission-form-data';
import { catchError } from 'rxjs/operators';
import { ExceptionHandle } from './utils/exception-handle';

@Injectable({
  providedIn: 'root'
})
export class CreateStudentAccountService {
  private exception = new ExceptionHandle();

  constructor(private http: HttpClient) { }

  create(request: CreateStudentAccountVM):Observable<any> {
    return this.http.post(NetworkConfig.url + ApiConfig.createStudentAccount, request)
    .pipe(
      catchError(this.exception.handleError<CreateStudentAccountVM>('Create student account'))
    );

  }
}
