import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Dropdown from './Dropdown'

const meta: Meta<typeof Dropdown> = {
  title: 'Form elements/Dropdown',
  component: Dropdown
}

type DropdownStory = StoryObj<typeof Dropdown>

export const Default: DropdownStory = {
  render: args => <Dropdown {...args} />
}

export default meta