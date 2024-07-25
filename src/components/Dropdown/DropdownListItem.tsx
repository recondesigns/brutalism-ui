import React from 'react'
import styled from '@emotion/styled'
import Text from '../Text'
import { defaultTheme } from '../emotionTheme'

const ListItemContainer = styled('div')(
  {
    padding: '8px 20px',
    background: defaultTheme.palette.common.white,
    cursor: 'pointer',
    '&:hover': {
      background: defaultTheme.palette.primary.light,
    },
    '&:active': {
      background: defaultTheme.palette.primary.main,
    },
  },
  ({ theme }) => ({
    background: theme?.palette?.common?.white,
    borderBottom: '2px solid black',
    '&:hover': {
      background: theme?.palette?.primary?.light,
    },
    '&:active': {
      background: theme?.palette?.primary?.main,
    },
  })
)

const ListItemText = styled(Text)({})

type Props = {
  children: React.ReactNode
  onClick: () => void
}

export default function DropdownListItem({ onClick, children }: Props) {
  return (
    <ListItemContainer onClick={onClick}>
      <ListItemText>{children}</ListItemText>
    </ListItemContainer>
  )
}
