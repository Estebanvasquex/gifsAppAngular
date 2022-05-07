import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {


  /* TRAE EL ELEMENTO DESDE EL INPUT DEL HTML CON EL DECORADOR Y LO CARGA EN UNA VARIABLE */
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  
  /* INJECCIÓN DE DEPENDENCIAS PARA TENER DISPONIBLE EL SERVICIO */
  constructor(private gifService: GifsService) {}

  
  /* LLAMO A LA FUNCIÓN buscarGifs del servicio e INSERTO EL VALOR AL ARRAY CUANDO SE PRESENTAN CAMBIOS EN EL INPUT */
  buscar(){  
   
 const valor=this.txtBuscar.nativeElement.value;

 this.gifService.buscarGifs(valor)
 this.txtBuscar.nativeElement.value = '';


  }
}
