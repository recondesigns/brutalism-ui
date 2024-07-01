type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const setSize = (size: Size) => {
  switch (size) {
  case 'xs':
    return {
      paddingTop: '4px',
      paddingRight: '4px',
      paddingBottom: '4px',
      paddingLeft: '4px',
    }
  case 'sm':
    return {
      paddingTop: '6px',
      paddingRight: '6px',
      paddingBottom: '6px',
      paddingLeft: '6px',
    }
  case 'md':
    return {
      paddingTop: '8px',
      paddingRight: '8px',
      paddingBottom: '8px',
      paddingLeft: '8px',
    }
  case 'lg':
    return {
      paddingTop: '12px',
      paddingRight: '12px',
      paddingBottom: '12px',
      paddingLeft: '12px',
    }
  case 'xl':
    return {
      paddingTop: '16px',
      paddingRight: '16px',
      paddingBottom: '16px',
      paddingLeft: '16px',
    }

  default:
    return {
      paddingTop: '12px',
      paddingRight: '12px',
      paddingBottom: '12px',
      paddingLeft: '12px',
    }
  }
}

export { setSize }
