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
    label: 'Label',
    value: 'label',
    disabled: false,
  },
  parameters: {
    controls: {
      exclude: ['key', 'onClick', 'selected'],
    },
  },
}

export const Default: RadioButtonStory = {
  render: (args) => {
    return (
      <RadioGroup>
        <RadioButton {...args} label="Unselected" value="unselected" />
        <RadioButton
          {...args}
          label="Selected"
          value="selected"
          selected={true}
        />
      </RadioGroup>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const Disabled: RadioButtonStory = {
  render: (args) => {
    return (
      <RadioGroup>
        <RadioButton
          disabled={args.disabled}
          label="Unselected"
          value="unselected"
          selected={false}
        />
        <RadioButton
          disabled={args.disabled}
          label="Selected"
          value="selected"
          selected={true}
        />
      </RadioGroup>
    )
  },
  args: {
    disabled: true,
  },
  parameters: {
    controls: {
      exclude: ['key', 'onClick', 'selected'],
    },
  },
}

export default meta
