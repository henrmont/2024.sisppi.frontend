import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(
    private http: HttpClient
  ) { }

  getMinisterialOrdinace(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/ministerial/ordinaces/get/ministerial/ordinace/${data}`)
  }

  getIncentive(data: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/incentives/get/incentive/${data}`)
  }

}
