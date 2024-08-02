import React from 'react'
import styled from '@emotion/styled'
import { defaultTheme } from '../emotionTheme'

type DropdownFlyoutContainerProps = {
  flyoutMaxHeight?: string
}

const DropdownFlyoutContainer = styled('div')<DropdownFlyoutContainerProps>(
  {
    position: 'absolute',
    top: 76,
    left: 0,
    right: 0,
    overflow: 'scroll',
  },
  ({ flyoutMaxHeight }) => ({
    maxHeight: flyoutMaxHeight ? flyoutMaxHeight : 'initial',
  }),
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
  flyoutMaxHeight?: string
  children: React.ReactNode
}

const DropdownFlyout = React.forwardRef<HTMLDivElement, Props>(
  ({ flyoutMaxHeight, children }, ref) => {
    return (
      <DropdownFlyoutContainer ref={ref} flyoutMaxHeight={flyoutMaxHeight}>
        {children}
      </DropdownFlyoutContainer>
    )
  }
)

DropdownFlyout.displayName = 'DropdownFlyout'

export default DropdownFlyout
