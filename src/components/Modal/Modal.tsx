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
  /**
   *  Here is a descreption for the isOpen prop.
   *
   * @default false
   */
  isOpen?: boolean
  /**
   *  Here is a descreption for the onClose prop.
   */
  onClose?: any
  /**
   *  Here is a descreption for the closeOnEsc prop.
   *
   * @default false
   */
  closeOnEsc?: boolean
  /**
   *  Here is a descreption for the closeOutsideClick prop.
   *
   * @default false
   */
  closeOutsideClick?: boolean
  /**
   *  Here is a descreption for the shouldFitContent prop.
   *
   * @default false
   */
  shouldFitContent?: boolean
  /**
   *  Here is a descreption for the children prop.
   *
   * @default false
   */
  children: React.ReactElement | React.ReactElement[]
}

function Modal({
  isOpen = false,
  onClose,
  closeOnEsc = false,
  closeOutsideClick = false,
  shouldFitContent = false,
  children,
}: ModalProps) {
  React.useEffect(() => {
    const handleEsc = (e: any) => {
      if (closeOnEsc && e.key === "Escape") {
        console.log(e.key)
        onClose(!isOpen)
      }
    }

    if (isOpen) {
      // console.log('modal is open')
      document.addEventListener("keydown", handleEsc)
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
    }
    // console.log('fired')
  }, [isOpen])

  const outsideClick = () => {
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
