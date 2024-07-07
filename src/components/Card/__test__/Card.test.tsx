import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render, screen } from '@testing-library/react'
import { Card } from '../Card'
import CardContent from '../CardContent'

expect.extend(matchers)

describe('Props', () => {
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

  it('should render a card containing a CardContent component', () => {
    render(
      <Card disabled>
        <CardContent data-testid="card-content-test">
          <p>Card content</p>
        </CardContent>
      </Card>
    )
    const cardContent = screen.getByTestId('card-content-test')

    expect(cardContent).toBeInTheDocument()
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
