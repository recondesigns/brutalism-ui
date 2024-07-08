import React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from '../emotionTheme'

const convertPercentage = (num: number) => {
  return num.toString()
}

const setSize = (size: 'sm' | 'md' | 'lg') => {
  if (size === 'lg') {
    return '40px'
  } else if (size === 'md') {
    return '32px'
  } else if (size === 'sm') {
    return '24px'
  }
}

const ProgressContainer = styled('div')(
  {
    position: 'relative',
    borderRadius: '50px',
    overflow: 'hidden',
  },
  ({ theme }) => ({
    backround: theme.palette.common.white,
    border: `2px solid ${theme.palette.common.border}`,
    boxShadow: `3px 3px 0px 0px ${theme.palette.common.shadow}`,
  })
)

type ProgressIndicator = {
  size?: string
  percentage: number
}

const ProgressIndicator = styled('div')<ProgressIndicator>(
  {
    position: 'relative',
    // height: '36px',
    // padding: '4px 0px 4px 0px',
    background: 'rgba(141, 255, 140, 0.8)',
    borderRadius: '50px',
  },
  ({ percentage, size }) => ({
    height: size ? size : '36px',
    width: percentage ? `${percentage}%` : '10px',
  })
)

const ProgressLabel = styled('p')(
  {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: '0px',
    transform: 'translate(-50%, -50%)',
    margin: '0px',
    padding: '0px',
    fontFamily: 'sans-serif',
    fontWeight: 700,
    textAlign: 'center',
    zIndex: 10,
  },
  ({ theme }) => ({
    color: theme.palette.common.black,
  })
)

export type ProgressProps = {
  percentage: number
  size?: 'sm' | 'md' | 'lg'
  completeMessage?: string
}

export default function Progress({
  percentage,
  size = 'md',
  completeMessage,
}: ProgressProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProgressContainer>
        <ProgressLabel>
          {percentage !== 100
            ? `${convertPercentage(percentage)}%`
            : completeMessage}
        </ProgressLabel>
        <ProgressIndicator percentage={percentage} size={setSize(size)} />
      </ProgressContainer>
    </ThemeProvider>
  )
}
