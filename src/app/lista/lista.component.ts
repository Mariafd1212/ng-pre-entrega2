import { Component } from '@angular/core';
import { ToggleListDirective } from '../directives/toggle-list.directive';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent {
  alumnos: any[] = [
    // Cambio de Alumno[] a any[]
    {
      nombre: 'Axel',
      edad: 23 + ' ' + 'años',
      curso: 'Ingles',
      nivel: 'A2',
      fechaInscripcion: new Date(),
    },
    {
      nombre: 'Samanta',
      edad: 30 + ' ' + 'años',
      curso: 'Chino',
      nivel: 'B2',
      fechaInscripcion: new Date(),
    },
    {
      nombre: 'Peter',
      edad: 25 + ' ' + 'años',
      curso: 'Frances',
      nivel: 'A2',
      fechaInscripcion: new Date(),
    },
    {
      nombre: 'Matias',
      edad: 27 + ' ' + 'años',
      curso: 'Portugues|Frances',
      nivel: 'B1 | A2',
      fechaInscripcion: new Date(),
    },
    {
      nombre: 'Lucas',
      edad: 32 + ' ' + 'años',
      curso: 'Portugues|Ingles',
      nivel: 'B1|C1',
      fechaInscripcion: new Date(),
    },
  ];
  mostrarAlumnos = false;

  toggleAlumnos() {
    this.mostrarAlumnos = !this.mostrarAlumnos;
  }
}
