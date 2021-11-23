import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { AppComponent } from './app.component';

export const rutas : Routes = [
  // { path: '' , pathMatch: 'full', component: AppComponent },
  { path: 'formulario-ruta' , component: FormularioComponent },
  { path: 'lista-ruta' , component: ListaComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRutasModule { }
