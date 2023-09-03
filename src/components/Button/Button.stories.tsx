import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

export const Default: StoryObj<typeof Button> = {
  render: args => <Button {...args} />,
  args: {
    label: 'Hello world'
  }
}

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button
}

export default meta