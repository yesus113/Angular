import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter.component.html',
  styles: `
  button {
    padding: : 5px;
    margin: 5px 10px;
    width: 75px;
  }`
})
export class CounterComponent {

  counter = 10;
  counterSignal = signal(10);

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value)
  }
  decreaseBy(value: number) {
    this.counter -= value;
  }

  reset() {
    this.counter = 10;
    this.counterSignal.set(10);
  }
}
