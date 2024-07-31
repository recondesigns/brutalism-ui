import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import Card from '../Card'
import { defaultTheme } from '../../emotionTheme'

type CardContentStory = StoryObj<typeof Card.Content>

const meta: Meta<typeof Card.Content> = {
  title: 'UI Components/Card/Building Blocks/Card Content',
  component: Card.Content,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

const CardTitle = styled('h4')`
  margin: 0px;
  padding: 0px 0px 24px 0px;
  font-size: 32px;
  line-height: 32px;
  font-family: sans-serif;
`

const CardSubtitle = styled('p')`
  margin: 0px;
  padding: 0px 0px 8px 0px;
  font-size: 16px;
  line-height: 24px;
  font-family: sans-serif;
  color: rgba(0, 0, 0, 0.7);
`

const CardParagraph = styled('p')`
  margin: 0px;
  padding: 0px 0px 0px 0px;
  font-size: 16px;
  line-height: 20px;
  font-family: sans-serif;
`

export const Demo: CardContentStory = {
  render: (args) => (
    <Card>
      <Card.Content {...args} />
    </Card>
  ),
  args: {
    children: (
      <>
        <Card.Content>
          <CardSubtitle>Subtitle</CardSubtitle>
          <CardTitle>Card Title</CardTitle>
          <CardParagraph style={{ paddingBottom: '12px' }}>
            Neobrutalism is an aesthetic characterized by high contrast
            elements, bright colors, and bold shapes. It is often used to make a
            statement, as it is meant to be eye-catching and stand out to the
            viewer.
          </CardParagraph>
        </Card.Content>
      </>
    ),
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '360px',
            minWidth: '360px',
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
}

export const Default: CardContentStory = {
  render: (args) => (
    <Card>
      <Card.Content {...args} />
    </Card>
  ),
  args: {
    children: (
      <>
        <Card.Content>
          <CardSubtitle>Subtitle</CardSubtitle>
          <CardTitle>Card Title</CardTitle>
          <CardParagraph style={{ paddingBottom: '12px' }}>
            Neobrutalism is an aesthetic characterized by high contrast
            elements, bright colors, and bold shapes. It is often used to make a
            statement, as it is meant to be eye-catching and stand out to the
            viewer.
          </CardParagraph>
        </Card.Content>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <div
          style={{
            maxWidth: '360px',
            minWidth: '360px',
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
}

export default meta
