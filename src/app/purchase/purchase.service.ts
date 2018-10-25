import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Purchase} from '../domain/purchase';

const URL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }

  getAllPurchases() {
    return this.http.get<any>(URL+'allPurchases')
      .toPromise()
      .then(res => <Purchase[]>res)
      .then(data => { return data; });
  }
  addPurchases(file) {
    // alert( JSON.stringify(file));

    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    return this.http.post((URL+'addPurchase'),file, {headers: headers }).subscribe(res => <Purchase[]>res);
  }
}
