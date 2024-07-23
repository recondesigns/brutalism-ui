import React from 'react'

export type DropdownProps = {
    label?: string
}

export default function Dropdown({ label }: DropdownProps) {
  return (
    <div>{label ? label : 'Dropdown component'}</div>
  )
}