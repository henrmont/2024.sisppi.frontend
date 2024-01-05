import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CountyService {

  constructor(
    private http: HttpClient
  ) { }

  getCounties(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/counties/get/counties`)
  }

  getCounty(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/counties/get/county/${data}`)
  }
}
