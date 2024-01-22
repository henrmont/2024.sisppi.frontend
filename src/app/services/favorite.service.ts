import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(
    private http: HttpClient
  ) { }

  getFavorites(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/favorites/get`)
  }

  checkFavorite(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/favorites/check/${id}`)
  }

  addFavorite(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/favorites/add/${data}`)
  }

  removeFavorite(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/favorites/remove/${data}`)
  }
}
