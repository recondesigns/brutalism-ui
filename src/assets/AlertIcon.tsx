import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlertIcon = ({
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
            fill="currentColor"
            d="M10 13.75c.213 0 .39-.072.535-.216A.723.723 0 0 0 10.75 13a.726.726 0 0 0-.216-.535.723.723 0 0 0-.534-.215.726.726 0 0 0-.535.216.723.723 0 0 0-.215.534c0 .213.072.39.216.535a.723.723 0 0 0 .534.215Zm0-3c.213 0 .39-.072.535-.216A.723.723 0 0 0 10.75 10V7a.726.726 0 0 0-.216-.535A.723.723 0 0 0 10 6.25a.726.726 0 0 0-.535.216A.723.723 0 0 0 9.25 7v3c0 .213.072.39.216.535a.723.723 0 0 0 .534.215Zm0 6.75a7.3 7.3 0 0 1-2.925-.591 7.586 7.586 0 0 1-2.381-1.603 7.568 7.568 0 0 1-1.603-2.381A7.316 7.316 0 0 1 2.5 10a7.3 7.3 0 0 1 .591-2.925 7.586 7.586 0 0 1 1.603-2.381A7.569 7.569 0 0 1 7.075 3.09 7.316 7.316 0 0 1 10 2.5a7.3 7.3 0 0 1 2.925.591 7.586 7.586 0 0 1 2.381 1.603 7.58 7.58 0 0 1 1.604 2.381A7.29 7.29 0 0 1 17.5 10a7.3 7.3 0 0 1-.591 2.925 7.585 7.585 0 0 1-1.603 2.381 7.58 7.58 0 0 1-2.381 1.604A7.29 7.29 0 0 1 10 17.5Zm0-1.5c1.675 0 3.094-.581 4.256-1.744C15.42 13.094 16 11.675 16 10c0-1.675-.581-3.094-1.744-4.256C13.094 4.58 11.675 4 10 4c-1.675 0-3.094.581-4.256 1.744C4.58 6.906 4 8.325 4 10c0 1.675.581 3.094 1.744 4.256C6.906 15.42 8.325 16 10 16Z"
        />
    </svg>
)
export default SvgAlertIcon
