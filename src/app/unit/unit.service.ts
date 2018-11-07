import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Unit} from '../domain/unit';

const URL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http: HttpClient) { }

  getAllUnits() {
    return this.http.get<any>(URL+'allUnits')
      .toPromise()
      .then(res => <Unit[]>res)
      .then(data => { return data; });
  }
  addUnit(file) {
    console.log( JSON.stringify(file));

    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    return this.http.post((URL+'addUnit'),file, {headers: headers }).subscribe(res => <Unit[]>res);
  }
}
