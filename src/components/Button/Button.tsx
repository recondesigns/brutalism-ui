import React from "react"
import styled from "@emotion/styled"

export type ButtonProps = React.ComponentProps<'button'> & {
  /**
   * This is a description of the label props.
   */
  label?: string
  /**
   * Desc for prop type.
   */
  className?: string
}

const ButtonComponent = styled.button<ButtonProps>(
  {
    boxSizing: 'border-box',
    fontWeight: 'bold',
    borderRadius: '3px',
    padding: `8px 16px`,
    fontFamily: "'Helvetica Neue', 'Sans-serif'",
    background: '#EB6E1F',
    color: '#FFFFFF',
    border: `2px solid #EB6E1F`,
    '&:hover': {
      background: 'none',
      color: '#EB6E1F'
    }
  },
  // ({ theme }) => ({
  //   padding: `8px 16px`,
  //   fontFamily: "'Helvetica Neue', 'Sans-serif'",
  //   background: '#EB6E1F',
  //   color: '#FFFFFF',
  //   border: `2px solid #EB6E1F`,
  //   borderRadius: `3px`,
  //   '&:hover': {
  //     background: 'none',
  //     color: '#EB6E1F'
  //   }
  // })
)

function Button({ label = "Submit", type, className, ...otherProps }: ButtonProps) {
  return <ButtonComponent className={className} type={type ? type : 'button'} {...otherProps}>{label}</ButtonComponent>
}

export default Button
