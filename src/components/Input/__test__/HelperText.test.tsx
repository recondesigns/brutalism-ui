import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render } from '@testing-library/react'
import Input from '../Input'

expect.extend(matchers)

type TestProps = {
  label?: string
  disabled?: boolean
  placeholder?: string
  helperText?: string
  hasError?: boolean
  required?: boolean
}

const TestInput = (testProps: TestProps) => {
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

describe('HelperText', () => {
  afterEach(cleanup)

  it('should not render the helper text when the "helperText" prop is not used', () => {
    const component = render(<TestInput />)

    expect(
      component.queryByTestId('input-helpertext-test')
    ).not.toBeInTheDocument()
  })

  it('should render the helper text when "helperText" prop is used', () => {
    const component = render(<TestInput helperText="Helper text." />)

    expect(component.queryByTestId('input-helpertext-test')).toBeInTheDocument()
  })

  it('should render helper text string "Helper text."', () => {
    const component = render(<TestInput helperText="Helper text." />)

    expect(component.getByTestId('input-helpertext-test')).toHaveTextContent(
      'Helper text.'
    )
  })

  it('should render helper text color #FF4F58 when an error is present', () => {
    const component = render(
      <TestInput helperText="Helper text with error." hasError={true} />
    )

    expect(component.queryByTestId('input-helpertext-test')).toHaveStyleRule(
      'color',
      '#FF4F58'
    )
  })
})
