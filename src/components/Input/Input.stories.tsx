import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import Input from "./Input"

/**
 * Description copy for the component.
 */
const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
}

const InputStoryTemplate: StoryObj<typeof Input> = {
  render: (args) => {
    const [value, setValue] = useState("")

    return (
      <Input
        value={value}
        // @ts-expect-error Type '(e: React.ChangeEvent<HTMLInputElement>) => void' is not (delete for full error)
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

/**
 * Description copy for `Default` story and here is change.
 */
export const Default = {
  ...InputStoryTemplate,
  args: {
    // label: "Label",
  },
}

/**
 * Description copy for `Label` story and here is change.
 */
export const Label = {
  ...InputStoryTemplate,
  args: {
    label: "Label",
  },
}

/**
 * Description copy for `HelpText` story and here is change.
 */
export const HelpText = {
  ...InputStoryTemplate,
  args: {
    helperText: "This input has helper text and no label.",
  },
}

/**
 * Description copy for `Errors` story and here is change.
 */
export const Errors = {
  ...InputStoryTemplate,
  args: {
    label: "Label",
    hasError: true,
    helperText: "This input has errors.",
  },
}

/**
 * Description copy for `Disabled` story and here is change.
 */
export const Disabled = {
  ...InputStoryTemplate,
  args: {
    label: "Label",
    disabled: true,
  },
}

/**
 * Description copy for `Placeholder` story and here is change.
 */
export const Placeholder = {
  ...InputStoryTemplate,
  args: {
    label: "Label",
    placeholder: "placeholder",
  },
}

/**
 * Description copy for `KitchenSink` story and here is change.
 */
export const KitchenSink = {
  ...InputStoryTemplate,
  args: {
    label: "Label",
    // placeholder: 'placeholder',
    helperText: "This input has errors.",
  },
}

export default meta
