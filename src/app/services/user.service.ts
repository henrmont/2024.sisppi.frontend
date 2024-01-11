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
    return this.http.get<any>(`${environment.apiUrl}/users/get/users`)
  }

  getUsersWithoutRole(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users/get/users/without/role/${data}`)
  }

  getUsersWithoutPermission(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users/get/users/without/permission/${data}`)
  }

  getUser(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users/get/user/${data}`)
  }

  getEmptyManagerUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users/get/empty/manager`)
  }

  changeEmptyManagerUser(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users/change/empty/manager/${data}`)
  }

  changeNoEmptyManagerUser(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/users/change/no/empty/manager/`, data)
  }

  createUser(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/users/create/user`, data)
  }

  updateUser(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/users/update/user`, data)
  }

  deleteUser(data: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/users/delete/user/${data}`)
  }
}
