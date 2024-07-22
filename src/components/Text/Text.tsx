import React from "react"
import styled from "@emotion/styled"
import { ThemeProvider } from "@emotion/react"
import { defaultTheme } from "../emotionTheme"

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"

const variantMap: { [key in Variant]: React.ElementType } = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "p",
  subtitle2: "p",
  body1: "p",
  body2: "p",
  caption: "span",
}

function setFontSize(textVariant: Variant) {
  switch (textVariant) {
    case "h1":
      return "6rem"
    case "h2":
      return "3.75rem"
    case "h3":
      return "3rem"
    case "h4":
      return "2.125rem"
    case "h5":
      return "1.5rem"
    case "h6":
      return "1.25rem"
    case "subtitle1":
      return "1rem"
    case "subtitle2":
      return "0.875rem"
    case "body1":
      return "1rem"
    case "body2":
      return "0.875rem"
    case "caption":
      return "00.75rem"
  }
}

const TextRoot = styled("div")<TypographyProps>(
  ({ theme, variant = "body1" }) => ({
    fontFamily: theme.typography.fontFamily,
    fontSize: setFontSize(variant),
    color: theme.palette.common.black,
  }),
  ({ gutterBottom }) => ({
    margin: gutterBottom ? "0 0 0.35em 0" : "0",
  })
)

export type TypographyProps = {
  /**
   * Sets the text variant.
   *
   * @default body1
   */
  variant?: Variant
  /**
   * Optionally sets the root element to specific element.
   */
  asElement?: React.ElementType
  /**
   * Optionally adds bottom margin to the root element.
   *
   * @default false
   */
  gutterBottom?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function Text({
  variant = "body1",
  asElement,
  gutterBottom = false,
  ...otherProps
}: TypographyProps) {
  const Component = asElement || variantMap[variant] || "p"

  return (
    <ThemeProvider theme={defaultTheme}>
      <TextRoot
        as={Component}
        variant={variant}
        gutterBottom={gutterBottom}
        {...otherProps}
      />
    </ThemeProvider>
  )
}
