import React from "react"
import styled from "@emotion/styled"

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
  caption?: string
}

export type InputProps = Props & React.ComponentProps<"input">

type LabelProps = {
  hasError?: boolean
}

type CaptionProps = {
  hasError?: boolean
}

const InputWrapper = styled.div({
  padding: "12px 0px",
  display: "flex",
  flexDirection: "column",
})

const Label = styled.label<LabelProps>(
  {
    marginBottom: "8px",
    fontFamily: "sans-serif",
    fontSize: "14px",
    lineHeight: "16px",
  },
  ({ hasError }) => ({
    color: hasError ? "red" : "black",
  })
)

const Caption = styled.caption<CaptionProps>(
  {
    marginTop: "8px",
    fontFamily: "sans-serif",
    fontSize: "12px",
    lineHeight: "16px",
    textAlign: 'left'
  },
  ({ hasError }) => ({
    color: hasError ? "red" : "black",
  })
)

const InputComponent = styled.input<InputProps>(
  {
    padding: "8px",
    fontFamily: "sans-serif",
    fontSize: "16px",
    lineHeight: "18px",
    background: "white",
    borderRadius: "4px",
  },
  ({ hasError, theme }) => ({
    color: !hasError ? "black" : "red",
    border: !hasError ? "1px solid black" : "1px solid red",
  })
)

export default function Input({
  label,
  value,
  onchange,
  placeholder,
  caption,
  disabled = false,
  hasError = false,
}: InputProps) {
  return (
    <InputWrapper>
      {label && (<Label hasError={hasError}>{label}</Label>)}
      <InputComponent
        value={value}
        placeholder={placeholder}
        hasError={hasError}
        disabled={disabled}
        onChange={onchange}
      />
      {caption && (<Caption hasError={hasError}>{caption}</Caption>)}
    </InputWrapper>
  )
}
