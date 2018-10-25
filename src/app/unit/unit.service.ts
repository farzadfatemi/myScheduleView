import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

}
