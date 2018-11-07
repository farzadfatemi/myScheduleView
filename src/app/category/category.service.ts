import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Category} from '../domain/category';

const URL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories (){
    return this.http.get<any>(URL+'allCategories')
      .toPromise()
      .then(res => <Category[]>res)
      .then(data => { return data; });
  }
  addCategory(file) {
    console.log( JSON.stringify(file));

    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    return this.http.post((URL+'addCategory'),file, {headers: headers }).subscribe(res => <Category[]>res);
  }
}
