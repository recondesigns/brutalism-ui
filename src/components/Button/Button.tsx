import React from 'react'
import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import { setButtonSize, setButtonVariant } from './utils'
import { defaultTheme } from '../emotionTheme'

type StyledButtonProps = Pick<ButtonProps, 'variant'>

const StyledButton = styled('button')<StyledButtonProps>(
  {
    position: 'absolute',
    top: '-3px',
    left: '-3px',
    width: '100%',
    height: '100%',
    fontFamily: defaultTheme.typography.fontFamily,
    fontSize: '16px',
    lineHeight: '24px',
    borderRadius: defaultTheme.shape.borderRadius,
  },
  ({ theme }) => ({
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.main,
    background: theme.palette.primary.main,
    border: `1px solid ${theme.palette.common.border}`,
    borderRadius: theme.shape.borderRadius,
  }),
  ({ variant }) => {
    if (variant) {
      const { backgroundColor, border, contrastColor } =
        setButtonVariant(variant)

      return {
        background: backgroundColor,
        color: contrastColor,
        border: border,
      }
    } else {
      return {}
    }
  },
  ({ disabled }) => ({
    cursor: !disabled ? 'pointer' : 'not-allowed',
  })
)

type ButtonShadowProps = Pick<ButtonProps, 'variant'>

const ButtonShadow = styled('div')<ButtonShadowProps>(
  {
    position: 'absolute',
    top: defaultTheme.elevation.two,
    left: defaultTheme.elevation.two,
    width: '100%',
    height: '100%',
    background: defaultTheme.palette.common.shadow,
    borderRadius: defaultTheme.shape.borderRadius,
  },
  ({ theme }) => ({
    top: theme.elevation.two,
    left: theme.elevation.two,
    borderRadius: theme.shape.borderRadius,
  }),
  ({ variant }) => {
    if (variant) {
      const { isShadowVisible } = setButtonVariant(variant)

      return {
        background: isShadowVisible
          ? defaultTheme.palette.common.shadow
          : 'none',
      }
    } else {
      return {}
    }
  }
)

type ButtonWrapperProps = Pick<ButtonProps, 'size' | 'fullWidth' | 'disabled'>

const ButtonWrapper = styled('div')<ButtonWrapperProps>(
  {
    position: 'relative',
  },
  ({ size, fullWidth }) => {
    if (size) {
      const { width, height } = setButtonSize(size)

      return {
        width: fullWidth ? '100%' : width,
        height: height,
      }
    } else {
      return {}
    }
  },
  ({ disabled }) => ({
    opacity: !disabled ? 'initial' : '40%',

    '&:hover': {
      [`${StyledButton}`]: {
        top: !disabled ? '-2px' : '-3px',
        left: !disabled ? '-2px' : '-3px',
        transition: !disabled ? 'all 200ms ease-in-out' : 'none',
      },
      '&:active': {
        [`${StyledButton}`]: {
          top: !disabled ? '0px' : '-3px',
          left: !disabled ? '0px' : '-3px',
          transition: !disabled ? 'all 200ms ease-in-out' : 'none',
        },
      },
    },
  })
)

export type ButtonProps = {
  /**
   * Copy for prop description.
   *
   * @default primary
   */
  variant?: 'primary' | 'secondary' | 'ghost'
  /**
   * Copy for prop description.
   */
  label: React.ReactNode | React.ReactElement | JSX.Element
  /**
   * Copy for prop description.
   *
   * @default button
   */
  type?: 'submit' | 'button' | 'reset'
  /**
   * Copy for prop description.
   *
   * @default medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Copy for prop description.
   *
   * @default false
   */
  fullWidth?: boolean
  /**
   * Copy for prop description.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * Copy for prop description.
   */
  className?: string
  /**
   * Copy for prop description.
   */
  onClick?: () => void
} & React.HTMLAttributes<HTMLButtonElement>

const Button = ({
  variant = 'primary',
  label,
  type = 'button',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  className,
  onClick,
  ...otherProps
}: ButtonProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ButtonWrapper size={size} fullWidth={fullWidth} disabled={disabled}>
        <ButtonShadow variant={variant} />
        <StyledButton
          variant={variant}
          type={type}
          disabled={disabled}
          className={className}
          data-testid="button-data-testid"
          onClick={onClick}
          {...otherProps}
        >
          {label}
        </StyledButton>
      </ButtonWrapper>
    </ThemeProvider>
  )
}

export default Button
