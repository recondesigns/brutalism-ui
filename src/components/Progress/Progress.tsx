import React from "react"
import styled from "@emotion/styled"
import { ThemeProvider } from "@emotion/react"
import { defaultTheme } from "../emotionTheme"

const calculatePercentage = (val: number, max: number, decimals: number) => {
  if (max <= 0) {
    return "0%"
  }

  const percentage = (val / max) * 100

  return `${Math.min(Math.max(percentage, 0), 100).toFixed(decimals)}%`
}

const setSize = (size: "sm" | "md" | "lg") => {
  if (size === "lg") {
    return "40px"
  } else if (size === "md") {
    return "32px"
  } else if (size === "sm") {
    return "24px"
  }
}

const Container = styled("div")(
  {
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  ({}) => ({})
)

const ProgressContainer = styled("div")(
  {
    position: "relative",
    borderRadius: "50px",
    overflow: "hidden",
  },
  ({ theme }) => ({
    backround: theme.palette.common.white,
    border: `2px solid ${theme.palette.common.border}`,
    boxShadow: `3px 3px 0px 0px ${theme.palette.common.shadow}`,
  })
)

type ProgressIndicator = {
  size?: string
  value: string
}

const ProgressIndicator = styled("div")<ProgressIndicator>(
  {
    position: "relative",
    background: "rgba(141, 255, 140, 0.8)",
    borderRadius: "50px",
  },
  ({ value, size }) => ({
    height: size ? size : "36px",
    width: value ? value : "10px",
  })
)

const ProgressIndicatorText = styled("p")(
  {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "0px",
    transform: "translate(-50%, -50%)",
    margin: "0px",
    padding: "0px",
    fontFamily: "sans-serif",
    fontWeight: 700,
    textAlign: "center",
    zIndex: 10,
  },
  ({ theme }) => ({
    color: theme.palette.common.black,
  })
)

const LabelText = styled("label")(
  {
    paddingBottom: "8px",
    fontFamily: "sans-serif",
    fontSize: "15px",
    lineHeight: "16px",
  },
  ({ theme }) => ({
    color: theme.palette.common.black,
  })
)

const HelperText = styled("p")(
  {
    margin: "0px",
    paddingTop: "8px",
    fontFamily: "sans-serif",
    fontSize: "14px",
    lineHeight: "20px",
    textAlign: "left",
  },
  ({ theme }) => ({
    color: theme.palette.common.black,
  })
)

export type ProgressProps = {
  /**
   * Applies a label to the progress bar.
   */
  label?: string
  /**
   * Applies height options.
   */
  size?: "sm" | "md" | "lg"
  /**
   * Sets the width of the filler and label text.
   */
  value: number
  /**
   * Adds helper text for added user context.
   */
  helperText?: string
  /**
   * Applies a maximum value.
   */
  max?: number
  /**
   * Sets how many decimal places will be appended to the label.
   */
  includeDecimals?: number
  /**
   * Provides a string to let users know when progress has reached 100%.
   */
  completeMessage?: string
}

export default function Progress({
  label,
  value,
  max = 100,
  size = "md",
  helperText,
  includeDecimals = 0,
  completeMessage = "Complete!",
  ...otherProps
}: ProgressProps) {
  const setIndicatorText = (
    val: number,
    max: number,
    msg: string,
    decimals: number
  ) => {
    if (val >= max) {
      return msg
    }

    if (val < max) {
      return calculatePercentage(value, max, decimals)
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container data-testid="progress-test">
        {label && <LabelText>{label}</LabelText>}
        <ProgressContainer {...otherProps}>
          <ProgressIndicatorText data-testid="progress-indicator-text-test">
            {setIndicatorText(value, max, completeMessage, includeDecimals)}
          </ProgressIndicatorText>
          <ProgressIndicator
            value={calculatePercentage(value, max, includeDecimals)}
            size={setSize(size)}
            data-testid="progress-indicator-test"
          />
        </ProgressContainer>
        {helperText && <HelperText>{helperText}</HelperText>}
      </Container>
    </ThemeProvider>
  )
}
