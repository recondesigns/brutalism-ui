import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@emotion/react'
import { Modal } from '../../Modal'
import Button from '../../Button'
import { defaultTheme } from '../../emotionTheme'

type ModalContentStory = StoryObj<typeof Modal.Content>

const meta: Meta<typeof Modal.Content> = {
  title: 'UI Components/Modal/Building Blocks/ModalContent',
  component: Modal.Content,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const Demo: ModalContentStory = {
  render: (args) => {
    return (
      <Modal isOpen>
        <Modal.Content {...args} />
      </Modal>
    )
  },
  args: {
    children: (
      <>
        <Modal.Header title="Modal" />
        <Button isFullWidth>Button</Button>
      </>
    ),
  },
}

export default meta
