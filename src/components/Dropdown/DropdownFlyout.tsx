import React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { defaultTheme } from '../emotionTheme'

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10%);
  }
`

type DropdownFlyoutContainerProps = {
  isOpen?: boolean
  isClosing?: boolean
  flyoutMaxHeight?: string
}

const DropdownFlyoutContainer = styled('div')<DropdownFlyoutContainerProps>(
  {
    position: 'absolute',
    top: 76,
    left: 0,
    right: 0,
    overflowY: 'scroll',
    opacity: 0,
    transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
  },
  ({ flyoutMaxHeight }) => ({
    maxHeight: flyoutMaxHeight ? flyoutMaxHeight : 'initial',
  }),
  ({ isOpen, isClosing }) => css`
    animation: ${isOpen && !isClosing ? slideIn : slideOut} 0.3s ease-out
      forwards;
  `,
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
  isOpen?: boolean
  isClosing?: boolean
  flyoutMaxHeight?: string
  children: React.ReactNode
}

const DropdownFlyout = React.forwardRef<HTMLDivElement, Props>(
  ({ flyoutMaxHeight, isOpen, isClosing, children }, ref) => {
    return (
      <DropdownFlyoutContainer
        ref={ref}
        isOpen={isOpen}
        isClosing={isClosing}
        flyoutMaxHeight={flyoutMaxHeight}
        role='listbox'
        data-testid='dropdown-flyout-test'
      >
        {children}
      </DropdownFlyoutContainer>
    )
  }
)

DropdownFlyout.displayName = 'DropdownFlyout'

export default DropdownFlyout
