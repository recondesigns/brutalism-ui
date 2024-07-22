import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Text from './Text'

const meta: Meta<typeof Text> = {
  title: 'Foundations/Text',
  component: Text,
}

type TextStory = StoryObj<typeof Text>

export const Demo: TextStory = {
  render: (args) => <Text {...args} />,
  args: {
    variant: 'h1',
    gutterBottom: false,
    children: 'Text component',
    asElement: 'h5',
  },
}

export const Variant: TextStory = {
  ...Demo,
  args: {
    variant: 'body1',
    children: 'Text component',
  },
  parameters: {
    controls: {
      exclude: ['asElement', 'gutterBottom'],
    },
  },
}

export const AsElement: TextStory = {
  ...Demo,
  args: {
    variant: 'h6',
    children: 'Text component',
    asElement: 'p',
  },
  parameters: {
    controls: {
      exclude: ['gutterBottom', 'variant'],
    },
  },
}

export const GutterBottom: TextStory = {
  ...Demo,
  args: {
    variant: 'h4',
    children: 'Text component',
    gutterBottom: true,
  },
  parameters: {
    controls: {
      exclude: ['asElement', 'variant'],
    },
  },
}

export default meta
