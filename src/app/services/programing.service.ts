import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProgramingService {

  constructor(
    private http: HttpClient
  ) { }

  getProgramings(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/programings/get/programings`)
  }

  createPrograming(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/programings/create/programing`, data)
  }

  deletePrograming(data: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/programings/delete/programing/${data}`)
  }

  updatePrograming(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/programings/update/programing`, data)
  }

  validatePrograming(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/programings/validate/programing/${data}`)
  }

}
