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
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatTab, MatPaginator } from '@angular/material';
import { FeeDetails } from './data/feeDetails';
import { QueryFeeMasterDataService } from './service/query-fee-master-data.service';

@Component({
  selector: 'app-query-fee-master-data',
  templateUrl: './query-fee-master-data.component.html',
  styleUrls: ['./query-fee-master-data.component.css']
})
export class QueryFeeMasterDataComponent implements OnInit {

  displayedColumns: string[] = ['id', 'standard', 'year', 'amount', 'description', 'isActive'];
  dataSource = new MatTableDataSource<FeeDetails>();

  constructor(private service: QueryFeeMasterDataService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.service.getData().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<FeeDetails>(data);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
