
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial:string[] = []

  get historial() {
    return [...this._historial];
  }

  /* INSERTAR VALORES AL historial */


  /* NOMBRE DEL PARAMETRO, TIPO DE DATO, Y SE IGUALA A QUE SIEMPRE DEBE TENER UN VALOR A PONERLE LAS COMILLAS */
  buscarGifs(query:string = ''){
    /* VALIDACIÓN DEL DATO A INGRESAR, trim() LIMPIAR ESPACIOS EN BLANCO EN LOS EXTREMOS Y CUENTA LOS CARACTERES, SI ES IGUAL A CERO SALE DE LA FUNCIÓN. */
    if(query.trim().length === 0){
      return;
    }
    /*VALIDACIÓN includes DETECTA SI EL VALOR EXISTE ! LO NIEGA, SI NO EXISTE ENTONCES AGREGA EL VALOR */  
    if(!this._historial.includes(query)){
          /*EL VALOR INGRESADO SE PASA A MINUSCULA */
          query = query.trim().toLowerCase();
          /* SE AGREGA EL VALOR AL ARRAY */
          this._historial.unshift(query);
          /*REALIZA UN CORTE DE ARRAY HASTA LOS ÚLTIMOS 10 ELEMENTOS, ELIMINA EL MAS VIEJO SI SE INGRESA UN NUEVO ELEMENTO */
          this._historial = this._historial.splice(0,10);
    }

  

   
    console.log(this._historial)

  }



}
