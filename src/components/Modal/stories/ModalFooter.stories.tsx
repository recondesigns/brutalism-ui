import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ModalFooter from '../ModalFooter'
import { Modal, ModalHeader } from '../Modal'

type ModalFooter = StoryObj<typeof ModalFooter>;

const meta: Meta<typeof ModalFooter> = {
  title: 'UI Components/Modal/Building Blocks/ModalFooter',
  component: ModalFooter,
}

export const Demo: ModalFooter = {
  render: (args) => {
    return (
      <Modal isOpen>
        <ModalHeader title="Modal title" />
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
        <ModalHeader title="Modal title" />
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
