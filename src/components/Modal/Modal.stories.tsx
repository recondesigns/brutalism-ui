import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import Modal from "./Modal"
import ModalHeader from "./ModalHeader"
import ModalContent from "./ModalContent"
import Button from "../Button"

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
}

export const Primary: StoryObj<typeof Modal> = {
  render: (args) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false)

    return (
      <>
        <div
          style={{
            padding: "0px 0px 24px 0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            label={!isModalOpen ? "Open modal" : "Close modal"}
            variant="secondary"
            onClick={() => setIsModalOpen(!isModalOpen)}
          />
        </div>
        <Modal {...args} isOpen={isModalOpen}>
          <ModalHeader
            title="Modal title"
            onClose={() => setIsModalOpen(!isModalOpen)}
          />
          <ModalContent>
            <h3 style={{ fontFamily: "sans-serif", margin: "0px 0px 8px 0px" }}>
              Heading level four
            </h3>
            <p style={{ fontFamily: "sans-serif", margin: "0px 0px 4px 0px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio,
            </p>
          </ModalContent>
        </Modal>
      </>
    )
  },
  args: {},
}

export default meta
