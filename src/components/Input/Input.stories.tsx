import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from '../emotionTheme'
import Input from './Input'

type InputStory = StoryObj<typeof Input>

const meta: Meta<typeof Input> = {
  title: 'Form elements/Input',
  component: Input,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

const InputStoryTemplate: InputStory = {
  render: (args) => {
    const [value, setValue] = useState('')

    return (
      <div
        style={{
          minWidth: '320px',
          maxWidth: '320px',
        }}
      >
        <Input
          value={value}
          onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          id="inputStory"
          name="inputStory"
          type="text"
          {...args}
        />
      </div>
    )
  },
}

export const Demo: InputStory = {
  render: (args) => {
    const [value, setValue] = useState('')

    return (
      <div
        style={{
          minWidth: '320px',
          maxWidth: '320px',
        }}
      >
        <Input
          id="inputStory"
          name="inputStory"
          type="text"
          label="Label"
          placeholder="placeholder"
          helperText="Helper text."
          value={value}
          onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          {...args}
        />
      </div>
    )
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
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const Default = {
  ...InputStoryTemplate,
}

export const Label = {
  ...InputStoryTemplate,
  args: {
    label: 'Label',
  },
}

export const Required = {
  ...InputStoryTemplate,
  args: {
    label: 'Label',
    required: true,
  },
}

export const HelpText = {
  ...InputStoryTemplate,
  args: {
    helperText: 'This input has helper text and no label.',
  },
}

export const Errors = {
  ...InputStoryTemplate,
  args: {
    label: 'Label',
    hasError: true,
    helperText: 'This input has errors.',
  },
}

export const Disabled = {
  ...InputStoryTemplate,
  args: {
    label: 'Label',
    disabled: true,
  },
}

export const Placeholder = {
  ...InputStoryTemplate,
  args: {
    label: 'Label',
    placeholder: 'placeholder',
  },
}

export default meta
