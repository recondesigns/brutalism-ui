import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render, screen } from '@testing-library/react'
import { matchers } from '@emotion/jest'
import Text from '../Text'

expect.extend(matchers)

describe('Props', () => {
  afterEach(cleanup)

  it('should render the Text component', () => {
    render(<Text variant="h1">Hello world.</Text>)
    const textComponent = screen.getByText('Hello world.')

    expect(textComponent).toBeInTheDocument()
    expect(textComponent.tagName).toBe('H1')
  })

  it('should render h1 text with font-size of 6rem', () => {
    render(<Text variant="h1">Hello world.</Text>)
    const textComponent = screen.getByText('Hello world.')

    expect(textComponent.tagName).toBe('H1')
    expect(textComponent).toHaveStyleRule('font-size', '6rem')
  })

  it('should render h2 text with font-size of 3.75rem', () => {
    render(<Text variant="h2">Hello world.</Text>)
    const textComponent = screen.getByText('Hello world.')

    expect(textComponent.tagName).toBe('H2')
    expect(textComponent).toHaveStyleRule('font-size', '3.75rem')
  })

  it('should render h3 text with font-size of 3rem', () => {
    render(<Text variant="h3">Hello world.</Text>)
    const textComponent = screen.getByText('Hello world.')

    expect(textComponent.tagName).toBe('H3')
    expect(textComponent).toHaveStyleRule('font-size', '3rem')
  })

  it('should render h4 text with font-size of 2.125rem', () => {
    render(<Text variant="h4">Hello world.</Text>)
    const textComponent = screen.getByText('Hello world.')

    expect(textComponent.tagName).toBe('H4')
    expect(textComponent).toHaveStyleRule('font-size', '2.125rem')
  })

  it('should render h5 text with font-size of 1.5rem', () => {
    render(<Text variant="h5">Hello world.</Text>)
    const textComponent = screen.getByText('Hello world.')

    expect(textComponent.tagName).toBe('H5')
    expect(textComponent).toHaveStyleRule('font-size', '1.5rem')
  })

  it('should render h6 text with font-size of 1.25rem', () => {
    render(<Text variant="h6">Hello world.</Text>)
    const textComponent = screen.getByText('Hello world.')

    expect(textComponent.tagName).toBe('H6')
    expect(textComponent).toHaveStyleRule('font-size', '1.25rem')
  })

  it('should render p text with font-size of 1rem', () => {
    render(<Text variant="subtitle1">Hello world.</Text>)
    const textComponent = screen.getByText('Hello world.')

    expect(textComponent.tagName).toBe('P')
    expect(textComponent).toHaveStyleRule('font-size', '1rem')
  })

  it('should render p text with font-size of 0.875rem', () => {
    render(<Text variant="subtitle2">Hello world.</Text>)
    const textComponent = screen.getByText('Hello world.')

    expect(textComponent.tagName).toBe('P')
    expect(textComponent).toHaveStyleRule('font-size', '0.875rem')
  })

  it('should render p text with font-size of 1rem', () => {
    render(<Text variant="body1">Hello world.</Text>)
    const textComponent = screen.getByText('Hello world.')

    expect(textComponent.tagName).toBe('P')
    expect(textComponent).toHaveStyleRule('font-size', '1rem')
  })

  it('should render p text with font-size of 0.875rem', () => {
    render(<Text variant="body2">Hello world.</Text>)
    const textComponent = screen.getByText('Hello world.')

    expect(textComponent.tagName).toBe('P')
    expect(textComponent).toHaveStyleRule('font-size', '0.875rem')
  })

  it('should render caption text with font-size of 0.75rem', () => {
    render(<Text variant="caption">Hello world.</Text>)
    const textComponent = screen.getByText('Hello world.')

    expect(textComponent.tagName).toBe('SPAN')
    expect(textComponent).toHaveStyleRule('font-size', '0.75rem')
  })

  it('should render h3 variant as p element', () => {
    render(
      <Text variant="h3" asElement="p">
        Hello world.
      </Text>
    )
    const textComponent = screen.getByText('Hello world.')

    expect(textComponent.tagName).toBe('P')
  })

  it('should add bottom margin when gutterBottom prop is used', () => {
    render(
      <Text variant="h3" gutterBottom>
        Hello world.
      </Text>
    )
    const textComponent = screen.getByText('Hello world.')

    expect(textComponent).toHaveStyleRule('margin', '0 0 0.35em 0')
  })
})
