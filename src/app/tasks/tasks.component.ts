import { Component, OnInit } from '@angular/core';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks = this.taskService.tasks;
  debug = false;

  constructor(private taskService: TaskService) {
    taskService.addTask('Buy books');
    taskService.addTask('Learn Python');
    taskService.addTask('Watch the new tv-series');
    taskService.addTask('Play football at 6PM');
  }

  ngOnInit(): void {}

  addTask() {
    this.taskService.addTask();
  }

  clearAllTasks() {
    this.taskService.deleteAllTasks();
    this.tasks = this.taskService.tasks;
  }
}
