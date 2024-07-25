import React from 'react'
import styled from '@emotion/styled'
import Text from '../Text'
import { ChevronIcon } from '../../assets'

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
  ({ isFlyoutOpen }) => ({
    background: 'white',
    border: '2px solid black',
    borderRadius: '4px',
    boxShadow: isFlyoutOpen ? '0px 0px 0px 0px black' : '3px 3px 0px 0px black',
    '&:hover': {
      boxShadow: isFlyoutOpen ? '0px 0px 0px 0px black' : '2px 2px 0px 0px black'
    },
    '&:active': {
      boxShadow: '0px 0px 0px 0px black',
    }
  })
)

const ButtonText = styled(Text)({
  width: '100%',
})

type DropdownMenuProps = {
  value?: string | number | null
  isFlyoutOpen?: boolean
  onClick?: () => void
}

export default function DropdownMenu({ value, isFlyoutOpen, onClick }: DropdownMenuProps) {
  console.log('flyout changed')
  return (
    <DropdownMenuContainer isFlyoutOpen={isFlyoutOpen} onClick={onClick}>
      <ButtonText variant="body1">
        {value ? value : 'Choose an option...'}
      </ButtonText>
      <ChevronIcon />
    </DropdownMenuContainer>
  )
}
