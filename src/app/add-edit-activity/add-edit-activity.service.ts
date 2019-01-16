import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Activity} from '../domain/activity';
import {catchError} from 'rxjs/operators';

const URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class AddEditActivityService {

  constructor(private http: HttpClient) { }
  addActivity(file) {
    console.log("Try to call addAcitivity ===> "+ JSON.stringify(file));

    let response = '';
    // console.log( JSON.stringify(file));
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    return this.http.post<Activity>((URL + 'addActivity'), file, {headers: headers}).pipe(
      catchError(err => err )
    );
  }
}
