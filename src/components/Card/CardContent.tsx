import React from 'react'
import styled from '@emotion/styled'

const ContentWrapper = styled('div')({
  padding: '24px 24px 12px 24px',
})

type CardContentProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export default function CardContent({
  children,
  ...otherProps
}: CardContentProps) {
  return <ContentWrapper {...otherProps}>{children}</ContentWrapper>
}
