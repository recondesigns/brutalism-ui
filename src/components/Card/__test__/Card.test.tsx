import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Card, CardImage, CardContent, CardActions } from '../Card'
import Button from '../../Button'

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

describe('CardImage', () => {
  it('should render an image with the card', () => {
    const cardImageSrc =
      'https://images.unsplash.com/photo-1720206811364-684e8f8e803f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    render(
      <Card>
        <CardImage
          src={cardImageSrc}
          alt="Card image"
          data-testid="card-image-test"
        />
        <CardContent data-testid="card-content-test">
          <p>Card content</p>
        </CardContent>
      </Card>
    )
    const cardImage = screen.getByTestId('card-image-test')

    expect(cardImage).toBeInTheDocument()
  })
})

describe('CardContent', () => {
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
})

describe('CardActions', () => {
  it('should render the CardActions component', () => {
    render(
      <Card>
        <CardContent data-testid="card-content-test">
          <p>Card content</p>
        </CardContent>
        <CardActions data-testid="card-actions-test">
          <Button data-testid="card-actions-button-test">Send</Button>
        </CardActions>
      </Card>
    )
    const cardActions = screen.getByTestId('card-actions-test')

    expect(cardActions).toBeInTheDocument()
  })

  it('should render a Button in CardActions component', () => {
    render(
      <Card>
        <CardContent>
          <p>Card content</p>
        </CardContent>
        <CardActions>
          <Button data-testid="card-actions-button-test">Send</Button>
        </CardActions>
      </Card>
    )
    const cardActionsButton = screen.getByTestId('card-actions-button-test')

    expect(cardActionsButton).toBeInTheDocument()
  })

  it('should fire the Button\'s onClick in the CardActions', () => {
    const mockOnClick = jest.fn()
    render(
      <Card>
        <CardContent>
          <p>Card content</p>
        </CardContent>
        <CardActions>
          <Button onClick={mockOnClick} data-testid="card-actions-button-test">
            Send
          </Button>
        </CardActions>
      </Card>
    )
    const cardActionsButton = screen.getByTestId('card-actions-button-test')

    fireEvent.click(cardActionsButton)

    expect(mockOnClick).toHaveBeenCalled()
  })
})
