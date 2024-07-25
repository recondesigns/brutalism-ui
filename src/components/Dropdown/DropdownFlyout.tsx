import React from 'react'
import styled from '@emotion/styled'
// import { defaultTheme } from '../emotionTheme'

const DropdownFlyoutContainer = styled('div')(
  {
    position: 'absolute',
    top: 76,
    left: 0,
    right: 0,
    // use this
    border: '2px solid black',
    borderRadius: '4px',
    boxShadow: '3px 3px 0px 0px black',
  }
  // ({ theme }) => ({
  //   border: '2px solid black',
  //   borderRadius: '4px',
  //   boxShadow: '3px 3px 0px 0px black',
  // })
)

type Props = {
  children: React.ReactNode
}

export default function DropdownFlyout({ children }: Props) {
  return <DropdownFlyoutContainer>{children}</DropdownFlyoutContainer>
}
