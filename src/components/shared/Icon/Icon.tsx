type Props = {
    size?: number
    name: string
    fill?: string
}

function iconStyles(size: number, fill: string) {
    return {
        height: size,
        width: size,
        fill
    }
}

const Icon = ({ size = 18, name, fill = 'currentColor' }: Props): JSX.Element => {
    return <svg style={iconStyles(size, fill!)}>
    <use
      xmlns="http://www.w3.org/1999/xlink"
      href={'#' + name}></use>
  </svg>
}

export default Icon