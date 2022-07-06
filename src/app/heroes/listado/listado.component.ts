import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public heroeBorrado: string = ''
  public superheroes: string[] = ['Spiderman', 'Ironman', 'Superman', 'Hulk', 'Thor']

  borrarHeroe(): void {
    this.heroeBorrado = this.superheroes.pop() || ''
  }

}
