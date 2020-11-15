import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BreweryBeers } from '../models/BreweryBeers';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  //using a weird cors website to bybass cors error
  URL: string = 'https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/';
  //URL: string = 'http://sandbox-api.brewerydb.com/v2/';
  APIkey: string = 'key=659d5c6b8f3d2447f090119e48202fdb';
  endPoint: string = '';

  constructor(private http: HttpClient) { }

  header = {
    headers: new HttpHeaders({
      'Content-Type': 'Content-Type: "application/x-www-form-urlencoded',
      'Accept': 'application/json',
  //    'Access-Control-Allow-Origin': 'https://sandbox-api.brewerydb.com/v2/',
  //    'Access-Control-Allow-Methods': 'get',
 //     'Access-Control-Allow-Headers': 'origin, Content-Type, accept'
    }),
  };

  getBreweriesData(): Observable<any> {  // all breweries
    this.endPoint = 'breweries?'
    this.URL = this.URL
    return this.http
      .get<any>(`${this.URL}${this.endPoint}${this.APIkey}`, this.header)
  }

  getBreweryLocData(brandId: string): Observable<any> {  // location of brewery
    this.endPoint = 'brewery/' + brandId + '/locations?'
    this.URL = this.URL
    return this.http
      .get<any>(`${this.URL}${this.endPoint}${this.APIkey}`, this.header)
  }

  getBreweryBeerData(brandId: string): Observable<any> {  // location of brewery
    this.endPoint = 'brewery/' + brandId + '/beers?'
    this.URL = this.URL
    return this.http
      .get<any>(`${this.URL}${this.endPoint}${this.APIkey}`, this.header)
  }
}
