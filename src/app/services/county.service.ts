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

  createCounty(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/counties/create/county`, data)
  }

  deleteCounty(data: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/counties/delete/county/${data}`)
  }

  updateCounty(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/counties/update/county`, data)
  }
}
