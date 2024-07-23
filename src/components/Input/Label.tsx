import React from "react"
import styled from "@emotion/styled"
import { defaultTheme } from "../emotionTheme"

type TextProps = {
  required?: boolean
  hasError?: boolean
} & React.HTMLAttributes<HTMLLabelElement>

const Text = styled.label<TextProps>(
  {
    marginBottom: "8px",
    fontFamily: "sans-serif",
    fontSize: "15px",
    lineHeight: "16px",
    color: defaultTheme.palette.common.black,
  },
  ({ theme, hasError }) => ({
    color: hasError
      ? theme?.palette?.error?.main
      : theme?.palette?.common?.black,
  })
)

type LabelProps = {
  hasError?: boolean
  children: string
  required?: boolean
}

export default function InputLabel({
  hasError,
  children,
  required,
  ...otherProps
}: LabelProps) {
  return (
    <Text hasError={hasError} required={required} {...otherProps}>
      {!required ? children : `${children}*`}
    </Text>
  )
}
