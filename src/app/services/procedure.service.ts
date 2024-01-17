import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  constructor(
    private http: HttpClient
  ) { }

  importProcedures(file: File): Observable<any> {
    const formData = new FormData()
    formData.append('file', file)
    return this.http.post<any>(`${environment.apiUrl}/procedures/import/procedures`, formData)
  }
}
