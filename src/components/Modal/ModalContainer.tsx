import React from "react"
import styled from "@emotion/styled"

export type ModalContainerProps = {
  children: React.ReactElement | React.ReactElement[]
}

const Container = styled("div")<ModalContainerProps>({
  width: "50%",
  background: "white",
  border: "2px solid black",
  borderRadius: "2px",
})

export default function ModalContainer({ children }: ModalContainerProps) {
  return <Container>{children}</Container>
}
