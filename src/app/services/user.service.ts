import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '../components/login-page/models/user-info.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headerOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  userLogin(data: UserInfo): Observable<any> {
    const url = `${environment.api}/login`;
    return this.httpClient
      .post(url, data, this.headerOptions)
      .pipe();
  }

  userRegister(data: UserInfo): Observable<any> {
    const url = `${environment.api}/register`;
    return this.httpClient
      .post(url, data, this.headerOptions)
      .pipe();
  }
}
