import React from 'react'
import styled from '@emotion/styled'
import Text from '../Text'
import { ChevronIcon } from '../../assets'
import { defaultTheme } from '../emotionTheme'

type DropdownMenuContainerProps = {
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
    cursor: 'pointer',
  },
  ({ theme, isFlyoutOpen }) => {
    const boxShadowClosed = theme.palette
      ? `${theme.elevation.three} ${theme.elevation.three} 0px 0px ${theme.palette.common.shadow}`
      : `${defaultTheme.elevation.three} ${defaultTheme.elevation.three} 0px 0px ${defaultTheme.palette.common.shadow}`
    const boxShadowHover = theme.palette
      ? `${theme.elevation.two} ${theme.elevation.two} 0px 0px ${theme.palette.common.shadow}`
      : `${defaultTheme.elevation.three} ${defaultTheme.elevation.three} 0px 0px ${defaultTheme.palette.common.shadow}`
    const boxShadowOpen = theme.palette
      ? `${theme.elevation.none} ${theme.elevation.none} 0px 0px none`
      : `${defaultTheme.elevation.three} ${defaultTheme.elevation.three} 0px 0px none`

    return {
      background: theme.palette
        ? theme.palette.common.white
        : defaultTheme.palette.common.white,
      border: theme.palette
        ? `${theme.elevation.two} solid ${theme.palette.common.border}`
        : `${defaultTheme.elevation.two} solid ${defaultTheme.palette.common.border}`,
      borderRadius: theme.palette
        ? theme.shape.borderRadius
        : defaultTheme.shape.borderRadius,
      boxShadow: isFlyoutOpen ? boxShadowOpen : boxShadowClosed,
      '&:hover': {
        boxShadow: isFlyoutOpen ? boxShadowOpen : boxShadowHover,
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
  onClick?: () => void
}

export default function DropdownMenu({
  value,
  isFlyoutOpen,
  onClick,
}: DropdownMenuProps) {
  return (
    <DropdownMenuContainer isFlyoutOpen={isFlyoutOpen} onClick={onClick}>
      <ButtonText variant="body1">
        {value ? value.name : 'Choose an option...'}
      </ButtonText>
      <ChevronIcon />
    </DropdownMenuContainer>
  )
}
