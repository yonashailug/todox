import React, { useEffect, useState } from 'react'
import { ConnectDropTarget, useDrop } from 'react-dnd'
import { useSelector } from 'react-redux'

import { Task } from '../../../interfaces'
import { Status } from '../../../models/task'
import { RootState } from '../../../store/store'
import Button from '../../shared/Button/Button'
import Card from '../../shared/Card/Card'
import DraggableCard from '../../shared/Card/DraggableCard'
import './List.css'

type Props = {
  status: Status
}

function filterTasks(tasks: Task[], status: Status): Task[] {
  return tasks.filter((task: Task) => task.taskItem.getStatus === status)
}

const List: React.FC<
  Props & { dropTarget?: ConnectDropTarget; onDrop: Function }
> = ({ status, ...rest }) => {
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([])

  const { tasks } = useSelector((state: RootState) => state.tasks)

  useEffect(() => {
    setFilteredTasks(filterTasks(tasks, status))
  }, [status, tasks])

  const handleAddTask = (evt: React.MouseEvent<HTMLButtonElement>) => {
    console.log(evt)
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: (item: Task) => {
      rest.onDrop(item, status)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  return (
    <div className='list mr-2 p-2 flex flex-col rounded-sm bg-backgroundLightPrimary flex-shrink-0 items-start'>
      <div className='flex items-center w-full px-3 pb-4 pt-3 '>
        <div className='text-textDarkest text-15 font-medium'>{status}</div>
        <div className='ml-auto text-13 text-primary'>
          {filteredTasks?.length}
        </div>
      </div>
      <div className='mb-4 w-full'>
        <Button
          className='w-full'
          icon='plus'
          variant='secondary'
          iconSize={18}
          onClick={handleAddTask}
        />
      </div>
      <div className='h-full px-2 w-full relative' ref={drop}>
        {filteredTasks.map((task: Task, index: number) => (
          <DraggableCard
            key={index}
            taskItem={task.taskItem}
            // status={status}
            className={isOver ? 'card-list-drop drop-preview' : ''}
            members={task.members}
          />
        ))}
      </div>
    </div>
  )
}

export default List
