import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MinisterialOrdinaceService {

  constructor(
    private http: HttpClient
  ) { }

  getMinisterialOrdinaces(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/ministerial/ordinaces/get/ministerial/ordinaces`)
  }

  createMinisterialOrdinace(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/ministerial/ordinaces/create/ministerial/ordinace`, data)
  }

  deleteMinisterialOrdinace(data: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/ministerial/ordinaces/delete/ministerial/ordinace/${data}`)
  }

  updateMinisterialOrdinace(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/ministerial/ordinaces/update/ministerial/ordinace`, data)
  }

  validateMinisterialOrdinace(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/ministerial/ordinaces/validate/ministerial/ordinace/${data}`)
  }

  attachMinisterialOrdinace(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/ministerial/ordinaces/attach/ministerial/ordinace`, data)
  }
}
