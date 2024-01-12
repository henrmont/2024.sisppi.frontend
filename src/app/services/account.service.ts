import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  createAccount(data: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.apiUrl}/account/create`, data)
  }

  loginAccount(data: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.apiUrl}/auth/login`, data)
  }

  getAccount(data: Account): Observable<Account> {
    return this.http.get<Account>(`${environment.apiUrl}/account/get/${data}`)
  }

  getAccountPermissions(): Observable<Account> {
    const requestOptions = {
      'Authorization': `Bearer ${window.localStorage.getItem('token')}`
    }
    return this.http.get<Account>(`${environment.apiUrl}/auth/permissions`, {headers: requestOptions})
  }

  refreshToken(): Observable<any> {
    const requestOptions = {
      'Authorization': `Bearer ${window.localStorage.getItem('token')}`
    }
    return this.http.get<any>(`${environment.apiUrl}/auth/refresh`, {headers: requestOptions})
  }

  getCredentials(): Observable<any> {
    const requestOptions = {
      'Authorization': `Bearer ${window.localStorage.getItem('token')}`
    }
    return this.http.get<any>(`${environment.apiUrl}/auth/me`, {headers: requestOptions})
  }
}
