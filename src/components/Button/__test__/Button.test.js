import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import Button from '../Button'

expect.extend(matchers)

describe('Button', () => {
  afterEach(cleanup)

  describe('Rendering and props', () => {
    it('should render a Button component', () => {
      const component = render(<Button><p>Example</p></Button>)

      expect(component.getByTestId('button-data-testid')).toBeTruthy()
    })

    it('should render a string for the label if passed to the label prop', () => {
      const component = render(<Button label='Label' />)
      const button = component.getByTestId('button-data-testid')

      expect(button).toHaveAttribute('label', 'Label')
    })

    it('should render a child component for the label if passed to the children prop', () => {
      const component = render(<Button><p>Button</p></Button>)
      const button = component.getByTestId('button-data-testid')

      expect(button).not.toHaveAttribute('label', 'Label')
    })

    it('should render a string for the label if children are passed for the label and a string is passed to the label prop', () => {
      const component = render(<Button label="Label"><p>Button</p></Button>)
      const button = component.getByTestId('button-data-testid')

      expect(button).toHaveAttribute('label', 'Label')
    })
  })

  describe('disabled prop', () => {
    it('should render a button without a disabled attribute', () => {
      const component = render(<Button />)
      const button = component.getByTestId('button-data-testid')

      expect(button).not.toHaveAttribute('disabled')
    })

    it('should render a button with a disabled attribute', () => {
      const component = render(<Button disabled />)
      const button = component.getByTestId('button-data-testid')

      expect(button).toHaveAttribute('disabled')
    })

    it('should render a button with a disabled background styles', () => {
      const component = render(<Button disabled />)
      const button = component.getByTestId('button-data-testid')

      expect(button).toHaveStyleRule('background', 'lightgray')
    })

    it('should render a button with a disabled label color styles', () => {
      const component = render(<Button disabled />)
      const button = component.getByTestId('button-data-testid')

      expect(button).toHaveStyleRule('color', '#FFFFFF')
    })

    it('should override the onClick if button is disabled', () => {
      const mockOnClick = jest.fn(() => console.log('Mock function fired'))
      const component = render(<Button disabled onClick={mockOnClick}  />)
      const button = component.getByTestId('button-data-testid')

      fireEvent.click(button)

      expect(mockOnClick).not.toHaveBeenCalled()
    })

    describe('onClick prop', () => {
      it('should pass an onClick to the button', () => {
        const mockOnClick = jest.fn(() => console.log('Mock function fired'))
        const component = render(<Button onClick={mockOnClick} />)
        const button = component.getByTestId('button-data-testid')

        fireEvent.click(button)

        expect(mockOnClick).toHaveBeenCalled()
      })
    })
  })
})