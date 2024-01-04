import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private http: HttpClient
  ) { }

  getFlashNotifications(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/notification/flash`)
  }

  getAllNotifications(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/notification/all`)
  }

  getUnreadNotifications(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/notification/unread`)
  }

  setReadNotifications(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/notification/read`)
  }
}
