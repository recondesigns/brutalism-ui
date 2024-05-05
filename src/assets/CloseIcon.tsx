import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloseIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    viewBox="0 0 20 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      d="m11.217 10 4.616 4.617v1.216h-1.216L10 11.217l-4.617 4.616H4.167v-1.216L8.783 10 4.167 5.383V4.167h1.216L10 8.783l4.617-4.616h1.216v1.216L11.217 10Z"
    />
  </svg>
)
export default SvgCloseIcon
