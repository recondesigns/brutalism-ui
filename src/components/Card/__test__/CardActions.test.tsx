import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import { Card, CardContent, CardActions } from '../Card'
import Button from '../../Button'

expect.extend(matchers)

describe('CardActions', () => {
  afterEach(cleanup)
  
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
