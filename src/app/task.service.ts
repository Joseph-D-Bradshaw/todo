import { Injectable } from '@angular/core';
import { makeIdGenerator } from 'src/utils';
import { Task } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private idGen = makeIdGenerator();
  tasks: Task[] = [];

  constructor() {}

  addTask(title = '') {
    const id = this.idGen.next().value;

    if (title === '') {
      title = `Task ${id}`;
    }

    this.tasks.push({ id, title, complete: false });
  }

  deleteAllTasks() {
    this.tasks = [];
  }

  deleteTask(id: number) {
    const taskIndex = this.tasks.findIndex((task) => {
      return task.id == id
    })

    if (this.tasks[taskIndex]) {
      this.tasks.splice(taskIndex, 1)
    }
  }
}
