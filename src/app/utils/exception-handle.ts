import { Observable, of } from 'rxjs';
import { Response } from '../student-admission-form/student-admission-form-data';

export class ExceptionHandle {

  public handleResponse<T>(operation = 'operation', result?: T) {
    // return ((response))
  }

  errorHandler: Response = new Response();
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  public handleError<T>(operation = 'operation', result?: T) {
 
    return (error: any): Observable<any> => {

      console.log('this is error message');
      // TODO: send the error to remote logging infrastructure
      
      console.error(error); // log to console instead

      // this.errorHandler.error.title = error.error.title;
      this.errorHandler.status = error.error.status;
      this.errorHandler.message = error.error.message;
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      // return of(result as T);
      return of(this.errorHandler);
    };
  }
}


