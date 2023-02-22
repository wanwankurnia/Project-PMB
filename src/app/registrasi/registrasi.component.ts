import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { registrasi } from '../auth.model';

interface Registrasi {
  nama_lengkap : string;
  username : string;
  alamat_email : string ;
  no_telepon : string;
  buat_password : string;
  konfirmasi_password : string;
}

@Component({
  selector: 'app-registrasi',
  templateUrl: './registrasi.component.html',
  styleUrls: ['./registrasi.component.css']
})
export class RegistrasiComponent implements OnInit {

  registrasiform!:FormGroup;
  

    constructor(private formbuilder: FormBuilder, private authservice: AuthService, private router : Router){}

    ngOnInit(): void {
        this.registrasiform = this.formbuilder.group({
          nama_lengkap:['',Validators.required],
          username:['',Validators.required],
          alamat_email:['', [Validators.required, Validators.email]],
          no_telepon:['',Validators.required],
          buat_password:['',[Validators.required, Validators.minLength(8)]],
          konfirmasi_password: ['', Validators.required]
        });

      }

    onSubmit(formValue: {nama_lengkap:string,username:string,alamat_email:string,no_telepon:string,buat_password:string,konfirmasi_password:string}){
      if (!formValue.nama_lengkap || !formValue.username || !formValue.alamat_email || !formValue.no_telepon || !formValue.buat_password || !formValue.konfirmasi_password) {
        // alert('Silahkan lengkapi semua kolom untuk melakukan registrasi');
        window.alert('Registrasi Berhasil');
        return;
      }
      
      this.authservice.registrasi(formValue.nama_lengkap,formValue.username,formValue.alamat_email,formValue.no_telepon,formValue.buat_password, formValue.konfirmasi_password).subscribe(() => {
        window.alert('Registrasi Berhasil');
        this.router.navigate(['/auth/login']);
        this.registrasiform.reset();
      });

    }

}
