import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Modal, ModalHeader } from '../Modal'

expect.extend(matchers)

const mockOnClose = jest.fn()

describe('ModalHeader', () => {
  afterEach(cleanup)

  it('should a modal header with a title of "Modal header', () => {
    const component = render(
      <Modal isOpen data-testid="modal-test">
        <ModalHeader title="Modal header" onClose={mockOnClose}></ModalHeader>
      </Modal>
    )

    const modalHeaderTitle = component.getByTestId('modal-modalheader-title')

    expect(modalHeaderTitle).toHaveTextContent('Modal header')
  })

  it('should close the Modal when the close button is clicked', async () => {
    const user = userEvent.setup()

    const component = render(
      <Modal isOpen data-testid="modal-test">
        <ModalHeader title="Modal header" onClose={mockOnClose}></ModalHeader>
      </Modal>
    )

    const closeButton = component.getByTestId('modal-modalheader-close-button')

    await user.click(closeButton)

    expect(mockOnClose).toHaveBeenCalled()
  })
})
