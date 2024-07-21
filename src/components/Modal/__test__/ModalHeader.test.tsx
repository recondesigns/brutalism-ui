import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Modal} from '../../Modal'

expect.extend(matchers)

const mockOnClose = jest.fn()

describe('ModalHeader', () => {
  afterEach(cleanup)

  it('should a modal header with a title of "Modal header', () => {
    const component = render(
      <Modal isOpen data-testid="modal-test">
        <Modal.Header title="Modal header" onClose={mockOnClose}></Modal.Header>
      </Modal>
    )

    const modalHeaderTitle = component.getByTestId('modal-modalheader-title')

    expect(modalHeaderTitle).toHaveTextContent('Modal header')
  })

  it('should close the Modal when the close button is clicked', async () => {
    const user = userEvent.setup()

    const component = render(
      <Modal isOpen data-testid="modal-test">
        <Modal.Header title="Modal header" onClose={mockOnClose}></Modal.Header>
      </Modal>
    )

    const closeButton = component.getByTestId('modal-modalheader-close-button')

    await user.click(closeButton)

    expect(mockOnClose).toHaveBeenCalled()
  })
})
