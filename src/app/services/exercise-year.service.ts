import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ExerciseYearService {

  constructor(
    private http: HttpClient
  ) { }

  getExerciseYears(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/exercise/years/get/exercise/years`)
  }

  createExerciseYear(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/exercise/years/create/exercise/year`, data)
  }

  deleteExerciseYear(data: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/exercise/years/delete/exercise/year/${data}`)
  }

  updateExerciseYear(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/exercise/years/update/exercise/year`, data)
  }

  validateExerciseYear(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/exercise/years/validate/exercise/year/${data}`)
  }
}
