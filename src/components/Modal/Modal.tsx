import React from "react"
import styled from "@emotion/styled"
import { ThemeProvider } from "@emotion/react"
import ModalDialog from "./ModalDialog"
import ModalHeader from "./ModalHeader"
import ModalContent from "./ModalContent"
import { defaultTheme } from "../emotionTheme"

type ModalWrapperProps = {
  isOpen?: boolean
}

const ModalWrapper = styled("div")<ModalWrapperProps>(
  {
    boxSizing: "border-box",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ({ isOpen }) => ({
    display: !isOpen ? "none" : "block",
  })
)

const ModalScrim = styled("div")({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.15)",
})

type ModalProps = {
  // shouldCloseOnEsc?: boolean
  isOpen?: boolean
  onClose?: any
  closeOutsideClick?: boolean
  shouldFitContent?: boolean
  children: React.ReactElement | React.ReactElement[]
}

function Modal({
  isOpen = false,
  onClose,
  closeOutsideClick = false,
  shouldFitContent = false,
  children,
}: ModalProps) {
  const outsideClick = (e: React.MouseEvent) => {
    if (closeOutsideClick) {
      onClose(!isOpen)
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <ModalWrapper isOpen={isOpen}>
        <ModalScrim onClick={outsideClick}>
          <ModalDialog
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            shouldFitContent={shouldFitContent}
          >
            {children}
          </ModalDialog>
        </ModalScrim>
      </ModalWrapper>
    </ThemeProvider>
  )
}

export { Modal, ModalHeader, ModalContent }
