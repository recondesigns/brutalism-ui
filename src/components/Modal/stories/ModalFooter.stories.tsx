import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@emotion/react'
import ModalFooter from '../ModalFooter'
import { Modal } from '../../Modal'
import { defaultTheme } from '../../emotionTheme'

type ModalFooter = StoryObj<typeof ModalFooter>

const meta: Meta<typeof ModalFooter> = {
  title: 'UI Components/Modal/Building Blocks/ModalFooter',
  component: ModalFooter,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const Demo: ModalFooter = {
  render: (args) => {
    return (
      <Modal isOpen>
        <Modal.Header title="Modal title" />
        <ModalFooter {...args} />
      </Modal>
    )
  },
  args: {
    actions: {
      primaryAction: {
        buttonLabel: 'Primary',
        onclick: () => alert('Primary button clicked'),
      },
    },
  },
}

export const SingleAction: ModalFooter = {
  render: (args) => {
    return (
      <Modal isOpen>
        <Modal.Header title="Modal title" />
        <ModalFooter {...args} />
      </Modal>
    )
  },
  args: {
    actions: {
      primaryAction: {
        buttonLabel: 'Primary',
        onclick: () => alert('Primary button clicked'),
      },
    },
  },
}

export const TwoActions = {
  ...SingleAction,
  args: {
    actions: {
      primaryAction: {
        buttonLabel: 'Primary',
        onclick: () => alert('Primary button clicked'),
      },
      secondaryAction: {
        buttonLabel: 'Secondary',
        onclick: () => alert('Secondary button clicked'),
      },
    },
  },
}

export default meta
