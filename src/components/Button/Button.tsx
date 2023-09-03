import React from 'react'

type Props = {
  label?: string
}

function Button({ label }: Props) {
  return (
    <button>{label ? label : 'Click me'}</button>
  )
}

export default Button