import React from "react"
import styled from "@emotion/styled"
import ModalOverlay from "./ModalOverlay"
import ModalContainer from "./ModalContainer"

export type ModalProps = {
  shouldCloseOnEsc?: boolean
  children: React.ReactElement
}

const ModalComponent = styled("div")<ModalProps>({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
})

export default function Modal({ children }: ModalProps) {
  return (
    <ModalComponent>
      <ModalOverlay>
        <ModalContainer>
          {children}
        </ModalContainer>
      </ModalOverlay>
    </ModalComponent>
  )
}
