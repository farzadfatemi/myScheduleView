import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../domain/product';

const URL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<any>(URL+'allProducts')
      .toPromise()
      .then(res => <Product[]>res)
      .then(data => { return data; });
  }
  addPruduct(file) {
    // alert( JSON.stringify(file));

    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    return this.http.post((URL+'addProduct'),file, {headers: headers }).subscribe(res => <Product[]>res);
  }
}
