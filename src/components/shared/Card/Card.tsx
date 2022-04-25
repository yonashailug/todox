import './Card.css'
import { Task } from '../../../interfaces'
import { User } from '../../../models'
import { Status } from '../../../models/task'
import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'


const Card: React.FC<Task & { className?: string; status?: Status }> = ({
  taskItem,
  members
}) => {

  return (
      <div className='card mb-4 rounded-sm p-4 drop-shadow-2xl bg-white transition-all duration-100 select-none'>
        <div className='flex items-center pb-4'>
          <p className='text-lg text-black'>{taskItem.getTitle}</p>
          <span className='ml-auto'>
            {taskItem.getHasAttachment ? <Icon name='github' /> : null}
          </span>
        </div>

        <div className='mb-4'>
          <p className='text-15 text-textMedium text-left'>
            {taskItem.getBody}
          </p>
        </div>

        <div className='flex'>
          {members.map((member: User, index: number) => (
            <Avatar
              key={index}
              size={24}
              avatarUrl={member.getAvatarUrl}
              name={member.getName}
            >
              {member.getName.substring(0, 2).toUpperCase()}
            </Avatar>
          ))}
        </div>
      </div>
  )
}

export default Card
