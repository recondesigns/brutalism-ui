import React from "react"
import styled from "@emotion/styled"

type TextProps = {
  hasError?: boolean
} & React.HTMLAttributes<HTMLParagraphElement>

const Text = styled.p<TextProps>(
  {
    marginTop: "8px",
    fontFamily: "sans-serif",
    fontSize: "12px",
    lineHeight: "16px",
    textAlign: "left",
  },
  ({ hasError }) => ({
    color: hasError ? "red" : "black",
  })
)

type HelperTextProps = {
  hasError?: boolean
  children: string
}

export default function HelperText({ hasError, children }: HelperTextProps) {
  return <Text hasError={hasError}>{children}</Text>
}
