import React from "react"
import styled from "@emotion/styled"
import { ThemeProvider } from "@emotion/react"
import { setSize } from "./utils"
import { defaultTheme } from "../emotionTheme"

type Size = "xs" | "sm" | "md" | "lg" | "xl"

type StyledButtonProps = {
  size: Size
  disabled?: boolean
}

const StyledButton = styled("button")<StyledButtonProps>(
  {
    // padding: '12px 20px'
    // border: '2px solid red'
  },
  ({ size }) => ({
    paddingTop: size && setSize(size).paddingTop,
    paddingRight: size && setSize(size).paddingRight,
    paddingBottom: size && setSize(size).paddingBottom,
    paddingLeft: size && setSize(size).paddingLeft,
  }),
  ({ disabled }) => ({
    opacity: disabled ? "50%" : "initial",
    cursor: disabled ? "not-allowed" : "pointer",
  }),
  ({ theme }) => ({
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.button.fontWeight,
    fontSize: theme.typography.button.fontSize,
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    border: `2px solid ${theme.palette.common.border}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: `${theme.elevation.three} ${theme.elevation.three} 0px 0px ${theme.palette.common.shadow}`,
    "&:hover": {
      background: theme.palette.primary.dark,
      boxShadow: `${theme.elevation.two} ${theme.elevation.two} 0px 0px ${theme.palette.common.shadow}`,
    },
    "&:active": {
      background: theme.palette.primary.darker,
      boxShadow: `${theme.elevation.none} ${theme.elevation.none} 0px 0px ${theme.palette.common.shadow}`,
    },
  })
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
}: Props) {
  console.log(setSize(size))

  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledButton size={size} disabled={disabled}>
        {label}
      </StyledButton>
    </ThemeProvider>
  )
}
