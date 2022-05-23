import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

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
