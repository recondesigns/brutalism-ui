import { Meta, StoryObj } from '@storybook/react'
import ModalContent from '../ModalContent'
import { Modal, ModalHeader } from '../Modal'
import Button from '../../Button'

const meta: Meta<typeof ModalContent> = {
  title: 'Components/Modal/Building Blocks/ModalContent',
  component: ModalContent,
}

export const Default: StoryObj<typeof ModalContent> = {
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
