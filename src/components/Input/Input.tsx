import React, { HTMLAttributes } from "react"
import styled from "@emotion/styled"
import InputLabel from "./Label"
import HelperText from "./HelperText"

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
}

export type InputProps = Props & HTMLAttributes<HTMLInputElement>

const InputWrapper = styled.div<HTMLAttributes<HTMLDivElement>>({
  padding: "12px 0px",
  display: "flex",
  flexDirection: "column",
})

const InputComponent = styled.input<InputProps>(
  {
    padding: "8px",
    fontFamily: "Helvetica Neue",
    fontSize: "20px",
    lineHeight: "18px",
    borderRadius: "4px",
    "&:focus": {
      outline: "1px solid #3391FF",
    },
  },
  ({ hasError, disabled }) => ({
    border: !hasError ? "1px solid #808080" : "1px solid red",
    background: disabled && !hasError ? "#D9D9D9" : "#FFFFFF",
    "&:not(:placeholder-shown)": {
      border: !hasError ? "1px solid #0D0D0D" : "1px solid red",
    },
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
}: InputProps) {
  return (
    <InputWrapper data-testid="testid-input-wrapper">
      {label && <InputLabel hasError={hasError}>{label}</InputLabel>}
      <InputComponent
        value={value}
        placeholder={placeholder}
        hasError={hasError}
        disabled={disabled}
        onChange={onchange}
        data-testid="testid-input"
      />
      {helperText && <HelperText hasError={hasError}>{helperText}</HelperText>}
    </InputWrapper>
  )
}
