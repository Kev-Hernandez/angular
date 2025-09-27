import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
})
export class CounterPageComponent { 
  counter= signal(10);

  increaseBy(value: number=1) {
    this.counter.update(current => current + value);
  }

  decreaseBy(value: number=1) {
    this.counter.update(current => current - value);
  }
  constructor(){
    const savedValue = localStorage.getItem('counter');
    if(savedValue){
      this.counter.set(Number(savedValue));
    
    }
    effect(() => {
      console.log('Counter changed: ', this.counter());
      localStorage.setItem('counter', this.counter().toString());
    });
  }
}

