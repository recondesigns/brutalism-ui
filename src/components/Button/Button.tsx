import React from "react"
import styled from "@emotion/styled"
import { ThemeProvider } from "@emotion/react"
import { setSize } from "./utils"
import { defaultTheme } from "../emotionTheme"

type Size = "xs" | "sm" | "md" | "lg" | "xl"

type StyledButtonProps = {
  /**
   *  Adds padding to the button to create different sizes.
   *
   * @default lg
   */
  size?: Size
  /**
   *  Forces the width to 100% of the parent container.
   *
   * @default false
   */
  isFullWidth?: boolean
  /**
   *  Disables interaction with the Button and applies opacity as visual indicator.
   *
   * @default false
   */
  disabled?: boolean
  /**
   *  Applies a classname to the component.
   */
  className?: string
} & React.HTMLAttributes<HTMLButtonElement>

const StyledButton = styled("button")<StyledButtonProps>(
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    "&:disabled": {
      opacity: "50%",
      cursor: "not-allowed",
    },
  },
  ({ size }) => ({
    paddingTop: size && setSize(size).paddingTop,
    paddingRight: size && setSize(size).paddingRight,
    paddingBottom: size && setSize(size).paddingBottom,
    paddingLeft: size && setSize(size).paddingLeft,
  }),
  ({ isFullWidth }) => ({
    width: isFullWidth ? "100%" : "auto",
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
  })
)

export type ButtonProps = {
  /**
   *  Applies an optional preceding icon to the label.
   */
  leftIcon?: React.ReactNode
  /**
   *  The function called when the Button is clicked.
   */
  onClick?: () => void
  /**
   *  Applies a classname to the component.
   */
  className?: string
} & StyledButtonProps

export default function Button({
  children,
  size = "lg",
  disabled = false,
  isFullWidth = false,
  leftIcon,
  className,
  onClick,
  ...otherProps
}: ButtonProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledButton
        size={size}
        isFullWidth={isFullWidth}
        disabled={disabled}
        onClick={onClick}
        type="button"
        className={className}
        {...otherProps}
      >
        {leftIcon && leftIcon}
        {children}
      </StyledButton>
    </ThemeProvider>
  )
}
