import React from 'react'

// добавить в проект иконки и импортировать
const downIcon = `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
<path d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="black"/>
</svg>`)}`
const upIcon = `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
  <path d="M4 5L0.535898 0.5L7.4641 0.5L4 5Z" fill="black"/>
  </svg>`)}`
const noneIcon = `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="12px" height="10px" viewBox="0 0 12 15" version="1.1">
<g id="surface1">
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(67.843137%,67.058824%,67.45098%);fill-opacity:1;" d="M 6 0 L 11.195312 6.75 L 0.804688 6.75 Z M 6 0 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(67.843137%,67.058824%,67.45098%);fill-opacity:1;" d="M 6 15 L 0.804688 8.25 L 11.195312 8.25 Z M 6 15 "/>
</g>
</svg>`)}`

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === '') return down
    if (sort === down) return up
    if (sort === up) return ''

    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt={'lol'}/>

        </span>
    )
}

export default SuperSort
