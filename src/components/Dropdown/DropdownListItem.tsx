import React from 'react'
import styled from '@emotion/styled'
import Text from '../Text'
import { defaultTheme } from '../emotionTheme'

type ListItemContainerProps = {
  isSelected?: boolean
  disabled?: boolean
}

const ListItemContainer = styled('div')<ListItemContainerProps>(
  {
    padding: '8px 20px',
  },
  ({ theme, isSelected, disabled }) => ({
    background: !isSelected
      ? theme.palette
        ? theme.palette.common.white
        : defaultTheme.palette.common.white
      : theme.palette
        ? theme.palette.primary.main
        : defaultTheme.palette.primary.main,
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
        : !isSelected
          ? theme.palette
            ? theme?.palette?.primary?.light
            : defaultTheme.palette.primary.light
          : theme.palette
            ? theme.palette.primary.main
            : defaultTheme.palette.primary.main,
    },
    '&:active': {
      background: disabled
        ? theme.palette
          ? theme.palette.common.white
          : defaultTheme.palette.common.white
        : theme.palette
          ? theme.palette.primary.dark
          : defaultTheme.palette.primary.dark,
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
  isSelected?: boolean
  disabled?: boolean
  onClick: () => void
  children: React.ReactNode
}

export default function DropdownListItem({
  option,
  isSelected,
  onClick,
  children,
}: DropdownListItemProps) {
  return (
    <ListItemContainer
      disabled={option.disabled}
      isSelected={isSelected}
      onClick={!option.disabled ? onClick : undefined}
    >
      <ListItemText>{children}</ListItemText>
    </ListItemContainer>
  )
}
