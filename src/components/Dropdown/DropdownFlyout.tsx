import React from 'react'
import styled from '@emotion/styled'
import { defaultTheme } from '../emotionTheme'
// import { defaultTheme } from '../emotionTheme'

const DropdownFlyoutContainer = styled('div')(
  {
    position: 'absolute',
    top: 76,
    left: 0,
    right: 0,
  },
  ({ theme }) => ({
    border: theme.palette
      ? `2px solid ${theme?.palette?.common?.border}`
      : `2px solid ${defaultTheme.palette.common.border}`,
    borderRadius: theme.palette
      ? theme.shape.borderRadius
      : defaultTheme.shape.borderRadius,
    boxShadow: theme.palette
      ? `${theme.elevation.three} ${theme.elevation.three} 0px 0px ${theme.palette.common.shadow}`
      : `${defaultTheme.elevation.three} ${defaultTheme.elevation.three} 0px 0px ${defaultTheme.palette.common.shadow}`,
  })
)

type Props = {
  children: React.ReactNode
}

export default function DropdownFlyout({ children }: Props) {
  return <DropdownFlyoutContainer>{children}</DropdownFlyoutContainer>
}
