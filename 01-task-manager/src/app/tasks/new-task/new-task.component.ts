import { Component, EventEmitter, Input, Output, inject} from '@angular/core';
import { TasksService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>()
  enteredTitle = '';
  enteredSumary = '';
  enteredDate = '';
  private tasksService = inject(TasksService);

  // TWO WAY BINDING WITH SIGNALS
  // enteredTitle = signal('');
  // enteredSumary = signal('');
  // enteredDate = signal('');

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSumary,
      date: this.enteredDate
    }, this.userId)
    this.close.emit();
  };
}
