import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { DataCalonMhsComponent } from './data-calon-mhs/data-calon-mhs.component';
import { DataPendidikanComponent } from './data-pendidikan/data-pendidikan.component';
import { DataPribadiComponent } from './data-pribadi/data-pribadi.component';
import { HomeComponent } from './home/home.component';
import { InformasiComponent } from './informasi/informasi.component';
import { LoginComponent } from './login/login.component';
import { LupaPasswordComponent } from './lupa-password/lupa-password.component';
import { ProfilPesertaComponent } from './profil-peserta/profil-peserta.component';
import { ProfilComponent } from './profil/profil.component';
import { RegistrasiComponent } from './registrasi/registrasi.component';
import { Selanjutnya1Component } from './selanjutnya1/selanjutnya1.component';
import { TentangKamiComponent } from './tentang-kami/tentang-kami.component';

const routes: Routes = [
{
  path:'home', component : HomeComponent
},
{
  path : 'login', component : LoginComponent
},
{
  path : 'informasi', component : InformasiComponent
},
{
  path : 'profil', component : ProfilComponent
},
{
  path : 'data-calon-mhs', component : DataCalonMhsComponent
},
{
  path : 'data-pribadi', component : DataPribadiComponent
},
{
  path : 'selanjutnya1', component : Selanjutnya1Component
},
{
  path : 'registrasi', component : RegistrasiComponent
},
{
  path : 'data-pendidikan', component : DataPendidikanComponent
},
{
  path : 'lupa-password', component : LupaPasswordComponent
},
{
  path : 'profil-peserta', component : ProfilPesertaComponent
},
{
  path : 'tentang-kami', component : TentangKamiComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
