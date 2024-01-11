import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private http: HttpClient
  ) { }

  getRoles(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/roles/get/roles`)
  }

  getRole(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/roles/get/role/${data}`)
  }

  getPermissions(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/roles/get/permissions`)
  }

  getPermission(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/roles/get/permission/${data}`)
  }

  getWithoutPermissions(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/roles/get/without/permissions/${data}`)
  }

  createRole(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/roles/create/role/`, data)
  }

  addUserRole(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/roles/add/user/role/`, data)
  }

  deleteUserRole(data: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/roles/delete/user/role/${data.role}/${data.info.id}`)
  }

  deleteRole(data: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/roles/delete/role/${data}`)
  }

  updateRole(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/roles/update/role`, data)
  }

  addUserPermission(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/roles/add/user/permission/`, data)
  }

  removeUserPermission(data: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/roles/remove/user/permission/${data.permission}/${data.info.id}`)
  }
}
