import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import Input from "./Input"

type InputStory = StoryObj<typeof Input>

const meta: Meta<typeof Input> = {
  title: "Form elements/Input",
  component: Input,
}

const InputStoryTemplate: InputStory = {
  render: (args) => {
    const [value, setValue] = useState("")

    return (
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
    )
  },
}

export const Default = {
  ...InputStoryTemplate,
}

export const Label = {
  ...InputStoryTemplate,
  args: {
    label: "Label",
  },
}

export const Required = {
  ...InputStoryTemplate,
  args: {
    label: "Label",
    required: true,
  },
}

export const HelpText = {
  ...InputStoryTemplate,
  args: {
    helperText: "This input has helper text and no label.",
  },
}

export const Errors = {
  ...InputStoryTemplate,
  args: {
    label: "Label",
    hasError: true,
    helperText: "This input has errors.",
  },
}

export const Disabled = {
  ...InputStoryTemplate,
  args: {
    label: "Label",
    disabled: true,
  },
}

export const Placeholder = {
  ...InputStoryTemplate,
  args: {
    label: "Label",
    placeholder: "placeholder",
  },
}

export default meta
