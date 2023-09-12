import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      accent: string
      white: string
    },
    typography: {
      button: {
        fontFamily: string
        fontWeight: string
        fontSize: number | string
        lineHeight: number | string
      }
    },
    units: {
      px: string
    }
  }
}