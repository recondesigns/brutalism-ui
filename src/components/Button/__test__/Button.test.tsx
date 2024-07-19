import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render, fireEvent, screen } from '@testing-library/react'
import Button from '../Button'
import { AlertIcon } from '../../../assets'

expect.extend(matchers)

const component = <Button data-testid="button-test">Send</Button>

describe('Props', () => {
  afterEach(cleanup)

  it('should render a Button component', () => {
    render(component)
    const button = screen.getByTestId('button-test')

    expect(button).toBeInTheDocument()
    expect(button).not.toHaveAttribute('disabled')
    expect(button).toHaveStyleRule('width', 'auto')
  })

  it('should render \'Send\' as the button text', () => {
    render(component)
    const button = screen.getByTestId('button-test')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Send')
  })

  it('should render a button with a background color of #E5A6FF', () => {
    render(component)
    const button = screen.getByTestId('button-test')

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyleRule('background', '#E5A6FF')
  })

  it('should render a button with the disabled attribute', () => {
    render(
      <Button disabled data-testid="button-test">
        Send
      </Button>
    )
    const button = screen.getByTestId('button-test')

    expect(button).toHaveAttribute('disabled')
  })

  it('should render a button with 100% width', () => {
    render(
      <Button disabled isFullWidth data-testid="button-test">
        Send
      </Button>
    )
    const button = screen.getByTestId('button-test')

    expect(button).toHaveStyleRule('width', '100%')
  })

  it('should render a left icon', () => {
    render(
      <Button
        leftIcon={<AlertIcon data-testid="button-icon-test" />}
        data-testid="button-test"
      >
        Send
      </Button>
    )
    const icon = screen.getByTestId('button-icon-test')

    expect(icon).toBeInTheDocument()
  })

  it('should have border-radius: 4px when buttonType is "block"', () => {
    render(
      <Button buttonType="block" data-testid="button-test">
        Send
      </Button>
    )
    const buttonComponent = screen.getByTestId('button-test')

    expect(buttonComponent).toHaveStyleRule('border-radius', '4px')
  })

  it('should have border-radius: 50px when buttonType is "rounded"', () => {
    render(
      <Button buttonType="rounded" data-testid="button-test">
        Send
      </Button>
    )
    const buttonComponent = screen.getByTestId('button-test')

    expect(buttonComponent).toHaveStyleRule('border-radius', '50px')
  })

  it('should have padding-top: 16px when size prop is "xl"', () => {
    render(
      <Button size="xl" data-testid="button-test">
        Send
      </Button>
    )
    const buttonComponent = screen.getByTestId('button-test')

    expect(buttonComponent).toHaveStyleRule('padding-top', '16px')
  })

  it('should have padding-top: 12px when size prop is "lg"', () => {
    render(
      <Button size="lg" data-testid="button-test">
        Send
      </Button>
    )
    const buttonComponent = screen.getByTestId('button-test')

    expect(buttonComponent).toHaveStyleRule('padding-top', '12px')
  })

  it('should have padding-top: 8px when size prop is "md"', () => {
    render(
      <Button size="md" data-testid="button-test">
        Send
      </Button>
    )
    const buttonComponent = screen.getByTestId('button-test')

    expect(buttonComponent).toHaveStyleRule('padding-top', '8px')
  })

  it('should have padding-top: 6px when size prop is "sm"', () => {
    render(
      <Button size="sm" data-testid="button-test">
        Send
      </Button>
    )
    const buttonComponent = screen.getByTestId('button-test')

    expect(buttonComponent).toHaveStyleRule('padding-top', '6px')
  })

  it('should have padding-top: 4px when size prop is "xs"', () => {
    render(
      <Button size="xs" data-testid="button-test">
        Send
      </Button>
    )
    const buttonComponent = screen.getByTestId('button-test')

    expect(buttonComponent).toHaveStyleRule('padding-top', '4px')
  })

  it('should fire the onClick when clicked', () => {
    const mockOnClick = jest.fn()
    render(
      <Button data-testid="button-test" onClick={mockOnClick}>
        Send
      </Button>
    )
    const button = screen.getByTestId('button-test')

    fireEvent.click(button)

    expect(mockOnClick).toHaveBeenCalled()
  })

  it('should not fire the onClick when clicked and button is disabled', () => {
    const mockOnClick = jest.fn()
    render(
      <Button disabled data-testid="button-test" onClick={mockOnClick}>
        Send
      </Button>
    )
    const button = screen.getByTestId('button-test')

    fireEvent.click(button)

    expect(mockOnClick).not.toHaveBeenCalled()
  })

  it('should change button color to #DA80FF when hovered', () => {
    render(component)
    const button = screen.getByTestId('button-test')

    expect(button).toHaveStyleRule('background', '#E5A6FF')
    expect(button).toHaveStyleRule('background', '#DA80FF', {
      target: ':hover',
    })
  })

  it('should change button color to #D266FF when active', () => {
    render(component)
    const button = screen.getByTestId('button-test')

    expect(button).toHaveStyleRule('background', '#E5A6FF')
    expect(button).toHaveStyleRule('background', '#D266FF', {
      target: ':active',
    })
  })
})
