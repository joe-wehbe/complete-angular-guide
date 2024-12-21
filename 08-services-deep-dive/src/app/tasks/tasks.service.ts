import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";

// @Injectable({
//     providedIn: 'root' // root to make the service injectable in any component, directive, or service
// })
export class TasksService {
    private tasks = signal<Task[]>([]);
    private loggingService = inject(LoggingService)

    allTasks = this.tasks.asReadonly();

    addTask(taskData: { title: string, description: string}) {
        const newTask: Task = {
            ...taskData,
            id: Math.random().toString(),
            status: 'OPEN'
        };
        this.tasks.update((oldTasks) => [...oldTasks, newTask]);
        this.loggingService.log('Added task with title ' + taskData.title);
    }

    updateTaskStatus(taskId: string, newStatus: TaskStatus) {
        this.tasks.update((oldTasks) => 
            oldTasks.map((task) => 
                task.id === taskId ? { ...task, status: newStatus } : task
            )
        );
        this.loggingService.log('change task status to ' + newStatus);
    }
}
