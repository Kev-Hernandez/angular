import { NgClass, NgStyle } from '@angular/common';
import { Component, computed,signal } from '@angular/core';

@Component({
  selector: 'app--attribute-directives-page',
  imports: [NgClass,NgStyle],
  templateUrl: './ attribute-directives-page.component.html',
})
export class AttributeDirectivesPageComponent { 
  title = 'Attribute Directives Page';

  state = signal<'active' | 'error' | 'neutral'>('neutral');

  message = computed(() => {
    switch (this.state()) {
      case 'active':
        return 'The state is active';
      case 'error':
        return 'There is an error';
      case 'neutral':
        return 'The state is neutral';
    }
  });

  setActive() {
    this.state.set('active');
  }

  setError() {
    this.state.set('error');
  }

  setNeutral() {
    this.state.set('neutral');
  }
}
