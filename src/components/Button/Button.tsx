import React from "react"
import styled from "@emotion/styled"
import { createButtonLabel } from "./utils"

type ButtonType = 'button' | 'submit' | 'reset'

type Props = {
  /**
   * Applies a text string as a label for the Button.
   *
   * **Note**: The label prop will override the children prop if both are used.
   */
  label?: string
  /**
   * Allows for custom CSS styles by applying a string as a classname to the button element.
   */
  className?: string
  /**
   * Child components can be passed to be used as the "label" of the Button.
   *
   * **Note**: The label prop will override the children prop if both are used.
   */
  children?: React.ReactNode | React.ReactElement | JSX.Element
  /**
   * Copy for type prop.
   */
  type?: ButtonType
}

export type ButtonProps = Props & React.ComponentProps<"button">

const ButtonComponent = styled.button<ButtonProps>(
  {
    boxSizing: "border-box",
    fontWeight: "bold",
    borderRadius: "3px",
    padding: `8px 16px`,
    fontFamily: "'Helvetica Neue', 'Sans-serif'",
    background: "#EB6E1F",
    color: "#FFFFFF",
    border: `2px solid green`,
    "&:hover": {
      background: "none",
      color: "#EB6E1F",
    },
  }
  // ({ theme }) => ({
  //   padding: `8px 16px`,
  //   fontFamily: "'Helvetica Neue', 'Sans-serif'",
  //   background: '#EB6E1F',
  //   color: '#FFFFFF',
  //   border: `2px solid #EB6E1F`,
  //   borderRadius: `3px`,
  //   '&:hover': {
  //     background: 'none',
  //     color: '#EB6E1F'
  //   }
  // })
)

function Button({
  label,
  type,
  className,
  children,
  ...otherProps
}: ButtonProps) {
  const buttonLabel = createButtonLabel(label, children)

  return (
    <ButtonComponent
      className={className}
      type={!type ? 'button' : type}
      {...otherProps}
    >
      {buttonLabel}
    </ButtonComponent>
  )
}

export default Button
