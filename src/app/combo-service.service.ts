import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NetworkConfig, ApiConfig } from './utils/NetworkConfig';
import { Option } from './combo-boxes';



@Injectable({
  providedIn: 'root'
})
export class ComboServiceService {

  constructor(private http: HttpClient) {
  }
  required = new HttpParams().set('isOptional', 'false');
  notRequired = new HttpParams().set('isOptional', 'true');

  getFineType(isOptional: boolean): Observable<any> {
    return this.http.get<Option[]>(NetworkConfig.url + ApiConfig.combosData,
      { params: (isOptional) ? this.notRequired.set('comboType','FINE_TYPE') 
        : this.required.set('comboType','FINE_TYPE') });
  }

  comboTransactionType(isOptional: boolean): Observable<any> {
    return this.http.get<Option[]>(NetworkConfig.url + ApiConfig.combosData,
      { params: (isOptional) ? this.required.set('comboType','TRANSACTION_TYPE') 
        : this.notRequired.set('comboType','TRANSACTION_TYPE') });
  }


}
