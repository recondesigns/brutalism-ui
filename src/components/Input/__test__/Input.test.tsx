import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Input from '../Input'

describe('Input', () => {
  describe('Rendering and props', () => {
    afterEach(cleanup)

    it('should render an Input component', () => {
      const component = render(<Input />)

      expect(component.getByTestId('testid-input-wrapper')).toBeTruthy()
    })

    it('should render an input with a label saying "Label"', () => {
      const component = render(<Input label="Label" />)
      const label = component.getByTestId('testid-input-label')

      expect(label.textContent).toEqual('Label')
    })

    it('should render an Input with a placeholder', () => {
      const component = render(<Input placeholder='Placeholder' />)
      const inputElement = component.getByTestId('testid-input')

      expect(inputElement.getAttribute('placeholder')).toEqual('Placeholder')
    })

    it('should render just the input element', () => {
  
    })
  })
})
