import React, { HTMLAttributes } from "react"
import styled from "@emotion/styled"
import { ThemeProvider } from "@emotion/react"
import InputLabel from "./Label"
import HelperText from "./HelperText"
import { defaultTheme } from "../emotionTheme"

type Props = {
  /**
   * Description copy for `label` prop.
   */
  label?: string
  /**
   * Description copy for `value` prop.
   */
  value?: string
  /**
   * Description copy for `placeholder` prop.
   */
  placeholder?: string
  /**
   * Description copy for `disabled` prop.
   */
  disabled?: boolean
  /**
   * Description copy for `hasError` prop.
   */
  hasError?: boolean
  /**
   * Description copy for `onchange` prop.
   */
  onchange?: () => void
  /**
   * Description copy for `caption` prop.
   */
  helperText?: string
  /**
   * Description copy for `id` prop.
   */
  id?: string
  /**
   * Description copy for `name` prop.
   */
  name?: string
}

export type InputProps = Props & HTMLAttributes<HTMLInputElement>

const InputWrapper = styled.div<HTMLAttributes<HTMLDivElement>>({
  padding: "12px 0px",
  display: "flex",
  flexDirection: "column",
})

const InputComponent = styled.input<InputProps>(
  {
    padding: "16px 12px",
    fontFamily: "Helvetica Neue",
    fontSize: "16px",
    lineHeight: "20px",
    borderRadius: "4px",
    // "&:focus": {
    //   outline: "1px solid #3391FF",
    // },
  },
  ({ theme, hasError, disabled }) => ({
    color: !hasError ? theme.palette.common.black : theme.palette.error.main,
    border: `2px solid ${theme.palette.common.border}`,
    boxShadow: `${theme.elevation.three} ${theme.elevation.three} 0px 0px ${theme.palette.common.shadow}`,
    background: theme.palette.common.white,
    opacity: !disabled ? "initial" : "50%",
    // "&:not(:placeholder-shown)": {
    //   border: !hasError ? "1px solid #0D0D0D" : "1px solid red",
    // },
  })
)

export default function Input({
  label,
  value,
  onchange,
  placeholder = " ",
  helperText,
  disabled = false,
  hasError = false,
  id,
  name,
  ...otherProps
}: InputProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <InputWrapper data-testid="input-wrapper-test">
        {label && (
          <InputLabel hasError={hasError} data-testid="input-label-test">
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
          {...otherProps}
        />
        {helperText && (
          <HelperText hasError={hasError} data-testid="input-helpertext-test">
            {helperText}
          </HelperText>
        )}
      </InputWrapper>
    </ThemeProvider>
  )
}
