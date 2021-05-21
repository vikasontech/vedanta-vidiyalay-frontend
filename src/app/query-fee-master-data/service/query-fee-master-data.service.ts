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
import { FeeDetails } from '../data/feeDetails';
import { HttpClient } from '@angular/common/http';
import { NetworkConfig, ApiConfig } from '../..//utils/NetworkConfig';


@Injectable({
  providedIn: 'root'
})
export class QueryFeeMasterDataService {
  
  constructor(private http: HttpClient) { }

   getData():Observable<any> {
    return this.http.get<FeeDetails[]>(NetworkConfig.url+ApiConfig.queryFeeDetails)
  }

}
