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
    background: defaultTheme.palette.common.white,
    '&:hover': {
      background: defaultTheme.palette.primary.light,
    },
    '&:active': {
      background: defaultTheme.palette.primary.main,
    },
  },
  ({ theme, disabled }) => ({
    background: theme?.palette?.common?.white,
    borderBottom: '2px solid black',
    cursor: !disabled ? 'pointer' : 'not-allowed',
    opacity: !disabled ? 'initial' : '50%',
    '&:hover': {
      background: !disabled ? theme?.palette?.primary?.light : 'white',
    },
    '&:active': {
      background: !disabled ? theme?.palette?.primary?.main : 'white',
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
  // console.log(111, option)
  return (
    <ListItemContainer
      disabled={option.disabled}
      onClick={!option.disabled ? onClick : undefined}
    >
      <ListItemText>{children}</ListItemText>
    </ListItemContainer>
  )
}
