import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SubgroupService {

  constructor(
    private http: HttpClient
  ) { }

  getSubgroups(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/subgroups/get/subgroups`)
  }
}
