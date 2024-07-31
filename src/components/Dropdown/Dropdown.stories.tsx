import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@emotion/react'
import Dropdown from './Dropdown'
import { defaultTheme } from '../emotionTheme'

const meta: Meta<typeof Dropdown> = {
  title: 'Form elements/Dropdown',
  component: Dropdown,
  excludeStories: ['UnControlled', 'Controlled'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <div
          style={{
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ width: '300px' }}>
            <Story />
          </div>
        </div>
      </ThemeProvider>
    ),
  ],
}

type Option = {
  name: string
  value: string
  disabled: boolean
}

const optionsList: Option[] = [
  {
    name: 'Ford',
    value: 'ford',
    disabled: false,
  },
  {
    name: 'Dodge',
    value: 'dodge',
    disabled: true,
  },
  {
    name: 'Chevy',
    value: 'chevy',
    disabled: false,
  },
  {
    name: 'GMC',
    value: 'gmc',
    disabled: false,
  },
  // {
  //   name: "Toyota",
  //   value: "toyota",
  //   disabled: false,
  // },
  // {
  //   name: "Honda",
  //   value: "honda",
  //   disabled: false,
  // },
  // {
  //   name: "Mazda",
  //   value: "mazda",
  //   disabled: false,
  // },
  // {
  //   name: "Chrysler",
  //   value: "chrysler",
  //   disabled: false,
  // },
]

type DropdownStory = StoryObj<typeof Dropdown>

export const Demo: DropdownStory = {
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
    const [storyValue, setStoryValue] = React.useState<Option | null>(null)
    const [isOpen] = React.useState(false)
    console.log(333, storyValue)

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

export const Label: DropdownStory = {
  ...UnControlled,
  args: {
    options: optionsList,
    label: 'Brand',
  },
}

export const HelperText: DropdownStory = {
  ...UnControlled,
  args: {
    options: optionsList,
    helperText: 'Select a vehicle brand.',
  },
}

export const Disabled: DropdownStory = {
  ...UnControlled,
  args: {
    options: optionsList,
    label: 'Brand',
    helperText: 'Select a vehicle brand.',
    disabled: true,
  },
}

export const CloseOnOutsideClick: DropdownStory = {
  ...UnControlled,
  args: {
    options: optionsList,
    label: 'Brand',
    helperText: 'Select a vehicle brand.',
    closeOnOutsideClick: true,
    closeOnEsc: false,
  },
}

export const CloseOnEsc: DropdownStory = {
  ...UnControlled,
  args: {
    options: optionsList,
    label: 'Brand',
    helperText: 'Select a vehicle brand.',
    closeOnOutsideClick: false,
    closeOnEsc: true,
  },
}

export const HasError: DropdownStory = {
  ...UnControlled,
  args: {
    options: optionsList,
    label: 'Brand',
    helperText: 'Something happened to cause an error.',
    hasError: true,
  },
}

export default meta
