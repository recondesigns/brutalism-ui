import React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import ModalDialog from './ModalDialog'
import ModalHeader from './ModalHeader'
import ModalContent from './ModalContent'
import { defaultTheme } from '../emotionTheme'

type ModalWrapperProps = {
  isOpen?: boolean
}

const ModalWrapper = styled('div')<ModalWrapperProps>(
  {
    boxSizing: 'border-box',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ({ isOpen }) => ({
    display: !isOpen ? 'none' : 'block',
  })
)

const ModalScrim = styled('div')({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(0, 0, 0, 0.15)',
})

type ModalProps = {
  /**
   *  Sets if the Modal is open (visible), or not.
   *
   * @default false
   */
  isOpen?: boolean
  /**
   *  Function that closes the Modal.
   */
  onClose?: any
  /**
   *  Allows the user to close the Modal by using the Escape key.
   *
   * @default false
   */
  closeOnEsc?: boolean
  /**
   *  Allows the user to close the Modal by clicking anywhere outside the Modal dialog.
   *
   * @default false
   */
  closeOutsideClick?: boolean
  /**
   *  Applies width styles that allows the Modal to grow with the content.
   *
   * @default false
   */
  shouldFitContent?: boolean
  /**
   *  Content to be displayed in the Modal dialog.
   *
   * @default false
   */
  children: React.ReactElement | React.ReactElement[]
  /**
   *  Applies a classname to the component.
   */
  className?: string
}

function Modal({
  isOpen = false,
  onClose,
  closeOnEsc = false,
  closeOutsideClick = false,
  shouldFitContent = false,
  children,
  className,
  ...otherProps
}: ModalProps) {
  React.useEffect(() => {
    const handleEsc = (e: any) => {
      if (closeOnEsc && e.key === 'Escape') {
        console.log(e.key)
        onClose(!isOpen)
      }
    }

    if (isOpen) {
      // console.log('modal is open')
      document.addEventListener('keydown', handleEsc)
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
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
      <ModalWrapper className={className} isOpen={isOpen} {...otherProps}>
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
