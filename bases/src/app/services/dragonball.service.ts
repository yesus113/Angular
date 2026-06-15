//!aservice genera la clase y su decorador.
import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
};

@Injectable({providedIn: 'root'})
export class DragonballService {
  constructor() { }

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  })

  characters = signal<Character[]>(loadFromLocalStorage());

  addCharacter(newCharacter: Character) {
    this.characters.update(
      list => [...list, newCharacter]
    )
  }
}
