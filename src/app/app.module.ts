import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { FormsModule } from '@angular/forms';
import { AppRutasModule, rutas } from './app-rutas.module';
import { RouterModule } from '@angular/router';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    MensajeComponent,
    FormularioComponent,
    ListaComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRutasModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
