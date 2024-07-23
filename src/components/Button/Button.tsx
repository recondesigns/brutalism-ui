import React from 'react'
import styled from '@emotion/styled'
import { setSize } from './utils'
import { defaultTheme } from '../emotionTheme'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type ButtonType = 'block' | 'rounded'

type StyledButtonProps = {
  /**
   *  Adds rounded or straight cornders.
   *
   * @default block
   */
  buttonType?: ButtonType
  /**
   *  Adds padding to the button to create different sizes.
   *
   * @default lg
   */
  size?: Size
  /**
   *  Forces the width to 100% of the parent container.
   *
   * @default false
   */
  isFullWidth?: boolean
  /**
   *  Disables interaction with the Button and applies opacity as visual indicator.
   *
   * @default false
   */
  disabled?: boolean
  /**
   *  Applies a classname to the component.
   */
  className?: string
} & React.HTMLAttributes<HTMLButtonElement>

const StyledButton = styled('button')<StyledButtonProps>(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
    '&:disabled': {
      opacity: '50%',
      cursor: 'not-allowed',
    },
    fontFamily: defaultTheme.typography.fontFamily,
    fontWeight: defaultTheme.typography.button.fontWeight,
    fontSize: defaultTheme.typography.button.fontSize,
    color: defaultTheme.palette.primary.contrastText,
    background: defaultTheme.palette.primary.main,
    border: `2px solid ${defaultTheme.palette.common.border}`,
    borderRadius: defaultTheme.shape.borderRadius,
    boxShadow: `${defaultTheme.elevation.three} ${defaultTheme.elevation.three} 0px 0px ${defaultTheme.palette.common.shadow}`,
  },
  ({ size }) => ({
    paddingTop: size && setSize(size).paddingTop,
    paddingRight: size && setSize(size).paddingRight,
    paddingBottom: size && setSize(size).paddingBottom,
    paddingLeft: size && setSize(size).paddingLeft,
  }),
  ({ isFullWidth }) => ({
    width: isFullWidth ? '100%' : 'auto',
  }),
  ({ theme, buttonType, disabled }) => ({
    fontFamily: theme?.typography?.fontFamily,
    fontWeight: theme?.typography?.button?.fontWeight,
    fontSize: theme?.typography?.button?.fontSize,
    color: theme?.palette?.primary?.contrastText,
    background: theme?.palette?.primary?.main,
    border: `2px solid ${theme?.palette?.common?.border}`,
    borderRadius: buttonType === 'block' ? theme?.shape?.borderRadius : '50px',
    boxShadow: `${theme?.elevation?.three} ${theme?.elevation?.three} 0px 0px ${theme?.palette?.common?.shadow}`,
    '&:hover': {
      background: !disabled
        ? theme?.palette?.primary?.dark || defaultTheme.palette.primary.dark
        : theme?.palette?.primary?.main || defaultTheme.palette.primary.main,
      boxShadow: !disabled
        ? `${theme?.elevation?.two || defaultTheme.elevation.two} ${
          theme?.elevation?.two || defaultTheme.elevation.two
        } 0px 0px ${
          theme?.palette?.common?.shadow || defaultTheme.palette.common.shadow
        }`
        : `${theme?.elevation?.three || defaultTheme.elevation.three} ${
          theme?.elevation?.three || defaultTheme.elevation.three
        } 0px 0px ${
          theme?.palette?.common?.shadow || defaultTheme.palette.common.shadow
        }`,
    },
    '&:active': {
      background: !disabled
        ? theme?.palette?.primary?.darker || defaultTheme.palette.primary.darker
        : theme?.palette?.primary?.main || defaultTheme.palette.primary.main,
      boxShadow: !disabled
        ? `${theme?.elevation?.none || defaultTheme.elevation.none} ${
          theme?.elevation?.none || defaultTheme.elevation.none
        } 0px 0px ${
          theme?.palette?.common?.shadow || defaultTheme.palette.common.shadow
        }`
        : `${theme?.elevation?.three || defaultTheme.elevation.three} ${
          theme?.elevation?.three || defaultTheme.elevation.three
        } 0px 0px ${
          theme?.palette?.common?.shadow || defaultTheme.palette.common.shadow
        }`,
    },
  })
)

export type ButtonProps = {
  /**
   *  Adds rounded or straight cornders.
   *
   * @default block
   */
  buttonType?: ButtonType
  /**
   *  Applies an optional preceding icon to the label.
   */
  leftIcon?: React.ReactNode
  /**
   *  The function called when the Button is clicked.
   */
  onClick?: () => void
  /**
   *  Applies a classname to the component.
   */
  className?: string
} & StyledButtonProps

export default function Button({
  children,
  buttonType = 'block',
  size = 'lg',
  disabled = false,
  isFullWidth = false,
  leftIcon,
  className,
  onClick,
  ...otherProps
}: ButtonProps) {
  return (
    <StyledButton
      buttonType={buttonType}
      size={size}
      isFullWidth={isFullWidth}
      disabled={disabled}
      onClick={onClick}
      type="button"
      className={className}
      {...otherProps}
    >
      {leftIcon && leftIcon}
      {children}
    </StyledButton>
  )
}
