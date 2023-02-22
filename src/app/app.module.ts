import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataCalonMhsComponent } from './data-calon-mhs/data-calon-mhs.component';
import { LoginComponent } from './login/login.component';
import { InformasiComponent } from './informasi/informasi.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import { DataPribadiComponent } from './data-pribadi/data-pribadi.component';
import { Selanjutnya1Component } from './selanjutnya1/selanjutnya1.component';
import { RegistrasiComponent } from './registrasi/registrasi.component';
import { DataPendidikanComponent } from './data-pendidikan/data-pendidikan.component';
import { LupaPasswordComponent } from './lupa-password/lupa-password.component';
import { TentangKamiComponent } from './tentang-kami/tentang-kami.component';
import { ProfilPesertaComponent } from './profil-peserta/profil-peserta.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorkuInterceptor } from './interceptorku.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataCalonMhsComponent,
    LoginComponent,
    InformasiComponent,
    NavbarComponent,
    ProfilComponent,
    DataPribadiComponent,
    Selanjutnya1Component,
    RegistrasiComponent,
    DataPendidikanComponent,
    LupaPasswordComponent,
    TentangKamiComponent,
    ProfilPesertaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],

  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : InterceptorkuInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
