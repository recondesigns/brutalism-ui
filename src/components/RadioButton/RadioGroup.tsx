import React from 'react'
import styled from '@emotion/styled'

type Direction = 'horizontal' | 'vertical'

type RadioGroupContainerProps = {
  direction: Direction
}

const RadioGroupContainer = styled('div')<RadioGroupContainerProps>(
  {
    display: 'flex',
  },
  ({ direction }) => ({
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
  })
)

type RadioGroupProps = {
  direction?: Direction
  children: React.ReactNode
}

export default function RadioGroup({
  direction = 'horizontal',
  children,
}: RadioGroupProps) {
  return (
    <RadioGroupContainer role="radiogroup" direction={direction}>
      {children}
    </RadioGroupContainer>
  )
}
