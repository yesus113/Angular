import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  styles: ``,
  imports: [UpperCasePipe]
})

export class HeroComponent {

  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  })
  capitalezedName = computed(() => this.name().toUpperCase());

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
