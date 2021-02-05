import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})
export class HeroeComponent {
    // tslint:disable-next-line: no-inferrable-types
    nombre: string = 'Ironman';
    edad = 30;

    // tslint:disable-next-line: typedef
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        console.log('sigo cambiando');
        this.edad = 100;
    }
}
