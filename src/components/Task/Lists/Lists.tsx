import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Task } from '../../../interfaces'
import { Status } from '../../../models/task'
import { updateTaskAction } from '../../../store/action'
import { AppDispatch } from '../../../store/store'
import List from './List'

const Lists: React.FC<any> = () => {
  const [statuses, setStatuses] = useState<Status[]>(
    Object.values(Status).map((item) => item)
  )

  const dispatch: AppDispatch = useDispatch()

  const handleDispatch = (item: Task, status: Status) => {
    dispatch(updateTaskAction(item, status))
    setStatuses(Object.values(Status).map((item) => item))
  }

  return (
    <div className='flex container mt-7 justify-center'>
      {statuses.map((status: Status, index: number) => (
        <List key={index} status={status} onDrop={handleDispatch} />
      ))}
    </div>
  )
}

export default Lists
