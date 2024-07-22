import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render, screen } from '@testing-library/react'
import Card from '../Card'

expect.extend(matchers)

describe('CardContent', () => {
  afterEach(cleanup)

  it('should render a card containing a CardContent component', () => {
    render(
      <Card disabled>
        <Card.Content data-testid="card-content-test">
          <p>Card content</p>
        </Card.Content>
      </Card>
    )
    const cardContent = screen.getByTestId('card-content-test')

    expect(cardContent).toBeInTheDocument()
  })
})
