import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrganizationFormService {

  constructor(
    private http: HttpClient
  ) { }

  getOrganizationForms(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/organization/forms/get/organization/forms`)
  }
}
