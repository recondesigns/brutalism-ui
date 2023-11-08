import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import ModalFooter from '../ModalFooter'

expect.extend(matchers)

const mockOnClick = jest.fn(() => console.log('Mock onClick function fired.'))

const singleFooterAction = {
    primaryAction: {
        buttonLabel: 'primary',
        onclick: mockOnClick,
    }
}

const multipleFooterActions = {
    primaryAction: {
        buttonLabel: 'primary',
        onclick: () => console.log('Primary button clicked'),
    },
    secondaryAction: {
        buttonLabel: 'secondary',
        onclick: () => console.log('Secondary button clicked'),
    },
}

describe('ModalFooter',() => {
    afterEach(cleanup)

    it('should render a ModalFooter in the Modal', () => {
        const component = render(<ModalFooter actions={singleFooterAction} />)

        expect(component.queryByTestId('testid-modal-footer-container')).not.toBeNull()
    })

    it('should render only a primary action button in ModalFooter', () => {
        const component = render(<ModalFooter actions={singleFooterAction} />)

        expect(component.queryByTestId('testid-modal-footer-primary-button')).not.toBeNull()
        expect(component.queryByTestId('testid-modal-footer-secondary-button')).toBeNull()
    })

    it('should render primary and secondary action buttons in ModalFooter', () => {
        const component = render(<ModalFooter actions={multipleFooterActions} />)

        expect(component.queryByTestId('testid-modal-footer-primary-button')).not.toBeNull()
        expect(component.queryByTestId('testid-modal-footer-secondary-button')).not.toBeNull()
    })

    it('should call the onclick when primary button is clicked', () => {
        const component = render(<ModalFooter actions={singleFooterAction} />)
        const button = component.getByTestId('testid-modal-footer-primary-button')

        fireEvent.click(button)

        expect(mockOnClick).toHaveBeenCalled()
    })
})