import { NgModule } from '@angular/core';

import { MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  
} from '@angular/material'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';



const modules = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatGridListModule,
  MatPaginatorModule
];

@NgModule({
  imports: [
    ... modules
  ],
  exports: [
   ... modules
  ]
})
export class MaterialModule {};


