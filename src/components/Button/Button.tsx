import React from "react"
import styled from "@emotion/styled"

export type ButtonProps = React.ComponentProps<'button'> & {
  /**
   * This is a description of the label props.
   */
  label?: string
}

const ButtonComponent = styled.button<ButtonProps>(
  {
    boxSizing: 'border-box',
    fontWeight: 'bold',
    borderRadius: '3px'
  },
  ({ theme }) => ({
    padding: `8px 16px`,
    fontFamily: "'Helvetica Neue', 'Sans-serif'",
    background: '#EB6E1F',
    color: '#FFFFFF',
    border: `2px solid #EB6E1F`,
    borderRadius: `3px`,
    '&:hover': {
      background: 'none',
      color: '#EB6E1F'
    }
  })
)

<<<<<<< HEAD
function Button({ label = "Submit", type }: ButtonProps) {
  return <ButtonComponent type={type ? type : 'button'}>{label}</ButtonComponent>
=======
function Button({ label = "Submit", type, ...otherProps }: Props) {
  return <ButtonComponent type={type ? type : 'button'} {...otherProps}>{label}</ButtonComponent>
>>>>>>> recondesigns/issue44
}

export default Button
