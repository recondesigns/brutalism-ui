import React from 'react'
import styled from '@emotion/styled'
import Text from '../Text'
import { ChevronIcon } from '../../assets'

const DropdownMenuContainer = styled('button')(
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
    // use these
    background: 'white',
    border: '2px solid black',
    borderRadius: '4px',
    boxShadow: '3px 3px 0px 0px black',
  }
  // ({ theme }) => ({
  //   background: "white",
  //   border: "2px solid black",
  //   borderRadius: "4px",
  //   boxShadow: `3px 3px 0px 0px black`,
  // })
)

const ButtonText = styled(Text)({
  width: '100%',
})

type DropdownMenuProps = {
  value?: string | number | null
  onClick?: () => void
}

export default function DropdownMenu({ value, onClick }: DropdownMenuProps) {
  return (
    <DropdownMenuContainer onClick={onClick}>
      <ButtonText variant="body1">
        {value ? value : 'Choose an option...'}
      </ButtonText>
      <ChevronIcon />
    </DropdownMenuContainer>
  )
}
