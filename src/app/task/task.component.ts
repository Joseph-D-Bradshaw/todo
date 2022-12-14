import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/types';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task = { id: -1, title: 'Uninitialized', complete: false };

  isEditing = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  toggleEditMode() {
    this.isEditing = !this.isEditing;
  }

  removeTask(id: number) {
    this.taskService.deleteTask(id);
  }
}
