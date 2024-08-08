import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@emotion/react'
import RadioGroup from './RadioGroup'
import RadioButton from './RadioButton'
import { defaultTheme } from '../emotionTheme'

const options = [
  {
    label: 'one',
    value: 'one',
  },
  {
    label: 'two',
    value: 'two',
  },
  {
    label: 'three',
    value: 'three',
  },
  {
    label: 'four',
    value: 'four',
  },
]

type RadioGroupStory = StoryObj<typeof RadioGroup>

const meta: Meta<typeof RadioGroup> = {
  title: 'Form elements/Radio group',
  component: RadioGroup,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const Demo: RadioGroupStory = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = React.useState<string | null>(
      null
    )

    return (
      <RadioGroup {...args}>
        {options.map((option, idx) => {
          return (
            <RadioButton
              key={idx}
              label={option.label}
              value={option.value}
              selected={selectedValue === option.value}
              onClick={() => setSelectedValue(`${option.value}`)}
            />
          )
        })}
      </RadioGroup>
    )
  },
  args: {
    direction: 'vertical',
  },
  parameters: {
    controls: {
      exclude: ['children'],
    },
  },
}

export default meta
