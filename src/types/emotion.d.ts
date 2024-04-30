import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      common: {
        on: string
        border: string
        shadow: string
      }
      primary: {
        main: string
        contrastColor: string
      }
      error: {
        main: string
        contrastColor: string
      }
    }
    elevation: {
      none: string
      one: string
      two: string
      three: string
      four: string
      five: string
    }
    typography: {
      fontFamily: string
    },
    shape: {
      borderRadius: string
    },
    spacing: {
      none: string
      xxsmall: string
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
      gutter: string
    }
  }
}
