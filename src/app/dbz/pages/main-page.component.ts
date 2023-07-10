import { Component } from '@angular/core';


import { DBZService } from '../services/dbz.service';
import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  constructor( private dbzService: DBZService){}

    get characterList(): Character[] {
      return [... this.dbzService.characterList];
    }

    onDeleteCharacter(id: string): void {
      this.dbzService.onDeleteCharacter(id);
    }

    onNewCharacter(character: Character): void {
      this.dbzService.onNewCharacter(character);
    }

}
