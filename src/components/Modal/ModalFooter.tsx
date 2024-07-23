import React from 'react'
import styled from '@emotion/styled'
import Button from '../Button'

type Label = string
type Click = () => void

export type ModalFooterProps = {
  actions: {
    primaryAction: {
      buttonLabel: Label
      onclick: Click
    }
    secondaryAction?: {
      buttonLabel: Label
      onclick: Click
    }
  }
}

const FooterContainer = styled('div')({
  padding: '32px 0px 0px 0px',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '12px',
})

export default function ModalFooter({ actions }: ModalFooterProps) {
  const { primaryAction, secondaryAction } = actions

  return (
    <FooterContainer data-testid="testid-modal-footer-container">
      {secondaryAction && (
        <Button
          data-testid="testid-modal-footer-secondary-button"
          onClick={secondaryAction?.onclick}
          size="sm"
        >
          {secondaryAction?.buttonLabel}
        </Button>
      )}
      <Button
        data-testid="testid-modal-footer-primary-button"
        onClick={primaryAction?.onclick}
        size="sm"
      >
        {primaryAction?.buttonLabel}
      </Button>
    </FooterContainer>
  )
}
