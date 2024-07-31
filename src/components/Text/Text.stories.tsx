import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@emotion/react'
import Text from './Text'
import { defaultTheme } from '../emotionTheme'

const meta: Meta<typeof Text> = {
  title: 'Foundations/Text',
  component: Text,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

type TextStory = StoryObj<typeof Text>

export const Demo: TextStory = {
  render: (args) => (
    <>
      <Text {...args} variant="h4" gutterBottom>
        Heading text
      </Text>
      <Text {...args} variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum!
      </Text>
    </>
  ),
  parameters: {
    controls: {
      disable: true,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '20px 0px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ maxWidth: '400px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
}

export const Variant: TextStory = {
  render: (args) => <Text {...args} />,
  args: {
    variant: 'h6',
    children: 'Text component',
  },
  parameters: {
    controls: {
      exclude: ['asElement', 'gutterBottom'],
    },
  },
}

export const AsElement: TextStory = {
  ...Variant,
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
  ...Variant,
  args: {
    variant: 'h6',
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
