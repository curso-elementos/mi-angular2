import {Component} from 'angular2/core';
import {Http,Response, Headers,HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Mensaje} from './mensaje';
@Component({
    selector: 'my-app',
    template: '<h1>Mi primer app con angular muy basico :)</h1>'
})
export class AppComponent {
miurl:string='http://localhost:9999/mensaje';
mensaje:Mensaje[];
 hola:String='';
http:Http;

constructor(http: Http) {
    this.http = http;
    this.http.get('http://localhost:9999/mensaje')
      // 
    
      .subscribe(res=>{
          //Esta es como una funcion
          this.mensaje = res.json(), console.log(' mensajes encontrados: ' + this.mensaje.length);
          console.log('Segundo:' + this.mensaje[1].cuerpo);
          this.mensaje[0].titulo;
      });

    
  
   }
}


