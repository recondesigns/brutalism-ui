import React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from '../emotionTheme'

type ModalDialogWrapperProps = {
  shouldFitContent?: boolean
}

const ModalDialogWrapper = styled('div')<ModalDialogWrapperProps>(
  {
    position: 'static',
    padding: '20px 20px 20px 20px',
    maxHeight: '80%',
    background: 'white',
    overflow: 'scroll',
  },
  ({ shouldFitContent }) => ({
    maxWidth: !shouldFitContent ? '40%' : 'none',
    width: !shouldFitContent ? '100%' : 'auto',
  }),
  ({ theme }) => ({
    border: `1px solid ${theme.palette.common.border}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: `${theme.elevation.three} ${theme.elevation.three} 0px 0px ${theme.palette.common.shadow}`,
  })
)

type ModalDialogProps = {
  shouldFitContent?: boolean
  onClick?: any
  children: React.ReactElement | React.ReactElement[]
}

export default function ModalDialog({
  shouldFitContent = false,
  children,
}: ModalDialogProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ModalDialogWrapper shouldFitContent={shouldFitContent} role="dialog">
        {children}
      </ModalDialogWrapper>
    </ThemeProvider>
  )
}
