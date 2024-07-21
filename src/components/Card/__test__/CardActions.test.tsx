import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import Card from '../Card'
import Button from '../../Button'

expect.extend(matchers)

describe('CardActions', () => {
  afterEach(cleanup)

  it('should render the CardActions component', () => {
    render(
      <Card>
        <Card.Content data-testid="card-content-test">
          <p>Card content</p>
        </Card.Content>
        <Card.Actions data-testid="card-actions-test">
          <Button data-testid="card-actions-button-test">Send</Button>
        </Card.Actions>
      </Card>
    )
    const cardActions = screen.getByTestId('card-actions-test')

    expect(cardActions).toBeInTheDocument()
  })

  it('should render a Button in CardActions component', () => {
    render(
      <Card>
        <Card.Content>
          <p>Card content</p>
        </Card.Content>
        <Card.Actions>
          <Button data-testid="card-actions-button-test">Send</Button>
        </Card.Actions>
      </Card>
    )
    const cardActionsButton = screen.getByTestId('card-actions-button-test')

    expect(cardActionsButton).toBeInTheDocument()
  })

  it('should fire the Button\'s onClick in the CardActions', () => {
    const mockOnClick = jest.fn()
    render(
      <Card>
        <Card.Content>
          <p>Card content</p>
        </Card.Content>
        <Card.Actions>
          <Button onClick={mockOnClick} data-testid="card-actions-button-test">
            Send
          </Button>
        </Card.Actions>
      </Card>
    )
    const cardActionsButton = screen.getByTestId('card-actions-button-test')

    fireEvent.click(cardActionsButton)

    expect(mockOnClick).toHaveBeenCalled()
  })
})
