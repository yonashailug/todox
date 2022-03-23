import React from 'react'
import { CSSProperties } from '../../../interfaces'
import Icon from '../Icon/Icon'
import './Input.css'

type Props = {
  icon?: string
  hasIcon?: boolean
  iconSize?: number
  type?: string
  onBlur: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

function iconStyles(iconSize: number): CSSProperties {
    return {
        '--iconContainerWidth': `${iconSize * 2}px`
    }
}

const Input: React.FC<Props> = ({
  icon = '',
  hasIcon = false,
  iconSize = 16,
  type = 'text',
  onBlur,
}) => {
  return (
    <div style={iconStyles(iconSize)} className='inputContainer'>
      {hasIcon && icon ? (
        <div className='inputIconContainer'>
          <Icon name={icon} />
        </div>
      ) : null}
      <input
        className='input'
        type={type}
        onBlur={onBlur}
      />
    </div>
  )
}

export default Input
