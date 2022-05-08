import{SearchGifsResponse, Data} from '../interfaces/gifs.interface'

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey :string = 'SpIBMDmoXTSxbKV6a6bTwJg7Kp3qtUkV' /* TOKEN PARA LA CONEXIÓN A LA API */

  private servicioUrl : string ='https://api.giphy.com/v1/gifs';

  private _historial:string[] = []

  /* PROPIEDAD PUBLICA PARA ALMACENAR LA RESPUESTA DE LA API, DATA SE TOMA DE LA INTERFACE, LA DATA ES DONDE SE ENCUENTRA EL ARRAY CON LOS DATOS DE IMAGENES */
  public resultados:Data[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor (private http: HttpClient){

    /* TOMA LOS DATOS QUE PERMANECEN EN EL LOCALSTORAGE, DE ESTA FORMA EL ARRAY NO SE PIERDE SI SE ACTUALIZA LA PAGINA clase 89 curso básico angular*/
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];


  }


  /* A CONTINUACIÓN EL METODO, NOMBRE DEL PARAMETRO, TIPO DE DATO, Y SE IGUALA A QUE SIEMPRE DEBE TENER UN VALOR A PONERLE LAS COMILLAS */
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

          /* GRABAR EN EL LOCAL STORAGE, SOLO GRABA STRING, la propiedad JSON.stringify nos permite tomar un arreglo y dividirlo en varios string*/
          localStorage.setItem('historial', JSON.stringify(this._historial));
          
    }

      /* PERMITE CONTRUIR LA URL PARA LA CONSULTA A LA API DE UNA MANERA MAS ORGANIZADA */
      const params = new HttpParams()
                    .set('api_key', this.apiKey)
                    .set('limit', '5')
                    .set('q', query);


      /* CONEXIÓN A LA API POR MEDIO DEL MÓDULO DE ANGULAR HttpClient, SE CAMBIAN LAS COMILLAS SENCILLAS Y SE AGREGA EL backticks O COMILLAS INVERTIDAS PARA AGREGAR LA INTERPOLACIÓN DE STRING PARA ENVIAR VARIABLE DE BUSQUEDA*/
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search?`, {params})
      .subscribe(( resp ) =>{
        this.resultados = resp.data;
        console.log(this.resultados);
       /* GRABAR EN EL LOCAL STORAGE, SOLO GRABA STRING, la propiedad JSON.stringify nos permite tomar un arreglo y dividirlo en varios string,AQUÍ SE ESTÁ GUARDANDO LA DATA DE LA CONSULTA A LA API*/
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
       
        
      })


  

   
    console.log(this._historial)

    


    /* FORMA TRADICIOAL DE REALIZAR CONEXIÓN A LA API POR MEDIO DE JAVASCRIPT */
/*     fetch('https://api.giphy.com/v1/gifs/search?api_key=SpIBMDmoXTSxbKV6a6bTwJg7Kp3qtUkV&q=casas&limit=5')
    .then(resp => {
      resp.json().then(data => {
        console.log(data);
      })
    }) */

  }



}

