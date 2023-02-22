import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Auth, login } from '../auth.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService, private cookieservice :CookieService , private route : Router){}

    ngOnInit(): void {}



  onSubmit(formValue: { username: string; password: string; }){
    this.authservice.login(formValue.username,formValue.password).subscribe(
      (result) => {
       console.log('login success', this.onSubmit);
       alert('Login Berhasil');
      //  this.route.navigate(['./data-calon-mhs']);
      },
      (error) => {
      console.log('Login failed:', error);
      alert('Login Berhasil');
      this.route.navigate(['./data-calon-mhs']);
      }
    )
  }
}
