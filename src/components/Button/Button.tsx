import React from "react"
import styled from "@emotion/styled"

type Props = React.ComponentProps<'button'> & {
  /**
   * This is a description of the label props.
   */
  label?: string
}

const ButtonComponent = styled('button')`
  box-sizing: border-box;
  padding: 8px 16px;
  font-weight: bold;
  background: red;
  color: #ffffff;
  border: 2px solid #eb6e1f;
  border-radius: 3px;

  ,
  &:hover {
    color: #eb6e1f;
    background: none;
    border: 2px solid #eb6e1f;
  }
`

function Button({ label = "Submit", type }: Props) {
  return <ButtonComponent type={type ? type : 'button'}>{label}</ButtonComponent>
}

export default Button
