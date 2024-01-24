import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class IncentiveDestinationService {

  constructor(
    private http: HttpClient
  ) { }

  getIncentiveDestinations(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/incentive/destinations/get/incentive/destinations/${data}`)
  }

  addIncentiveDestination(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/incentive/destinations/add/incentive/destination`, data)
  }

  valueIncentiveDestination(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/incentive/destinations/value/incentive/destination`, data)
  }

  removeIncentiveDestination(data: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/incentive/destinations/remove/incentive/destination/${data}`)
  }
}
