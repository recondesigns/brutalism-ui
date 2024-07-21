import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render, screen } from '@testing-library/react'
import Card from '../Card'

expect.extend(matchers)

describe('CardImage', () => {
  afterEach(cleanup)

  it('should render an image with the card', () => {
    const cardImageSrc =
      'https://images.unsplash.com/photo-1720206811364-684e8f8e803f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    render(
      <Card>
        <Card.Image
          src={cardImageSrc}
          alt="Card image"
          data-testid="card-image-test"
        />
        <Card.Content data-testid="card-content-test">
          <p>Card content</p>
        </Card.Content>
      </Card>
    )
    const cardImage = screen.getByTestId('card-image-test')

    expect(cardImage).toBeInTheDocument()
  })
})
