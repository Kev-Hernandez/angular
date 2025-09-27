import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter-pages',
  imports: [],
  templateUrl: './counter-pages.component.html',
})
export class CounterPagesComponent { 
  counter = signal(10);

  increaseBy(value: number = 1) {
    this.counter.update(current => current + value);
  }

  decreaseBy(value: number = 1) {
    this.counter.update(current => current - value);
  }

  constructor() { 
    const safevalue = localStorage.getItem('counter-value');
    if(safevalue) {
      this.counter.set(Number(safevalue));
    }

    effect(() => {
      console.log('counter changed: ', this.counter());
      localStorage.setItem('counter-value', this.counter().toString());
    });
  }
}
