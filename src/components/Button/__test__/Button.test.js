import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import Button from '../Button'

describe('Button', () => {
  afterEach(cleanup)

  describe('Rendering and props', () => {
    it('should render a Button component', () => {
      const component = render(<Button data-testid="button-data-testid"><p>Example</p></Button>)

      expect(component.getByTestId('button-data-testid')).toBeTruthy()
    })

    it('should render a string for the label if passed to the label prop', () => {
      const component = render(<Button data-testid="button-data-testid" label='Label' />)
      const button = component.getByTestId('button-data-testid')

      expect(button).toHaveAttribute('label', 'Label')
    })

    it('should render a child component for the label if passed to the children prop', () => {
      const component = render(<Button data-testid="button-data-testid"><p>Button</p></Button>)
      const button = component.getByTestId('button-data-testid')

      expect(button).not.toHaveAttribute('label', 'Label')
    })

    it('should render a string for the label if children are passed for the label and a string is passed to the label prop', () => {
      const component = render(<Button data-testid="button-data-testid" label="Label"><p>Button</p></Button>)
      const button = component.getByTestId('button-data-testid')

      expect(button).toHaveAttribute('label', 'Label')
    })
  })
})