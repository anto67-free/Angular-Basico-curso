import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Batman', 'Pantera Negra',
                      'Daredvil', 'Doctor Stange', 'Capitan America', 'X-men'];
  heroeBorrado: string = '';
  // tslint:disable-next-line:typedef
  borrarHeroe(){
    // this.heroes = [];           // borra todos los elementos del arreglos
    // this.heroes.splice(1, 1);   // borra desde la posicion del arreglo tantos elementos
    // Borra el primer elemento del arreglo y lo retorna
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
