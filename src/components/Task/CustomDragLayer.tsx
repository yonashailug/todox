import { useDragLayer, XYCoord } from 'react-dnd'
import { CSSProperties } from '../../interfaces'
import Card from '../shared/Card/Card'

const layerStyles: CSSProperties = {
  position: 'absolute',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
}

function getItemStyles(
  initialOffset: XYCoord | null,
  currentOffset: XYCoord | null
) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    }
  }
  const { x, y } = currentOffset
  const transform = `translate(${x}px, ${y}px) rotateZ(5deg)`
  return {
    transform,
    WebkitTransform: transform,
    width: '280px',
    transition: 'transform 0.01s ease'
  }
}

const CustomDragLayer = () => {
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }))

  function renderItem() {
    switch (itemType) {
      case 'card':
        return <Card taskItem={item.taskItem} members={item.members} />
      default:
        return null
    }
  }
  if (!isDragging) {
    return null
  }
  return (
    <div style={layerStyles}>
      <div style={getItemStyles(initialOffset, currentOffset)}>
        {renderItem()}
      </div>
    </div>
  )
}
export default CustomDragLayer
