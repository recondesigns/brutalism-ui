import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from '../emotionTheme'

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
  value: string
}

const ProgressIndicator = styled('div')<ProgressIndicator>(
  {
    position: 'relative',
    background: 'rgba(141, 255, 140, 0.8)',
    borderRadius: '50px',
  },
  ({ value, size }) => ({
    height: size ? size : '36px',
    width: value ? value : '10px',
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
  /**
   * Sets the width of the filler and label text.
   */
  value: number
  /**
   * Applies a maximum value.
   */
  max?: number
  /**
   * Applies height options.
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Provides a string to let users know when progress has reached 100%.
   */
  completeMessage?: string
}

export default function Progress({
  value,
  max = 100,
  size = 'md',
  completeMessage,
}: ProgressProps) {
  const calculatePercentage = (val: number, max: number) => {
    if (max <= 0) {
      return '0%'
    }

    const percentage = (val / max) * 100

    return `${Math.min(Math.max(percentage, 0), 100).toFixed(2)}%`
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <ProgressContainer>
        <ProgressLabel>
          {value !== 100 ? calculatePercentage(value, max) : completeMessage}
        </ProgressLabel>
        <ProgressIndicator
          value={calculatePercentage(value, max)}
          size={setSize(size)}
        />
      </ProgressContainer>
    </ThemeProvider>
  )
}
