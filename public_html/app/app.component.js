System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(http) {
                    var _this = this;
                    this.miurl = 'http://localhost:9999/mensaje';
                    this.hola = '';
                    this.http = http;
                    this.http.get('http://localhost:9999/mensaje')
                        .subscribe(function (res) {
                        //Esta es como una funcion
                        _this.mensaje = res.json(), console.log(' mensajes encontrados: ' + _this.mensaje.length);
                        console.log('Segundo:' + _this.mensaje[1].cuerpo);
                        _this.mensaje[0].titulo;
                    });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<h1>Mi primer app con angular muy basico :)</h1>'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map