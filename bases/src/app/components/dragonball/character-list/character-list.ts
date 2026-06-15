import { Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterList {
public title = input.required<string>(); //? Recibe el título de la lista desde el componente padre
characters = input.required<Character[]>(); //? Recibe la lista de personajes desde el componente padre
}
