import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Seller} from '../domain/seller';

const URL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  getAllSellers() {
    return this.http.get<any>(URL+'allSellers')
      .toPromise()
      .then(res => <Seller[]>res)
      .then(data => { return data; });
  }
  addSeller(file) {
    console.log( JSON.stringify(file));

    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    return this.http.post((URL+'addSeller'),file, {headers: headers }).subscribe(res => <Seller[]>res);
  }
}
