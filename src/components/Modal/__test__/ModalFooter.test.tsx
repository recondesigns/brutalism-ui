import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from '../../Modal'

expect.extend(matchers)

const mockPrimaryClick = jest.fn()
const mockSecondaryClick = jest.fn()

const singleFooterAction = {
  primaryAction: {
    buttonLabel: 'Primary',
    onclick: mockPrimaryClick,
  },
}

const doubleFooterActions = {
  primaryAction: {
    buttonLabel: 'Primary',
    onclick: mockPrimaryClick,
  },
  secondaryAction: {
    buttonLabel: 'Secondary',
    onclick: mockSecondaryClick,
  },
}

describe('ModalFooter', () => {
  afterEach(cleanup)

  it('should render a ModalFooter', () => {
    const component = render(
      <Modal isOpen data-testid="modal-test">
        <Modal.Header title="Modal header" />
        <Modal.Footer actions={doubleFooterActions} />
      </Modal>
    )

    const footerEl = component.getByTestId('testid-modal-footer-container')

    expect(footerEl).toBeInTheDocument()
  })

  it('should render a ModalFooter with one button', () => {
    const component = render(
      <Modal isOpen data-testid="modal-test">
        <Modal.Header title="Modal header" />
        <Modal.Footer actions={singleFooterAction} />
      </Modal>
    )

    const primayButtonEl = component.getByTestId(
      'testid-modal-footer-primary-button'
    )
    const secondaryButtonEl = component.queryByTestId(
      'testid-modal-footer-secondary-button'
    )

    expect(primayButtonEl).toBeInTheDocument()
    expect(secondaryButtonEl).not.toBeInTheDocument()
  })

  it('should render a ModalFooter with one button two buttons', () => {
    const component = render(
      <Modal isOpen data-testid="modal-test">
        <Modal.Header title="Modal header" />
        <Modal.Footer actions={doubleFooterActions} />
      </Modal>
    )

    const primayButtonEl = component.getByTestId(
      'testid-modal-footer-primary-button'
    )

    const secondaryButtonEl = component.queryByTestId(
      'testid-modal-footer-secondary-button'
    )

    expect(primayButtonEl).toBeInTheDocument()
    expect(secondaryButtonEl).toBeInTheDocument()
  })

  it('should call onclick from button when clicked', async () => {
    const user = userEvent.setup()

    const component = render(
      <Modal isOpen data-testid="modal-test">
        <Modal.Header title="Modal header" />
        <Modal.Footer actions={singleFooterAction} />
      </Modal>
    )

    const primayButtonEl = component.getByTestId(
      'testid-modal-footer-primary-button'
    )

    await user.click(primayButtonEl)

    expect(mockPrimaryClick).toHaveBeenCalled()
  })

  it('should call onclick from primary button when clicked', async () => {
    const user = userEvent.setup()

    const component = render(
      <Modal isOpen data-testid="modal-test">
        <Modal.Header title="Modal header" />
        <Modal.Footer actions={doubleFooterActions} />
      </Modal>
    )

    const primayButtonEl = component.getByTestId(
      'testid-modal-footer-primary-button'
    )

    await user.click(primayButtonEl)

    expect(mockPrimaryClick).toHaveBeenCalled()
  })

  it('should call onclick from secondary button when clicked', async () => {
    const user = userEvent.setup()

    const component = render(
      <Modal isOpen data-testid="modal-test">
        <Modal.Header title="Modal header" />
        <Modal.Footer actions={doubleFooterActions} />
      </Modal>
    )

    const secondaryButtonEl = component.getByTestId(
      'testid-modal-footer-secondary-button'
    )

    await user.click(secondaryButtonEl)

    expect(mockSecondaryClick).toHaveBeenCalled()
  })
})
