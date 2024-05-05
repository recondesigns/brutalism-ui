import React from "react"
import styled from "@emotion/styled"
import { ThemeProvider } from "@emotion/react"
import { defaultTheme } from "../emotionTheme"

const ModalDialogWrapper = styled("div")(
  {
    position: "static",
    padding: "20px 20px 20px 20px",
    width: "60%",
    maxHeight: "80%",
    background: "white",
    overflow: "scroll",
  },
  ({ theme }) => ({
    border: `1px solid ${theme.palette.common.border}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: `${theme.elevation.three} ${theme.elevation.three} 0px 0px ${theme.palette.common.shadow}`,
  })
)

type Props = {
  children: React.ReactElement | React.ReactElement[]
}

export default function ModalDialog({ children }: Props) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ModalDialogWrapper>{children}</ModalDialogWrapper>
    </ThemeProvider>
  )
}
