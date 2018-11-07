import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Manufacturer} from '../domain/manufacturer';

const URL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  constructor(private http: HttpClient) { }

  getAllManufacturers() {
    return this.http.get<any>(URL+'allManufacturers')
      .toPromise()
      .then(res => <Manufacturer[]>res)
      .then(data => { return data; });
  }
  addManufacturer(file) {
    console.log( JSON.stringify(file));

    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    return this.http.post((URL+'addManufacturer'),file, {headers: headers }).subscribe(res => <Manufacturer[]>res);
  }
}
