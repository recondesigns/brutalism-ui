import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ModalContent from '../ModalContent'
import { Modal, ModalHeader } from '../Modal'
import Button from '../../Button'

type ModalContentStory = StoryObj<typeof ModalContent>;

const meta: Meta<typeof ModalContent> = {
  title: 'UI Components/Modal/Building Blocks/ModalContent',
  component: ModalContent,
}

export const Default: ModalContentStory = {
  render: (args) => {
    return (
      <Modal isOpen>
        <ModalContent {...args} />
      </Modal>
    )
  },
  args: {
    children: (
      <>
        <ModalHeader title="Modal" />
        <Button isFullWidth>Button</Button>
      </>
    ),
  },
}

export default meta
