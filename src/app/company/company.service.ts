import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Company} from '../domain/company';
import {catchError} from 'rxjs/operators';

const URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {
  }

  getAllCompanies() {
    return this.http.get<any>(URL + 'allCompanies')
      .toPromise()
      .then(res => <Company[]>res)
      .then(data => {
        return data;
      });
  }

  addCompany(file) {
    let response = '';
    // console.log( JSON.stringify(file));
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    return this.http.post<Company>((URL + 'addCompany'), file, {headers: headers}).pipe(
      catchError(err => err )
    );

  }
  // private static handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // };
}
