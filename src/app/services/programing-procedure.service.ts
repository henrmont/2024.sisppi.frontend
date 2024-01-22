import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProgramingProcedureService {

  constructor(
    private http: HttpClient
  ) { }

  getProgramingProcedures(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/programing/procedures/get/programing/procedures/${data}`)
  }

  addProgramingProcedure(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/programing/procedures/add/programing/procedure`, data)
  }

  amountProgramingProcedure(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/programing/procedures/amount/programing/procedure`, data)
  }

  typeProgramingProcedure(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/programing/procedures/type/programing/procedure`, data)
  }

  removeProgramingProcedure(data: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/programing/procedures/remove/programing/procedure/${data}`)
  }
}
