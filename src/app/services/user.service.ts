import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users/get/all`)
  }

  getUser(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users/get/${data}`)
  }
}
