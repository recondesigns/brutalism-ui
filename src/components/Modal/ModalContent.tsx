import React from "react"
import styled from "@emotion/styled"
import { ThemeProvider } from "@emotion/react"
import { defaultTheme } from "../emotionTheme"

export type ModalContainerProps = {
  children: React.ReactElement | React.ReactElement[]
} & React.HTMLAttributes<HTMLDivElement>

const Container = styled("div")<ModalContainerProps>({})

export default function ModalContent({
  children,
  ...otherProps
}: ModalContainerProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container {...otherProps}>{children}</Container>
    </ThemeProvider>
  )
}
