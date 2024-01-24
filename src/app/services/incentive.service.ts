import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class IncentiveService {

  constructor(
    private http: HttpClient
  ) { }

  getIncentives(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/incentives/get/incentives`)
  }

  createIncentive(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/incentives/create/incentive`, data)
  }

  deleteIncentive(data: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/incentives/delete/incentive/${data}`)
  }

  updateIncentive(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/incentives/update/incentive`, data)
  }

  validateIncentive(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/incentives/validate/incentive/${data}`)
  }

  attachIncentive(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/incentives/attach/incentive`, data)
  }
}
