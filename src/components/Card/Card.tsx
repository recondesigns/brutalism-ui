import React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from '../emotionTheme'

type CardWrapper = {
  isClickable?: boolean
  disabled?: boolean
} & React.HTMLAttributes<HTMLDivElement>

const CardWrapper = styled('div')<CardWrapper>(
  {
    width: '100%',
    background: 'none',
  },
  ({ theme, disabled, isClickable }) => ({
    opacity: !disabled ? 'initial' : '50%',
    border: `2px solid ${theme.palette.common.border}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: `${theme.elevation.three} ${theme.elevation.three} 0px 0px ${theme.palette.common.shadow}`,
    '&:hover': {
      boxShadow:
        isClickable && !disabled
          ? `${theme.elevation.two} ${theme.elevation.two} 0px 0px ${theme.palette.common.shadow}`
          : `${theme.elevation.three} ${theme.elevation.three} 0px 0px ${theme.palette.common.shadow}`,
      cursor: disabled ? 'not-allowed' : isClickable ? 'pointer' : 'initial',
    },
    '&:active': {
      boxShadow:
        isClickable && !disabled
          ? `${theme.elevation.none} ${theme.elevation.none} 0px 0px ${theme.palette.common.shadow}`
          : `${theme.elevation.three} ${theme.elevation.three} 0px 0px ${theme.palette.common.shadow}`,
    },
  })
)

export type CardProps = {
  isClickable?: boolean
  disabled?: boolean
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default function Card({
  isClickable = false,
  disabled = false,
  children,
  onClick,
  ...otherProps
}: CardProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CardWrapper
        role={isClickable ? 'button' : 'div'}
        isClickable={isClickable}
        disabled={disabled}
        onClick={isClickable && !disabled ? onClick : undefined}
        {...otherProps}
      >
        {children}
      </CardWrapper>
    </ThemeProvider>
  )
}
