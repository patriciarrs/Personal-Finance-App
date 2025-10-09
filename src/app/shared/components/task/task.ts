import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { TaskType } from '../../models/task-type';

@Component({
  selector: 'pfa-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Task {
  /**
   * The shape of the task object
   */
  readonly task = input<TaskType>();

  /**
   * Event handler for pinning tasks
   */
  readonly handlePinTask = output<string>();

  /**
   * Event handler for archiving tasks
   */
  readonly handleArchiveTask = output<string>();

  /**
   * @ignore
   * Component method to trigger the handlePin event
   * @param id string
   */
  onPin(id: string): void {
    this.handlePinTask.emit(id);
  }

  /**x
   * @ignore
   * Component method to trigger the handleArchive event
   * @param id string
   */
  onArchive(id: string): void {
    this.handleArchiveTask.emit(id);
  }
}
