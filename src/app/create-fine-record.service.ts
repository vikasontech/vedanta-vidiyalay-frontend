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
import { CreateFineMasterModel } from './create-fine-master/create-fine-master.component';
import { Observable } from 'rxjs';
import { ExceptionHandle } from './utils/exception-handle';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { NetworkConfig, ApiConfig } from './utils/NetworkConfig';
import { Option } from './combo-boxes';
import { CreateFineRecordModel } from './create-fine-record/create-fine-record.component';



@Injectable({
  providedIn: 'root'
})
export class CreateFineRecordService {
  private exception: ExceptionHandle = new ExceptionHandle();

  constructor(private http: HttpClient) {
  }

  save(formData: CreateFineRecordModel): Observable<any> {

    return this.http.post<CreateFineRecordModel>(NetworkConfig.url + ApiConfig.createFineRecord, formData, httpOptions)
      .pipe(
        catchError(this.exception.handleError<CreateFineRecordModel>(''))
      );
  }

}


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};