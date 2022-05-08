import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {


  /* SE CREA LA PROPIEDAD DE LA CLASE MEDIANTE UN GET DEBIDO A QUE FACILITA EL ACCESO EN LA PARTE DEL HTML*/
  get resultados(){
    return this.gifsService.resultados;
  }
 




  /* SE INJECTA LA DEPENDENCIA PARA RECIBIR EL ARRAY DE LA API */
  constructor(private gifsService: GifsService) { }


}
