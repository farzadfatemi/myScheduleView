import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Activity} from '../domain/activity';

const URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class AddEditActivityService {

  constructor(private http: HttpClient) { }
  addActivity(file) {
    console.log("Try to call addAcitivity ===> "+ JSON.stringify(file));

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');

    return this.http.post((URL+'addActivity'),file, {headers: headers }).subscribe(res => <Activity[]>res);

    // return this.http.post<Activity>((URL + 'addCompany'), file, {headers: headers}).pipe(
    //   catchError(err => err )
    // );
  }

}
