import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

}
