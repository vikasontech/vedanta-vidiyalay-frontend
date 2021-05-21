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
import { StringUtils } from './utils/CommonUtils';

@Injectable({
  providedIn: 'root'
})
export class QueryDueFeeService {


  constructor(private http: HttpClient) { }

  getData(formData: StudentFeeDueVM):Observable<any> {

    let params = new HttpParams()
      .set('enrolmentNo', StringUtils.convertToString(formData.enrolmentNo))
      .set('standard', StringUtils.convertToString(formData.standard))
      .set('status', StringUtils.convertNullToBlank(formData.status))
      .set('name', StringUtils.convertNullToBlank(formData.name))
      .set('amount', StringUtils.convertToString(formData.amount))
      .set('fatherName', StringUtils.convertNullToBlank(formData.fatherName));

    return this.http.get<DueFeesDetailsData[]>(NetworkConfig.url + ApiConfig.searchFeeDue,
      {params: params});
    // return this.http.get<DueFeesDetailsData>('../assets/fee-due.data.json');
    
  }

}
