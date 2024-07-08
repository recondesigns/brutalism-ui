import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from '../emotionTheme'

const calculatePercentage = (val: number, max: number, decimals: number) => {
  if (max <= 0) {
    return '0%'
  }

  const percentage = (val / max) * 100

  return `${Math.min(Math.max(percentage, 0), 100).toFixed(decimals)}%`
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

const ProgressIndicatorText = styled('p')(
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
   * Sets how many decimal places will be appended to the label.
   */
  includeDecimals?: number
  /**
   * Provides a string to let users know when progress has reached 100%.
   */
  completeMessage?: string
}

export default function Progress({
  value,
  max = 100,
  size = 'md',
  includeDecimals = 0,
  completeMessage = 'Complete!',
  ...otherProps
}: ProgressProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProgressContainer data-testid="progress-test" {...otherProps}>
        <ProgressIndicatorText data-testid="progress-indicator-text-test">
          {value !== 100
            ? calculatePercentage(value, max, includeDecimals)
            : completeMessage}
        </ProgressIndicatorText>
        <ProgressIndicator
          value={calculatePercentage(value, max, includeDecimals)}
          size={setSize(size)}
          data-testid="progress-indicator-test"
        />
      </ProgressContainer>
    </ThemeProvider>
  )
}
