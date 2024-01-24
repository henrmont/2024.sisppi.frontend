import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MinisterialOrdinaceDestinationService {

  constructor(
    private http: HttpClient
  ) { }

  getMinisterialOrdinaceDestinations(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/ministerial/ordinace/destinations/get/ministerial/ordinace/destinations/${data}`)
  }

  addMinisterialOrdinaceDestination(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/ministerial/ordinace/destinations/add/ministerial/ordinace/destination`, data)
  }

  valueMinisterialOrdinaceDestination(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/ministerial/ordinace/destinations/value/ministerial/ordinace/destination`, data)
  }

  removeMinisterialOrdinaceDestination(data: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/ministerial/ordinace/destinations/remove/ministerial/ordinace/destination/${data}`)
  }
}
