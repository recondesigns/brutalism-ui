import { Meta, StoryObj } from '@storybook/react'
import Card from '../Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
}

export const Default: StoryObj<typeof Card> = {
  render: (args) => <Card {...args} />,
  args: {
    children: <p>Card</p>,
    onClick: () => alert('Card clicked.'),
  },
}

export const Disabled: StoryObj<typeof Card> = {
  render: (args) => <Card {...args} />,
  args: {
    children: <p>Card</p>,
    disabled: true,
  },
}

export default meta
