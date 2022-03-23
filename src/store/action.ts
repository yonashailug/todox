import { Task } from '../interfaces'
import { Status } from '../models/task'
import { TaskActionType, TaskActionTypeUpdate } from './reducers/tasksReducer'

export const getTaskAction = (tasks: Task[]): TaskActionType => {
  return {
    type: 'GET_TASKS',
    payload: tasks,
  }
}

export const updateTaskAction = (
  task: Task,
  status: Status
): TaskActionTypeUpdate => {
  return {
    type: 'UPDATE_TASK',
    payload: {
      task,
      status,
    },
  }
}
