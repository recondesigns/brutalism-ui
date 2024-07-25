import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Dropdown from './Dropdown'

const meta: Meta<typeof Dropdown> = {
  title: 'Form elements/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
}

type Option = {
  title: string
  value: string
}

const optionsList: Option[] = [
  {
    title: 'Ford',
    value: 'ford',
  },
  {
    title: 'Dodge',
    value: 'dodge',
  },
  {
    title: 'Chevy',
    value: 'chevy',
  },
  {
    title: 'GMC',
    value: 'gmc',
  },
]

type DropdownStory = StoryObj<typeof Dropdown>

export const UnControlled: DropdownStory = {
  render: (args) => {
    return <Dropdown {...args} />
  },
  args: {
    options: optionsList,
    label: 'Brand',
    helperText: 'Select a vehicle brand.',
    hasError: false,
    disabled: false,
  },
}

export const Controlled: DropdownStory = {
  render: (args) => {
    const [storyValue, setStoryValue] = React.useState<string | null>(null)
    const [isOpen] = React.useState(false)
    console.log(storyValue)

    return (
      <Dropdown
        onSelect={(newVal) => setStoryValue(newVal)}
        isOpen={isOpen}
        {...args}
      />
    )
  },
  args: {
    options: optionsList,
    label: 'Brand',
    helperText: 'Select a vehicle brand.',
    hasError: false,
    disabled: false,
  },
}

export default meta
