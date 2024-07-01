import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import Input from '../Input'

expect.extend(matchers)

const TestInput = (testProps: any) => {
  const [inputValue, setInputValue] = React.useState('')

  return (
    <Input
      value={inputValue}
      onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value)
      }
      {...testProps}
    />
  )
}

describe('Input', () => {
  describe('adding props', () => {
    afterEach(cleanup)

    it('should render an Input component with no label, placeholder, or caption', () => {
      const component = render(<TestInput />)

      expect(component.queryByTestId('testid-input-wrapper')).not.toBeNull()
      expect(component.queryByTestId('testid-input-label')).toBeNull()
      expect(component.queryByTestId('testid-input')).toHaveAttribute('placeholder', ' ')
      expect(component.queryByTestId('testid-input-caption')).toBeNull()
    })

    it('should render a disabled Input with the disabled prop is used', () => {
      const component = render(<TestInput disabled />)
      const inputElement = component.getByTestId('testid-input')

      expect(inputElement).toHaveAttribute('disabled')
    })

    it('should render an Input label when the label prop is used', () => {
      const component = render(<TestInput label="Label" />)
      const label = component.getByTestId('testid-input-label')

      expect(label.textContent).toEqual('Label')
    })

    it('should render an Input with a placeholder when the placeholder prop is used', () => {
      const component = render(<TestInput placeholder="Placeholder" />)
      const inputElement = component.getByTestId('testid-input')

      expect(inputElement).toHaveAttribute('placeholder', 'Placeholder')
    })

    it('should render an Input with a caption when the caption prop is used', () => {
      const component = render(<TestInput caption="Caption" />)
      const caption = component.getByTestId('testid-input-caption')

      expect(caption.textContent).toEqual('Caption')
    })

    it('should render a red Input label when an error is present', () => {
      const component = render(<TestInput label="Label" hasError={true} />)
      const label = component.getByTestId('testid-input-label')

      expect(label).toHaveStyleRule('color', 'red')
    })

    it('should call onChange when input change occurs', () => {
      const mockOnChange = jest.fn()
      const component = render(<Input onchange={mockOnChange} />)
      const inputElement = component.getByTestId('testid-input')

      fireEvent.change(inputElement, {
        target: {
          value: 'Hello world'
        }
      })

      expect(mockOnChange).toHaveBeenCalled()
    })

    it('should update input value when onChange is called', async () => {
      const component = render(<TestInput />)
      const inputElement = component.getByTestId('testid-input')

      fireEvent.change(inputElement, {
        target: {
          value: 'Hello world'
        }
      })

      expect(inputElement).toHaveValue('Hello world')
    })
  })
})
