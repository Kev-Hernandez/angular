import { Component, signal } from '@angular/core';
import { IndexTask } from '../../core/interface';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-data-binding-page',
  imports: [FormsModule],
  templateUrl: './data-binding-page.component.html',
})
export class DataBindingPageComponent { 
  title = 'Data Binding Page';
  text_field = signal('');
  tasks = signal<IndexTask[]>([]);
  message = signal('');
  
   toggleCompleted(id: number) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  resetTask(){
    this.text_field.set('');
    this.message.set('');
  
  }
  deleteTask(id: number) {
    this.tasks.update( tasks => tasks.filter( task => task.id !== id ) );
  }

  //agregar tereas
  addTask() {
    if(!this.text_field().trim()) {
      this.message.set('error: task name is required');
      return;
    }
    const newTask: IndexTask = {
      id: this.tasks().length + 1,
      name: this.text_field(),
      completed: false
    };
    this.tasks.update( tasks => [...tasks, newTask] );
    this.resetTask();

  }

}
