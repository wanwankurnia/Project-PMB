import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "environments/environment";
import { DataCalonMhs, DataPendidikan, DataPribadi } from "./data.model";

const data_API="http://127.0.0.1:8000";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };


@Injectable({
    providedIn: 'root'
})

export class dataSevice {
    constructor (private http: HttpClient) {}

    datacalonmhs() {
        return this.http.get<DataCalonMhs[]>(`${environment.baseUrl}data-calon-mhs`)
    }

    datapribadi() {
        return this.http.get<DataPribadi[]>(`${environment.baseUrl}data-pribadi`)
    }

    datapendidikan() {
        return this.http.get<DataPendidikan[]>(`${environment.baseUrl}data-pendidikan`)
    }
}