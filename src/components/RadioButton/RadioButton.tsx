import React from 'react'
import styled from '@emotion/styled'
import Text from '../Text'

const RadioContainer = styled('button')(
  {
    padding: '8px 8px 8px 8px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  ({ disabled }) => ({
    opacity: !disabled ? 'initial' : '50%',
    cursor: !disabled ? 'pointer' : 'not-allowed',
  })
)

const OuterRadio = styled('div')({
  padding: '4px',
  display: 'inline-block',
  border: '3px solid black',
  borderRadius: '50%',
})

type InnerRadioProps = {
  isSelected: boolean
}

const InnerRadio = styled('div')<InnerRadioProps>(({ isSelected }) => ({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  background: !isSelected ? 'none' : 'black',
}))

export type RadioButtonProps = {
  label: string
  value: string
  selected: boolean
  disabled?: boolean
  key?: string | number
  onClick?: () => void
}

export default function RadioButton({
  label,
  selected = false,
  key,
  disabled = false,
  onClick,
}: RadioButtonProps) {
  return (
    <RadioContainer
      key={key}
      role="radio"
      aria-checked={selected}
      disabled={disabled}
      onClick={onClick}
    >
      <OuterRadio>
        <InnerRadio isSelected={selected} />
      </OuterRadio>
      <Text>{label}</Text>
    </RadioContainer>
  )
}
