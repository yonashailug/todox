import React, { useEffect } from 'react'
import Lists from '../components/Task/Lists/Lists'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { AppDispatch } from '../store/store'
import { useDispatch } from 'react-redux'
import { getTaskAction } from '../store/action'
import { getTasks } from '../firebase'
import TaskItem, { Status } from '../models/task'

import { User } from '../models'

const Entry: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    
    const getAllTasks = async() => {
      let response: any = await getTasks()
      if (response) {
        response = response.map((data: Object) => ({
            taskItem: TaskItem.fromObject(data),
            members: [
              User.fromObject({ id: 1, name: 'Jdx', email: 'jx@gmail.com' }),
              User.fromObject({ id: 2, name: 'Xz', email: 'xz@gmail.com' }),
            ]
        }))
      }
      dispatch(getTaskAction(response))
    }

    getAllTasks()

  }, [dispatch])

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Lists />
      </DndProvider>
    </div>
  )
}

export default Entry
