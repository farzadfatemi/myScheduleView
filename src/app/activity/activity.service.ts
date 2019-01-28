import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
      .then(res =>  res  )
      .then(data => {
        // console.log("============ll>>"+JSON.stringify(data));
        return data; });
  }
  getAllActivityCat (){
    return this.http.get<any>(URL+'allActivityCat')
      .toPromise()
      .then(res => <Category[]>res)
      .then(data => { return data; });
  }

}
