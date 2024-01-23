import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  constructor(
    private http: HttpClient
  ) { }

  getCompetencies(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/competencies/get/competencies`)
  }

  getValidCompetencies(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/competencies/get/valid/competencies`)
  }

  deleteCompetence(data: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/competencies/delete/competence/${data}`)
  }

  validateCompetence(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/competencies/validate/competence/${data}`)
  }
}
