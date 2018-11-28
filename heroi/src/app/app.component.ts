import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})

export class AppComponent {
  title = 'heroi';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  meuHeroi = this.heroes[0].idH + ' ' + this.heroes[0].nomeH

}
