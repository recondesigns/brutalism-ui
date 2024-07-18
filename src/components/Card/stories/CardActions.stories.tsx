import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import CardActions from '../CardActions'
import { Card } from '../Card'
import Button from '../../Button'

type CardActionsStory = StoryObj<typeof CardActions>

const meta: Meta<typeof CardActions> = {
  title: 'UI Components/Card/Building Blocks/Card Actions',
  component: CardActions,
}

export const Demo: CardActionsStory = {
  render: (args) => (
    <Card>
      <CardActions {...args} />
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
      <CardActions {...args} />
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
