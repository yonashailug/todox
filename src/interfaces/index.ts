import { TaskItem, User } from '../models'

export interface CSSProperties extends React.CSSProperties {
  '--primary'?: string
  '--bg-variant'?: string
  '--iconContainerWidth'?: string
  'border-radius'?: string
}

export interface Task {
  taskItem: TaskItem
  members: User[]
}
