import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private serverUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  sendData(data: any) {
    return this.http.post(`${this.serverUrl}/getUserData`, data);
  }

  saveRSVP(data: any) {
    return this.http.post(`${this.serverUrl}/save`, data);
  }
}
