import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TestSuite } from '../shared/test-suite';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {TestRepo} from "./test-repo";

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  public API = 'http://54.38.54.196:8081';
  public TESTSUITE_API = this.API + '/test-suite';
  public TESTREPO_API = this.API + '/test-repo';

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getTestSuites(): Observable<TestSuite> {
    return this.http.get<TestSuite>(this.TESTSUITE_API + '/list')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  getTestSuitesByRepo(id:string): Observable<TestSuite> {
    return this.http.get<TestSuite>(this.TESTSUITE_API + '/list/'+id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  getTestRepos(): Observable<TestRepo> {
    return this.http.get<TestRepo>(this.TESTREPO_API + '/list')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
