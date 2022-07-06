import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  }

  constructor(
    private dbzService: DbzService
  ) { }

  ngOnInit(): void {
  }

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes
  // }

  // agregar(event: Personaje) {
  //   this.personajes.push(event)
  // }



}
