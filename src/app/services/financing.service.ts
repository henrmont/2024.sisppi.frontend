import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FinancingService {

  constructor(
    private http: HttpClient
  ) { }

  getFinancings(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/financings/get/financings`)
  }
}
