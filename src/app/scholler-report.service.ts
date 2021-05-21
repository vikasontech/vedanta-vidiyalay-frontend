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
import { HttpClient } from '@angular/common/http';
import { NetworkConfig, ApiConfig } from './utils/NetworkConfig';

@Injectable({
  providedIn: 'root'
})
export class SchollerReportService {
  constructor(private http: HttpClient) { }

  printReport(enrolmentNo: any) {
    var urlTemp = NetworkConfig.url + ApiConfig.printJasperReport;
    var url = urlTemp.replace("{enrolmentNo}", enrolmentNo);
    console.log('url: ', url);
    this.http
      .get(url, {
        responseType: "blob"
      }).subscribe(res => {
        console.log('start download:', res);
        var url = window.URL.createObjectURL(res);
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = 'scholler-report-enrolment-'+enrolmentNo+'.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove(); // remove the element
      }, error => {
        console.log('download error:', JSON.stringify(error));
      }, () => {
        console.log('Completed file download.')
      });

  }
}
