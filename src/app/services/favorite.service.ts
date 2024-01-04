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

  createFavorite(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/favorite/create`, data)
  }

  getFavorites(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/favorite/get/${id}`)
  }

  getLinks(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/link/all`)
  }
}
