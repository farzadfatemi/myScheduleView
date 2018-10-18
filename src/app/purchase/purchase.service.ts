import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Purchase} from '../domain/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }

  getAllPurchases() {
    return this.http.get<any>('http://localhost:8080/allPurchases')
      .toPromise()
      .then(res => <Purchase[]>res)
      .then(data => { return data; });
  }
}
