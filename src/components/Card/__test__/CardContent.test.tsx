import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render, screen } from '@testing-library/react'
import { Card, CardContent } from '../Card'

expect.extend(matchers)

describe('CardContent', () => {
  afterEach(cleanup)

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
