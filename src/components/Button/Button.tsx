import React from 'react'
import styled from '@emotion/styled'

type Props = {
  label?: string
}

const StyledButton = styled.button`
  padding: 8px 12px;
  background: blue;
  color: white;
  font-weight: bold;
  border-radius: 12px;
`

function Button({ label }: Props) {
  return (
    <StyledButton>{label ? label : 'Click me'}</StyledButton>
  )
}

export default Button