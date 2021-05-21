import { Injectable, ErrorHandler } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { Observable, of, from } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { StudentAdmissionFormData } from './student-admission-form/student-admission-form-data';
import { HttpClient, HttpHeaders, 
 } from '@angular/common/http';
import { ExceptionHandle } from './utils/exception-handle';
import { NetworkConfig, ApiConfig } from './utils/NetworkConfig';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StudentAdmissionServiceService {
  private axiosClient: AxiosInstance;
  private errorHandler: ErrorHandler;
  private studentUrl = NetworkConfig.url + ApiConfig.createStudent;
  
  // url + ApiConfig.updateStudentAdmissionStatus;

  constructor(errorHandler: ErrorHandler,
    private http: HttpClient, ) {

    this.errorHandler = new ExceptionHandle();
  }

  createStudentData(studentAdmissionFormData: StudentAdmissionFormData): Observable<any> {
    return this.http.post<StudentAdmissionFormData>(this.studentUrl, studentAdmissionFormData, httpOptions)
      .pipe(
        catchError(this.handleError<StudentAdmissionFormData>('addHero'))
      );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

