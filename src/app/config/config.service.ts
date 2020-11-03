import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  private beerUrl = '659d5c6b8f3d2447f090119e48202fdb';

  getBrands(): Observable<any[]> {
    return this.http.get<any[]>(this.beerUrl)
  }
}
