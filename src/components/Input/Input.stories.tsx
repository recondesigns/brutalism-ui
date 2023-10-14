import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import Input from "./Input"

const InputStoryTemplate: StoryObj<typeof Input> = {
  render: (args) => {
    const [value, setValue] = useState("")

    return (
      <Input
        value={value}
        onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        {...args}
      />
    )
  },
}

/**
 * Description copy for `Default` story.
 */
export const Default = {
  ...InputStoryTemplate,
  args: {
    label: "Label goes here",
    placeholder: "Placeholder thing",
  },
}

/**
 * Description copy for `Label` story.
 */
export const Label = {
  ...InputStoryTemplate,
  args: {
    label: "First name",
  },
}

/**
 * Description copy for `Disabled` story.
 */
export const Disabled = {
  ...InputStoryTemplate,
  args: {
    label: "Label",
    disabled: true,
  },
}

/**
 * Description copy for `Placeholder` story.
 */
export const Placeholder = {
  ...InputStoryTemplate,
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
}

/**
 * Description copy for `Errors` story.
 */
export const Errors = {
  ...InputStoryTemplate,
  args: {
    label: "Label",
    hasError: true,
  },
}

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
}

export default meta
