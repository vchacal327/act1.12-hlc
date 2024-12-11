import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pets: any;
  filtro: string = "";

  constructor(private httpClient:HttpClient) {
    this.pets = this.httpClient.get('https://raw.githubusercontent.com/dgonrom2803/agenda-HLC/master/src/lista_mascotas.json');
  }

}
