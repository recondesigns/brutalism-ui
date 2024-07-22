import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render, screen } from '@testing-library/react'
import {Modal} from '../../Modal'

expect.extend(matchers)

describe('ModalContent', () => {
  afterEach(cleanup)

  it('should render ModalContent component', () => {
    render(
      <Modal isOpen data-testid="modal-test">
        <Modal.Content data-testid="modal-modalcontent-test">
          <p>Modal children</p>
        </Modal.Content>
      </Modal>
    )

    const contentChildEl = screen.getByText('Modal children')

    expect(contentChildEl).toBeInTheDocument()
  })
})
