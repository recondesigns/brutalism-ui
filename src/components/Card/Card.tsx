import React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from '../emotionTheme'

type CardWrapper = {
  disabled?: boolean
}

const CardWrapper = styled('div')<CardWrapper>({}, ({ theme, disabled }) => ({
  opacity: !disabled ? 'initial' : '50%',
  border: `2px solid ${theme.palette.common.border}`,
  borderRadius: theme.shape.borderRadius,
  boxShadow: `${theme.elevation.three} ${theme.elevation.three} 0px 0px ${theme.palette.common.shadow}`,
  '&:hover': {
    boxShadow: !disabled
      ? `${theme.elevation.two} ${theme.elevation.two} 0px 0px ${theme.palette.common.shadow}`
      : `${theme.elevation.three} ${theme.elevation.three} 0px 0px ${theme.palette.common.shadow}`,
    cursor: !disabled ? 'pointer' : 'not-allowed',
  },
  '&:active': {
    boxShadow: !disabled
      ? `${theme.elevation.none} ${theme.elevation.none} 0px 0px ${theme.palette.common.shadow}`
      : `${theme.elevation.three} ${theme.elevation.three} 0px 0px ${theme.palette.common.shadow}`,
  },
}))

export type CardProps = {
  disabled?: boolean
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default function Card({
  children,
  disabled = false,
  onClick,
  ...otherProps
}: CardProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CardWrapper disabled={disabled} onClick={onClick} {...otherProps}>
        {children}
      </CardWrapper>
    </ThemeProvider>
  )
}
