import { Component, OnInit } from '@angular/core';

import { TaskService } from '../task.service';
import { Task } from 'src/types';

type FilterMode = 'all' | 'complete' | 'incomplete';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks = this.taskService.tasks;
  filterMode: FilterMode = 'all';
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
    this.updateTasksFromService();
  }

  clearCompletedTasks() {
    this.taskService.deleteAllCompletedTasks();
    this.updateTasksFromService();
  }

  changeFilterMode(filterMode: FilterMode) {
    this.filterMode = filterMode;
  }

  applyCurrentFilter(tasks: Task[]): Task[] {
    switch (this.filterMode) {
      case 'complete':
        return tasks.filter(task => task.complete)
      case 'incomplete':
        return tasks.filter(task => !task.complete)
      default:
        return tasks
    }
  }

  // todo: this shouldn't be necessary, there will be a cleaner way to keep the state
  // in line with the html, just rusty
  private updateTasksFromService() {
    this.tasks = this.taskService.tasks;
  }
}
