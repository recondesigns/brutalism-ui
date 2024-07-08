// import React from 'react'
// import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from '../emotionTheme'

// export type ProgressProps = {}

export default function Progress() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>Progress</div>
    </ThemeProvider>
  )
}
