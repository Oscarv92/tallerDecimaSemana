import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  pages: number = 1;
  datosApi!: any;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.obtenerDatosApi();
  }

  obtenerDatosApi(){
    this.apiService.obtenerDatos()
      .subscribe(res=>
      this.datosApi=res,
      err=>console.log(err))
  }

}
