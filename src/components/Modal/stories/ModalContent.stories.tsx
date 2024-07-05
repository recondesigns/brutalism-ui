import { Meta, StoryObj } from '@storybook/react'
import ModalContent from '../ModalContent'
import { Modal } from '../Modal'
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
        <h3
          style={{
            position: 'relative',
            margin: '0px',
            width: '85%',
            fontSize: '24px',
            lineHeight: '32px',
            fontFamily: 'sans-serif',
          }}
        >
          Modal
        </h3>
        <Button isFullWidth>Button</Button>
      </>
    ),
  },
}

export default meta
