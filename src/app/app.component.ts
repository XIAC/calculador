import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  titulos : string [];
  constructor(){
    this.titulos = ['El nino que domino el viento','Monstruos','Freddy G','Titanic','500 dias juntos'];
  }

  mensajeAPP(event: any){
    console.log("test carga del metodo",event);
    console.log("test desde app");
  }
}
