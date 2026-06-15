import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.html',
})
export class CharacterAdd {

name = signal('');
power = signal(0);

newCharacter = output<Character>(); //? Emite un nuevo personaje al componente padre
add() {

    if(!this.name() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 10000),
      name: this.name(),
      power: this.power(),
    }
    //this.characters.update((list) => [...list, newCharacter]);
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
