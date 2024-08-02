import React from 'react'
import styled from '@emotion/styled'
import Text from '../Text'
import { defaultTheme } from '../emotionTheme'

type ListItemContainerProps = {
  isSelected?: boolean
  isHighlighted?: boolean
  disabled?: boolean
}

const ListItemContainer = styled('div')<ListItemContainerProps>(
  {
    padding: '8px 20px',
  },
  ({ theme, isSelected, disabled, isHighlighted }) => ({
    background: isHighlighted
      ? defaultTheme.palette.primary.light
      : !isSelected
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

type ListItemTextProps = {
  disabled?: boolean
}

const ListItemText = styled(Text)<ListItemTextProps>(({ disabled }) => ({
  opacity: !disabled ? 'inherit' : '50%',
}))

type DropdownListItemProps = {
  option: {
    name: string
    value: string
    disabled: boolean
  }
  isSelected?: boolean
  isHighlighted?: boolean
  disabled?: boolean
  onClick: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  children: React.ReactNode
}

export default function DropdownListItem({
  option,
  isSelected,
  onClick,
  children,
  isHighlighted = false,
  ...otherProps
}: DropdownListItemProps) {
  return (
    <ListItemContainer
      disabled={option.disabled}
      isSelected={isSelected}
      isHighlighted={isHighlighted}
      onClick={!option.disabled ? onClick : undefined}
      {...otherProps}
    >
      <ListItemText disabled={option.disabled}>{children}</ListItemText>
    </ListItemContainer>
  )
}
