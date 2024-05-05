import React from "react"
import styled from "@emotion/styled"

export type ModalContainerProps = {
  children: React.ReactElement | React.ReactElement[]
} & React.HTMLAttributes<HTMLDivElement>

const Container = styled("div")<ModalContainerProps>({
  // height: '100%',
  // maxHeight: 'calc(80% - 20px)',
  // maxHeight: '80%',
  // overflow: 'scroll',
  // border: '2px solid green',
})

export default function ModalContent({
  children,
  ...otherProps
}: ModalContainerProps) {
  return <Container {...otherProps}>{children}</Container>
}
