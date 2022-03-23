import React, { useEffect } from 'react'
import Lists from '../components/Task/Lists/Lists'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { AppDispatch } from '../store/store'
import { useDispatch } from 'react-redux'
import { getTaskAction } from '../store/action'
import TaskItem, { Status } from '../models/task'

import { User } from '../models'

const Entry: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(
      getTaskAction([
        {
          taskItem: TaskItem.fromObject({
            id: 1,
            title: 'Design',
            status: Status.todo,
            hasAttachment: true,
            body: `We need 2 different concepts for a software page in our program.
          I've attached 2 concepts that will give you an idea to reproduce but with a new look and feel.
          We'd like to keep the colors similar but you can add different colors.`,
          }),
          members: [
            User.fromObject({ id: 1, name: 'Jdx', email: 'jx@gmail.com' }),
            User.fromObject({ id: 2, name: 'Xz', email: 'xz@gmail.com' }),
          ],
        },
        {
          taskItem: TaskItem.fromObject({
            id: 2,
            title: 'Dev',
            status: Status.todo,
            hasAttachment: false,
            body: `We need to update the software and release a major updates to all the services.`,
          }),
          members: [
            User.fromObject({ id: 3, name: 'Aregawi', email: 'aregawi@gmail.com' }),
          ],
        },
      ])
    )
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
