import React from 'react'
import styled from '@emotion/styled'
import Text from '../Text'
import { defaultTheme } from '../emotionTheme'

type ListItemContainerProps = {
  disabled?: boolean
}

const ListItemContainer = styled('div')<ListItemContainerProps>(
  {
    padding: '8px 20px',
  },
  ({ theme, disabled }) => ({
    background: theme.palette
      ? theme.palette.common.white
      : defaultTheme.palette.common.white,
    borderBottom: theme.palette
      ? `2px solid ${theme.palette.common.border}`
      : `2px solid ${defaultTheme.palette.common.border}`,
    cursor: !disabled ? 'pointer' : 'not-allowed',
    opacity: !disabled ? 'initial' : '50%',
    '&:hover': {
      background: disabled
        ? theme.palette
          ? theme.palette.common.white
          : defaultTheme.palette.common.white
        : theme.palette
          ? theme?.palette?.primary?.light
          : defaultTheme.palette.primary.light,
    },
    '&:active': {
      background: disabled
        ? theme.palette
          ? theme.palette.common.white
          : defaultTheme.palette.common.white
        : theme.palette
          ? theme.palette.primary.main
          : defaultTheme.palette.primary.main,
    },
  })
)

const ListItemText = styled(Text)({})

type DropdownListItemProps = {
  option: {
    name: string
    value: string
    disabled: boolean
  }
  disabled?: boolean
  onClick: () => void
  children: React.ReactNode
}

export default function DropdownListItem({
  option,
  onClick,
  children,
}: DropdownListItemProps) {
  return (
    <ListItemContainer
      disabled={option.disabled}
      onClick={!option.disabled ? onClick : undefined}
    >
      <ListItemText>{children}</ListItemText>
    </ListItemContainer>
  )
}
