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
  },
  ({ theme, isFlyoutOpen, hasError, disabled }) => {
    const boxShadowClosed = theme.palette
      ? `${theme.elevation.three} ${theme.elevation.three} 0px 0px ${theme.palette.common.shadow}`
      : `${defaultTheme.elevation.three} ${defaultTheme.elevation.three} 0px 0px ${defaultTheme.palette.common.shadow}`
    const boxShadowHover = theme.palette
      ? `${theme.elevation.two} ${theme.elevation.two} 0px 0px ${theme.palette.common.shadow}`
      : `${defaultTheme.elevation.two} ${defaultTheme.elevation.two} 0px 0px ${defaultTheme.palette.common.shadow}`

    return {
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
        boxShadow: !disabled ? 'none' : '3px 3px 0px 0px black',
      },
    }
  }
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
}

const DropdownMenu = React.forwardRef<HTMLButtonElement, DropdownMenuProps>(
  (
    { value, isFlyoutOpen, hasError = false, disabled = false, onClick },
    ref
  ) => {
    return (
      <DropdownMenuContainer
        ref={ref}
        isFlyoutOpen={isFlyoutOpen}
        hasError={hasError}
        disabled={disabled}
        onClick={onClick}
      >
        <ButtonText variant="body1">
          {value ? value.name : 'Choose an option...'}
        </ButtonText>
        <ChevronIcon />
      </DropdownMenuContainer>
    )
  }
)

DropdownMenu.displayName = 'DropdownMenu'

export default DropdownMenu
