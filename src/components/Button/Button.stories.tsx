import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import Button from "./Button";
import { CloseIcon } from "../../assets";
import { defaultTheme } from "../emotionTheme";

type ButtonStory = StoryObj<typeof Button>;

const clickFunc = (msg: string) => alert(`${msg} was clicked.`);

const meta: Meta<typeof Button> = {
  title: "Form elements/Button",
  component: Button,
  argTypes: {
    buttonType: {
      description: 'Adds rounded or straight cornders',
      options: ["block", "rounded"],
      control: { type: "inline-radio" },
    },
    children: {
      description: 'Child node to be rendered as the button label'
    },
    fullWidth: {
      description: 'Forces the width to 100% of the parent container'
    },
    icon: {
      //TODO: Come up with a list of icons for a dropdown
      description: 'Applies an optional preceding icon to the label',
    },
    size: {
      description: 'Adds padding to the button to create different sizes',
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    buttonType: 'block',
    children: 'Button',
    className: 'storybook-btn-class',
    fullWidth: false,
    size: 'md',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const Default: ButtonStory = {
  render: (args) => <Button {...args} />,
  args: {
    onClick: () => clickFunc("Button was clicked."),
  },
  parameters: {
    controls: {
      exclude: ["buttonType", "icon", "className", "onClick", "size", "fullWidth"],
    },
  },
};

export const Size = {
  ...Default,
  args: {
    onClick: () => clickFunc("Full width button was clicked."),
  },
  parameters: {
    controls: {
      exclude: [
        "disabled",
        "icon",
        "className",
        "onClick",
        "fullWidth",
        "buttonType",
      ],
    },
  },
};

export const ButtonType = {
  ...Default,
  name: "Rounded",
  args: {
    buttonType: "rounded",
    onClick: () => clickFunc("Full width button was clicked."),
  },
  parameters: {
    controls: {
      exclude: [
        "disabled",
        "fullWidth",
        "icon",
        "className",
        "onClick",
        "size",
      ],
    },
  },
};

export const FullWidth = {
  ...Default,
  args: {
    fullWidth: true,
    onClick: () => clickFunc("Full width button was clicked."),
  },
  parameters: {
    controls: {
      exclude: [
        "disabled",
        "icon",
        "className",
        "onClick",
        "size",
        "buttonType",
      ],
    },
  },
};

export const Icon = {
  ...Default,
  args: {
    children: "Close",
    icon: <CloseIcon />,
    onClick: () => clickFunc("Left icon button was clicked."),
  },
  parameters: {
    controls: {
      exclude: [
        "fullWidth",
        "disabled",
        "className",
        "onClick",
        "size",
        "buttonType",
      ],
    },
  },
};

export const Disabled = {
  ...Default,
  args: {
    disabled: true,
    onClick: () => clickFunc("Disabled button was clicked."),
  },
  parameters: {
    controls: {
      exclude: [
        "buttonType",
        "icon",
        "className",
        "onClick",
        "size",
        "buttonType",
        "fullWidth",
      ],
    },
  },
};

export default meta;
