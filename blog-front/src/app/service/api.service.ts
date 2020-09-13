import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const API_URL = environment.api.base;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public Get(endpoint: string): Observable<any> {
    return this.http
      .get(API_URL + endpoint)
      .pipe(
        map(response => {
          return JSON.stringify(response);
        })
      );
  }

  public Post(endpoint: string, data: any): Observable<any> {
    return this.http
      .post(API_URL + endpoint, data);
  }

  public Delete(endpoint: string) {
    return this.http
      .delete(API_URL + endpoint);
  }
}
