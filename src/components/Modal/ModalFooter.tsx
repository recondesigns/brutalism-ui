import React from 'react'
import styled from '@emotion/styled'
// import { Button } from '../../components'

export type ModalFooterProps = {
  actions: {
    primaryAction: {
      buttonLabel: string
      onclick: () => void
    }
    secondaryAction?: {
      buttonLabel: string
      onclick: () => void
    }
  }
}

const FooterContainer = styled('div')({
  padding: '8px 12px',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '12px',
})

export default function ModalFooter() {
  // const { primaryAction, secondaryAction } = actions

  return (
    <FooterContainer data-testid="testid-modal-footer-container">
      {/* <Button
        data-testid="testid-modal-footer-primary-button"
        onClick={primaryAction?.onclick}
      >
        {primaryAction?.buttonLabel}
      </Button>
      {secondaryAction && (
        <Button
          data-testid="testid-modal-footer-secondary-button"
          onClick={secondaryAction?.onclick}
        >
          {secondaryAction?.buttonLabel}
        </Button>
      )} */}
    </FooterContainer>
  )
}
