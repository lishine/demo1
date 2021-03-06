import React from 'react'

export const Chevron = ({ width, height, fill = 'var(--dark-disabled)', ...props }) => {
    const defaultWidth = 20
    const defaultHeight = 20
    return (
        <svg
            viewBox={`0 0 ${defaultWidth} ${defaultHeight}`}
            {...{
                fill,
                width: width || (height ? undefined : `${defaultWidth}px`),
                height: height || (width ? undefined : `${defaultHeight}px`),
                ...props,
            }}
        >
            <polygon
                // fillOpacity=".54"
                fillRule="evenodd"
                points="8 4 6.59 5.41 11.17 10 6.59 14.59 8 16 14 10"
            />
        </svg>
    )
}
