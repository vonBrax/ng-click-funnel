import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getJson(url: string): Promise<any> {
    return this.http.get(url).toPromise();
  }

  getJsonp(url: string): Promise<any> {
    return this.http.jsonp(url + '?callback=JSONP_CALLBACK', 'callback' ).toPromise();
  }



}
