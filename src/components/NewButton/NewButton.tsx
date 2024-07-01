import React from "react"
import styled from "@emotion/styled"
import { ThemeProvider } from "@emotion/react"
import { setSize } from "./utils"
import { defaultTheme } from "../emotionTheme"

type Size = "xs" | "sm" | "md" | "lg" | "xl"

type StyledButtonProps = {
  size: Size
  disabled?: boolean
} & React.HTMLAttributes<HTMLButtonElement>

const StyledButton = styled("button")<StyledButtonProps>(
  ({ size }) => ({
    paddingTop: size && setSize(size).paddingTop,
    paddingRight: size && setSize(size).paddingRight,
    paddingBottom: size && setSize(size).paddingBottom,
    paddingLeft: size && setSize(size).paddingLeft,
  }),
  ({ theme, disabled }) => ({
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.button.fontWeight,
    fontSize: theme.typography.button.fontSize,
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    border: `2px solid ${theme.palette.common.border}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: `${theme.elevation.three} ${theme.elevation.three} 0px 0px ${theme.palette.common.shadow}`,
    "&:hover": {
      background: !disabled
        ? theme.palette.primary.dark
        : theme.palette.primary.main,
      boxShadow: !disabled
        ? `${theme.elevation.two} ${theme.elevation.two} 0px 0px ${theme.palette.common.shadow}`
        : `${theme.elevation.three} ${theme.elevation.three} 0px 0px ${theme.palette.common.shadow}`,
    },
    "&:active": {
      background: !disabled
        ? theme.palette.primary.darker
        : theme.palette.primary.main,
      boxShadow: !disabled
        ? `${theme.elevation.none} ${theme.elevation.none} 0px 0px ${theme.palette.common.shadow}`
        : `${theme.elevation.three} ${theme.elevation.three} 0px 0px ${theme.palette.common.shadow}`,
    },
  }),
  {
    "&:disabled": {
      opacity: "50%",
      cursor: "not-allowed",
    },
  }
)

type Props = {
  label: string
  hasErrors?: boolean
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
} & StyledButtonProps

export default function NewButton({
  label,
  size = "lg",
  disabled = false,
  onClick,
  ...otherProps
}: Props) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledButton
        size={size}
        disabled={disabled}
        onClick={onClick}
        {...otherProps}
      >
        {label}
      </StyledButton>
    </ThemeProvider>
  )
}
