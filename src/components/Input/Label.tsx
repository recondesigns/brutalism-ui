import React from "react"
import styled from "@emotion/styled"

type TextProps = {
  hasError?: boolean
} & React.HTMLAttributes<HTMLLabelElement>

const Text = styled.label<TextProps>(
  {
    marginBottom: "8px",
    fontFamily: "sans-serif",
    fontSize: "15px",
    lineHeight: "16px",
  },
  ({ theme, hasError }) => ({
    color: hasError ? theme.palette.error.main : "black",
  })
)

type LabelProps = {
  hasError?: boolean
  children: string
}

export default function InputLabel({
  hasError,
  children,
  ...otherProps
}: LabelProps) {
  return (
    <Text hasError={hasError} {...otherProps}>
      {children}
    </Text>
  )
}
