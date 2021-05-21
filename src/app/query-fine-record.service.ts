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
import { DueFeesDetailsData, StudentFeeDueVM } from './student-admission-form/student-admission-form-data';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NetworkConfig, ApiConfig } from './utils/NetworkConfig';
import { SearchFineRecordModel } from './query-fine-record/query-fine-record.component';
import { StringUtils } from './utils/CommonUtils';

@Injectable({
  providedIn: 'root'
})
export class QueryFineRecordService {

  constructor(private http: HttpClient) { }

  getData(formData: SearchFineRecordModel): Observable<any> {

    let params = new HttpParams()
      .set('enrolmentNo', StringUtils.convertToString(formData.enrolmentNo))
      .set('fineType', StringUtils.convertNullToBlank(formData.fineType))

    return this.http.get<SearchFineRecordModel[]>(NetworkConfig.url + ApiConfig.searchFineRecord,
      { params: params });
    // return this.http.get<DueFeesDetailsData>('../assets/fee-due.data.json');
  }
}     
