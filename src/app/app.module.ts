import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatSortModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { NameComponent } from './name/name.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { MyAddressFormComponent } from './my-address-form/my-address-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentAdmissionFormComponent } from './student-admission-form/student-admission-form.component';
import { HttpClientModule } from '@angular/common/http';
import { StepperExampleComponentComponent } from './stepper-example-component/stepper-example-component.component';
import { MatStepperModule } from '@angular/material/stepper';
import { DepositStudentFeeComponent } from './deposit-student-fee/deposit-student-fee.component';
import { ChangeStudentAdmissionStatusComponent } from './change-student-admission-status/change-student-admission-status.component';
import { QueryFeeMasterDataComponent } from './query-fee-master-data/query-fee-master-data.component';
import { UpdateStudentDetailsComponent } from './update-student-details/update-student-details.component';
import { QueryStudentDataComponent } from './query-student-data/query-student-data.component';
import { SetFeeMasterComponent } from './set-fee-master/set-fee-master.component';
import { QueryDueFeeComponent } from './query-due-fee/query-due-fee.component';
import { TerminateStudentComponent } from './terminate-student/terminate-student.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';

import { MatExpansionModule } from '@angular/material/expansion';

import { FormsModule } from '@angular/forms';
import { CreateStudentAccountComponent } from './create-student-account/create-student-account.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { initializer } from './utils/app-init';
import { CreateFineMasterComponent } from './create-fine-master/create-fine-master.component';
import { CreateFineRecordComponent } from './create-fine-record/create-fine-record.component';
import { QueryFineRecordComponent } from './query-fine-record/query-fine-record.component';
import { UpdateFineRecordComponent } from './update-fine-record/update-fine-record.component';
import { DepositFineComponent } from './deposit-fine/deposit-fine.component';
import { FeeDueRecalculateComponent } from './fee-due-recalculate/fee-due-recalculate.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { AuthRoutingModule } from './auth-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    NameComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    MyAddressFormComponent,
    StudentAdmissionFormComponent,
    StepperExampleComponentComponent,
    DepositStudentFeeComponent,
    ChangeStudentAdmissionStatusComponent,
    QueryFeeMasterDataComponent,
    UpdateStudentDetailsComponent,
    QueryStudentDataComponent,
    SetFeeMasterComponent,
    QueryDueFeeComponent,
    TerminateStudentComponent,
    DialogBoxComponent,
    CreateStudentAccountComponent,
    CreateFineMasterComponent,
    CreateFineRecordComponent,
    QueryFineRecordComponent,
    UpdateFineRecordComponent,
    DepositFineComponent,
    FeeDueRecalculateComponent,
    WelcomeComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AuthRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatStepperModule,
    CommonModule,
    MatDialogModule,
    FormsModule,
    MatExpansionModule,
    
  ],
  providers: [],
  entryComponents: [
    DialogBoxComponent
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
