const palette = {
  common: {
    surface: '#DBFF80',
    on: '#000000',
    border: '#000000',
    shadow: '#000000',
    black: '#000000',
    white: '#FFFFFF',
  },
  primary: {
    light: '#F6E0FF',
    main: '#E5A6FF',
    dark: '#DA80FF',
    darker: '#D266FF',
    contrastText: '#000000',
  },
  success: {
    main: '#8DFF8C',
    contrastText: '#000000',
  },
  warning: {
    main: '#FF8673',
    contrastText: '#000000',
  },
  error: {
    main: '#FF4F58',
    contrastText: '#000000',
  },
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
  fontFamily: 'sans-serif',
  button: {
    fontFamily: 'sans-serif',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '24px',
  },
}

const shape = {
  borderRadius: '4px',
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
  gutter: '24px',
}

export const defaultTheme = {
  palette,
  elevation,
  typography,
  shape,
  spacing,
}
