import React from "react";
import styled from "@emotion/styled";
import { useButton, type AriaButtonProps } from "@react-aria/button";
import { useObjectRef } from "@react-aria/utils";
import { setSize } from "./utils";
import { defaultTheme } from "../emotionTheme";

type Size = "xs" | "sm" | "md" | "lg" | "xl";
type ButtonType = "block" | "rounded";

type StyledButtonProps = {
  /**
   *  Adds rounded or straight cornders.
   *
   * @default block
   */
  buttonType?: ButtonType;
  /**
   *  Forces the width to 100% of the parent container.
   *
   * @default false
   */
  fullWidth?: boolean;
  /**
   *  Adds padding to the button to create different sizes.
   *
   * @default md
   */
  size?: Size;
};

const StyledButton = styled("button")<StyledButtonProps>(
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    cursor: "pointer",
    transition:
      "box-shadow 150ms cubic-bezier(.645, .045, .355, 1), transform 150ms cubic-bezier(.645,.045,.355,1)",
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
  ({ fullWidth }) => ({
    width: fullWidth ? "100%" : "auto",
  }),
  ({ theme, buttonType, disabled }) => ({
    fontFamily: theme?.typography?.fontFamily,
    fontWeight: theme?.typography?.button?.fontWeight,
    fontSize: theme?.typography?.button?.fontSize,
    color: theme?.palette?.primary?.contrastText,
    background: theme?.palette?.primary?.main,
    border: `2px solid ${theme?.palette?.common?.border}`,
    borderRadius: buttonType === "block" ? theme?.shape?.borderRadius : "50px",
    boxShadow: `${theme?.elevation?.three} ${theme?.elevation?.three} 0px 0px ${theme?.palette?.common?.shadow}`,
    "&:hover": {
      transform: "translate(-2px, -2px)",
      background: !disabled
        ? theme?.palette?.primary?.dark || defaultTheme.palette.primary.dark
        : theme?.palette?.primary?.main || defaultTheme.palette.primary.main,
      boxShadow: !disabled
        ? `${theme?.elevation?.two || defaultTheme.elevation.two} ${
          theme?.elevation?.two || defaultTheme.elevation.two
        } 0px 0px ${
          theme?.palette?.common?.shadow || defaultTheme.palette.common.shadow
        }`
        : `${theme?.elevation?.three || defaultTheme.elevation.three} ${
          theme?.elevation?.three || defaultTheme.elevation.three
        } 0px 0px ${
          theme?.palette?.common?.shadow || defaultTheme.palette.common.shadow
        }`,
    },
    "&:active": {
      transform: "translate(-0px, -0px)",
      background: !disabled
        ? theme?.palette?.primary?.darker || defaultTheme.palette.primary.darker
        : theme?.palette?.primary?.main || defaultTheme.palette.primary.main,
      boxShadow: !disabled
        ? `${theme?.elevation?.none || defaultTheme.elevation.none} ${
          theme?.elevation?.none || defaultTheme.elevation.none
        } 0px 0px ${
          theme?.palette?.common?.shadow || defaultTheme.palette.common.shadow
        }`
        : `${theme?.elevation?.three || defaultTheme.elevation.three} ${
          theme?.elevation?.three || defaultTheme.elevation.three
        } 0px 0px ${
          theme?.palette?.common?.shadow || defaultTheme.palette.common.shadow
        }`,
    },
  })
);

export type ButtonProps = {
  /**
   *  Applies an optional preceding icon to the label.
   */
  icon?: React.ReactNode;
} & StyledButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  AriaButtonProps;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (baseProps, forwardedRef) => {
    const internalRef = React.useRef<HTMLButtonElement | null>(null);
    const ref = useObjectRef(forwardedRef) || internalRef;
    const {
      buttonType = "block",
      children,
      className,
      disabled = false,
      fullWidth = false,
      icon,
      size = "md",
    } = baseProps;
    const { buttonProps } = useButton(
      { ...baseProps, isDisabled: disabled },
      ref
    );

    return (
      <StyledButton
        ref={ref}
        buttonType={buttonType}
        className={className}
        fullWidth={fullWidth}
        size={size}
        {...buttonProps}
      >
        {icon && icon}
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export default Button;