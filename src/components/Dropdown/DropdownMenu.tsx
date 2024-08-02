import React from 'react'
import styled from '@emotion/styled'
import Text from '../Text'
import { ChevronIcon } from '../../assets'
import { defaultTheme } from '../emotionTheme'

type DropdownMenuContainerProps = {
  hasError?: boolean
  disabled?: boolean
  isFlyoutOpen?: boolean
}

const DropdownMenuContainer = styled('button')<DropdownMenuContainerProps>(
  {
    position: 'relative',
    margin: '0px 0px 8px 0px',
    padding: '12px 20px 12px 20px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'left',
    transition:
      'box-shadow 150ms cubic-bezier(.645, .045, .355, 1), transform 150ms cubic-bezier(.645,.045,.355,1)',
    '&:hover': {
      transform: 'translate(-2px, -2px)',
    },
    '&:active': {
      transform: 'translate(-0px, -0px)',
    },
  },
  ({ theme, isFlyoutOpen, hasError, disabled }) => {
    const boxShadowClosed = theme.palette
      ? `${theme.elevation.three} ${theme.elevation.three} 0px 0px ${theme.palette.common.shadow}`
      : `${defaultTheme.elevation.three} ${defaultTheme.elevation.three} 0px 0px ${defaultTheme.palette.common.shadow}`
    const boxShadowHover = theme.palette
      ? `${theme.elevation.two} ${theme.elevation.two} 0px 0px ${theme.palette.common.shadow}`
      : `${defaultTheme.elevation.two} ${defaultTheme.elevation.two} 0px 0px ${defaultTheme.palette.common.shadow}`

    return {
      transform: !isFlyoutOpen
        ? 'translate(-3px, -3px)'
        : 'translate(0px, 0px)',

      background: !isFlyoutOpen
        ? theme.palette
          ? theme.palette.common.white
          : defaultTheme.palette.common.white
        : theme.palette
          ? theme.palette.primary.light
          : defaultTheme.palette.primary.light,
      border: !hasError
        ? theme.palette
          ? `${theme.elevation.two} solid ${theme.palette.common.border}`
          : `${defaultTheme.elevation.two} solid ${defaultTheme.palette.common.border}`
        : theme.palette
          ? `${theme.elevation.two} solid ${theme.palette.error.main}`
          : `${defaultTheme.elevation.two} solid ${defaultTheme.palette.error.main}`,
      borderRadius: theme.palette
        ? theme.shape.borderRadius
        : defaultTheme.shape.borderRadius,
      boxShadow: isFlyoutOpen ? 'none' : boxShadowClosed,
      opacity: disabled ? '50%' : 'initial',
      cursor: !disabled ? 'pointer' : 'not-allowed',
      '&:hover': {
        transform: disabled
          ? 'translate(-3px, -3px)'
          : !isFlyoutOpen
            ? 'translate(-2px, -2px)'
            : 'translate(0px, 0px)',
        background: !disabled
          ? theme.palette
            ? theme.palette.primary.light
            : defaultTheme.palette.primary.light
          : theme.palette
            ? theme.palette.common.white
            : defaultTheme.palette.common.white,
        boxShadow: isFlyoutOpen
          ? 'none'
          : !disabled
            ? boxShadowHover
            : '3px 3px 0px 0px black',
      },
      '&:active': {
        transform: disabled
          ? 'translate(-3px, -3px)'
          : !isFlyoutOpen
            ? 'translate(0px, 0px)'
            : 'translate(0px, 0px)',
        boxShadow: !disabled ? 'none' : '3px 3px 0px 0px black',
      },
    }
  }
)

type IconContainerProps = {
  isOpen?: boolean
}

const IconContainer = styled('div')<IconContainerProps>(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ({ isOpen }) => ({
    transform: isOpen ? 'rotate(180deg)' : 'initial',
  })
)

const ButtonText = styled(Text)({
  width: '100%',
})

type Option = {
  name: string
  value: string
  disabled: boolean
}

type DropdownMenuProps = {
  value?: Option | null
  isFlyoutOpen?: boolean
  disabled?: boolean
  hasError?: boolean
  onClick?: () => void
  onKeyDown?: (e: React.KeyboardEvent) => void
}

const DropdownMenu = React.forwardRef<HTMLButtonElement, DropdownMenuProps>(
  (
    {
      value,
      isFlyoutOpen,
      hasError = false,
      disabled = false,
      onClick,
      onKeyDown,
    },
    ref
  ) => {
    return (
      <DropdownMenuContainer
        ref={ref}
        isFlyoutOpen={isFlyoutOpen}
        hasError={hasError}
        disabled={disabled}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        <ButtonText variant="body1">
          {value ? value.name : 'Choose an option...'}
        </ButtonText>
        <IconContainer isOpen={isFlyoutOpen}>
          <ChevronIcon />
        </IconContainer>
      </DropdownMenuContainer>
    )
  }
)

DropdownMenu.displayName = 'DropdownMenu'

export default DropdownMenu
