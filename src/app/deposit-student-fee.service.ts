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
import { DepositFeeFormData } from './deposit-student-fee/data/depsit-fee-form-data';
import { Injectable, ErrorHandler } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { Observable, of, from } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ExceptionHandle } from './utils/exception-handle';

import { NetworkConfig, ApiConfig } from './utils/NetworkConfig';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DepositStudentFeeService {
  private studentUrl = NetworkConfig.url+ApiConfig.depositStudentFee;
  private exception : ExceptionHandle = new ExceptionHandle();

  constructor(private http: HttpClient, ) {
  }

  depositFee(depositFeeFormData: DepositFeeFormData): Observable<any> {
    
    return this.http.post<DepositFeeFormData>(this.studentUrl, depositFeeFormData, httpOptions)
      .pipe(
        catchError(this.exception.handleError<DepositFeeFormData>('Depoist fee'))
      );
  }
}


