import React from 'react'
import styled from '@emotion/styled'

export type CardProps = {
  shouldHavePadding?: boolean
}

const CardContainer = styled('div')(
  {
    padding: '20px',
    border: '2px solid green'
  }
)

export default function Card({ shouldHavePadding = false }: CardProps) {
  console.log(555, shouldHavePadding)

  return (
    <CardContainer>Card</CardContainer>
  )
}