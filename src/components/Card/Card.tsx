import React from 'react'
import styled from '@emotion/styled'
import { defaultTheme } from '../emotionTheme'
import CardImage from './CardImage'
import CardContent from './CardContent'
import CardActions from './CardActions'

type CardWrapper = {
  isClickable?: boolean
  disabled?: boolean
} & React.HTMLAttributes<HTMLDivElement>

const CardWrapper = styled('div')<CardWrapper>(
  {
    width: '100%',
    background: defaultTheme.palette.common.white,
    border: `2px solid ${defaultTheme.palette.common.border}`,
    borderRadius: defaultTheme.shape.borderRadius,
    boxShadow: `${defaultTheme.elevation.three} ${defaultTheme.elevation.three} 0px 0px ${defaultTheme.palette.common.shadow}`,
    '&:hover': {
      boxShadow: `${defaultTheme.elevation.two} ${defaultTheme.elevation.two} 0px 0px ${defaultTheme.palette.common.shadow}`,
    },
    '&:active': {
      boxShadow: `${defaultTheme.elevation.none} ${defaultTheme.elevation.none} 0px 0px ${defaultTheme.palette.common.shadow}`,
    },
  },
  ({ theme, disabled, isClickable }) => ({
    background: theme?.palette?.common?.white,
    opacity: !disabled ? 'initial' : '50%',
    border: `2px solid ${theme?.palette?.common?.border}`,
    borderRadius: theme?.shape?.borderRadius,
    boxShadow: `${theme?.elevation?.three} ${theme?.elevation?.three} 0px 0px ${theme?.palette?.common?.shadow}`,
    '&:hover': {
      boxShadow:
        isClickable && !disabled
          ? `${theme?.elevation?.two} ${theme?.elevation?.two} 0px 0px ${theme?.palette?.common?.shadow}`
          : `${theme?.elevation?.three} ${theme?.elevation?.three} 0px 0px ${theme?.palette?.common?.shadow}`,
      cursor: disabled ? 'not-allowed' : isClickable ? 'pointer' : 'initial',
    },
    '&:active': {
      boxShadow:
        isClickable && !disabled
          ? `${theme?.elevation?.none} ${theme?.elevation?.none} 0px 0px ${theme?.palette?.common?.shadow}`
          : `${theme?.elevation?.three} ${theme?.elevation?.three} 0px 0px ${theme?.palette?.common?.shadow}`,
    },
  })
)

export type CardProps = {
  /**
   * Sets whether the entire card is clickable, or not. Should be used in conjunction with `onClick` prop.
   *
   * @default true
   */
  isClickable?: boolean
  /**
   * Disables user interaction with the Card component.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The child components that will be rendered.
   */
  children: React.ReactNode
  /**
   * Function that is called when the card is clicked and `isClickable` prop is used.
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

function Card({
  isClickable = false,
  disabled = false,
  children,
  onClick,
  ...otherProps
}: CardProps) {
  return (
    <CardWrapper
      role={isClickable ? 'button' : 'div'}
      isClickable={isClickable}
      disabled={disabled}
      onClick={isClickable && !disabled ? onClick : undefined}
      {...otherProps}
    >
      {children}
    </CardWrapper>
  )
}

Card.Image = CardImage
Card.Content = CardContent
Card.Actions = CardActions

export default Card
