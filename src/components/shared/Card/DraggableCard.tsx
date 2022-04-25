import React, { CSSProperties, useEffect } from 'react'
import { getEmptyImage } from 'react-dnd-html5-backend'
import Card from './Card'
import { Task } from '../../../interfaces'
import { useDrag } from 'react-dnd'

function getStyles(isDragging: boolean): CSSProperties {
    return {
      opacity: isDragging ? 0 : 1,
    }
  }
  
const DraggableCard: React.FC<Task & { className: string}> = ({ taskItem, members, ...rest }) => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: 'card',
    item: { taskItem, members },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [preview])

  return (
    <div
      className={isDragging ? 'card-drag' : '' + rest.className}
      style={getStyles(isDragging)}
      ref={drag}>
        <Card taskItem={taskItem} members={members} />
    </div>
  )
}

export default DraggableCard
