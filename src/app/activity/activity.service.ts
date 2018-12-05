import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Activity} from '../domain/activity';
import {catchError} from 'rxjs/operators';
import {Category} from '../domain/category';

const URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ActivityService { 

  constructor(private http: HttpClient) { }
  
  getAllActivities (){
    return this.http.get<any>(URL+'allActivities')
      .toPromise()
      .then(res => <Activity[]>res)
      .then(data => { return data; });
  }
  getAllActivityCat (){
    return this.http.get<any>(URL+'allActivityCat')
      .toPromise()
      .then(res => <Category[]>res)
      .then(data => { return data; });
  }
  addActivity(file) {
    console.log( JSON.stringify(file));

    let response = '';
    // console.log( JSON.stringify(file));
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    return this.http.post<Activity>((URL + 'addActivity'), file, {headers: headers}).pipe(
      catchError(err => err )
    );
  }
}
