import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  styles: ``,
})

export class HeroComponent {

  name = signal('Ironman');
  age = signal(45);

  getHeroDescription(name: string, age: number) {
    return `${name} - ${age}`;
  }

  changeHero() {
    this.name.update((v) => 'Spiderman');
    this.age.update((v) => 22);
  }

  resetForm() {
    this.name.update((v) => 'Ironman');
    this.age.update((v) => 45);
  }

  changeAge(value: number) {
    this.age.update((v) => value)
  }
}
