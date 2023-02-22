import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { DataCalonMhsComponent } from '../data-calon-mhs/data-calon-mhs.component';
import { DataPribadiComponent } from '../data-pribadi/data-pribadi.component';
import { Selanjutnya1Component } from '../selanjutnya1/selanjutnya1.component';
import { DataPendidikanComponent } from '../data-pendidikan/data-pendidikan.component';
import { ProfilPesertaComponent } from '../profil-peserta/profil-peserta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DataCalonMhsComponent, DataPribadiComponent, Selanjutnya1Component, DataPendidikanComponent, ProfilPesertaComponent],
  imports: [
    CommonModule,
    DataRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DataModule { }
