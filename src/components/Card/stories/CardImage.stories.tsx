import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Card from '../Card'
// import CardImage from '../CardImage'

const cardImage =
  'https://images.unsplash.com/photo-1720206811364-684e8f8e803f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

type CardImageStory = StoryObj<typeof Card.Image>

const meta: Meta<typeof Card.Image> = {
  title: 'UI Components/Card/Building Blocks/Card Image',
  component: Card.Image,
}

export const Demo: CardImageStory = {
  render: (args) => (
    <Card>
      <Card.Image {...args} />
    </Card>
  ),
  args: {
    src: cardImage,
    alt: 'Card image',
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

export const Default: CardImageStory = {
  render: (args) => (
    <Card>
      <Card.Image {...args} />
    </Card>
  ),
  args: {
    src: cardImage,
    alt: 'Card image',
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
