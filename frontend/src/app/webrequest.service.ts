import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebrequestService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }
  // tslint:disable-next-line:typedef
  get(url: string){
    return this.http.get(`${this.ROOT_URL}/${url}`);
  }
  // tslint:disable-next-line:ban-types typedef
  post(url: string, payload: Object){
    return this.http.post(`${this.ROOT_URL}/${url}`, payload);
  }

  // tslint:disable-next-line:ban-types typedef
  patch(url: string, payload: Object){
    return this.http.patch(`${this.ROOT_URL}/${url}`, payload);
  }
  // tslint:disable-next-line:typedef
  delete(url: string){
    return this.http.delete(`${this.ROOT_URL}/${url}`);
  }
}
