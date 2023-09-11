import React from "react"
import styled from "@emotion/styled"

type Props = React.ComponentProps<'button'> & {
  /**
   * This is a description of the label props.
   */
  label?: string
}

const ButtonComponent = styled.button<Props>(
  {
    boxSizing: 'border-box',
    fontWeight: 'bold',
    borderRadius: '3px'
  },
  ({ theme }) => ({
    padding: `8${theme.units.px} 16${theme.units.px}`,
    fontFamily: theme.typography.button.fontFamily,
    background: theme.colors.accent,
    color: theme.colors.white,
    border: `2${theme.units.px} solid ${theme.colors.accent}`,
    borderRadius: `3${theme.units.px}`,
    '&:hover': {
      background: 'none',
      color: theme.colors.accent
    }
  })
)

function Button({ label = "Submit", type }: Props) {
  return <ButtonComponent type={type ? type : 'button'}>{label}</ButtonComponent>
}

export default Button
