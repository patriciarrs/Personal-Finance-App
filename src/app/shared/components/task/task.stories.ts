import type { Meta, StoryObj } from '@storybook/angular';

import { fn } from 'storybook/test';

import { Task } from './task';
import { TaskType } from '../../models/task-type';

/**
 * Use a helper to update state without losing type info.
 *
 * @param task
 * @param state
 */
const updateTaskState = (task: TaskType, state: TaskType['state']): TaskType => ({
  ...task,
  state,
});

/**
 * The same set of actions is passed to all permutations of the component,
 * so it is convenient to bundle them up into a single TaskData variable and pass it into the story definition each time.
 * Also, it can be exported and used in stories for components that reuse this component.
 */
export const TaskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  /* fn() allows a callback creation that appears in the Actions panel of the Storybook UI when clicked.
   So when building a pin button, we’ll be able to determine if a button click is successful in the UI. */
  events: {
    handleArchiveTask: fn(),
    handlePinTask: fn(),
  },
};

/**
 * To tell Storybook about the component we are testing, we create a default export
 */
const meta: Meta<Task> = {
  title: 'Task', // how to group or categorize the component in the Storybook sidebar
  component: Task, // the component itself
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/, // additional information required by the story but should not be rendered in Storybook
  tags: ['autodocs'], // to automatically generate documentation for our components
  /* Define the action args that the component expects to mock out the custom events.
   * Allows live-editing the components with the controls addon without restarting Storybook.
   * Once an args value changes, so does the component.
   */
  args: {
    ...TaskData.events,
  },
};

export default meta;
type Story = StoryObj<Task>;

/**
 * Create a const for the base data instead of relying on Default.args from Storybook’s type definitions
 */
const BaseTask: TaskType = TaskData;

export const Default: Story = {
  args: { task: BaseTask },
};

export const Pinned: Story = {
  args: {
    task: updateTaskState(BaseTask, 'TASK_PINNED'),
  },
};

export const Archived: Story = {
  args: {
    task: updateTaskState(BaseTask, 'TASK_ARCHIVED'),
  },
};
