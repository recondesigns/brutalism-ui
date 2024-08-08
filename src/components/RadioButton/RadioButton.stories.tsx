import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@emotion/react'
import RadioGroup from './RadioGroup'
import RadioButton from './RadioButton'
import { defaultTheme } from '../emotionTheme'

type RadioButtonStory = StoryObj<typeof RadioButton>

const meta: Meta<typeof RadioButton> = {
  title: 'Form elements/Radio Group/Radio Button',
  component: RadioButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const Demo: RadioButtonStory = {
  render: (args) => {
    const [isSelected, setIsSelected] = React.useState<boolean>(false)

    return (
      <RadioGroup>
        <RadioButton
          {...args}
          selected={isSelected}
          onClick={() => setIsSelected(!isSelected)}
        />
      </RadioGroup>
    )
  },
  args: {
    label: 'Option one',
    value: 'option one',
  },
  parameters: {
    controls: {
      exclude: ['key', 'onClick', 'selected'],
    },
  },
}

export const Unselected: RadioButtonStory = {
  render: (args) => {
    return (
      <RadioGroup>
        <RadioButton {...args} />
      </RadioGroup>
    )
  },
  args: {
    label: 'Option one',
    value: 'option one',
    selected: false,
  },
  parameters: {
    controls: {
      exclude: ['key', 'onClick', 'selected'],
    },
  },
}

export const Selected: RadioButtonStory = {
  render: (args) => {
    return (
      <RadioGroup>
        <RadioButton {...args} />
      </RadioGroup>
    )
  },
  args: {
    label: 'Option one',
    value: 'option one',
    selected: true,
  },
  parameters: {
    controls: {
      exclude: ['key', 'onClick', 'selected'],
    },
  },
}

export default meta
