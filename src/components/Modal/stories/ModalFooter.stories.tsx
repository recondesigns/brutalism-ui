import { Meta, StoryObj } from '@storybook/react'
import ModalFooter from '../ModalFooter'
import { Modal, ModalHeader } from '../Modal'

const meta: Meta<typeof ModalFooter> = {
  title: 'Components/Modal/Building Blocks/ModalFooter',
  component: ModalFooter,
//   tags: ["autodocs"],
}

export const SingleAction: StoryObj<typeof ModalFooter> = {
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

export const TwoActions: StoryObj<typeof ModalFooter> = {
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
