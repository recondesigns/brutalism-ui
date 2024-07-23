import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'
// import { ThemeProvider } from '@emotion/react'
import InputLabel from './Label'
import HelperText from './HelperText'
import { defaultTheme } from '../emotionTheme'

type Props = {
  /**
   * Applies a label to the input.
   */
  label?: string
  /**
   * Sets the current value of the input field.
   */
  value?: string
  /**
   * Adds a placeholder when the user has not interacted with the input.
   */
  placeholder?: string
  /**
   * Disables user interaction with the input, and applies opacity as a visual indicator.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * Applies error styles when there is an error present.
   *
   * @default false
   */
  hasError?: boolean
  /**
   * Function that is fired when a change event occurs in the input.
   */
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * Applies a string of text to assist users.
   */
  helperText?: string
  /**
   * Applies an id to the core input element.
   */
  id?: string
  /**
   * Applies an name attribute to the label and the core input element.
   */
  name?: string
  /**
   * Applies an type attribute to the base input element.
   */
  type?: React.HTMLInputTypeAttribute
  /**
   * Adds the required attribute to the base input element and adds an asterisk to the label.
   */
  required?: boolean
}

export type InputProps = Props & HTMLAttributes<HTMLInputElement>

const InputWrapper = styled.div<HTMLAttributes<HTMLDivElement>>({
  padding: '12px 0px',
  display: 'flex',
  flexDirection: 'column',
})

const InputComponent = styled.input<InputProps>(
  {
    padding: '16px 12px',
    background: defaultTheme.palette.common.white,
    fontFamily: 'Helvetica Neue',
    fontSize: '16px',
    lineHeight: '20px',
    color: defaultTheme.palette.common.black,
    border: `2px solid ${defaultTheme.palette.common.border}`,
    borderRadius: '4px',
    boxShadow: `${defaultTheme.elevation.three} ${defaultTheme.elevation.three} 0px 0px ${defaultTheme.palette.common.shadow}`,
    '&:hover': {
      background: defaultTheme.palette.primary.light,
      boxShadow: `${defaultTheme.elevation.two} ${defaultTheme.elevation.two} 0px 0px ${defaultTheme.palette.common.shadow}`,
    },
    '&:focus': {
      background: defaultTheme.palette.primary.light,
      outline: 'none',
      boxShadow: `${defaultTheme.elevation.none} ${defaultTheme.elevation.none} 0px 0px ${defaultTheme.palette.common.shadow}`,
    },
  },
  ({ theme, hasError, disabled }) => ({
    color: theme?.palette?.common?.black,
    border: !hasError
      ? `2px solid ${theme?.palette?.common?.border}`
      : `2px solid ${theme?.palette?.error?.main}`,
    boxShadow: `${theme?.elevation?.three} ${theme?.elevation?.three} 0px 0px ${theme?.palette?.common?.shadow}`,
    background: theme?.palette?.common?.white,
    opacity: !disabled ? 'initial' : '50%',
    '&:hover': {
      background: !disabled
        ? theme?.palette?.primary?.light
        : theme?.palette?.common?.white,
      boxShadow: !disabled
        ? `${theme?.elevation?.two} ${theme.elevation?.two} 0px 0px ${theme?.palette?.common?.shadow}`
        : `${theme?.elevation?.three} ${theme.elevation?.three} 0px 0px ${theme?.palette?.common?.shadow}`,
      cursor: !disabled ? 'initial' : 'not-allowed',
    },
    '&:focus': {
      background: theme?.palette?.primary?.light,
      outline: 'none',
      boxShadow: `${theme?.elevation?.none} ${theme?.elevation?.none} 0px 0px ${theme?.palette?.common?.shadow}`,
    },
  })
)

export default function Input({
  label,
  value,
  onchange,
  placeholder = ' ',
  helperText,
  disabled = false,
  hasError = false,
  id,
  name,
  required,
  className,
  ...otherProps
}: InputProps) {
  return (
    // <ThemeProvider theme={defaultTheme}>
    <InputWrapper className={className} data-testid="input-wrapper-test">
      {label && (
        <InputLabel
          required={required}
          hasError={hasError}
          data-testid="input-label-test"
        >
          {label}
        </InputLabel>
      )}
      <InputComponent
        value={value}
        placeholder={placeholder}
        hasError={hasError}
        disabled={disabled}
        onChange={onchange}
        data-testid="input-test"
        id={id}
        name={name}
        required={required}
        {...otherProps}
      />
      {helperText && (
        <HelperText hasError={hasError} data-testid="input-helpertext-test">
          {helperText}
        </HelperText>
      )}
    </InputWrapper>
    // </ThemeProvider>
  )
}
