import React from 'react'
import styled from '@emotion/styled'

export type ModalOverlayProps = {
  children: React.ReactElement
}

const Overlay = styled('div')<ModalOverlayProps>({
    position: 'relative',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.15)',
})

export default function ModalOverlay({ children }: ModalOverlayProps) {
    return <Overlay>{children}</Overlay>
}
