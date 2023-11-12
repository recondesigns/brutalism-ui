import React from 'react'
import styled from '@emotion/styled'

export type CardProps = {
  shouldHavePadding?: boolean
}

const CardContainer = styled('div')(
  {
    border: '2px solid orange'
  }
)

export default function Card({ shouldHavePadding = false }: CardProps) {
  console.log(555, shouldHavePadding)

  return (
    <CardContainer>Card</CardContainer>
  )
}