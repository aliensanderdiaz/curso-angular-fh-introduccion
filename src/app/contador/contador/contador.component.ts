import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>La base es: <strong>{{ base }}</strong></h3>
    <button (click)="modificarNumero(-base)" [disabled]="numero < 1">-</button>
    <span>{{ numero }}</span>
    <button (click)="modificarNumero(base)">+</button>
  `
})
export class ContadorComponent {
  public titulo: string = 'Contador APP'
  public numero: number = 0
  public base: number = 1

  modificarNumero(cantidad: number): void {
    this.numero += cantidad
  }
}
