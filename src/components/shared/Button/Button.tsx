import React from 'react'
import './Button.css'

import { BUTTON_VARIANTS } from '../../../config'
import { CSSProperties } from '../../../interfaces'
import Icon from '../Icon/Icon'

type Props = {
  variant: string
  icon?: string
  iconSize?: number
  isWorking?: boolean
  disabled?: boolean
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void
}

function getButtonStyles(variant: string): CSSProperties {
  const color: string = BUTTON_VARIANTS[variant]
  return {
    '--bg-variant': color,
    '--primary': BUTTON_VARIANTS.primary as string,
  }
}

const Button: React.FC<Props & { className?: string }> = ({
  variant = 'primary',
  icon,
  iconSize = 16,
  isWorking = false,
  disabled = false,
  onClick,
  ...rest
}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`${rest.className} ${variant} inline-flex items-center h-8 justify-center align-middle
        leading-none whitespace-no-wrap rounded-sm transition-all pl-2
         duration-100 appearance-none cursor-pointer select-none px-3`}
      disabled={disabled}
      style={getButtonStyles(variant)}
    >
      {isWorking ? <Icon name='spin' size={iconSize!} /> : null}
      {!isWorking && icon ? <Icon name={icon} size={iconSize!} /> : null}

      {rest.children ? <div className={isWorking || icon ? 'pl-2' : ''}>{rest.children}</div>: null}
    </button>
  )
}

export default Button
