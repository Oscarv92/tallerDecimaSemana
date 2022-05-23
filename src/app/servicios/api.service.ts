import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL_API = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=693a765e58883fcaac1107950290e59d&hash=6e0b63572f8ccbc461f4313cb309ae41';

  constructor(private http:HttpClient) { }

  obtenerDatos(){
    return this.http.get<any>(this.URL_API)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
