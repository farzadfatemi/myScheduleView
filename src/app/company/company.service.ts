import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Company} from '../domain/company';

const URL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getAllCompanys() {
    return this.http.get<any>(URL+'allCompanys')
      .toPromise()
      .then(res => <Company[]>res)
      .then(data => { return data; });
  }
  addCompany(file) {
    console.log( JSON.stringify(file));

    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    return this.http.post((URL+'addCompany'),file, {headers: headers }).subscribe(res => <Company[]>res);
  }
}
