import React from "react"
import styled from "@emotion/styled"

type TextProps = {
  hasError?: boolean
} & React.HTMLAttributes<HTMLParagraphElement>

const Text = styled.label<TextProps>(
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

type LabelProps = {
  hasError?: boolean
  children: string
}

export default function InputLabel({ hasError, children }: LabelProps) {
  return <Text hasError={hasError}>{children}</Text>
}
