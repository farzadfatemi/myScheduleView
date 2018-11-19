import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Branch} from '../domain/branch';

const URL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http: HttpClient) { }

  getAllBranchs() {
    return this.http.get<any>(URL+'allBranchs')
      .toPromise()
      .then(res => <Branch[]>res)
      .then(data => { return data; });
  }
  addBranch(file) {
    console.log( JSON.stringify(file));

    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    return this.http.post((URL+'addBranch'),file, {headers: headers }).subscribe(res => <Branch[]>res);
  }
}
