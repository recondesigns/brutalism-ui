import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@emotion/react'
import RadioGroup from '../RadioGroup'
import RadioButton from '../RadioButton'
import { defaultTheme } from '../../emotionTheme'

const options = [
  {
    label: 'Option one',
    value: 'option one',
  },
  {
    label: 'Option two',
    value: 'option two',
  },
  {
    label: 'Option three',
    value: 'option three',
  },
  {
    label: 'Option four',
    value: 'option four',
  },
]

type RadioGroupStory = StoryObj<typeof RadioGroup>

const meta: Meta<typeof RadioGroup> = {
  title: 'Form elements/Radio group',
  component: RadioGroup,
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
      <div
        style={{
          paddingTop: '8px',
          paddingBottom: '8px',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'inline-block' }}>
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
        </div>
      </div>
    )
  },
  args: {
    direction: 'horizontal',
  },
  parameters: {
    controls: {
      exclude: ['children'],
    },
  },
}

export const Direction: RadioGroupStory = {
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
