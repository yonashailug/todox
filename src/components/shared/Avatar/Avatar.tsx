import { CSSProperties } from '../../../interfaces'
import { avatarColors } from './../../../config'

type Props = {
  avatarUrl?: string
  size?: number
  rounded?: boolean
  name: string
}

function getImageStyle(props: Partial<Props>): CSSProperties {
  return {
    display: 'inline-block',
    width: `${props.size}px`,
    height: `${props.size}px`,
    'border-radius': props.rounded ? '100%' : '3px',
    backgroundImage: `url('${props.avatarUrl}')`,
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}

function getColorFromName(name: string): string {
  return avatarColors[
    name.toLocaleLowerCase().charCodeAt(0) % avatarColors.length
  ]
}

function getLetterStyle(props: Partial<Props>) {
  return {
    width: `${props.size}px`,
    height: `${props.size}px`,
    background: getColorFromName(props.name!),
    fontSize: `${Math.round(props.size! / 2)}px`,
    borderRadius: props.rounded ? '100%' : '3px',
  }
}

const Avatar: React.FC<Props> = ({
  name = '',
  size = 32,
  rounded = true,
  avatarUrl = '',
  ...rest
}) => {
  return (
    <div className='-ml-1'>
      {avatarUrl ? (
        <div className='shadow-outline-white' style={getImageStyle({ size, rounded, avatarUrl })}></div>
      ) : (
        <div
          style={getLetterStyle({ name, size, rounded })}
          className='bg-primary shadow-outline-white inline-block rounded-sm uppercase text-white'
        >
          <span className='flex items-center justify-center h-full'>
            {rest.children}
          </span>
        </div>
      )}
    </div>
  )
}

export default Avatar
