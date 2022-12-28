import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { TituloComponent } from './titulo/titulo.component';



@NgModule({
  declarations: [
    CalculadoraComponent,
    TituloComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculadoraComponent,
    TituloComponent
  ]
})
export class ComponetsModule { }
