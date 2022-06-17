import * as React from "react"

const SvgComponent = (props: React.SVGAttributes<SVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        width="1em"
        fill="currentColor"
        {...props}
    >
        <path d="M544 544v236.224l151.296-151.232 45.248 45.312-226.24 226.24L288 674.304l45.248-45.312L480 775.744V544h64zm-29.696-416 226.24 226.304-45.248 45.248L544 248.256V480h-64V252.736L333.248 399.552 288 354.304 514.304 128z" />
    </svg>
)

export default SvgComponent
