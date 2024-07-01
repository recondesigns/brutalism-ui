import styled from "@emotion/styled"
import { ThemeProvider } from "@emotion/react"
import { Button } from "../../components"
import { defaultTheme } from "../emotionTheme"

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

const FooterContainer = styled("div")({
  padding: "32px 0px 0px 0px",
  display: "flex",
  justifyContent: "flex-end",
  gap: "12px",
})

export default function ModalFooter({ actions }: ModalFooterProps) {
  const { primaryAction, secondaryAction } = actions

  return (
    <ThemeProvider theme={defaultTheme}>
      <FooterContainer data-testid="testid-modal-footer-container">
        <Button
          data-testid="testid-modal-footer-primary-button"
          onClick={primaryAction?.onclick}
          size="sm"
        >
          {primaryAction?.buttonLabel}
        </Button>
        {secondaryAction && (
          <Button
            data-testid="testid-modal-footer-secondary-button"
            onClick={secondaryAction?.onclick}
            size="sm"
          >
            {secondaryAction?.buttonLabel}
          </Button>
        )}
      </FooterContainer>
    </ThemeProvider>
  )
}
