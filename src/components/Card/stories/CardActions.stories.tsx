import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Card from '../Card'
import Button from '../../Button'

type CardActionsStory = StoryObj<typeof Card.Actions>

const meta: Meta<typeof Card.Actions> = {
  title: 'UI Components/Card/Building Blocks/Card Actions',
  component: Card.Actions,
}

export const Demo: CardActionsStory = {
  render: (args) => (
    <Card>
      <Card.Actions {...args} />
    </Card>
  ),
  args: {
    children: (
      <Button onClick={() => alert('Button has been clicked.')}>Button</Button>
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

export const Default: CardActionsStory = {
  render: (args) => (
    <Card>
      <Card.Actions {...args} />
    </Card>
  ),
  args: {
    children: (
      <Button onClick={() => alert('Button has been clicked.')}>Button</Button>
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
