import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { dataSevice } from '../data/data.service';

@Component({
  selector: 'app-data-pribadi',
  templateUrl: './data-pribadi.component.html',
  styleUrls: ['./data-pribadi.component.css']
})
export class DataPribadiComponent implements OnInit {

  datapribadiform!:FormData;

  constructor(private formbuider: FormBuilder, private dataservice: dataSevice,  private router: Router){}

  ngOnInit(): void {
      this.datapribadiform, this.formbuider.group({
        nama_lengkap:['',Validators.required],
        tanggal_lahir:['',Validators.required],
        tempat_lahir:['',Validators.required],
        agama:['',Validators.required],
        jenis_kelamin:['',Validators.required],
        alamat_lengkap:['',Validators.required],
        nisn:['',Validators.required],
        no_telepon:['',Validators.required],
        hobi:['',Validators.required],
        cita_cita:['',Validators.required],
        motivasi:['',Validators.required]

      });
  }
}
