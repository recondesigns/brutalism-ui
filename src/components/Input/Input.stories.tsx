import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
}

const InputStoryTemplate: StoryObj<typeof Input> = {
  render: (args) => {
    const [value, setValue] = useState('')

    return (
      <Input
        // value={value}
        // @ts-expect-error Type '(e: React.ChangeEvent<HTMLInputElement>) => void' is not (delete for full error)
        // onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
        //   setValue(e.target.value)
        // }
        id="inputStory"
        name="inputStory"
        type="text"
        {...args}
      />
    )
  },
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
