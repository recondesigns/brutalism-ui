const palette = {
  common: {
    surface: '#DBFF80',
    on: '#000000',
    border: '#000000',
    shadow: '#000000'
  },
  primary: {
    main: '#E5A6FF',
    contrastColor: 'white'
  },
  error: {
    main: '#FF8673',
    contrastColor: 'white'
  }
}

const elevation = {
  none: '0px',
  one: '1px',
  two: '2px',
  three: '3px',
  four: '4px',
  five: '5px',
}

const typography = {
  fontFamily: 'sans-serif'
}

const shape = {
  borderRadius: '4px'
}

const spacing = {
  none: '0px',
  xxsmall: '4px',
  xsmall: '8px',
  small: '12px',
  medium: '20px',
  large: '32px',
  xlarge: '48px',
  xxlarge: '96px',
  gutter: '24px'
}

export const defaultTheme = {
  palette,
  elevation,
  typography,
  shape,
  spacing
}