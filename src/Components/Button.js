import { func } from 'prop-types'

export function Button(props) {
  const { children, onClick } = props
  
  
  return (
    <button onClick={onClick}>
      { children }
    </button>
  )
}

Button.PropTypes = {
  onClick: func.isRequired
}