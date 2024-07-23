import React from 'react'
import styled from '@emotion/styled'

export type ModalContainerProps = {
  /**
   * Components to be rendered as the Modal content.
   */
  children: React.ReactElement | React.ReactElement[]
} & React.HTMLAttributes<HTMLDivElement>

const Container = styled('div')<ModalContainerProps>({})

export default function ModalContent({
  children,
  ...otherProps
}: ModalContainerProps) {
  return <Container {...otherProps}>{children}</Container>
}
