import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  // i18n select pipe
  public name: string = 'Sebastian';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  changeClient() {
    this.name = 'Catherine';
    this.gender = 'female';
  }

  // i18n plural pipe

  public clients: string[] = [
    'Clara',
    'Sebastian',
    'Sergio',
    'Cindy',
    'Catherine',
    'Juan Pablo',
    'Lina',
  ];

  public clientsMap = {
    '=0': 'no hay clientes esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient() {
    this.clients.shift();
  }

  // Key Value Pipe

  public person = {
    name: 'Sebastian',
    age: 27,
    address: 'Calle falsa 123',
  };

  // Async pipe

  public myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );

  public promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos promesa');
      console.log('Tenemos promesa');
      this.person.name = 'Sergio';
    }, 3500);
  });
}
