import { Task } from '../../interfaces'
import TaskItem, { Status } from '../../models/task'

export interface TaskState {
  tasks: Task[]
}

export interface TaskActionType {
  type: string
  payload: Task[]
}

export interface TaskActionTypeUpdate {
  type: string
  payload: {
    task: Task
    status: Status
  }
}

const initialState: TaskState = {
  tasks: [],
}

const tasksReducer = (
  state = initialState,
  action: TaskActionType | TaskActionTypeUpdate
) => {
  switch (action.type) {
    case 'GET_TASKS':
      return { tasks: action.payload }
    case 'UPDATE_TASK':
      const taskItem: any = action.payload

      return {
        tasks: [...state.tasks].map((task: Task) => {
          if (task.taskItem.getId === taskItem.task.taskItem.getId) {
            task = {
              ...task,
              taskItem: TaskItem.fromObject({
                ...taskItem.task.taskItem,
                status: taskItem.status,
              }),
            }
          }

          return task
        }),
      }
    default:
      return state
  }
}

export default tasksReducer
