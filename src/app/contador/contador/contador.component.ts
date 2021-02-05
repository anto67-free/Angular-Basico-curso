// Capitulo 39
// Crear un componente manualmente
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      La Base es: <strong> {{ base }}</strong>
    </h3>

    <button (click)="acumular(base)">+ {{ base }}</button>

    <span> {{ numero }} </span>

    <button (click)="acumular(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 5;
    base: number = 5;

    // tslint:disable-next-line:typedef
    acumular(valor: number) {
        this.numero += valor;
    }
}
