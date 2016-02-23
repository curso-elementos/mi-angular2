import {Component} from 'angular2/core';
import {Http,Response, Headers,HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Mensaje} from './mensaje';
@Component({
    selector: 'my-app',
    templateUrl: 'templates/mensaje.html'
})
export class AppComponent {
miurl:string='http://localhost:9999/mensaje';
mensaje:Mensaje[];
mensaje1: Mensaje;
http:Http;

constructor(http: Http) {
    this.http = http;
    this.http.get('http://localhost:9999/mensaje').subscribe(res=>{
          //Esta es como una funcion
          this.mensaje = res.json(), console.log(' mensajes encontrados: ' + this.mensaje.length);
          console.log('Segundo:' + this.mensaje[1].cuerpo);
        
      });

  
  
   }
}


