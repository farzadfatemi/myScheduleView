import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
}
