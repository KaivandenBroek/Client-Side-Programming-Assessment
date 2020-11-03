import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Brand } from '../models/Brand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  URL: string = 'https://sandbox-api.brewerydb.com/v2/';
  APIkey: string = '659d5c6b8f3d2447f090119e48202fdb';

  constructor(private http: HttpClient) { }

  headerItems = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    //'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Headers': 'origin, Content-Type, accept',
  }

  header = {
    headers: new HttpHeaders(this.headerItems),
  };

  getBrands(): Observable<Brand[]> {
    this.URL = this.URL
    return this.http
      .get<Brand[]>(`${this.URL}beers?api_key=${this.APIkey}`, this.header)
  }
}
