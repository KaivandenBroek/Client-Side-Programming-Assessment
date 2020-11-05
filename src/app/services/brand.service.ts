import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Brand } from '../models/Brand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  //using a weird cors website to bybass cors error
  URL: string = 'https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/';
  APIkey: string = 'key=659d5c6b8f3d2447f090119e48202fdb';
  endPoint: string = ''

  constructor(private http: HttpClient) { }

  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'https://sandbox-api.brewerydb.com/v2/',
      'Access-Control-Allow-Methods': 'get',
      'Access-Control-Allow-Headers': 'origin, Content-Type, accept'
    }),
  };

  getBrands(): Observable<any> {
    this.endPoint = 'breweries?'
    this.URL = this.URL
    return this.http
      .get<any>(`${this.URL}${this.endPoint}${this.APIkey}`, this.header)
  }

  getBrands4(): Observable<any> {
    this.endPoint = 'brewery/BznahA/locations?'
    this.URL = this.URL
    return this.http
      .get<any>(`${this.URL}${this.endPoint}${this.APIkey}`, this.header)
  }

  getBrands3(): Observable<Brand> {
    this.URL = this.URL
    return this.http
      .get<Brand>(`${this.URL}breweries?key=${this.APIkey}`, this.header)
  }

  getBrands2() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'get');
    headers.append('Access-Control-Allow-Headers', 'origin, Content-Type, accept');
    headers.append('Access-Control-Allow-Origin', 'https://sandbox-api.brewerydb.com/v2/');
    //return this.http.get(`${this.URL}breweries?key=${this.APIkey}`, this.header)
    return this.http.get(`${this.URL}breweries?key=${this.APIkey}`, { headers: headers })
  }
}
