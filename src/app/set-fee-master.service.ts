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
import { FeeDetailsVM } from './set-fee-master/vm/fee-details-vm';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NetworkConfig, ApiConfig } from './utils/NetworkConfig';
import { ExceptionHandle } from './utils/exception-handle';
import { tap, catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SetFeeMasterService {
  private studentUrl = NetworkConfig.url+ApiConfig.udpateFeeMaster;
  private exception : ExceptionHandle = new ExceptionHandle();

  constructor(private http: HttpClient) { }

  update(updateFormModel: FeeDetailsVM): Observable<any> {
    return this.http.post<FeeDetailsVM>(this.studentUrl, updateFormModel, httpOptions)
    .pipe(
      catchError(this.exception.handleError<FeeDetailsVM>('Update Fee Details'))
    );
  }
}
