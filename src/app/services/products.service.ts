import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getData() : Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }  
}
