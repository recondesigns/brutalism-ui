import { Meta, StoryObj } from '@storybook/react'
import Modal from './Modal'
import ModalFooter from './ModalFooter'
import { Button, Input } from '../../components'

export const Default: StoryObj<typeof Modal> = {
    render: (args) => <Modal {...args} />,
    args: {
        children: (
            <form style={{ padding: '12px' }}>
                <h4 style={{ margin: '0px' }}>Form title</h4>
                <Input
                    label="Label goes here"
                    onchange={() => {}}
                    placeholder="Placeholder thing"
                    value=""
                />
                <Button label="Submit" />
            </form>
        ),
    },
}

const footerActions = {
    primaryAction: {
        buttonLabel: 'primary',
        onclick: () => alert('Primary button clicked')
    },
    secondaryAction: {
        buttonLabel: 'secondary',
        onclick: () => alert('Secondary button clicked')
    }
}

export const Custom: StoryObj<typeof Modal> = {
    render: (args) => <Modal {...args} />,
    args: {
        children: (
            <>
                <form style={{ padding: '12px' }}>
                    <h4 style={{ margin: '0px' }}>Form title</h4>
                    <Input
                        label="Label goes here"
                        onchange={() => {}}
                        placeholder="Placeholder thing"
                        value=""
                    />
                    {/* <Button label="Submit" /> */}
                </form>
                <ModalFooter actions={footerActions}  />
            </>
        ),
    },
}

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    decorators: [
        (ModalStory) => (
            <div
                style={{
                    height: '400px',
                }}
            >
                <ModalStory />
            </div>
        ),
    ],
}

export default meta
