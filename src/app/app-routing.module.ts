import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeStudentAdmissionStatusComponent } from './change-student-admission-status/change-student-admission-status.component';
import { CreateFineMasterComponent } from './create-fine-master/create-fine-master.component';
import { CreateFineRecordComponent } from './create-fine-record/create-fine-record.component';
import { CreateStudentAccountComponent } from './create-student-account/create-student-account.component';
import { DepositFineComponent } from './deposit-fine/deposit-fine.component';
import { DepositStudentFeeComponent } from './deposit-student-fee/deposit-student-fee.component';
import { FeeDueRecalculateComponent } from './fee-due-recalculate/fee-due-recalculate.component';
import { QueryDueFeeComponent } from './query-due-fee/query-due-fee.component';
import { QueryFeeMasterDataComponent } from './query-fee-master-data/query-fee-master-data.component';
import { QueryFineRecordComponent } from './query-fine-record/query-fine-record.component';
import { QueryStudentDataComponent } from './query-student-data/query-student-data.component';
import { SetFeeMasterComponent } from './set-fee-master/set-fee-master.component';
import { StudentAdmissionFormComponent } from './student-admission-form/student-admission-form.component';
import { TerminateStudentComponent } from './terminate-student/terminate-student.component';
import { UpdateFineRecordComponent } from './update-fine-record/update-fine-record.component';
import { UpdateStudentDetailsComponent } from './update-student-details/update-student-details.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'fee-deposit-form', component: DepositStudentFeeComponent },
  { path: 'new-admission-form', component: StudentAdmissionFormComponent },
  { path: 'update-student-admission-status', component: ChangeStudentAdmissionStatusComponent },
  { path: 'update-student-admission-status/:id/:admissionStatus', component: ChangeStudentAdmissionStatusComponent },
  { path: 'query-fee-master-data', component: QueryFeeMasterDataComponent },
  { path: 'udpate-student-data', component: UpdateStudentDetailsComponent },
  { path: 'udpate-student-data/:id', component: UpdateStudentDetailsComponent },
  { path: 'search-student-data', component: QueryStudentDataComponent },
  { path: 'set-fee-master', component: SetFeeMasterComponent },
  { path: 'query-due-fee-data', component: QueryDueFeeComponent },
  { path: 'terminate-student/:id/:name/:fatherName/:standard', component: TerminateStudentComponent },
  { path: 'create-student-account', component: CreateStudentAccountComponent },
  { path: 'create-fine-master', component: CreateFineMasterComponent },
  { path: 'create-fine-record', component: CreateFineRecordComponent },
  { path: 'query-fine-record', component: QueryFineRecordComponent },
  { path: 'update-fine-record/id/:id/enrolment-no/:enrolmentNo', component: UpdateFineRecordComponent },
  { path: 'deposit-fine-record', component: DepositFineComponent },
  { path: 'fee-due-recalculate', component: FeeDueRecalculateComponent },

];

@NgModule({
  // imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
