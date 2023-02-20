import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, login , registrasi } from '../auth.model';
import { catchError, map, Observable, of, pipe, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { RegistrasiComponent } from '../registrasi/registrasi.component';


const auth_API ="http://localhost:1000/";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http:HttpClient,private cookieservice:CookieService) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${auth_API}login`, {
      username,
      password
    }, httpOptions);
  }

  registrasi(nama_lengkap: string, username: string, alamat_email: string, no_telepon:string, buat_password: string,konfirmasi_password: string): Observable<any> {
    return this.http.post(`${auth_API}registrasi`,{ nama_lengkap,username,alamat_email,buat_password,konfirmasi_password}, httpOptions)
  }

  logout():Observable<any>{
    return this.http.post(`${auth_API}logout`,{}, httpOptions)
    .pipe (
      catchError(error => {
        console.log(error);
        return of (null);
      })
    )
  }
  setToken(token:string):void{
    this.cookieservice.set('token',token);
  }

  gettoken():string{
    return this.cookieservice.get('token')
  }

  removetoken():void{
    this.cookieservice.delete('token')
  }

}


