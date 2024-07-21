import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render, screen } from '@testing-library/react'
import Card from '../Card'

expect.extend(matchers)

describe('Card', () => {
  afterEach(cleanup)

  it('should render a card', () => {
    render(
      <Card data-testid="card-test">
        <p>Card content</p>
      </Card>
    )
    const card = screen.getByTestId('card-test')

    expect(card).toBeInTheDocument()
  })

  it('should render a card with disabled attribute', () => {
    render(
      <Card disabled data-testid="card-test">
        <p>Card content</p>
      </Card>
    )
    const card = screen.getByTestId('card-test')

    expect(card).toHaveAttribute('disabled')
  })

  xit('should not change disabled card styles when hovering', () => {
    render(
      <Card data-testid="card-test">
        <p>Card content</p>
      </Card>
    )
    // use fireEvent or user-event
    const card = screen.getByTestId('card-test')

    expect(card).toBeInTheDocument()
  })
})
