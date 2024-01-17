import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ModalityService {

  constructor(
    private http: HttpClient
  ) { }

  getModalities(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/modalities/get/modalities`)
  }
}
