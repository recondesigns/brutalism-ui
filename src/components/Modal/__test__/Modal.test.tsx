import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render, screen } from '@testing-library/react'
import {Modal} from '../../Modal'
// import { Modal } from '../Modal'

expect.extend(matchers)

/**
 * Add tests:
 *
 * modal closes on escape key press
 * modal closes when clicking outside of dialog
 */

describe('Props', () => {
  afterEach(cleanup)

  it('should render the Modal when isOpen is true', () => {
    render(
      <Modal isOpen data-testid="modal-test">
        <p>Modal children</p>
      </Modal>
    )
    const modal = screen.getByTestId('modal-test')

    expect(modal).toHaveStyleRule('display', 'block')
  })

  it('should not render the Modal when isOpen is false', () => {
    render(
      <Modal data-testid="modal-test">
        <p>Modal children</p>
      </Modal>
    )
    const modal = screen.getByTestId('modal-test')

    expect(modal).toHaveStyleRule('display', 'none')
  })
})
