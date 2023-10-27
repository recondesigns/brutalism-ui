import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Button from '../Button'

describe('Button', () => {
  afterEach(cleanup)

  describe('Rendering and props', () => {
    it('should render the Button component', () => {
      const component = render(<Button data-testid="testing-nows"><p>Example</p></Button>)

      expect(component.getByTestId('testing-nows')).toBeTruthy()
    })
  })

  describe('Theming', () => {
    xit('should render the Button component', () => {

    })
  })
})