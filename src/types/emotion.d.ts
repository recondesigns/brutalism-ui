import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      common: {
        on: string
        border: string
        shadow: string
        surface: string
      }
      primary: {
        light: string
        main: string
        dark: string
        darker: string
        contrastText: string
      }
      success: {
        main: string
        contrastText: string
      }
      warning: {
        main: string
        contrastText: string
      }
      error: {
        main: string
        contrastText: string
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
