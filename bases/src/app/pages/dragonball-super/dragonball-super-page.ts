import { Component, inject, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { Character } from '../../interfaces/character.interface';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonball-super-page.html',
  styleUrl: './dragonball-super-page.css',
})
export class DragonballSuperPage {
public dragonballService = inject(DragonballService); //Tomar la instnancia de la clase inclusive en funciones.

}
